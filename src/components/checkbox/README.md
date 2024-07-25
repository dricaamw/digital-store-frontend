## **README.md do Componente "Checkbox.jsx"**

Este componente `Checkbox` é um wrapper para o input de checkbox com um estilo personalizado e uma função de retorno de chamada. Ele foi criado para facilitar a reutilização de caixas de seleção em diferentes partes de um aplicativo.

**Instalação**

Para usar este componente, primeiro instale as dependências necessárias:

```bash
npm install prop-types
```

**Importação**

Em seu arquivo JavaScript, importe o componente `Checkbox` e o `PropTypes`:

```javascript
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";
```

**Uso**

Você pode usar o componente `Checkbox` passando as propriedades necessárias. Veja abaixo alguns exemplos:

```javascript
// Caixa de seleção inicialmente marcada
<Checkbox checked={true} onClick={(checked) => console.log(checked)} />

// Caixa de seleção inicialmente desmarcada
<Checkbox checked={false} onClick={(checked) => console.log(checked)} />

// Caixa de seleção com evento onClick
<Checkbox onClick={(checked) => console.log(checked)} />
```

**Propriedades**

| Propriedade    | Tipo     | Padrão   | Descrição                                                                                   |
|---------------|----------|----------|-----------------------------------------------------------------------------------------------|
| checked       | bool     | false    | Define se a caixa de seleção está marcada ou desmarcada.                                    |
| onClick       | func     | -        | Função chamada quando a caixa de seleção é clicada. Recebe um booleano como argumento indicando o estado atual da caixa de seleção. |

**Estilos**

O componente `Checkbox` utiliza classes CSS para estilizar as caixas de seleção. Você pode personalizar os estilos adicionando sua própria folha de estilos CSS chamada "Checkbox.css" e definindo as classes necessárias.