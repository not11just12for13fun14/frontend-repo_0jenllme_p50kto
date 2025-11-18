import { ShieldCheck, Users, Briefcase, Handshake, Scale, Building2 } from 'lucide-react'

const items = [
  { icon: Briefcase, title: 'Médiation commerciale', desc: 'Négociation de contrats, impayés, prestataires, litiges clients/fournisseurs.' },
  { icon: Building2, title: 'Conflits entre associés', desc: 'Gouvernance, valorisation, pacte d’associés, blocages décisionnels.' },
  { icon: Scale, title: 'Droit du travail', desc: 'Rupture amiable, harcèlement allégué, conflits individuels/collectifs.' },
  { icon: Users, title: 'Médiation familiale', desc: 'Organisation parentale, successions, tensions intergénérationnelles.' },
  { icon: Handshake, title: 'Transaction & accords', desc: 'Rédaction d’accords durables, contrôles de légalité, suivi d’exécution.' },
  { icon: ShieldCheck, title: 'Confidentialité & éthique', desc: 'Processus sécurisé, neutralité, indépendance, impartialité.' },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-indigo-50/40">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">Domaines d’intervention</h2>
        <p className="mt-3 text-center text-gray-600 max-w-2xl mx-auto">Des médiations menées avec méthode et humanité pour résoudre durablement les différends.</p>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 font-semibold text-gray-900 text-lg">{title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
