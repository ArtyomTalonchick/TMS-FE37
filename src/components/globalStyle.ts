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
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    main {
        margin-top: 60px;
    }

`;
