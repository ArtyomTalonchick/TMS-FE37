import React from "react";
import S from "./Loader.styled";


const Loader: React.FC = () => (
    <>
        <S.backdrop />
        <S.loaderContainer role="progressbar">
            <S.loader />
        </S.loaderContainer>
    </>
);

export default Loader;
