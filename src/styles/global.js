import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: sans-serif;
    }

    html, body {
        margin: 0;
        padding: 0;
        outline: none;
        min-height: 100vh;
        background: #6292e6;
    }

    .App {
        min-height: 100vh;
	    display: flex;
	    flex-direction: column;
	    align-items: center;
	    justify-content: center;
	    font-size: calc(10px + 2vmin);
	    text-align: center;
    }
`;

export default GlobalStyles;
