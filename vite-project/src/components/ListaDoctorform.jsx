import { useState, useEffect } from "react";
import { useDoctor } from "../context/DoctorContext"

function ListaDoctorform() {
  const { Doctor } = useDoctor();
  const [data, setData] = useState([]);

  useEffect(() => {
    info();
  }, []);

  const info = async () => {
    setData(await Doctor());
  };

  console.log(data);
  return (
    <div>
    
      <div>
        <main className="flex min-h-width w-full items-center justify-end mr-20 bg-gray-100">
        <a href="/AgregarDoctor">
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
                  Nombre
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Clinica
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Colegiado
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
            {data.map((Doctordata) => (
                <tr key={Doctordata._id}>
                  <td className="w-1/3 text-left py-3 px-4">
                    {Doctordata.cuidoctor}
                  </td>
                  <td className="w-1/3 text-left py-3 px-4">
                    {Doctordata.namedoctor}
                  </td>
                  <td className="text-left py-3 px-4">
                    {Doctordata.clinica}
                    </td>
                  <td className="text-left py-3 px-4">
                    {Doctordata.colegiado}
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

export default ListaDoctorform;
