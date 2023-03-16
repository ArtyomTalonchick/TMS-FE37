import styled from "styled-components";
import { styles } from "../../globalStyle";

const S = {
    container: styled.form`
        ${styles.card};
    `,
    header: styled.h1`
        margin: 0;
    `,
    error: styled.div`
        color: ${({ theme }) => theme.colors.error};
    `,
};

export default S;