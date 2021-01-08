import React from "react";
import CardContainer from "../../components/test/Card/CardContainer";
import { img } from "../../ImgData";
import { MuiContainer } from "./styles";

const TestPresenter = () => {
    return (
        <MuiContainer>
            {img.map((e) => {
                return <CardContainer />;
            })}
        </MuiContainer>
    );
};

export default TestPresenter;