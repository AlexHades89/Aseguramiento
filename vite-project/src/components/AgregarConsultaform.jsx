import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidaConsulta } from "../validations/ValidacionConsulta";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useConsulta } from "../context/ConsultaContext";

function AgregarConsultaform() {
  const { insert } = useConsulta();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidaConsulta),
  });

  const onSubmit = async (e) => {
    console.log(e);
    const res = await insert(e);
    if (res.status === 204) {
      toast.success("Consulta Guardado Correctamente");
    } else if (res.status === 400 || res.status === 401) {
      toast.warning(`Error ${res.data.message}`);
    }
  };
  return (
    <div>
      <ToastContainer />
      <div className="bg-gray-100">
        <div className="min-h-screen flex items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
            <div className="flex justify-center mb-8">
              <img
                src="https://images.vexels.com/media/users/3/144224/isolated/preview/589394662ba164058d2ac84b4a0643b2-notas-de-la-tabla-de-registros-medicos.png"
                alt="Logo"
                className="w-30 h-20"
              />
            </div>
            <h1 className="text-2xl font-semibold text-center text-gray-500 mt-8 mb-6">
              Registro Consulta
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  CUI Paciente
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  {...register("cuiPaciente")}
                />
                <span className="text-red-500 text-center">
                  {errors.cuiPaciente?.message}
                </span>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Nombre Paciente
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  {...register("namePaciente")}
                />
                <span className="text-red-500 text-center">
                  {errors.namePaciente?.message}
                </span>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Doctor
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  {...register("Doctor")}
                />
                <span className="text-red-500 text-center">
                  {errors.Doctor?.message}
                </span>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Clinica
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  {...register("clinica")}
                />
                <span className="text-red-500 text-center">
                  {errors.clinica?.message}
                </span>
              </div>
              <button
                type="submit"
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                Registro
              </button>
            </form>
            <p className="text-xs text-gray-600 text-center mt-8">
              &copy; 2023 Hola
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default AgregarConsultaform;
