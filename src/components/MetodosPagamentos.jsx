import visa from "../assets/images/visa.svg";
import chip from "../assets/images/chip.png";
import Modal from "./Modal";
import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from "primereact/inputtext";
import { Tooltip } from "primereact/tooltip";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dialog } from "primereact/dialog";
import { useForm } from "react-hook-form";
import CardType from "./CardType";

const MetodosPagamentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisible] = useState(false);
  const [cardNumber, setCardNumber] = useState(""); 

  const { register, handleSubmit, } = useForm();

  const onSubmit = (data) => {
    const cleanedCardNumber = data.numberCard.replace(/\D/g, '');
   setCardNumber(cleanedCardNumber); 
   };

  const [cartoes, setCartoes] = useState([
    {
      id: 1,
      apelido: "C6 Black",
      numero: "4756 5469 8547 5634",
      nome: "Francisco Antonio Pereira",
      validade: "12/25",
      cvv: "123",
      bandeira: visa,
    },
  ]);

  const handleDelete = (id) => {
    confirmDialog({
      message: "Você tem certeza que deseja excluir este cartão?",
      rejectClassName:
        "px-4 py-1 mt-3 ml-10 lg:ml-36 outline-none rounded text-primary-1 hover:text-tertiary hover:bg-white font-bold",
      acceptClassName:
        "px-4 py-1 mt-3 ml-4 outline-none rounded text-light-gray-3 bg-primary-1 hover:bg-tertiary font-bold",
      reject: () => setOpenModal(false),
      accept: () => setCartoes(cartoes.filter((cartao) => cartao.id !== id)),
    });
  };

  return (
    <div>
      <section className="bg-white min-w-[315px] h-[466px] lg:w-[890px] lg:h-[466px] mx-5 lg:mr-[101px] flex flex-col items-start justify-start px-5 lg:py-5 font-sans rounded">
        <div className="w-full flex-col lg:flex lg:flex-row lg:justify-between mt-1">
          <div className="lg:hidden w-full flex justify-end items-end mb-4">
            <button
              className="lg:hidden mt-5 text-sm text-primary-1 hover:text-tertiary underline font-semibold mr-3 lg:mr-4 underline-offset-[3px]"
              onClick={() => setOpenModal(true)}
            >
              Adicionar cartão
            </button>
          </div>
          <h6 className="font-bold text-sm tracking-[0.75px] leading-[22px] text-dark-gray-2">
            Cartões cadastrados
          </h6>
          <button
            className=" hidden lg:block text-primary-1 hover:text-tertiary underline font-semibold text-sm tracking-wide mr-3 lg:mr-4 underline-offset-[3px]"
            onClick={() => setOpenModal(true)}
          >
            Adicionar cartão
          </button>
        </div>
        <div className="w-full border-t border-light-gray-2 my-1 lg:my-3"></div>
        <div className="flex mt-3 lg:mt-2">
          {cartoes.map((cartao) => (
            <dl
              key={cartao.id}
              className="flex items-center justify-between w-64 lg:w-80 text-dark-gray font-medium text-sm border p-4 lg:p-4 rounded-xl"
            >
              <div className="flex-col">
                <div className="flex gap-2">
                  <img
                    className="h-11"
                    src={cartao.bandeira}
                    alt={cartao.bandeira}
                  />
                  <div className="mt-[10px]">
                    <dt className="hidden text-light-gray">
                      Apelido do cartão
                    </dt>
                    <dd>{cartao.apelido}</dd>
                  </div>
                </div>
                <div>
                  <dt className="hidden text-light-gray">Número do cartão:</dt>
                  <dd>{`**** **** **** ${cartao.numero.slice(-4)}`}</dd>
                </div>
              </div>
              <div className="card flex justify-content-center">
                <Tooltip
                  target=".custom-target-icon"
                  className="absolute top-1/2 bg-primary-1 text-white rounded text-sm"
                />
                <i
                  className="relative custom-target-icon pi pi-trash text-primary-1 cursor-pointer text-sm"
                  data-pr-tooltip="Excluir"
                  data-pr-position="right"
                  data-pr-at="right-32 bottom"
                  data-pr-my="left center-30"
                  onClick={() => handleDelete(cartao.id)}
                ></i>
                <ConfirmDialog
                  className="bg-light-gray-3 drop-shadow-lg text-dark-gray-2 font-bold rounded w-[315px] md:w-[350px] lg:w-[420px] px-4 py-2 lg:py-4 lg:px-4 absolute -translate-y-10 lg:-translate-y-40 lg:right-72"
                  rejectLabel="Não"
                  acceptLabel="Sim"
                />
              </div>

              <div className="hidden gap-2 mb-[10px]">
                <dt className="text-light-gray">Nome:</dt>
                <dd>{cartao.nome}</dd>
              </div>
              <div className="hidden gap-2 mb-[10px]">
                <dt className="text-light-gray">Validade:</dt>
                <dd>{cartao.validade}</dd>
              </div>
              <div className=" hidden gap-2">
                <dt className="text-light-gray">CVV:</dt>
                <dd>{cartao.cvv}</dd>
              </div>
            </dl> 
          ))}
        </div>
      </section>
      <Modal visible={openModal}>
        <div className="bg-white shadow transition-all flex-col justify-center items-center h-[550px] w-[315px] lg:w-[700px] lg:h-[466px] overflow-auto lg:gap-2 lg:px-4 pt-5 pl-5 rounded">
          <div className="flex flex-col">
            <div className="flex gap-3">
              <div className="flex-col">
                <h2 className="text-lg font-semibold mb-1 ml-1 text-dark-gray">
                  Adicionar cartão
                </h2>
                <form className="flex flex-col items-start lg:w-[340px] rounded p-1 mb-2">
                  <h3 className="mt-1 text-dark-gray">Informações do cartão</h3>
                  <div className="w-full border-t border-light-gray-2 mb-4"></div>
                  <div className="inline-flex flex-col mb-2 w-full">
                    <label
                      htmlFor="identifier"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Apelido do cartão (opcional):
                    </label>
                    <InputText
                      id="identifier"                      
                      autoComplete
                     { ...register('identifier')}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                  </div>
                  <div className="inline-flex flex-col mb-2 w-full">
                    <label
                      htmlFor="numberCard"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Número do cartão
                    </label>
                    <InputMask
                      id="numberCard"
                      mask="9999.9999.9999.9999"
                      autoClear
                      invalid
                      { ...register('numberCard')}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputMask>
                  </div>
                  <div className="inline-flex flex-col mb-2 w-full">
                    <label
                      htmlFor="nameCard"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Nome
                    </label>
                    <InputText
                      id="nameCard"
                      { ...register('nameCard')}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                  </div>

                  <div className=" flex flex-col lg:flex-row lg:gap-3">
                    <div className="inline-flex flex-col mb-2 lg:w-1/3">
                      <label
                        htmlFor="expiry"
                        className="text-light-gray font-semibold text-sm"
                      >
                        Validade
                      </label>
                      <InputMask
                        id="expiry"
                        type="text"
                        mask="99/99"
                        slotChar="mm/aa"
                        autoClear
                        invalid
                        { ...register('expiry')}
                        className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                      ></InputMask>
                    </div>
                    <div className="relative inline-flex flex-col mb-2 lg:w-1/3">
                      <label
                        htmlFor="cvv"
                        className="text-light-gray font-semibold text-sm"
                      >
                        cvv
                      </label>
                      <InputText
                        id="cvv"
                        type="password"
                        { ...register('cvv')}
                        className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                      />
                      <i
                        className="pi pi-question-circle text-gray-500 cursor-pointer absolute top-1/2 right-3"
                        onClick={() => setVisible(true)}
                      ></i>
                      <Dialog
                        className="bg-light-gray-3 text-dark-gray-3 drop-shadow-md leading-5 lg:leading-6 tracking-tight lg:tracking-normal rounded w-2/3 md:w-1/4 p-4 text-justify font-bold border"
                        visible={visible}
                        onHide={() => {
                          if (!visible) return;
                          setVisible(false);
                        }}
                      >
                        <p className="m-0 text-dark-gray-2">
                          O número CVV é representado pelos três últimos dígitos
                          no verso do seu cartão. Em cartões American Express, o
                          CVV é um número de 4 dígitos na frente do cartão.
                        </p>
                      </Dialog>
                    </div>
                  </div>
                </form>
              </div>
              <div className={`hidden lg:flex flex-col w-[300px] h-[180px] mt-5 bg-gradient-to-tr from-[#0F418A] to-[#0995C1] text-light-gray-3 rounded-lg drop-shadow-md`}
              >
                <div className="w-full flex justify-end h-12">
                  {cardNumber && 
                    <CardType cardNumber={cardNumber} />
                  }
                </div>
                <div>
                  <img className="h-8 ml-5 mb-2" src={chip} alt="chip" />
                </div>
                <div className="ml-5 text-lg">
                  <input
                    className="bg-transparent text-light-gray-3 outline-none"
                    type="text"                  
                    placeholder="**** **** **** ****"

                  />
                </div>
                <div className="flex justify-start ml-5 pb-2 mb-2 text-sm">
                  <div className="flex flex-col items-start justify-start">
                    <InputTextarea
                      className="bg-transparent placeholder-light-gray-3 h-10 mt-2 outline-none text-light-gray-3 overflow-hidden resize-none whitespace-pre-wrap break-words text-start"
                      placeholder="NOME"
                    ></InputTextarea>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs mt-2 text-light-gray-3">Validade </span>
                  </div>
                </div>
                <div className="hidden">
                  <span></span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center md:justify-end gap-3 lg:mr-10">
              <button
                className="w-28 h-11 py-2 px-4 text-light-gray-3 bg-primary-1 hover:bg-tertiary font-bold text-sm tracking-wider shadow-md rounded"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                Salvar
              </button>
              <button
                className="w-28 h-11 py-2 px-4 text-primary-1 hover:text-tertiary hover:bg-light-gray-3 font-bold text-sm tracking-wider hover:shadow-md rounded"
                type="button"
                onClick={() => setOpenModal(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MetodosPagamentos;
