import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";

const Cadastro = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
    
  const onSubmit = (data) => {
    if(data) {
      navigate("/cadastro-completo")
  }};

  return (
    <main className=" flex min-h-screen bg-gradient-to-b from-secondary-1 to-secondary-2 items-center justify-center">
      <section className=" flex gap-8">
        <div className="lg:h-[399px] lg:w-[583px] rounded flex flex-col items-center lg:items-start justify-center p-5 bg-white font-sans mt-9">
          <header className="flex flex-col items-center lg:items-start justify-center lg:justify-start h-[84px] mb-3 lg:mb-5">
            <h3 className="text-dark-gray text-center font-bold text-xl tracking-widest leading-8 lg:text-3xl lg:tracking-wider lg:leading-9 lg:mb-3">
              Crie sua conta
            </h3>
            <p className="text-sm lg:text-base leading-6 lg:leading-7 tracking-wide text-dark-gray-2">
              Já possui uma conta? Entre{" "}
              <Link to="/login" className="underline hover:text-primary-1">
                aqui
              </Link>
              .
            </p>
          </header>
          <form className="flex flex-col w-full mb-2"
                onSubmit={handleSubmit(onSubmit)}>
            <label
              className="text-xs font-bold tracking-wider leading-6 mb-1"
              htmlFor="email"
            >
              Email *
            </label>
            <div className="mb-5">
              <InputText className="bg-light-gray-3 text-dark-gray-3 rounded-lg leading-7 tracking-wider pl-4 w-full h-[60px] outline-none focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                type="text"
                placeholder="Insira seu email"
                autoComplete="email"
                { ...register("email", {required: true, validate: (value) => validator.isEmail(value)})}
              />
              { errors?.email?.type === 'required' && <p className="mt-1 text-sm text-red-600">O email é obrigatório.</p>
              }
              { errors?.email?.type === 'validate' && <p className="mt-1 text-sm text-red-600">O email é inválido.</p>
              }
            </div>
            <div>
              <button
                type="submit"
                className="bg-primary-1 hover:bg-tertiary transition-all duration-300 ease-out hover:ease-in w-full h-12 text-light-gray-3 font-bold leading-6 tracking-wider rounded-lg"
              >
                Criar Conta
              </button>
            </div>
          </form>
          <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:gap-4 font-medium lg:font-normal text-sm lg:text-base leading-7 tracking-wide text-dark-gray-2 ">
            <p className="mt-3">Ou faça login com</p>
            <div className="flex gap-4 mt-3">
              <Link to="/">
                <img
                  className="transition-transform transform hover:translate-y-[-6px] hover:scale-110"
                  src="src/assets/images/gmail.png"
                  alt="Logo Gmail"
                />
              </Link>
              <Link to="/">
                <img
                  className="transition-transform transform hover:translate-y-[-6px] hover:scale-110"
                  src="src/assets/images/facebook.png"
                  alt="Logo Facebook"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center">
          <img
            className="w-[400px] h-auto lg:w-[500px]"
            src="src/assets/images/tenis.png"
            alt="Tênis"
          />
        </div>
      </section>
    </main>
  );
};
export default Cadastro;
