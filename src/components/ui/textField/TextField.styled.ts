import styled from "styled-components";

const S = {
    container: styled.fieldset`
        border-radius: 8px;
        padding: 0 24px;
        height: 50px;
        box-sizing: border-box;
        outline: none;
        width: 100%;

        &:hover {
            border-color: #999;
        }
    `,
    legend: styled.legend`
    
    `,
    input: styled.input`
        position: relative;
        top: -8px;
        outline: none;
        border: none;
        width: 100%;
        background-color: transparent;
        height: 40px;
        box-sizing: border-box;
    `,
};

export default S;