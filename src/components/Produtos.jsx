import { useEffect, useState } from "react";
import Filtro from "../assets/Filtro.svg";
import Tenis from "../assets/TenisProduto.svg";
import SairMenu from "../assets/SairMenuLateral.svg";
import axios from "axios";

const Produtos = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const handleMenuClick = () => {
    setMostrarMenu(!mostrarMenu);
  };
  const fecharMenu = () => {
    setMostrarMenu(false);
  };

  const [produtos, setProdutos] = useState([]);
  let totalProduto = produtos.length;

  useEffect(() => {
    const buscarProdutos = async () => {
      const response = await axios.get("http://localhost:3000/produtos");
      setProdutos(response.data);
    };
    buscarProdutos();
  }, []);

  const menu = () => {
    return (
      <div className="w-[420px] h-screen bg-white flex overflow-auto absolute top-0 left-0 z-50 shadow-lg flex-col">
        <div className="h-20 w-full p-10 mb-8 ">
          <div className="flex justify-between items-center border-b-2 border-light-gray-2 h-14">
            <h2 className="text-dark-gray-2 font-bold text-2xl">
              Filtrar por{" "}
            </h2>
            <button onClick={fecharMenu}>
              <img className=" h-5 w-5" src={SairMenu} alt="icone de sair" />
            </button>
          </div>
        </div>

        <div className="flex flex-col p-10 gap-12">
          <div className="flex flex-col gap-4">
            <label className="font-bold text-xl text-dark-gray-2">Marka</label>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Aliodas</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Galenciaga</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Kike</label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-bold text-xl text-dark-gray-2">
              Cathegoria
            </label>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Tenis</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Sapato</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">
                Vestimenta de pe
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-bold text-xl text-dark-gray-2">Genero</label>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Maculiono</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Feminiono</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                type="checkbox"
              />
              <label className="text-dark-gray-2 text-lg">Unisexx</label>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <label className="font-bold text-xl text-dark-gray-2">Genero</label>
            <div className="flex items-center gap-4">
              <input className="h-6 w-6" type="radio" name="estado" />
              <label className="text-dark-gray-2 text-lg">Novo</label>
            </div>
            <div className="flex items-center gap-4">
              <input className="h-6 w-6" type="radio" name="estado" />
              <label className="text-dark-gray-2 text-lg">Usado</label>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-full overflow-auto bg-light-gray-3 ">
      <div>
        <div className="flex flex-col justify-between p-5 gap-5 md:flex-row-reverse md:items-center">
          <div className="flex flex-row justify-center items-center gap-2  md:justify-end md:mr-16">
            <select
              className="w-[600px] md:w-[300px] md:mr-8 h-14 rounded-sm border border-gray-600 "
              name="Ordernar por: "
              id=""
            >
              <option disabled selected>
                Ordernar por
              </option>
              <option>mais relevante</option>
              <option>por menor preço</option>
              <option>por maior preço</option>
            </select>
            <button className="md:hidden w-24 h-24" onClick={handleMenuClick}>
              <img src={Filtro} />
            </button>
          </div>

          <div className="md:ml-28">
            <span>{`Resultado para "Tenis - ${totalProduto} produtos`}</span>
          </div>
        </div>
      </div>
      {mostrarMenu && menu()}

      <div className="flex flex-row gap-56 md:gap-20 md:mr-24 ">
        <div className=" hidden md:ml-32 md:bg-white md:h-[950px] md:w-[400px] md:block ">
          <div className="h-20 w-full p-10 mb-8 ">
            <div className="flex justify-between items-center border-b-2 border-light-gray-2 h-14">
              <h2 className="text-dark-gray-2 font-bold text-2xl">
                Filtrar por{" "}
              </h2>
            </div>
          </div>

          <div className="flex flex-col p-10 gap-12">
            <div className="flex flex-col gap-4">
              <label className="font-bold text-xl text-dark-gray-2">
                Marka
              </label>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Aliodas</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Galenciaga</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Kike</label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold text-xl text-dark-gray-2">
                Cathegoria
              </label>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Tenis</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Sapato</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">
                  Vestimenta de pe
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold text-xl text-dark-gray-2">
                Genero
              </label>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Maculiono</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Feminiono</label>
              </div>
              <div className="flex items-center gap-4">
                <input
                  className="w-7 h-7 appearance-none border-2 border-gray-400 rounded-sm checked:bg-pink-500 checked:border-pink-500 checked:flex checked:items-center checked:justify-center checked:after:content-['✔'] checked:after:text-white checked:after:text-sm checked:after:leading-none"
                  type="checkbox"
                />
                <label className="text-dark-gray-2 text-lg">Unisexx</label>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-bold text-xl text-dark-gray-2">
                Genero
              </label>
              <div className="flex items-center gap-4">
                <input className="h-6 w-6" type="radio" name="estado" />
                <label className="text-dark-gray-2 text-lg">Novo</label>
              </div>
              <div className="flex items-center gap-4">
                <input className="h-6 w-6" type="radio" name="estado" />
                <label className="text-dark-gray-2 text-lg">Usado</label>
              </div>
            </div>
          </div>
        </div>

        <div className="h-screen grid grid-cols-2 p-5 gap-16 place-items-center md:grid-cols-3 md:gap-x-40">
          {produtos.map((produto) => (
            <div className="h-full flex flex-col gap-2">
              <div className="w-44 h-44 md:w-[300px] md:h-[300px] bg-white flex items-center  ">
                <img className=" w-full h-full cursor-pointer" onClick={"rota porduto"} src={produto.img} alt="" />
              </div>
              <h6 className="text-sm font-bold text-light-gray" >{produto.nome}</h6>
              <p className="text-sm md:text-xl text-dark-gray-2 cursor-pointer" onClick={"rota porduto"}>{produto.marca} - Masculino</p>
              <div>{`R$ ${produto.preco}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Produtos;
