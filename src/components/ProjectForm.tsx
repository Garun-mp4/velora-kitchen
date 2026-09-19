import { useMemo, useState } from 'react'
import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

type FormState = { name: string; phone: string; projectType: string; comment: string; consent: boolean }
type Errors = Partial<Record<keyof FormState, string>>

const initial: FormState = { name: '', phone: '', projectType: 'Кухня', comment: '', consent: false }

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').replace(/^8/, '7').slice(0, 11)
  const d = digits.startsWith('7') ? digits.slice(1) : digits
  let out = '+7'
  if (d.length) out += ` (${d.slice(0, 3)}`
  if (d.length >= 3) out += ')'
  if (d.length > 3) out += ` ${d.slice(3, 6)}`
  if (d.length > 6) out += `-${d.slice(6, 8)}`
  if (d.length > 8) out += `-${d.slice(8, 10)}`
  return out
}

export function ProjectForm({ compact = false }: { compact?: boolean }) {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const phoneDigits = useMemo(() => form.phone.replace(/\D/g, ''), [form.phone])

  const validate = () => {
    const next: Errors = {}
    if (form.name.trim().length < 2) next.name = 'Укажите имя'
    if (phoneDigits.length < 11) next.phone = 'Укажите полный номер телефона'
    if (!form.consent) next.consent = 'Нужно согласие с политикой конфиденциальности'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    await new Promise((resolve) => window.setTimeout(resolve, 850))
    setStatus('success')
  }

  if (status === 'success') {
    return (
      <div className={`form-success ${compact ? 'form-success--compact' : ''}`} role="status">
        <span><Check size={24} /></span>
        <h3>Спасибо.</h3>
        <p>Мы получили запрос и вернёмся к обсуждению проекта.</p>
        <button type="button" onClick={() => { setForm(initial); setStatus('idle') }}>Отправить ещё один запрос</button>
      </div>
    )
  }

  return (
    <form className={`project-form ${compact ? 'project-form--compact' : ''}`} onSubmit={submit} noValidate>
      <div className="field">
        <label htmlFor={compact ? 'name-c' : 'name'}>Имя</label>
        <input id={compact ? 'name-c' : 'name'} autoComplete="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} />
        {errors.name && <span className="field-error">{errors.name}</span>}
      </div>
      <div className="field">
        <label htmlFor={compact ? 'phone-c' : 'phone'}>Телефон</label>
        <input id={compact ? 'phone-c' : 'phone'} type="tel" inputMode="tel" autoComplete="tel" placeholder="+7 (___) ___-__-__" value={form.phone} onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })} aria-invalid={!!errors.phone} />
        {errors.phone && <span className="field-error">{errors.phone}</span>}
      </div>
      <div className="field">
        <label htmlFor={compact ? 'type-c' : 'type'}>Тип проекта</label>
        <select id={compact ? 'type-c' : 'type'} value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })}>
          <option>Кухня</option><option>Кухня и встроенная мебель</option><option>Гардеробная</option><option>Мебель для гостиной</option><option>Другое</option>
        </select>
      </div>
      {!compact && <div className="field field--full">
        <label htmlFor="comment">Комментарий</label>
        <textarea id="comment" rows={4} placeholder="Расскажите о помещении, сроках или приложите контекст в сообщении позже" value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} />
      </div>}
      <label className="check-field field--full">
        <input type="checkbox" checked={form.consent} onChange={(e) => setForm({ ...form, consent: e.target.checked })} />
        <span>Я согласен с <Link to="/privacy">политикой конфиденциальности</Link>.</span>
      </label>
      {errors.consent && <span className="field-error field--full">{errors.consent}</span>}
      <button className="form-submit field--full" type="submit" disabled={status === 'loading'}>{status === 'loading' ? 'Отправляем…' : 'Обсудить проект'}<span aria-hidden="true">→</span></button>
    </form>
  )
}
