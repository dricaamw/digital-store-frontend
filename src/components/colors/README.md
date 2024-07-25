**README.md do Arquivo "styles.css"**

Este arquivo `colors.css` contém variáveis CSS com nomes descritivos para facilitar a reutilização de cores e estilos em seu projeto.

**Instalação**

Este arquivo não precisa de instalação, pois é apenas um arquivo CSS com variáveis.

**Importação**

Em seu arquivo CSS, importe as variáveis desejadas:

```css
@import "./colors.css";
```

OBS.: Este pode variar dependendo de onde você se encontra na aplicação

**Uso**

Você pode usar as variáveis importadas em qualquer lugar do seu arquivo CSS. Veja alguns exemplos:

```css
/* Exemplo de estilo CSS */
.container {
    background-color: var(--primary);
    color: var(--white);
}

/* Exemplo de componente CSS */
.button {
    background-color: var(--secondary);
    color: var(--dark-gray);
}

/* Exemplo de animação CSS */
@keyframes fade-in {
    from { opacity: 0; }
    to { opacity: 1; }
}

.fade-in {
    animation: fade-in 1s ease-in-out;
}
```

**Variáveis Disponíveis**

**Escala de Cinza**

| Variável    | Cor          | Valor CSS    |
|--------------|--------------|--------------|
| --dark-gray  | Cinza Escuro | #1F1F1F      |
| --dark-gray-2 | Cinza Escuro 2 | #474747      |
| --dark-gray-3 | Cinza Escuro 3 | #666666      |
| --light-gray | Cinza Claro | #8F8F8F      |
| --light-gray-2 | Cinza Claro 2 | #CCCCCC      |
| --light-gray-3 | Cinza Claro 3 | #F5F5F5      |
| --white | Branco       | white        |

**Cores**

| Variável    | Cor          | Valor CSS    |
|--------------|--------------|--------------|
| --primary | Primária     | #C92071      |
| --secondary | Secundária   | #B5B6F2      |
| --tertiary | Terciária    | #991956      |
| --error | Erro         | #EE4266      |
| --success | Sucesso      | #52CA76      |
| --warning | Aviso        | #F6AA1C      |
| --primary-gradient | Gradiente Primário | linear-gradient(180deg, #C92071 0%, #EDABCA 100%) |
| --secondary-gradient | Gradiente Secundário | linear-gradient(180deg, #B5B6F2 0%, #E8D7F7 100%) |

Você pode adicionar mais variáveis ao arquivo `colors.css` conforme necessário para seu projeto.