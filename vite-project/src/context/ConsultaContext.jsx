import { createContext, useContext } from "react";
import { getConsulta, postConsulta } from "../api/Consulta";

const ConsultaContext = createContext();

export const useConsulta = () => {
  const context = useContext(ConsultaContext);
  if (!context) throw new Error("useUsers must used within a provider");
  return context;
};

function ConsultaProvider({ children }) {

  const Consulta = async () => {
    const Consulta = await getConsulta()
      .then((data) => {
        return data;
      })
      .catch((error) => error);
    return Consulta;
  };

  const insert = (credentials) => postConsulta(credentials);



  return (
    <ConsultaContext.Provider
      value={{ Consulta,  insert }}
    >
      {children}
    </ConsultaContext.Provider>
  );
}

export default ConsultaProvider;