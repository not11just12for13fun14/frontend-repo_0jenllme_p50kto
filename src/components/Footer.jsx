export default function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Horae Médiation — Paris, France</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-900">Mentions légales</a>
          <a href="#" className="hover:text-gray-900">Politique de confidentialité</a>
          <a href="/test" className="text-gray-500 hover:text-gray-800">Test technique</a>
        </div>
      </div>
    </footer>
  )
}
