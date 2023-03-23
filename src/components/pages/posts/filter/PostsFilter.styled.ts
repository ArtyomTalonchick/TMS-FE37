import styled from "styled-components";

const S = {
    container: styled.form`
        padding: 24px;
        display: flex;
        align-items: center;
        gap: 16px;
    `,
    divider: styled.div`
        width: 2px;
        height: 50px;
        background-color: ${({ theme }) => theme.colors.grey[9]};
    `,
    pageText: styled.div`
        font-weight: 500;
    `,
};

export default S;
