















import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const schema = z.object({
    'payment-method': z.string().nonempty("Método de pagamento é obrigatório")
        .refine(value => value !== "metodo", { message: "Por favor, escolha um método de pagamento válido" }),
    'card-number': z.string().nonempty("Número do cartão é obrigatório")
        .refine(value => value.replace(/\s/g, '').length === 16, { message: "Número do cartão incompleto" }),
    'card-holder-name': z.string().nonempty("Nome do titular é obrigatório"),
    'expire-date': z.string().nonempty("Data de validade é obrigatório")
        .regex(/^\d{2}\/\d{2}$/, "Data inválida")
        .refine(value => {
            const month = parseInt(value.split('/')[0], 10);
            return month >= 1 && month <= 12;
        }, { message: "Mês deve ser entre 01 e 12" }),
    'cvv': z.string().nonempty("CVV é obrigatório")
        .length(3, "CVV deve ter exatamente 3 dígitos")
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

        & .form-batata{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        & .error-alert {
            padding-left: 10px;
            color: red;
            opacity: 50%;
        }

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
            position: relative;
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
            position: relative;
            gap: 5px;

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
const Payment = () => {

    const [paymentMethod, setPaymentMethod] = useState("");

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
        <div className="payment">
            <p className="text-info-payment text-extra-small bold">Informações de Pagamento</p>

            <form onSubmit={handleSubmit(handlePaymentForm)} className="form-batata" >

                <div className="formaDePagamento">
                    <label className="text-tinny bold" htmlFor="payment-method">Forma de Pagamento</label>
                    <select id="payment-method" {...register('payment-method')} onChange={(e) => setPaymentMethod(e.target.value)} >
                        <option value="metodo" hidden defaultValue>Escolha o metodo</option>
                        <option value="boleto">Boleto</option>
                        <option value="pix">Pix</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="debito">Cartão de Débito</option>
                    </select>
                    {errors['payment-method'] && <p className="error-alert text-tinny bold" >{errors['payment-method'].message}</p>}
                </div>

                {paymentMethod === "pix" && (
                    <div className="pix-info">
                        <p>Escaneie o QR Code abaixo para realizar o pagamento via Pix:</p>
                        {/* Coloque aqui o código ou imagem para exibir o QR Code */}
                    </div>
                )}

                {paymentMethod === "boleto" && (
                    <div className="boleto-info">
                        <p>Um boleto será gerado para o pagamento. Use o código de barras abaixo:</p>
                        {/* Exibir o código de barras do boleto */}
                    </div>
                )}

                {(paymentMethod === "cartao" || paymentMethod === "debito") && (
                    <>
                        <div className="numeroCartao">
                            <label htmlFor="card-number" className="text-tinny bold">Número do Cartão</label>
                            <InputMask
                                mask="9999 9999 9999 9999"
                                maskChar={null}
                                {...register('card-number')}
                            >
                                {(inputProps) => <input type="text" id="card-number" {...inputProps} placeholder="Insira o número do cartão." />}
                            </InputMask>
                            {errors['card-number'] && <p className="error-alert text-tinny bold" >{errors['card-number'].message}</p>}
                        </div>

                        <div className="nomeTitular">
                            <label htmlFor="card-holder-name" className="text-tinny bold">Nome do Titular *</label>
                            <input type="text" id="card-holder-name" name="card-holder-name" {...register('card-holder-name')} placeholder="Insira o nome do dono do cartão." />
                            {errors['card-holder-name'] && <p className="error-alert text-tinny bold" >{errors['card-holder-name'].message}</p>}
                        </div>

                        <div className="dataValidade">
                            <label htmlFor="-card-expire-date" className="text-tinny bold">Data de Validade *</label>
                            <InputMask
                                mask="99/99"
                                maskChar={null}
                                {...register('card-expire-date')}
                            >
                                {(inputProps) => <input type="text" id="card-expire-date" {...inputProps} placeholder="Insira a data de vencimento." />}
                            </InputMask>
                            {errors['card-expire-date'] && <p className="error-alert text-tinny bold" >{errors['card-expire-date'].message}</p>}
                        </div>

                        <div className="cvv">
                            <label htmlFor="card-cvv" className="text-tinny bold">CVV *</label>
                            <InputMask
                                mask="999"
                                maskChar={null}
                                {...register('card-cvv')}
                            >
                                {(inputProps) => <input type="text" id="card-cvv" {...inputProps} placeholder="Insira o cvv do cartão." />}
                            </InputMask>
                            {errors['card-cvv'] && <p className="error-alert text-tinny bold" >{errors['card-cvv'].message}</p>}
                        </div>
                    </>
                )}

                <button type="submit">Finalizar Compra</button>
            </form>
        </div>
    )
}

const FinalizarCompra = () => {



    return (
        <FinalizarCompraContainer>
            <h2 className="finalize-purchase text-medium bold">Finalizar Compra</h2>

            <Payment />

        </FinalizarCompraContainer>
    );
}

export default FinalizarCompra;