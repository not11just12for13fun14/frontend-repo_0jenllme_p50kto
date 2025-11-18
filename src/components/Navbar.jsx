import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  const navItems = [
    { id: 'services', label: 'Domaines' },
    { id: 'process', label: 'Processus' },
    { id: 'about', label: 'Cabinet' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-600 to-blue-500 shadow-inner" />
          <div className="leading-tight">
            <div className="font-extrabold text-gray-900 tracking-tight">Horae Médiation</div>
            <div className="text-xs text-gray-600">Paris • Résolution amiable</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className="hover:text-gray-900 transition-colors">
              {item.label}
            </button>
          ))}
          <a href="/test" className="text-gray-500 hover:text-gray-800">Test</a>
          <button onClick={() => scrollTo('contact')} className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-black transition-colors">Prendre contact</button>
        </nav>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="block w-full text-left py-2 text-gray-700">
                {item.label}
              </button>
            ))}
            <a href="/test" className="block py-2 text-gray-700">Test</a>
            <button onClick={() => scrollTo('contact')} className="w-full bg-gray-900 text-white px-4 py-2 rounded-lg">Prendre contact</button>
          </div>
        </div>
      )}
    </header>
  )
}
