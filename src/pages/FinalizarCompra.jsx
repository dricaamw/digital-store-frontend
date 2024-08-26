















import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    'payment-method': z.string().nonempty("Método de pagamento é obrigatório"),
    'card-number': z.string().nonempty("Número do cartão é obrigatório"),
    'card-holder-name': z.string().nonempty("Nome do titular é obrigatório"),
    'expire-date': z.string().nonempty("Data de validade é obrigatório")
        .regex(/^\d{2}\/\d{2}$/, "Data inválida")
        .refine(value => {
            const month = parseInt(value.split('/')[0], 10);
            return month >= 1 && month <= 12;
        }, { message: "Mês deve ser entre 01 e 12" }),
    'cvv': z.string().nonempty("CVV é obrigatório")
});

const FinalizarCompraContainer = styled.div`
* {
    margin: 0;
    padding: 0;
}

    
    color: var(--white);
    margin-inline: 30px;
    margin-top: 30px;

    & .finalize-purchase {
        color: var(--dark-gray);
        margin-bottom: 10.5px;
    }

    & .payment {
        padding: 30px;
        color: var(--dark-gray-2);
        position: relative;
        display: flex;
        flex-direction: column;
        background-color: var(--white);

        & .text-info-payment {
            width: 100%;
            display: flex;
            flex-direction: column;
            
            &:after {
                content: "";
                width: 100%;
                height: 1px;
                background-color: var(--light-gray-2);
                margin-block: 20px;
            }
        }

        & .formaDePagamento {
            display: flex;
            flex-direction: column;
            gap: 5px;

            & #payment-method {
                padding: 16px 12px;
                background-color: rgba(var(--dark-gray-2), 4%);
                border: 0;
                color: var(--dark-gray-3);
                outline: none;
            }
        }

        & div[class] {
            display: flex;
            flex-direction: column;
            gap: 5px;
            margin-bottom: 20px ;

            & input {
                padding: 16px 12px;
                background-color: rgba(var(--dark-gray-2), 4%);
                border: 0;
                color: var(--dark-gray-3);
                outline: none;

                &::placeholder {
                    color: var(--dark-gray-3);
                    opacity: 1;
                }
            }
        }
    }

`

const FinalizarCompra = () => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    })

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
            <h2 className="finalize-purchase text-medium bold">Finalizar Compra</h2>

            <div className="payment">
                <p className="text-info-payment text-extra-small bold">Informações de Pagamento</p>

                <form onSubmit={handleSubmit(handlePaymentForm)} autoComplete='false' >

                    <div className="formaDePagamento">
                        <label className="text-tinny bold" htmlFor="payment-method">Forma de Pagamento</label>
                        <select id="payment-method" {...register('payment-method')} >
                            <option value="metodo" hidden defaultValue>Escolha o metodo</option>
                            <option value="boleto">Boleto</option>
                            <option value="pix">Pix</option>
                            <option value="cartao">Cartão de Crédito</option>
                            <option value="debito">Cartão de Débito</option>
                        </select>
                        {errors['payment-method'] && <p>{errors['payment-method'].message}</p>}
                    </div>

                    <div className="numeroCartao">
                        <label htmlFor="card-number" className="text-tinny bold">Número do Cartão</label>
                        <InputMask
                            mask="9999 9999 9999 9999"
                            maskChar={null}
                            {...register('card-number')}
                        >
                            {(inputProps) => <input type="text" id="card-number" {...inputProps} />}
                        </InputMask>
                        {errors['card-number'] && <p>{errors['card-number'].message}</p>}
                    </div>

                    <div className="nomeTitular">
                        <label htmlFor="card-holder-name" className="text-tinny bold">Nome do Titular *</label>
                        <input type="text" id="card-holder-name" name="card-holder-name" {...register('card-holder-name')} />
                        {errors['card-holder-name'] && <p>{errors['card-holder-name'].message}</p>}
                    </div>

                    <div className="dataValidade">
                        <label htmlFor="expire-date" className="text-tinny bold">Data de Validade *</label>
                        <InputMask
                            mask="99/99"
                            maskChar={null}
                            {...register('expire-date')}
                        >
                            {(inputProps) => <input type="text" id="expire-date" {...inputProps} />}
                        </InputMask>
                        {errors['expire-date'] && <p>{errors['expire-date'].message}</p>}
                    </div>

                    <div className="cvv">
                        <label htmlFor="cvv" className="text-tinny bold">CVV *</label>
                        <input type="text" id="cvv" {...register('cvv')} />
                        {errors['cvv'] && <p>{errors['cvv'].message}</p>}
                    </div>

                    <button type="submit">Finalizar Compra</button>

                </form>
            </div>

        </FinalizarCompraContainer>
    );
}

export default FinalizarCompra;