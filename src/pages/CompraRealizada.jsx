import tennis from "../assets/images/tenis-produtos.png";
import lancaConfetes from "../assets/images/lanca-confetes.png";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { Document, Image, Page, PDFDownloadLink, Text, View } from "@react-pdf/renderer";

const ReciboPDF = () => (
  <Document>
    <Page size="A4" style={{ padding: 30 }}>
      <Image src={logo} style={{ width: 100, marginBottom: 30 }} />
      <View style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 20, fontWeight: 'extrabold' }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Recibo de Compra</Text>
        <Text style={{ fontSize: 16, color: "#991956" }}>Detalhes do pedido nº 7028597</Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#000", marginVertical: 5 }}/>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 8, fontWeight: 'bold' }}>Item(ns) pedido(s)</Text>
          <Text style={{ fontSize: 14 }}>Tênis Nike Revolution 6 Next Nature Masculino</Text>
        </View>
        <View>
          <Text style={{ fontSize: 16, marginBottom: 8, alignSelf: "center", fontWeight: 'bold' }}>Preço</Text>
          <Text style={{ fontSize: 14 }}>R$ 219,80</Text>
        </View>
      </View>
      <View style={{ height: 1, backgroundColor: "#000", marginVertical: 5 }}/>
      <View>
        <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: 'bold' }}>Informações de Entrega</Text>
      </View>
      <View style={{ marginBottom: 20, fontSize: 14 }}>
        <Text style={{ marginBottom: 5 }}>Nome: Francisco Antonio Pereira</Text>
        <Text style={{ marginBottom: 5 }}>Endereço: Rua João Pessoa, 333</Text>
        <Text style={{ marginBottom: 5 }}>Bairro: Centro</Text>
        <Text style={{ marginBottom: 5 }}>Cidade: Fortaleza, Ceará</Text>
        <Text>CEP: 433-8800</Text>
      </View>
      <View style={{ height: 1, backgroundColor: "#000", marginVertical: 5 }}/>
      <View>
        <Text style={{ marginBottom: 15, fontSize: 16, fontWeight: 'bold' }}>Informações de Pagamento</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 20 }}>
        <View style={{ fontSize: 14 }}>
          <Text style={{ marginBottom: 8, fontSize: 15, fontWeight: 'bold' }}>Método de pagamento:</Text>
          <Text>Visa Final: *********2020</Text>
        </View>
        <View style={{ fontSize: 14}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={{ marginBottom: 5 }}>Subtotal do(s) item(ns):{" "}</Text>
            <Text>R$ 219,80</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
            <Text style={{ marginBottom: 8 }}>Frete e manuseio:</Text>
            <Text style={{ marginBottom: 5 }}>R$ 0,00</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between", fontWeight: 'bold' }}>
            <Text>Total geral:</Text>
            <Text>R$ 219,80</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={{ textAlign: "center", fontSize: 12, marginTop: 40, fontWeight: 'bold' }}>Observação: esta não é uma nota fiscal eletrônica.</Text>
      </View>
    </Page>
  </Document>
);

const CompraRealizada = () => {
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
          <PDFDownloadLink
            document={<ReciboPDF />}
            fileName="recibo.pdf"
            className="text-dark-gray-2 leading-7 tracking-[0.75px] underline underline-offset-[4px] text-center cursor-pointer transition transform duration-300 ease-out hover:scale-110 hover:font-bold hover:text-warning"
          >
            {({ loading }) =>
              loading ? "Gerando Recibo..." : "Imprimir Recibo"
            }
          </PDFDownloadLink>
        </div>

        <Link to={"/"}>
          <div className="flex justify-center items-center font-bold text-sm leading-[22px] tracking-[0.75px] rounded-lg text-light-gray-3 hover:text-white w-[315px] md:w-[700px] lg:w-[778px] p-3 mb-[23px] bg-warning hover:bg-warning-hover transition transform ease-out duration-300;
]">Voltar para Home</div>
        </Link>
      </div>
    </main>
  );
};

export default CompraRealizada;
