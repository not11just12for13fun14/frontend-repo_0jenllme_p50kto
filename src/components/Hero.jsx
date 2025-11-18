import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute -top-48 -right-32 h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-indigo-200 via-blue-200 to-white blur-3xl opacity-70" />
      <div className="absolute -bottom-40 -left-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-blue-100 via-indigo-200 to-white blur-2xl opacity-70" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            La médiation, autrement.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-lg sm:text-xl text-gray-700 max-w-2xl"
          >
            Horae Médiation accompagne avocates, dirigeantes et équipes à Paris pour résoudre les conflits à l’amiable, rapidement et en toute confidentialité.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg">Parler à une médiatrice</a>
            <a href="#services" className="px-6 py-3 rounded-lg border font-semibold text-gray-700 hover:bg-gray-50">Découvrir nos domaines</a>
          </motion.div>

          <div className="mt-10 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="px-3 py-1 bg-white rounded-full border">Médiation commerciale</span>
            <span className="px-3 py-1 bg-white rounded-full border">Conflits entre associés</span>
            <span className="px-3 py-1 bg-white rounded-full border">Droit du travail</span>
            <span className="px-3 py-1 bg-white rounded-full border">Médiation familiale</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-600 p-1 shadow-xl">
            <div className="h-full w-full rounded-[14px] bg-white/5 backdrop-blur flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-5xl font-black tracking-tight">Paris</div>
                <div className="mt-2 text-indigo-100">Médiations bilingues FR/EN • Confiance • Neutralité</div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-white/70 backdrop-blur rounded-xl border p-4 shadow-lg">
            <div className="text-xs uppercase text-gray-600">Taux d’accord</div>
            <div className="text-2xl font-bold text-gray-900">82%</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
