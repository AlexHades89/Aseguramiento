import Buttonac from "./Buttonac";
import Buttonde from "./Buttonde";


function ListaPacientesform() {
  
  return (
    <div>
      <div>
        <main className="flex min-h-width w-full items-center justify-end mr-20 bg-gray-100">
          <a href="/AgregarPaciente">
          <button className="group relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white">
            Agregar
            <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
          </button>
          </a>
        </main>
      </div>
      <div className="md:px-32 py-8 w-full">
        <div className="shadow overflow-hidden rounded border-b border-gray-200">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  CUI
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Edad
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  dirección
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  acciones
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="w-1/3 text-left py-3 px-4">Lian</td>
                <td className="w-1/3 text-left py-3 px-4">Smith</td>
                <td className="text-left py-3 px-4">
                  <a className="hover:text-blue-500" href="tel:622322662">
                    622322662
                  </a>
                </td>
                <td className="text-left py-3 px-4">
                  <a
                    className="hover:text-blue-500"
                    href="mailto:jonsmith@mail.com"
                  >
                    jonsmith@mail.com
                  </a>
                </td>
                <td>
                  <Buttonac />
                  <Buttonde />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaPacientesform;
