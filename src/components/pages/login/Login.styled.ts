import styled from "styled-components";

const S = {
    container: styled.form`
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
    header: styled.h1`
        margin: 0;
        color: ${({ theme }) => theme.colors.grey[9]};
    `,
};

export default S;