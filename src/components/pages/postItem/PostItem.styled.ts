import styled from "styled-components";
import { styles } from "../../globalStyle";

const S = {
    container: styled.div`
        ${styles.card};
        width: 600px;
    `,
    img: styled.img`
        max-width: 100%;
    `,
};

export default S;
