import tennis from "../assets/images/tenis-produtos.png";
import { InputMask } from "primereact/inputmask";
import { useState } from "react";
import { Link } from "react-router-dom";

const MeuCarrinho = () => {
  const [cep, setCep] = useState("");
  const [coupon, setCoupon] = useState("");
  const [quantity, setQuantity] = useState(1);

  const [carrinho, setCarrinho] = useState([
    {
      id: 1,
      imagem: "",
      nome: "Tênis Nike Revolution 6 Next Nature Masculino",
      cor: "Vermelho / Branco",
      tamanho: 42,
      quantidade: 1,
      preco: 219.0,
    },
  ]);

  const handleQuantityChange = (count) => {
    setQuantity((prev) => Math.max(prev + count, 1));
  };

  const handleApplyCoupon = () => {
    if (coupon) {
      return alert("Aguardando...");
    } else {
      return alert("Cupom inválido!");
    }
  };

  const handleCalculateShipping = () => {
    if (cep) {
      return alert("Aguardando...");
    } else {
      return alert("Cep inválido!");
    }
  };

  const handleDelete = (id) => {
    setCarrinho((prevCarrinho) =>
      prevCarrinho.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-start lg:gap-[16px] bg-light-gray-3 w-full">
        <section className="flex flex-col w-11/12 xl:w-[890px] h-auto lg:h-[352px] gap-[10px] lg:gap-0 mt-12 lg:mt-20 lg:mb-[50px]">
          <div className="flex flex-col bg-white rounded lg:rounded-t-[4px] lg:rounded-b-0 p-[25px] lg:px-[30px] lg:pt-[30px] lg:pb-0">
            <div className="lg:flex justify-between text-sm">
              <h2 className="font-bold text-dark-gray-2 text-sm leading-[22px] tracking-[0.75px]">
                MEU CARRINHO
              </h2>
              <div className="hidden lg:flex gap-7 font-medium text-sm leading-[22px] tracking-[0.25px] text-dark-gray-2 mr-3">
                <span>QUANTIDADE</span>
                <span>UNITÁRIO</span>
                <span>TOTAL</span>
              </div>
            </div>
            <div className="w-full border-t border-light-gray-2 my-[20px]"></div>
            
              {carrinho.map((item) => (
                <li
                  key={item.id}
                  className="flex flex-col lg:flex-row lg:justify-between gap-[20px] lg:gap-0 lg:border-b lg:pb-[20px]"
                >
                  <div className="flex items-start gap-[20px]">
                    <img
                      src={tennis}
                      alt="Tênis Nike"
                      className="w-[71.18px] lg:w-[127.63px] h-[58px] lg:h-[104px] rounded-[2.67px] lg:rounded-[4.79px] object-cover"
                    />
                    <div className="flex flex-col w-52 xl:w-60">
                      <h3 className="font-bold text-sm tracking-[0.75px] text-dark-gray mb-[10px]">
                        {item.nome}
                      </h3>
                      <p className="font-medium text-xs lg:text-sm leading-[22px] tracking-[1px] lg:tracking-[0.25px] text-light-gray lg:mb-[5px]">
                        Cor:
                        <span className="font-medium text-xs lg:text-sm leading-[22px] tracking-[1px] lg:tracking-[0.25px] text-dark-gray ml-2">
                          {item.cor}
                        </span>
                      </p>
                      <p className="font-medium text-xs lg:text-sm leading-[22px] tracking-[1px] lg:tracking-[0.25px] text-light-gray">
                        Tamanho:
                        <span className=" font-medium text-xs lg:text-sm leading-[22px] tracking-[1px] lg:tracking-[0.25px] text-dark-gray ml-2">
                          {item.tamanho}
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col flex-wrap lg:flex-row justify-center gap-[20px] lg:gap-[25px]">
                    <div className="flex flex-col lg:items-center gap-[10px]">
                      <h2 className="flex lg:hidden mb-[10px] font-medium tracking-[0.25px] text-dark-gray-2">
                        QUANTIDADE
                      </h2>
                      <div className="flex justify-between space-x-[18px]">
                        <button
                          onClick={() => handleQuantityChange(-1)}
                          className="w-[80px] lg:w-[35px] h-[35px] border border-light-gray-2 rounded-[3px] cursor-pointer text-dark-gray-2"
                        >
                          -
                        </button>
                        <span className="font-bold text-xs leading-[18px] tracking-[0.55px] text-dark-gray-2 flex items-center justify-center w-[85px] lg:w-[35px] h-[35px]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(1)}
                          className="w-[80px] lg:w-[35px] h-[35px] border border-light-gray-2 rounded-[3px] cursor-pointer text-dark-gray-2"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => handleDelete(item.id)}
                        className="text-xs leading-7 tracking-[0.75px] text-dark-gray-2 underline underline-offset-2 cursor-pointer"
                      >
                        Remover item
                      </button>
                    </div>
                    <div className="flex lg:flex-col items-center justify-between gap-[10px]">
                      <h2 className="flex lg:hidden font-medium text-sm leading-[22px] tracking-[0.25px] text-dark-gray-2">
                        UNITÁRIO
                      </h2>
                      <div className="flex lg:flex-col items-center gap-[16px] lg:gap-0">
                        <span className="line-through text-xs lg:text-sm leading-7 tracking-[0.75px] text-light-gray-2 lg:mb-[2px]">
                          {"R$ " + item.preco + ",00"}
                        </span>
                        <span className="font-bold text-sm lg:text-base leading-6 ml-2 text-dark-gray-2">
                          {"R$ " + item.preco + ",00"}
                        </span>
                      </div>
                    </div>
                    <div className="flex lg:flex-col items-center justify-between gap-[10px]">
                      <h2 className="flex lg:hidden font-medium text-sm leading-[22px] tracking-[0.25px] text-dark-gray-2">
                        TOTAL
                      </h2>
                      <div className="flex lg:flex-col items-center gap-[16px] lg:gap-0">
                        <span className="line-through text-xs lg:text-sm leading-7 tracking-[0.75px] text-light-gray-2 lg:mb-[2px]">
                          R$ 219,00
                        </span>
                        <span className="font-bold text-sm lg:text-base leading-6 ml-2 text-dark-gray-2">
                          R$ 219,00
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            
          </div>
          
            <div className="flex flex-col lg:flex-row w-full xl:w-[890px]">
              <div className="flex bg-white flex-col lg:flex-row items-center w-full border-b-[10px] border-light-gray-3 lg:border-0 gap-[10px] p-[25px] lg:pt-[20px] rounded">
                <div className="flex flex-col gap-[5px] w-full">
                  <label
                    className="font-bold text-xs leading-6 tracking-[0.75px] text-dark-gray-2"
                    htmlFor="coupon"
                  >
                    Cupom de desconto
                  </label>
                  <input
                    className="text-base leading-7 tracking-[0.75px] bg-light-gray-3 text-dark-gray-2 placeholder:text-dark-gray-3 h-[60px] min-w-[255px] xl:w-[270px] pl-3 rounded-lg"
                    id="coupon"
                    type="text"
                    placeholder="Insira seu código"
                    value={coupon}
                    onChange={(e) => setCoupon(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleApplyCoupon}
                  className="font-bold text-sm leading-[22px] tracking-[0.75px] text-center text-primary-1 h-[60px] w-full xl:min-w-[114px] lg:mt-[30px] bg-light-gray-3 rounded-lg"
                >
                  OK
                </button>
              </div>
              <div className="bg-white flex flex-col lg:flex-row items-center w-full gap-[10px] p-[25px] lg:pt-[20px] rounded">
                <div className="flex flex-col gap-[5px] w-full">
                  <label
                    className="font-bold text-xs leading-6 tracking-[0.75px] text-dark-gray-2"
                    htmlFor="frete"
                  >
                    Calcular frete
                  </label>
                  <InputMask
                    className="text-base leading-7 tracking-[0.75px] bg-light-gray-3 text-dark-gray-2 placeholder:text-dark-gray-3 h-[60px] min-w-[255px] xl:w-[270px] pl-3 rounded-lg"
                    name="frete"
                    type="text"
                    placeholder="Insira seu CEP"
                    required
                    autoComplete="cep"
                    pattern="^\d{5}-\d{3}$"
                    mask="99999-999"
                    slotChar="_____-___"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                  />
                </div>
                <button
                  onClick={handleCalculateShipping}
                  className="font-bold text-sm leading-[22px] tracking-[0.75px] text-center text-primary-1 h-[60px] w-full xl:min-w-[114px] lg:mt-[30px] bg-light-gray-3 rounded-lg"
                >
                  OK
                </button>
              </div>
            </div>
          
        </section>
        <section className="w-11/12 xl:w-[334px] h-auto xl:h-[364px] mt-[10px] lg:mt-20 mb-[96px] p-[25px] rounded bg-white">
          <div>
            <h2 className="font-bold text-dark-gray-2 text-sm leading-[22px] tracking-[0.75px] mb-[20px]">
              RESUMO
            </h2>
          </div>
          <div className="w-full border-t border-light-gray-2 my-[20px]"></div>
          <div className="flex justify-between text-sm leading-[22px] tracking-[0.25px] font-medium mb-[20px]">
            <span className="text-light-gray">Subtotal:</span>
            <span className="text-dark-gray"> R$ 249,00</span>
          </div>
          <div className="flex justify-between text-sm leading-[22px] tracking-[0.25px] font-medium  mb-[20px]">
            <span className=" text-light-gray">Frete:</span>
            <span className="text-dark-gray">R$ 0,00</span>
          </div>
          <div className="flex justify-between text-sm leading-[22px] tracking-[0.25px] font-medium mb-[20px]">
            <span className="text-light-gray">Desconto:</span>
            <span className="text-dark-gray">R$ 30,00</span>
          </div>
          <div className="flex justify-between text-lg leading-[34px] tracking-[0.75px] font-bold text-dark-gray">
            <span>Total</span>
            <span className="text-error">R$ 219,00</span>
          </div>
          <div className="text-end text-xs leading-[22px] tracking-[1px] font-medium text-light-gray lg:mb-[20px]">
            ou 10x de R$ 21,00 sem juros
          </div>
          <div>
            <Link to="/finalizar-compra">
              <button className="hidden lg:block h-10 bg-warning hover:bg-warning-hover rounded-lg w-full font-bold text-light-gray-3 hover:text-white text-sm leading-[22px] tracking-[0.75px] transition transform ease-out duration-300">
                Continuar
              </button>
            </Link>
          </div>
        </section>
        <section className="flex flex-col lg:hidden bg-white w-[375px] h-[176px] rounded p-[30px] sticky bottom-0">
          <div className="flex justify-between text-lg leading-[34px] tracking-[0.75px] font-bold text-dark-gray">
            <span>Total</span>
            <span className="text-error">R$ 219,00</span>
          </div>
          <div className="text-end text-xs leading-[22px] tracking-[1px] font-medium text-light-gray mb-[20px]">
            ou 10x de R$ 21,00 sem juros
          </div>
          <Link to="/finalizar-compra">
            <button className="h-10 bg-warning hover:bg-warning-hover rounded-lg w-full font-bold text-light-gray-3 hover:text-white text-sm leading-[22px] tracking-[0.75px] transition transform ease-out duration-300">
              Continuar
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default MeuCarrinho;
