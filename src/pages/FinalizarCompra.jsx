















import PropTypes from "prop-types"
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import styled from "styled-components";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/buttons/Buttons.jsx"

const schema = z.object({
    paymentMethod: z.string().nonempty("Método de pagamento é obrigatório")
        .refine(value => value !== "metodo", { message: "Por favor, escolha um método de pagamento válido" }),
    cardNumber: z.string().nonempty("Número do cartão é obrigatório")
        .refine(value => value.replace(/\s/g, '').length === 16, { message: "Número do cartão incompleto" }),
    cardHolderName: z.string().nonempty("Nome do titular é obrigatório"),
    cardExpireDate: z.string().nonempty("Data de validade é obrigatório")
        .regex(/^\d{2}\/\d{2}$/, "Data inválida")
        .refine(value => {
            const month = parseInt(value.split('/')[0], 10);
            return month >= 1 && month <= 12;
        }, { message: "Mês deve ser entre 01 e 12" }),
    cardCvv: z.string().nonempty("CVV é obrigatório")
        .length(3, "CVV deve ter exatamente 3 dígitos")
});

const FinalizarCompraContainer = styled.div`
* {
    margin: 0;
    padding: 0;
}
    

    & .boxes {
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
    
            & .form-batata {
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
    
                & #paymentMethod {
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
    
        & .resumo {
            background-color: var(--white);
            margin-top: 30px;
            display: flex;
            flex-direction: column;
            padding: 30px;
            gap: 20px;
    
            & .divisoria {
                content: "";
                width: 100%;
                height: 1px;
                background-color: var(--light-gray-2);
            }
    
            & .resumoTexto {
                color: var(--dark-gray-2)
            }
    
            & .item {
                display: flex;
                flex-direction: row;
                gap: 20px;
    
                & .imagem {
                    position: relative;
                    background-color: #E2E3FF;
                    width: 71px;
                    height: 58px;
                    position: relative;
                    border-radius: 2.5px;
    
                    & .sapatao {
                        width: 65px;
                    }
                }
    
                & .nome {
                    color: var(--dark-gray);
                    height: 58px;
    
                    font-family: "Inter";
                    font-size: 14px;
                    font-weight: 700;
                    line-height: 20px;
                    letter-spacing: 0.75px;
    
                    display: flex;
                    align-items: center;
                }
            }
    
            & .valueInfo {
                display: flex;
                flex-direction: column;
                color: var(--dark-gray);
                gap: 20px;
    
                & .value {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
    
                    & .tit {
                        color: var(--light-gray);
                    }
                }
            }
    
            & .total {
                padding: 20px;
                background-color: #F6AA1C0d;
                border: 1px solid #F6AA1C26;
                border-radius: 4px;
                color: var(--dark-gray);
                display: flex;
                flex-direction: column;
                
                & .totalValue {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
    
                & > p {
                    color: var(--light-gray);
                    text-align: right;
                }
            }
    
            & .finalizarCompra {
                width: 100%;
                height: 50px;
            }
        }
    
    }
    & .valorFinal {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        padding: 30px;
        background-color: var(--white);

        & .total {

            & .totalValue {
                color: var(--dark-gray);
                display: flex;
                justify-content: space-between;

                & .quantia {
                    color: var(--error);
                }
            }

            & > p {
                color: var(--light-gray);
                text-align: right;
            }
        }

        & .finalizarCompra {
            width: 100%;
            height: 40px;
        }
    }
`;

