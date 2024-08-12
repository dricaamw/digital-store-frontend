import Filtro from "../assets/Filtro.svg";
import Tenis from "../assets/TenisProduto.svg";

const Produtos = () => {
  return (
    <div className="min-h-full overflow-auto bg-light-gray-3 ">
      <div>
        <div className="flex flex-col justify-between p-5 gap-5">
          <div className="flex flex-row justify-center items-center gap-2 ">
            <select
              className="w-[600px] h-14 rounded-sm border border-gray-600"
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
            <button className="w-24 h-24" >
                <img  src={Filtro} />
            </button>
          </div>

          <div>
            <span>{`Resultado para "Tenis - 700 produtos"`}</span>
          </div>
        </div>
      </div>
      <div className="h-screen grid grid-cols-2 p-5 place-items-center ">
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        <div className="h-full flex flex-col gap-2">
          <div className="w-44 h-44 bg-white flex items-center  ">
            <img src={Tenis} alt="" />
          </div>
          <h6 className="text-sm font-bold">Tenis</h6>
          <p className="text-sm">K-Swiss V8 - Masculino</p>
        </div>
        
    
       
        
        
        
        
      </div>
    </div>
  );
};

export default Produtos;
