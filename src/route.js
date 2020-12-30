import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Auth, Feed } from "./pages";
import { gql, useQuery } from "@apollo/client";

const LoginRoute = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path="/" component={Feed} />
            </Switch>
        </BrowserRouter>
    );
};

const LogoutRoute = () => {
    return (
        <BrowserRouter>
            <Switch> 
                <Route exact path="/" component={Auth} />
            </Switch>
        </BrowserRouter>
    );
};

const Routes = () => {
    const IS_LOGIN = gql`
  {
    isLogin @client #@client=> cache에 있는 데이터를 뽑아오는 태그
  }
`;

  const {
      data: { isLogin }, 
  } = useQuery(IS_LOGIN);

    return isLogin ? <LoginRoute/> : <LogoutRoute/>
    
}; //라우트에 여러 페이지를 만들어서 -> App에 임포트시킨다 -> index에서 가상돔에 넣어준다

export default Routes;
