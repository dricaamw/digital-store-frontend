















import { useForm } from "react-hook-form";
import styled from "styled-components";

const FinalizarCompraContainer = styled.div`
    
`

const FinalizarCompra = () => {

    const { register, handleSubmit } = useForm()

    const handlePaymentForm = (data) => {
        // Implement your payment processing logic here.

        console.log(data)
        {/*  console ( •_•)>⌐■-■
            {
                payment-method: ...,
                card-number: ...,
                card-holder-name: ...,
                expire-date: ...,
                cvv:...
            } */}
    };

    return (
        <FinalizarCompraContainer>
                <p>Informações de Pagamento</p>
                <form onSubmit={handleSubmit(handlePaymentForm)} >

                    <div className="formaDePagamento">
                        <label htmlFor="payment-method">Forma de Pagamento</label>
                        <select id="payment-method" {...register('payment-method')} >
                            <option value="boleto">Boleto</option>
                            <option value="pix">Pix</option>
                            <option value="cartao">Cartão de Crédito</option>
                            <option value="debito">Cartão de Débito</option>
                        </select>
                    </div>

                    <div className="numeroCartao">
                        <label htmlFor="card-number">Número do Cartão</label>
                        <input type="text" id="card-number" name="card-number" {...register('card-number')} />
                    </div>
                    
                    <div className="nomeTitular">
                        <label htmlFor="card-holder-name">Nome do Titular</label>
                        <input type="text" id="card-holder-name" name="card-holder-name" {...register('card-holder-name')} />
                    </div>

                    <div className="dataValidade">
                        <label htmlFor="expire-date">Data de Validade</label>
                        <input type="text" id="expire-date" name="expire-date" {...register('expire-date')} />
                    </div>

                    <div className="cvv">
                        <label htmlFor="cvv">CVV</label>
                        <input type="text" id="cvv" {...register('cvv')} />
                    </div>

                    <button type="submit">Finalizar Compra</button>

                </form>
        </FinalizarCompraContainer>
    );
}

export default FinalizarCompra;