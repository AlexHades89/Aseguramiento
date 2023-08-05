import Buttonac from "./Buttonac";
import Buttonde from "./Buttonde";

function Tabla() {
  return (
    <div className="md:px-32 py-8 w-full">
      <div className="shadow overflow-hidden rounded border-b border-gray-200">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Name
              </th>
              <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                Last name
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Phone
              </th>
              <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                Email
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
                <a className="hover:text-blue-500" href="mailto:jonsmith@mail.com">
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
  );
}

export default Tabla;
