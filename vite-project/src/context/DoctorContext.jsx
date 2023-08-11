import { createContext, useContext } from "react";
import { getDoctor, postDoctor } from "../api/Doctor";

const DoctorContext = createContext();

export const useDoctor = () => {
  const context = useContext(DoctorContext);
  if (!context) throw new Error("useUsers must used within a provider");
  return context;
};

function DoctorProvider({ children }) {

  const Doctor = async () => {
    const Doctor = await getDoctor()
      .then((data) => {
        return data;
      })
      .catch((error) => error);

    return auto;
  };

  const insert = (credentials) => postDoctor(credentials);



  return (
    <DoctorContext.Provider
      value={{ Doctor,  insert }}
    >
      {children}
    </DoctorContext.Provider>
  );
}

export default DoctorProvider;