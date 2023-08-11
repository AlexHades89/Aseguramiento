import { useForm } from "react-hook-form";
import { useLogin } from "../context/LoginContext";
import { ValidacionLogin } from "../validations/ValidacionLogin";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Loginform() {


  const { Login } = useLogin();

  


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ValidacionLogin),
  });

  const onSubmit = async (e) => {
    console.log(e);
    const res = await Login(e);
    if (res.status === 200) {
      toast.success(res.data.message);
      window.location = "/Inicio"
      setLoading(true);
    } else if (res.status === 400 || res.status === 401) {
      toast.warning(`Error al ingresar ${res.data.message}`);
    }
  };


  return (
  <div>
    <ToastContainer/>
    
    <div className="flex flex-col h-screen bg-gradient-to-b from-[#063970] to-blue-200 justify-center">
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className="grid place-items-center mx-2 my-20 sm:my-auto"
        x-data="{ showPass: true }"
      >
        <div
          className="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
                px-6 py-10 sm:px-10 sm:py-6
                bg-white rounded-lg shadow-md lg:shadow-lg"
        >
          <div className="text-center mb-4">
            <h6 className="font-semibold text-[#063970] text-xl">Login</h6>
          </div>
          <form className="space-y-5" method="POST" />
          <div>
            <input
              type="text"
              placeholder="Username"
              className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            {...register("user")}/>
          </div>
          <div className="relative w-full">
            <input
              type="password"
              placeholder="password"
              className="block w-full py-3 px-3 mt-2 mb-4
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
            {...register("password")}/>
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"></div>
          </div>
          
          <button 
            className="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none"
          >
            Iniciar Sesion
          </button>
        
        </div>

      </div>
      </form>
    </div>
  </div>
  );
}

export default Loginform;
