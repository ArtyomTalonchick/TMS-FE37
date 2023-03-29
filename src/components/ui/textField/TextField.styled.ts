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
    hiddenLabel: styled.div`
        width: 0;
        height: 0;
        opacity: 0;
    `,
    legend: styled.legend`

    `,
    input: styled.input`
        width: 100%;
        height: 30px;
        position: relative;
        box-sizing: border-box;
        top: -11px;
        background-color: transparent;
        outline: none;
        border: none;
    `,
    error: styled.div`
        color: ${({ theme }) => theme.colors.error};
        font-size: 12px;
        position: relative;
        top: -8px;
    `,
};

export default S;