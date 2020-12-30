import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle` //물결표시 shift 안누르고 백틱?이라함
    ${reset} //기본적으로 브라우저에서 자동으로 입히는 스타일
    
    *{
        box-sizing:border-box;
    }
`;