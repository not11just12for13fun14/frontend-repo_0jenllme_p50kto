import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    consent: true,
  })
  const [sending, setSending] = useState(false)
  const [result, setResult] = useState(null)
  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setResult(null)
    try {
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || "Erreur lors de l'envoi")
      setResult({ type: 'success', message: 'Message envoyé avec succès. Nous vous répondrons rapidement.' })
      setForm({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '', consent: true })
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-indigo-50/40 to-white">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Entrer en contact</h2>
          <p className="mt-3 text-gray-600 max-w-xl">Décrivez brièvement votre situation. Nous reviendrons vers vous sous 24h. L’ensemble des informations est traité de manière strictement confidentielle.</p>
          <div className="mt-6 rounded-2xl border bg-white p-6">
            <p className="text-gray-700">Horae Médiation — Paris, France</p>
            <p className="text-gray-700">contact@horae-mediation.fr</p>
            <p className="text-gray-700">+33 1 23 45 67 89</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Prénom</label>
              <input name="first_name" value={form.first_name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Nom</label>
              <input name="last_name" value={form.last_name} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Téléphone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Sujet</label>
            <input name="subject" value={form.subject} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Votre message</label>
            <textarea name="message" rows="5" value={form.message} onChange={handleChange} required className="mt-1 w-full rounded-lg border-gray-300 focus:ring-2 focus:ring-indigo-500" />
          </div>
          <label className="flex items-start gap-3 text-sm text-gray-600">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1" />
            <span>J’accepte que mes données soient traitées pour être recontacté(e).</span>
          </label>
          <button disabled={sending} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition-colors">
            {sending ? 'Envoi en cours…' : 'Envoyer'}
          </button>
          {result && (
            <p className={`text-sm ${result.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{result.message}</p>
          )}
        </form>
      </div>
    </section>
  )
}
