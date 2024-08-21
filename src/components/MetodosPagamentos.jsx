import { useState } from "react";
import { InputMask } from "primereact/inputmask";
import { Tooltip } from "primereact/tooltip";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Dialog } from "primereact/dialog";
import visa from "../assets/images/visa.svg";
import Modal from "./Modal";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

const MetodosPagamentos = () => {
  const [openModal, setOpenModal] = useState(false);
  const [visible, setVisible] = useState(false);

  const [state, setState] = useState({
    identifier: "",
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const value = state.expiry;
    const [mes, ano] = value.split("/").map(Number);
    const anoAtual = new Date().getFullYear();
    const mesAtual = new Date().getMonth() + 1;
    
    const anoCompleto = ano < 100 ? 2000 + ano : ano;
    if (
      anoCompleto < anoAtual ||
      (anoCompleto === anoAtual && mes < mesAtual)
    ) {
      window.alert("Data de validade expirada");
      e.preventDefault();
    } else {
      return (window.confirm("Dados cadastrados com sucesso!")) && 
         setState({
           identifier: "",
           number: "",
           expiry: "",
           cvc: "",
           name: "",
           cvv: "",
         });
       }
    }

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
          <div className="flex gap-3">
            <div className="flex-col">
              <h2 className="text-lg font-semibold mb-1 ml-1 text-dark-gray">
                Adicionar cartão
              </h2>
              <h3 className="mt-1 text-dark-gray">Informações do cartão</h3>
              <div className="w-full border-t border-light-gray-2 mb-4"></div>
              <form
                className="flex flex-col items-start lg:w-[340px] rounded p-1 mb-2"
                onSubmit={handleSubmit}
              >
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="identifier"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Apelido do cartão (opcional):
                  </label>
                  <input
                    type="text"
                    name="identifier"
                    autoComplete="organization"
                    value={state.identifier}
                    onChange={handleInputChange}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="number"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Número do cartão:
                  </label>
                  <InputMask
                    type="text"
                    name="number"
                    mask="9999 9999 9999 9999"
                    style={{ color: "#8f8f8f" }}
                    required
                    autoComplete="cc-number"
                    value={state.number}
                    onChange={handleInputChange}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>
                <div className="inline-flex flex-col mb-2 w-full">
                  <label
                    htmlFor="name"
                    className="text-light-gray font-semibold text-sm"
                  >
                    Nome impresso no cartão:
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    autoComplete="cc-name"
                    pattern="^[A-Za-z\s]+$"
                    value={state.name}
                    onChange={handleInputChange}
                    className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                  />
                </div>

                <div className=" flex flex-col lg:flex-row mb-2 lg:gap-3">
                  <div className="inline-flex flex-col mb-2 lg:w-1/3">
                    <label
                      htmlFor="expiry"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Validade:
                    </label>
                    <InputMask
                      type="text"
                      name="expiry"
                      mask="99/99"
                      style={{ color: "#8f8f8f" }}
                      slotChar="mm/aa"
                      required
                      autoComplete="cc-exp"
                      pattern="^(0[1-9]|1[0-2])\/(0[1-9]|[1-9][0-9])$"
                      value={state.expiry}
                      onChange={handleInputChange}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                  </div>
                  <div className="relative inline-flex flex-col mb-2 lg:w-1/3">
                    <label
                      htmlFor="cvv"
                      className="text-light-gray font-semibold text-sm"
                    >
                      CVV:
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      required
                      autoComplete="cc-csc"
                      pattern="^\d{3,4}$"
                      value={state.cvv}
                      onChange={handleInputChange}
                      className="bg-light-gray-3 rounded outline-none p-2 text-dark-gray-3 focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    />
                    <i
                      className="pi pi-question-circle text-dark-gray-3 cursor-pointer absolute top-1/2 right-3"
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
                <div className="flex justify-center items-center lg:justify-end w-full gap-3 lg:mr-10">
                  <button
                    className="w-28 h-11 py-2 px-4 text-light-gray-3 bg-primary-1 hover:bg-tertiary font-bold text-sm tracking-wider shadow-md rounded outline-none focus:shadow-[0_0_0_0.2rem_#991956]"
                    type="submit"
                  >
                    Salvar
                  </button>
                  <button
                    className="w-28 h-11 py-2 px-4 text-primary-1 hover:text-tertiary hover:bg-light-gray-3 font-bold text-sm tracking-wider hover:shadow-md rounded outline-none focus:shadow-[0_0_0_0.2rem_#c92071]"
                    type="button"
                    onClick={() => setOpenModal(false)}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
            <div className="hidden lg:block">
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
                placeholders={{ name: "NOME" }}
                locale={{ valid: "Validade" }}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};
export default MetodosPagamentos;
