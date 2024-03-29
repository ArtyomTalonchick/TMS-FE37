import { createGlobalStyle, css } from "styled-components";

export const styles = {
    card: css`
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 400px;
        border: 1px solid ${({ theme }) => theme.colors.grey[4]};
        border-radius: 8px;
        padding: 24px;
        margin: auto;
        margin-top: 100px;
    `,
    button: css`
        cursor: pointer;
        outline: none;
        border: none;
        padding: 0 24px;
        height: 50px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${({ theme }) => theme.colors.grey[0]};
        color: ${({ theme }) => theme.colors.grey[9]};

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[1]};
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.grey[2]};
        }
        &:focus {
            background-color: ${({ theme }) => theme.colors.grey[2]};
        }
    `
};

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        color: ${({ theme }) => theme.colors.grey[9]};
        background: ${({ theme }) => theme.colors.grey[0]};
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    main {
        margin-top: 60px;
    }

`;
