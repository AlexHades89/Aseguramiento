import { useState, useEffect } from "react";
import { useConsulta } from "../context/ConsultaContext";

function ListaConsultasform() {

  const { Consulta } = useConsulta();
  const [data, setData] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await Consulta());
  };

  console.log(data);
  return (
    <div>
      
      <div>
        <main className="flex min-h-width w-full items-center justify-end mr-20 bg-gray-100">
          <a href="/AgregarConsulta">
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
                  Paciente
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Doctor
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Clinica
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {data.map((consultadata) => (
                <tr key={consultadata._id}>
                  <td className="w-1/3 text-left py-3 px-4">
                    {consultadata.cuiPaciente}
                  </td>
                  <td className="w-1/3 text-left py-3 px-4">
                    {consultadata.namePaciente}
                  </td>
                  <td className="text-left py-3 px-4">
                    {consultadata.Doctor}
                    </td>
                  <td className="text-left py-3 px-4">
                    {consultadata.clinica}
                  </td>
                </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListaConsultasform;
