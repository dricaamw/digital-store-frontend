import tennis from "../assets/images/tenis-produtos.png";
import lancaConfetes from "../assets/images/lanca-confetes.png";
import { Link } from "react-router-dom";

const CompraRealizada = () => {
  const handlePrint = () => {
    print();
  };

  return (
    <main className="bg-light-gray-3 flex justify-center items-center flex-grow">
      <div className="w-full min-h-[1048px] flex flex-col gap-10 items-center justify-center mb-[30px]">
        <div className="bg-white flex flex-col justify-center w-[315px] md:w-[700px] lg:w-[838px] font-sans p-5 rounded mx-3 mt-[30px]">
          <div className="flex flex-col justify-center items-center">
            <img
              className="mb-3"
              src={lancaConfetes}
              alt="emoji lança confetes"
            />
            <h1 className="lg:w-[652px] text-2xl lg:text-[32px] leading-[38px] lg:leading-9 tracking-[0.75px] lg:tracking-[1px] text-dark-gray font-bold text-center">
              Compra Realizada
              <br /> com sucesso!
            </h1>
          </div>
          <div className="w-full border-t border-light-gray-2 my-[23px]"></div>
          <div>
            <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
              Informações Pessoais
            </h3>
            <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Nome:</dt>
                <dd className="text-dark-gray">Francisco Antonio Pereira</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">CPF:</dt>
                <dd className="text-dark-gray">123485913-35</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Email:</dt>
                <dd className="text-dark-gray">francisco@gmail.com</dd>
              </div>
              <div className="flex gap-2">
                <dt className="text-light-gray">Celular:</dt>
                <dd className="text-dark-gray">(85) 5555-5555</dd>
              </div>
            </dl>
          </div>
          <div className="w-full border-t border-light-gray-2 my-[23px]"></div>
          <div>
            <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
              Informações de Entrega
            </h3>
            <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Endereço:</dt>
                <dd className="text-dark-gray">Rua João Pessoa, 333</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Bairro:</dt>
                <dd className="text-dark-gray">Centro</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Cidade:</dt>
                <dd className="text-dark-gray">Fortaleza, Ceará</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">CEP:</dt>
                <dd className="text-dark-gray">433-8800</dd>
              </div>
            </dl>
          </div>
          <div className="w-full border-t border-light-gray-2 my-[23px]"></div>
          <div>
            <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
              Informações de Pagamento
            </h3>
            <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Titular do Cartão:</dt>
                <dd className="text-dark-gray">FRANCISCO A P</dd>
              </div>
              <div className="flex gap-2 mb-[10px]">
                <dt className="text-light-gray">Final:</dt>
                <dd className="text-dark-gray">*********2020</dd>
              </div>
            </dl>
          </div>
          <div className="w-full border-t border-light-gray-2 my-[23px]"></div>
          <div>
            <h3 className="font-bold text-base tracking-[0.75px] text-dark-gray-2 mb-[23px]">
              Resumo da compra
            </h3>
            <div className="flex items-start w-full gap-3 mb-[23px]">
              <img
                src={tennis}
                alt="Tênis Nike"
                className="w-[71.18px] h-[58px] rounded-[2.67px] object-cover"
              />
              <span className="md:w-[317.82px] text-sm leading-5 tracking-[0.75px] font-bold text-dark-gray">
                Tênis Nike Revolution 6 Next Nature Masculino
              </span>
            </div>
          </div>
          <div className="bg-[#F6AA1C0D] p-[20px] border border-solid border-[#F6AA1C26] rounded mb-[23px]">
            <div className="flex justify-between font-bold text-lg leading-[34px] tracking-[0.75px] text-dark-gray">
              <span>Total</span>
              <span>R$ 219,00</span>
            </div>
            <div className="font-medium text-xs leading-[22px] tracking-[1px] text-light-gray lg:text-end">
              ou 10x de R$ 21,00 sem juros
            </div>
          </div>
          <div
            onClick={handlePrint}
            className="text-dark-gray-2 leading-7 tracking-[0.75px] underline underline-offset-[4px] text-center cursor-pointer transition transform duration-300 ease-out hover:scale-110 hover:font-bold hover:text-warning"
          >
            Imprimir Recibo
          </div>
        </div>

        <Link to={"/"}>
          <div
            className="flex justify-center items-center font-bold text-sm leading-[22px] tracking-[0.75px] rounded-lg text-light-gray-3 hover:text-white w-[315px] md:w-[700px] lg:w-[778px] p-3 mb-[23px] bg-warning hover:bg-warning-hover transition transform ease-out duration-300;
]"
          >
            Voltar para Home
          </div>
        </Link>
      </div>
    </main>
  );
};

export default CompraRealizada;
