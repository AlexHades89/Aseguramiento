function Buttonac() {
    return (
    <main className="flex flex-column min-h-witdh w-full items-center justify-stretch bg-gray-100">
        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-yellow-500 text-lg font-bold text-white">
        Actualizar
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
    </main>
    )
}

export default Buttonac