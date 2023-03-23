import styled from "styled-components";
import { styles } from "../../../globalStyle";

const S = {
    container: styled.div`
        ${styles.card};
        margin: 0;
        max-width: 200px;
        overflow: hidden;
    `,
    header: styled.div`
        align-self: baseline;
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 500;
        
    `,
    body: styled.div`
        font-size: 12px;
    `,
    
};

export default S;
