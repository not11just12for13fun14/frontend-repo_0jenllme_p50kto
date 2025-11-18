import { useState } from 'react'

function App() {
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
      if (!res.ok) throw new Error(data.detail || 'Erreur lors de l\'envoi')
      setResult({ type: 'success', message: 'Message envoyé avec succès. Nous vous répondrons rapidement.' })
      setForm({ first_name: '', last_name: '', email: '', phone: '', subject: '', message: '', consent: true })
    } catch (err) {
      setResult({ type: 'error', message: err.message })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50">
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,#c7d2fe_0,transparent_25%),radial-gradient(circle_at_90%_10%,#bfdbfe_0,transparent_25%)] opacity-60" />
        <div className="relative container mx-auto px-6 pt-16 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 mb-4">Horae Médiation</h1>
            <p className="text-xl text-gray-700 mb-6">Médiation et résolution amiable des différends à Paris</p>
            <div className="flex flex-wrap gap-3 text-sm text-gray-700">
              <span className="px-3 py-1 bg-white rounded-full border">Médiation commerciale</span>
              <span className="px-3 py-1 bg-white rounded-full border">Conflits entre associés</span>
              <span className="px-3 py-1 bg-white rounded-full border">Droit du travail</span>
              <span className="px-3 py-1 bg-white rounded-full border">Médiation familiale</span>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 pb-20">
        <section className="grid md:grid-cols-2 gap-12 -mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 border">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nous contacter</h2>
            <p className="text-gray-600 mb-6">Décrivez brièvement votre situation. Nous reviendrons vers vous sous 24h.</p>
            <form onSubmit={handleSubmit} className="space-y-4">
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

          <div className="p-2">
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl font-semibold mb-3">Pourquoi la médiation ?</h3>
              <ul className="space-y-2 text-indigo-100">
                <li>Un processus confidentiel et rapide</li>
                <li>Un coût maîtrisé par rapport au contentieux</li>
                <li>Préserve les relations professionnelles et personnelles</li>
                <li>Des solutions sur-mesure acceptées par toutes les parties</li>
              </ul>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">Paris</div>
                  <div className="opacity-80">Interventions en Île-de-France</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-3xl font-bold">FR/EN</div>
                  <div className="opacity-80">Médiations bilingues</div>
                </div>
              </div>
            </div>

            <div className="mt-6 bg-white rounded-2xl shadow p-6 border">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Informations</h3>
              <p className="text-gray-600">Horae Médiation — Paris, France<br/>contact@horae-mediation.fr<br/>+33 1 23 45 67 89</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Horae Médiation — Tous droits réservés
      </footer>
    </div>
  )
}

export default App
