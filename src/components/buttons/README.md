## **README.md do Componente "Button.jsx"**

Este componente `Button` é um wrapper para o botão do `primereact/button` com algumas funcionalidades adicionais e estilos personalizados. Ele foi criado para facilitar a reutilização de botões em diferentes partes de um aplicativo.

**Instalação**

Para usar este componente, primeiro instale as dependências necessárias:

```bash
npm install primereact prop-types
```

**Importação**

Em seu arquivo JavaScript, importe o componente `Button` e o `PropTypes`:

```javascript
import Button from "./Button";
import PropTypes from "prop-types";
```

**Uso**

Você pode usar o componente `Button` passando as propriedades necessárias. Veja abaixo alguns exemplos:

```javascript
// Botão comum
<Button label="Clique Aqui" />

// Botão desabilitado
<Button label="Clique Aqui" disabled />

// Botão com ícone
<Button buttonType="icon-button" label="Adicionar" />

// Botão com evento onClick
<Button label="Clique Aqui" onClick={() => console.log("Botão clicado")} />

// Botão com children
<Button>
    <span>Botão com children</span>
</Button>
```

**Propriedades**

| Propriedade    | Tipo     | Padrão   | Descrição                                                                                   |
|---------------|----------|----------|-----------------------------------------------------------------------------------------------|
| buttonType    | string   | -        | Define o tipo de botão. Pode ser "icon-button" para um botão com ícone.                      |
| children      | node     | -        | Permite que você passe elementos filhos para o botão.                                       |
| disabled      | bool     | false    | Desabilita o botão.                                                                        |
| label         | string   | -        | Define o texto do botão.                                                                    |
| onClick       | func     | -        | Função chamada quando o botão é clicado. Recebe um evento como argumento.                    |

**Estilos**

O componente `Button` utiliza classes CSS para estilizar os botões. Você pode personalizar os estilos adicionando sua própria folha de estilos CSS chamada "Buttons.css" e definindo as classes necessárias.