const Payment = () => {
    const [paymentMethod, setPaymentMethod] = useState("");

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
        mode: "onChange"
    });

    const handlePaymentForm = (data) => {
        console.log(data);
    };

    return (
        <div className="payment">
            <p className="text-info-payment text-extra-small bold">Informações de Pagamento</p>

            <form onSubmit={handleSubmit(handlePaymentForm)} className="form-batata" >

                <div className="formaDePagamento">
                    <label className="text-tinny bold" htmlFor="paymentMethod">Forma de Pagamento</label>
                    <select id="paymentMethod" {...register('paymentMethod')} onChange={(e) => setPaymentMethod(e.target.value)} >
                        <option value="metodo" hidden defaultValue>Escolha o metodo</option>
                        <option value="boleto">Boleto</option>
                        <option value="pix">Pix</option>
                        <option value="cartao">Cartão de Crédito</option>
                        <option value="debito">Cartão de Débito</option>
                    </select>
                    {errors.paymentMethod && <p className="error-alert text-tinny bold" >{errors.paymentMethod.message}</p>}
                </div>

                {paymentMethod === "pix" && (
                    <div className="pix-info">
                        <p>Escaneie o QR Code abaixo para realizar o pagamento via Pix:</p>
                    </div>
                )}

                {paymentMethod === "boleto" && (
                    <div className="boleto-info">
                        <p>Um boleto será gerado para o pagamento. Use o código de barras abaixo:</p>
                    </div>
                )}

                {(paymentMethod === "cartao" || paymentMethod === "debito") && (
                    <>
                        <div className="numeroCartao">
                            <label htmlFor="cardNumber" className="text-tinny bold">Número do Cartão</label>
                            <InputMask
                                mask="9999 9999 9999 9999"
                                maskChar={null}
                                {...register('cardNumber')}
                            >
                                {(inputProps) => <input type="text" id="cardNumber" {...inputProps} placeholder="Insira o número do cartão." />}
                            </InputMask>
                            {errors.cardNumber && <p className="error-alert text-tinny bold" >{errors.cardNumber.message}</p>}
                        </div>

                        <div className="nomeTitular">
                            <label htmlFor="cardHolderName" className="text-tinny bold">Nome do Titular *</label>
                            <input type="text" id="cardHolderName" name="cardHolderName" {...register('cardHolderName')} placeholder="Insira o nome do dono do cartão." />
                            {errors.cardHolderName && <p className="error-alert text-tinny bold" >{errors.cardHolderName.message}</p>}
                        </div>

                        <div className="dataValidade">
                            <label htmlFor="cardExpireDate" className="text-tinny bold">Data de Validade *</label>
                            <InputMask
                                mask="99/99"
                                maskChar={null}
                                {...register('cardExpireDate')}
                            >
                                {(inputProps) => <input type="text" id="cardExpireDate" {...inputProps} placeholder="Insira a data de vencimento." />}
                            </InputMask>
                            {errors.cardExpireDate && <p className="error-alert text-tinny bold" >{errors.cardExpireDate.message}</p>}
                        </div>

                        <div className="cvv">
                            <label htmlFor="cardCvv" className="text-tinny bold">CVV *</label>
                            <InputMask
                                mask="999"
                                maskChar={null}
                                {...register('cardCvv')}
                            >
                                {(inputProps) => <input type="text" id="cardCvv" {...inputProps} placeholder="Insira o cvv do cartão." />}
                            </InputMask>
                            {errors.cardCvv && <p className="error-alert text-tinny bold" >{errors.cardCvv.message}</p>}
                        </div>
                    </>
                )}
            </form>
        </div>
    )
}

const Resumo = ({ data }) => {

    return (
        data ? (
            <div className="resumo">
                <p className="resumoTexto text-extra-small bold">RESUMO</p>

                <div className="divisoria"></div>

                <div className="item">
                    <div className="imagem">
                        <img className="sapatao" src={data.sapato_image} alt={data.sapato_name} />
                    </div>
                    <div className="nome">
                        <p>{data.sapato_name}</p>
                    </div>
                </div>

                <div className="divisoria"></div>

                <div className="valueInfo">
                    <div className="value text-extra-small">
                        <p className="tit">Subtotal:</p>
                        <p>R$ {data.sapato_value},00</p>
                    </div>
                    <div className="value text-extra-small">
                        <p className="tit">Frete:</p>
                        <p>R$ {data.sapato_value},00</p>
                    </div>
                    <div className="value text-extra-small">
                        <p className="tit">Desconto:</p>
                        <p>R$ {data.sapato_value},00</p>
                    </div>
                </div>

                <div className="total">
                    <div className="totalValue">
                        <p className="text-medium bold">Total</p>
                        <p className="text-medium bold">R$ {data.sapato_value},00</p>
                    </div>
                    <p className="text-extra-small mobile">ou 10x de R$ {data.sapato_value / 10},00 sem juros</p>
                </div>

                <Button buttonType="shop-button" label="Realizar Pagamento" className="finalizarCompra text-extra-small bold"></Button>
            </div>
        ) : (
            <p>Loading...</p>
        )
    )
}

Resumo.propTypes = {
    data: PropTypes.shape({
        sapato_image: PropTypes.any.isRequired,
        sapato_name: PropTypes.any.isRequired,
        sapato_value: PropTypes.number.isRequired
    })
}

const ValorFinal = ({ data }) => {

    return (
        data ? (
            <div className="valorFinal">
                <div className="total">
                    <div className="totalValue">
                        <p className="text-medium bold">Total</p>
                        <p className="text-medium bold quantia">R$ {data.sapato_value},00</p>
                    </div>
                    <p className="text-extra-small mobile">ou 10x de R$ {data.sapato_value / 10},00 sem juros</p>
                </div>
                <Button buttonType="shop-button" label="Realizar Pagamento" className="finalizarCompra text-extra-small bold" />
            </div>
        ) : (<p>Loading</p>)
    )
}

ValorFinal.propTypes = {
    data: PropTypes.shape({
        sapato_value: PropTypes.number
    })
}

const FinalizarCompra = () => {

    const [data, setData] = useState();

    useEffect(() => {
        const fecthData = async () => {

            const response = await axios.get("http://localhost:3000/sapatos");
            setData(response.data[0]);
            console.log(data);

        }

        fecthData();
    }, []);

    return (
        <FinalizarCompraContainer>
            <div className="boxes">
                <h2 className="finalize-purchase text-medium bold">Finalizar Compra</h2>

                <Payment />
                <Resumo data={data} />
            </div>

            <ValorFinal data={data} />
        </FinalizarCompraContainer>
    );
}

export default FinalizarCompra;