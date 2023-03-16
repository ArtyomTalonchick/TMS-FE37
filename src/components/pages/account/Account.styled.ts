import styled from "styled-components";
import { styles } from "../../globalStyle";

const S = {
    container: styled.div`
        ${styles.card};
    `,
    line: styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: 1px solid ${({ theme }) => theme.colors.grey[1]};
        padding-bottom: 8px;
    `,
    label: styled.div`
        color: ${({ theme }) => theme.colors.grey[4]};
    `,
    value: styled.div`
        font-weight: bold;
    `,
};

export default S;
