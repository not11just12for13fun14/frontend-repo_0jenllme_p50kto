export default function Process() {
  const steps = [
    { title: 'Prise de contact', desc: 'Premier échange confidentiel (15 min) pour comprendre la situation et vos objectifs.' },
    { title: 'Cadre & adhésion', desc: 'Formalisation de la médiation, consentement des parties, calendrier, honoraires.' },
    { title: 'Entretiens individuels', desc: 'Temps d’écoute dédié, identification des besoins, cartographie du conflit.' },
    { title: 'Séance conjointe', desc: 'Dialogue sécurisé, exploration des options, rapprochement progressif.' },
    { title: 'Accord', desc: 'Rédaction d’un protocole clair et exécutoire si nécessaire.' },
    { title: 'Suivi', desc: 'Accompagnement post-accord pour consolider la mise en œuvre.' },
  ]

  return (
    <section id="process" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Notre processus</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Une méthode structurée, centrée sur les personnes et les intérêts, pour des résultats tangibles.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="text-xs font-semibold text-indigo-600">Étape {i + 1}</div>
              <h3 className="mt-1 font-semibold text-gray-900">{s.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
