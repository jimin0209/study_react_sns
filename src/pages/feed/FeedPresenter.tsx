import React, { Fragment, MutableRefObject } from "react";
import styled from "styled-components";
import { img } from "../../ImgData";


const Wrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding: 25px 100px;
    overflow-y: scroll;
`;

const GridBox = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`;

const ImgBox = styled.img`
    width: 100%;
    border-radius: 10px;
`;

const Overlay = styled.div`
    position: absolute;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%
`;

interface IProps {
    scrollEl: MutableRefObject<any>;
    handleScroll: () => void;
    count: number;
    loading: boolean;
}

const FeedPresenter = (props: IProps) => {
    return (
        <Fragment>
            {props.loading ? <Overlay /> : null}
            <Wrapper 
                id="wrapper"
                ref={props.scrollEl}
            >
                <GridBox>
                {/* map 함수 => for이랑 같은 반복문 배열의 length만큼 반복해주는 함수 */}
                {img.map((element,index) => {
                    if(index < props.count) {
                        return <ImgBox src={element.src} alt="" />;
                    }
                })}
                </GridBox>
            </Wrapper>
        </Fragment>
    );
};



export default FeedPresenter;