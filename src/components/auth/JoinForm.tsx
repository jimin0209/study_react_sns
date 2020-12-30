import React from "react";
import { IProps } from "../../pages/auth/AuthPresenter";
import { Box, Button, Input, Wrapper } from "../../styles/styles";
import { JOIN_ACTION, LOGIN_ACTION } from "../../pages/auth/AuthContainer";

const JoinForm = (props: IProps) => {
    return (
        <Wrapper 
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"} 
                height={"100vh"} 
                backgroundColor={"#ffffff"}
            > 
                <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                    width={"500px"}
                    height={"700px"}
                    backgroundColor={"#f2f2f2"}
                    border={""}
                    borderRadius={"10px"}
                    flexDirection={"column"}
                >
                    <Input 
                        placeholder={"학번"} 
                        padding={"15px"} 
                        width={"250px"}
                        value={props.joinData.studentId} 
                        onChange={(e) => {
                            props.setJoinData({ ...props.joinData, studentId: e.target.value })
                        }}
                    />
                    <Input 
                        placeholder={"비밀번호"} 
                        type={"password"} 
                        width={"250px"}                    
                        margin={"20px"} 
                        padding={"15px"} 
                        value={props.joinData.password}
                        onChange={(e) => {
                            props.setJoinData({ ...props.joinData, password: e.target.value })
                        }}
                    />
                    <Input 
                        placeholder={"성"} 
                        padding={"15px"} 
                        width={"250px"}
                        value={props.joinData.lastName} 
                        onChange={(e) => {
                            props.setJoinData({ ...props.joinData, lastName: e.target.value })
                        }}
                    />
                    <Input 
                        placeholder={"이름"} 
                        width={"250px"}                    
                        margin={"20px"} 
                        padding={"15px"} 
                        value={props.joinData.firstName}
                        onChange={(e) => {
                            props.setJoinData({ ...props.joinData, firstName: e.target.value })
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
                        onClick={(e)=>props.onSubmit(e, JOIN_ACTION)}
                    >   회원가입
                    </Button>

                    <Button 
                        padding={"10px"}
                        borderRadius={"5px"}
                        width={"250px"}
                        backgroundColor={"#1977f3"}
                        border="1px solid #eeeeee"
                        color={"#ffffff"}
                        onClick={()=>props.setForm(LOGIN_ACTION)}
                    >   로그인
                    </Button>
                </Box>
        </Wrapper>
    );
};

export default JoinForm;