import React from "react";
import { IProps } from "../../pages/auth/AuthPresenter";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "../../pages/auth/AuthContainer";

const LoginForm = (props: IProps) => {
    return (
        <Wrapper 
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"100%"} 
            height={"100vh"} 
            backgroundColor={"#ffffff"}
        >
            <img 
                src={"/img/facebook.png"} 
                    style={{ 
                        position: "absolute", 
                        top: 0,
                        width: "320px",
                        height:"110px",
                        borderRadius: "3px 3px 0 0"
                    }}
                />
                
            <Box
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"400px"}
                height={"500px"}
                backgroundColor={"#f2f2f2"}
                border={""}
                borderRadius={"10px"}
                flexDirection={"column"}
            >
                
                
                <Input 
                    placeholder={"학번"} 
                    padding={"15px"} 
                    width={"250px"}
                    value={props.userData.studentId} 
                    onChange={(e) => {
                        props.setUserData({ ...props.userData, studentId: e.target.value })
                    }}
                />
                <Input 
                    placeholder={"비밀번호"} 
                    type={"password"} 
                    width={"250px"}                    
                    margin={"20px"} 
                    padding={"15px"} 
                    value={props.userData.password}
                    onChange={(e) => {
                        props.setUserData({ ...props.userData, password: e.target.value })
                    }}
                />

                <Button 
                    padding={"10px"}
                    borderRadius={"5px"}
                    width={"250px"}
                    backgroundColor={"#1977f3"}
                    border="1px solid #eeeeee"
                    color={"#ffffff"}
                    margin={"15px"} 
                    onClick={(e)=>props.onSubmit(e, LOGIN_ACTION)}
                >   로그인
                </Button>

                <Button 
                    padding={"10px"}
                    borderRadius={"5px"}
                    width={"250px"}
                    backgroundColor={"#1977f3"}
                    border="1px solid #eeeeee"
                    color={"#ffffff"}
                    onClick={()=>props.setForm(JOIN_ACTION)}
                >   회원가입
                </Button>
                </Box>
                </Wrapper>
    );
};

export default LoginForm;