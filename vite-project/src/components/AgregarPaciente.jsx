import React from "react";

function AgregarPaciente() {
  return (
    <div>
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
              Registro Paciente
            </h1>
            <form>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  CUI
                </label>
                <input
                  type="text"
                  name="CUI"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-600">
                  Nombre
                </label>
                <input
                  type="text"
                  name="nombre"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label for="email" className="block mb-2 text-sm text-gray-600">
                  Edad
                </label>
                <input
                  type="number"
                  name="edad"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label  className="block mb-2 text-sm text-gray-600">
                  Dirección
                </label>
                <input
                  type="text"
                  name="direccion"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-32 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white py-2 rounded-lg mx-auto block focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 mb-2"
              >
                Registro
              </button>
            </form>
            <p className="text-xs text-gray-600 text-center mt-8">
              &copy; 2023 UMG
            </p>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default AgregarPaciente;
