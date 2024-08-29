**README.md do Componente "Radio.jsx"**

Este componente `Radio.jsx` é um wrapper para o componente `RadioButton` do `primereact/radiobutton` com algumas funcionalidades adicionais.

**Instalação**

Para usar este componente, primeiro instale as dependências necessárias:

```bash
npm install prop-types primereact
```

**Importação**

Em seu arquivo JavaScript, importe o componente `Radio`:

```javascript
import Radio from "./Radio";
```

**Uso**

Você pode usar o componente `Radio` passando as propriedades necessárias. Veja alguns exemplos:

```javascript
const RadioExample = () => {
    const handleRadioChange = (value) => {
        console.log("Radio value changed:", value);
    };

    return (
        <div>
            <Radio
                inputId="radio1"
                value="option1"
                checked={true}
                onClick={handleRadioChange}
            />
            <Radio
                inputId="radio2"
                value="option2"
                checked={false}
                onClick={handleRadioChange}
            />
        </div>
    );
};
```

**Propriedades**

| Propriedade    | Tipo     | Padrão   | Descrição                                                                                   |
|---------------|----------|--------------|-----------------------------------------------------------------------------------------------|
| checked       | bool     | -        | **Obrigatório.** Define se o radio está marcado ou não.                                    |
| inputId       | string   | -        | Define o ID do input do radio.                                                                 |
| onClick       | func     | -        | **Obrigatório.** Função chamada quando o valor do radio é alterado. Recebe o novo valor como argumento. |
| value         | string   | -        | Define o valor do radio.                                                                      |

**Estilos**

O componente `Radio` utiliza classes CSS para estilizar os radios. Você pode personalizar os estilos adicionando sua própria folha de estilos CSS chamada "Radio.css" e definindo as classes necessárias.