import { Container, createStyles, makeStyles, Theme, Paper } from "@material-ui/core"
import styled from "styled-components";


//styled-component는 클래스명 쓰지 않기 위해 사용
//접두사로 use -> 훅으로 칭함

export const useStyles = makeStyles((theme : Theme) => 
    createStyles({
        paper: {
            display: "flex",
            flexDirection: "column",
            width: 300,
            height: 400,
        },
        img_box: {
            borderBottom: "1px solid #eee",
            height: 250,
            width: "100%",
        },

        header: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 60,
            width: "100%",
            padding: 9,
            borderBottom: "1px solid #eee",
        },
        btn_box: {
            display: "flex",
            justifyContent: "space-between",
        },
        avatar: {
            width: 30,
            height: 30,
            borderRadius: "70%",
            border: "1px solid #000",
        },
    })
);

export const MuiContainer = styled(Container)`
    height: 100vh;
`;

export const MuiPaper = styled(Paper)``;
