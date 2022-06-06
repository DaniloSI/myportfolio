import { createGlobalStyle } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    backgroundCard: string;
    highlight: string;
    text: string;
    backgroundSkill: string;
    textSkill: string;
  }
}

const GlobalStyle = createGlobalStyle`
  html, body {
    background-color: ${({ theme }) => theme.background};
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }

  main {
    width: 1064px;
    height: 100vh;
    margin: 0px auto;
    display: flex;
    align-items: center;
    }

    @media screen and (max-width: 1064px) {
        main {
            width: 100%;
            height: fit-content;
            margin: 0px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

    .toggle-dark.react-toggle--checked .react-toggle-track {
        background-color: #4d4d4d !important;
    }

    .toggle_icon {
        align-items: center;
        display: flex;
        height: 10px;
        justify-content: center;
        width: 10px;
    }
`;

export default GlobalStyle;
