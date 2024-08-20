import { useState } from "react";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const MinhasInformacoes = () => {
  const [visible, setVisible] = useState(false);
  const [nome, setNome] = useState("Francisco Antonio Pereira");
  const [cpf, setCpf] = useState("123485913-35");
  const [email, setEmail] = useState("francisco@gmail.com");
  const [celular, setCelular] = useState("(85) 5555-5555");
  const [endereco, setEndereco] = useState("Rua João Pessoa, 333");
  const [bairro, setBairro] = useState("Centro");
  const [cidade, setCidade] = useState("Fortaleza, Ceará");
  const [cep, setCep] = useState("433-8800");

  return (
    <div>
      <section className="bg-white min-w-[315px] h-[466px] lg:w-[890px] lg:h-[466px] mx-5 lg:mr-[101px] flex flex-col items-start justify-start p-5 font-sans rounded">
        <div className="w-full flex justify-between mt-1">
          <h4 className="font-bold text-sm tracking-[0.75px] leading-[22px] text-dark-gray-2">
            Minhas Informações
          </h4>
          <button
            className="text-primary-1 hover:text-tertiary underline font-semibold text-sm tracking-wide mr-3 lg:mr-4 underline-offset-[3px]"
            onClick={() => setVisible(true)}
          >
            Editar
          </button>
        </div>
        <div className="w-full border-t border-light-gray-2 my-3"></div>
        <div>
          <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
            Informações Pessoais
          </h3>
          <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Nome:</dt>
              <dd>Francisco Antonio Pereira</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">CPF:</dt>
              <dd>123485913-35</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Email:</dt>
              <dd>francisco@gmail.com</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-light-gray">Celular:</dt>
              <dd>(85) 5555-5555</dd>
            </div>
          </dl>
        </div>
        <div className="w-full border-t border-gray-300 my-3"></div>
        <div>
          <h3 className="font-bold text-base tracking-[0.75px] mb-2 text-dark-gray-2">
            Informações de Entrega
          </h3>
          <dl className="font-medium text-sm leading-[22px] tracking-[0.25px]">
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Endereço:</dt>
              <dd>Rua João Pessoa, 333</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Bairro:</dt>
              <dd>Centro</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">Cidade:</dt>
              <dd>Fortaleza, Ceará</dd>
            </div>
            <div className="flex gap-2 mb-[10px]">
              <dt className="text-light-gray">CEP:</dt>
              <dd>433-8800</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="card flex justify-content-center">
        <Dialog
          visible={visible}
          modal
          onHide={() => {
            if (!visible) return;
            setVisible(false);
          }}
          content={({ hide }) => (
            <div className="flex flex-column w-[315px] lg:w-[700px] px-5 py-4 gap-2 rounded-xl bg-white overflow-auto">
              <h2 className="text-lg font-semibold mb-1 ml-1 text-dark-gray">
                Editar Informações
              </h2>
              <form className="flex flex-col lg:flex-row gap-2 lg:gap-10 items-center w-full h-full mb-2">
                <div className="flex flex-col rounded p-1 w-full">
                  <h3 className="my-1 text-dark-gray">Informações Pessoais</h3>
                  <div className="w-full border-t border-light-gray-2 mb-3"></div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="nome"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Nome
                    </label>
                    <InputText
                      id="nome"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="cpf"
                      className="text-light-gray font-semibold text-sm"
                    >
                      CPF
                    </label>
                    <InputText
                      id="cpf"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="email"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Email
                    </label>
                    <InputText
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="celular"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Celular
                    </label>
                    <InputText
                      id="celular"
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                </div>
                <div className="flex flex-col rounded p-1 w-full">
                  <h3 className="my-1 text-dark-gray">
                    Informações de Entrega
                  </h3>
                  <div className="w-full border-t border-light-gray-2 mb-3"></div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="endereco"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Endereco
                    </label>
                    <InputText
                      id="endereco"
                      value={endereco}
                      onChange={(e) => setEndereco(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="bairro"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Bairro
                    </label>
                    <InputText
                      id="bairro"
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="cidade"
                      className="text-light-gray font-semibold text-sm"
                    >
                      Cidade
                    </label>
                    <InputText
                      id="cidade"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                  <div className="inline-flex flex-column mb-2">
                    <label
                      htmlFor="cep"
                      className="text-light-gray font-semibold text-sm"
                    >
                      CEP
                    </label>
                    <InputText
                      id="cep"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="bg-light-gray-3 border-none p-2 text-dark-gray focus:shadow-[0_0_0_0.2rem_#e1e1e1]"
                    ></InputText>
                  </div>
                </div>
              </form>
              <div className="flex align-items-center justify-center lg:justify-end gap-2">
                <Button
                  label="Salvar"
                  onClick={(e) => hide(e)}
                  text
                  className="p-2 w-5 lg:w-3 text-primary-50 bg-primary-1 border-2 border-white-alpha-30 hover:bg-tertiary"
                ></Button>
                <Button
                  label="Cancelar"
                  onClick={(e) => hide(e)}
                  text
                  className="p-2 w-5 lg:w-3 text-primary-1 border-2 border-primary-1 hover:text-tertiary hover:border-tertiary"
                ></Button>
              </div>
            </div>
          )}
        ></Dialog>
      </div>
    </div>
  );
};
export default MinhasInformacoes;
