import { gql } from "@apollo/client";

export const LOGIN = gql`
    mutation login($studentId: String!, $password: String!) {
        login(studentId: $studentId, password: $password)
    }
`;

export const LOCAL_LOGIN = gql`
    mutation logUserIn($token: string!) {
        logUserIn(token:$token) @client
    }
`;

export const JOIN = gql`
    mutation join(
        $studentId: String!
        $password: String!
        $lastName: String! 
        $firstName: String!
    ) {
        join(
            studentId: $studentId
            password: $password
            lastName: $lastName
            firstName: $firstName            
        ){
            id
        }
    }
`;
