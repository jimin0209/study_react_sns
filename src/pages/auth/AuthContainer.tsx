import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";
import { LOGIN, LOCAL_LOGIN, JOIN } from "../../graphql/auth";
import { useSnackbar } from "notistack";

//state 변경 -> state 대입이 되는게 아니라 교체가 됨(기존에 있던 값은 날라가고 새로운 값이 들어옴)
    //setUserData({pssword:1})
    // ...userData => 기존에 있던 userData값을 복사한다
    //ex) studentId: 1234 password: 5678
    // 얕은 복사
    // setUserData({...userData = studentId: 1234 password: 5678})

   
export const LOGIN_ACTION = "LOGIN_ACTION";
export const JOIN_ACTION = "JOIN_ACTION";
export const ACCESS_TOKEN = "ACCESS_TOKEN";

const AuthContainer = () => {
    const { enqueueSnackbar } = useSnackbar();
    const [form, setForm] = useState(LOGIN_ACTION);

    const [userData, setUserData] = useState({
        studentId: "",
        password: "",
    }); //셋유저데이터는 리액트 함순데 유저데이터를 조작하는 것

    const [joinData, setJoinData] = useState({
        studentId: "",
        password: "",
        firstName: "",
        lastName: ""
    });

    const [loginMutation] = useMutation(LOGIN);
    const [localLoginMutation] = useMutation(LOCAL_LOGIN);

    const [joinMutation] = useMutation(JOIN);

    const onSubmit = async (e: any, action: string) => {
        e.preventDefault(); //새로고침 방지

        //서버하고 클라이언트하고 통신을 하면 async await

        switch (action) {
            case LOGIN_ACTION: {
                try {
                    const {
                        data: { login : token },
                    } = await loginMutation({ variables: {
                        studentId: userData.studentId,
                        password: userData.password,
                    },
                });

                if (token) {
                    localStorage.setItem(ACCESS_TOKEN, token);
                    await localLoginMutation({
                        variables: {
                            token: token,
                        },
                    });
                    enqueueSnackbar("안녕하세요.", { variant: "success" });
                } else {
                    localStorage.removeItem(ACCESS_TOKEN);
                    enqueueSnackbar("다시 로그인 해주세요.", { variant: "error" });
                  }
                } catch(e) {
                    localStorage.removeItem(ACCESS_TOKEN);
                    enqueueSnackbar("다시 로그인 해주세요.", { variant: "error" });
                }
                break;
            }
            case JOIN_ACTION: {
                try {
                    await joinMutation({ variables: {
                        studentId: joinData.studentId,
                        password: joinData.password,
                        lastName: joinData.lastName,
                        firstName: joinData.firstName,
                        },
                    });
                    console.log(joinData);
                } catch(e) {
                    console.log(e);
                }
                break;
            }
        }
    };

    return (
        <AuthPresenter  
            userData={userData} 
            setUserData={setUserData}
            onSubmit={onSubmit}
            form={form}
            setForm={setForm}
            joinData={joinData}
            setJoinData={setJoinData}
        />
    );
};

export default AuthContainer;

//컨테이너에다가는 앞으로 로직같은거 짤거
//프레젠터에는 뷰 보이는 화면 html
//index