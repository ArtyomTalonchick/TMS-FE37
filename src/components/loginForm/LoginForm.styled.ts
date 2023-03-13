import styled from "styled-components";

const S = {
    container: styled.form`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 24px;
        width: 400px;
        border: 1px solid #444;
        border-radius: 8px;
        padding: 24px;
    `,
    error: styled.div`
        color: ${({ theme }) => theme.colors.error};
    `
};

export default S;