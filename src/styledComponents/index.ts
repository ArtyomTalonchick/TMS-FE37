import styled from "styled-components";

const C = {
    button: styled.button`
        cursor: pointer;
        outline: none;
        border: none;
        padding: 16px 24px;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.colors.grey[0]};

        &:hover {
            background-color: ${({ theme }) => theme.colors.grey[1]};
        }
        &:active {
            background-color: ${({ theme }) => theme.colors.grey[2]};
        }
        &:focus {
            background-color: ${({ theme }) => theme.colors.grey[2]};
        }
    `,
};

export default C;
