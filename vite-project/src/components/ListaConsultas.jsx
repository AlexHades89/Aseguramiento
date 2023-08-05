import Tabla from "./Tabla";

function ListaConsultas() {
  return (
    <div>
      <main className="flex min-h-width w-full items-center justify-end mr-20 bg-gray-100">
        <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
          Agregar
          <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
        </button>
      </main>
      <Tabla />
    </div>
  );
}

export default ListaConsultas;
