import styled from "styled-components";


const S = {
    container: styled.fieldset`
        width: 100%;
        border-radius: 8px;
        padding: 0 24;
        height: 50px;
        box-sizing: border-box;
        border-color: ${({ theme }) => theme.colors.grey[9]};
        outline: none !important;
        
        &:hover {
            border-color: ${({ theme }) => theme.colors.grey[5]};
        }

        &:active {
            border-color: ${({ theme }) => theme.colors.grey[2]};
        }
    `,
    legend: styled.legend`
        color: ${({ theme }) => theme.colors.grey[9]};
    `,
    input: styled.input`
        width: 100%;
        height: 40px;
        position: relative;
        box-sizing: border-box;
        top: -16px;
        background-color: transparent;
        outline: none;
        border: none;
    `,
};

export default S;