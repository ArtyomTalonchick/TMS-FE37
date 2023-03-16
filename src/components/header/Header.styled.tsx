import { NavLink } from "react-router-dom";
import styled from "styled-components";

const S = {
    container: styled.header `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: ${({ theme }) => theme.constants.headerHeight};
        background-color: ${({ theme }) => theme.colors.grey[4]};
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-right: 40px;
    `,
    linksList: styled.ul`
        list-style: none;
        display: flex;
        gap: 24px
    `,
    link: styled(NavLink)`
        cursor: pointer;
        color: #fff;
    `
};

export default S;