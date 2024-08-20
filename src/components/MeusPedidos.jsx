import tennis from "../assets/images/tenis-produtos.png";

const pedidos = [
  {
    id: 1,
    imagem: tennis,
    numero: 2234981932,
    descricao: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'Produto em trânsito'
  },
  {
    id: 2,
    imagem: tennis,
    numero: 4495810492,
    descricao: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'Finalizado'
  },
  {
    id: 3,
    imagem: tennis,
    numero: 4495810493,
    descricao: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'Cancelado'
  },
  {
    id: 4,
    imagem: tennis,
    numero: 4495810494,
    descricao: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'Finalizado'
  },
  {
    id: 5,
    imagem: tennis,
    numero: 4495810495,
    descricao: 'Tênis Nike Revolution 6 Next Nature Masculino',
    status: 'Finalizado'
  },
];

const statusCor = (status) => {
    switch (status) {
      case 'Cancelado':
        return 'text-error';
      case 'Finalizado':
        return 'text-light-gray';
      case 'Produto em trânsito':
        return 'text-warning';
      default:
        return 'text-black';
    }
  };

const MeusPedidos = () => {
  return (
    <div>
        <div className="font-sans min-w-[315px] lg:w-[890px] lg:h-[572px] rounded bg-white mx-5 lg:mr-[101px] px-5 py-5 lg:py-6">
          <div className="flex md:justify-between lg:items-center mb-3 lg:mb-4">
            <h2 className="text-sm leading-[22px] tracking-[0.75px] font-bold text-dark-gray-2">Meus Pedidos</h2>
            <span className="hidden md:flex text-sm leading-[22px] tracking-[0.25px] font-medium text-dark-gray-2">STATUS</span>
          </div>
          <div className="flex flex-col">
            {pedidos.map((pedido) => (
              <div key={pedido.id} className="border-t border-light-gray-2 flex flex-col md:flex-row md:justify-between md:gap-5 items-start md:items-center py-3"> 
                <div className="flex items-start gap-3 lg:gap-4">
                  <img src={pedido.imagem} alt={pedido.descricao} className="w-[71.18px] h-[58px] rounded-[2.67px] object-cover" />
                  <div className="flex flex-col">
                      <span className="font-medium text-[10px] leading-[22px] tracking-[1px] text-light-gray">Pedido nº {pedido.numero}</span>
                      <span className="text-sm leading-5 tracking-[0.75px] font-bold text-dark-gray">{pedido.descricao}</span>
                  </div>
                </div>
                <div className="w-full md:w-auto flex justify-between md:justify-end text-sm leading-5 tracking-[0.75px] font-bold mt-3">
                <span className="flex md:hidden text-[12px] leading-4 tracking-[0.5px] font-medium text-dark-gray-2">STATUS</span>
                <span className={statusCor(pedido.status)}>{pedido.status}</span>
                </div>
              </div>
            ))}
            
          </div>
        </div>
    </div>
  );
};

export default MeusPedidos;
