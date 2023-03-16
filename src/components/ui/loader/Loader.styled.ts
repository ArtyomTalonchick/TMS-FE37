import styled, { keyframes } from "styled-components";

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

const S = {
    backdrop: styled.div`
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${({ theme }) => theme.colors.grey[1]};
        opacity: .5;
    `,
    loaderContainer: styled.div`
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    `,
    loader: styled.div`
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid ${({theme}) => theme.colors.grey[2]};
        border-top-color: ${({theme}) => theme.colors.grey[9]};
        animation: ${spin} 1s linear infinite;
    `,
};

export default S;
