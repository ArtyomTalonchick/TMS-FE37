import styled from "styled-components";
import { styles } from "../../globalStyle";

const S = {
    container: styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    `,
    img: styled.img`
        height: 48px;
    `,
    label: styled.label`
        ${styles.button};    
    `,

};

export default S;
