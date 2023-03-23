import styled from "styled-components";

const S = {
    container: styled.div`
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    `,
    postsList: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: stretch;
        flex-wrap: wrap;
        gap: 24px;
        padding: 24px;
    `,
};

export default S;
