import styled from 'styled-components'

export const Container = styled.div`
    .back-button {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }

    .back-button:hover {
        color: #FFF;
    }
`;

export const Step = styled.p`
    font-size: 13px;
    color: #B8B8D4;
`;

export const Title = styled.h1`
    font-size: 26px;
    margin: 15px 0;
`;

export const Description = styled.p``;

export const Hr = styled.hr`
    height: 1px;
    border: none;
    background-color: #16195C;
    margin: 30px 0;
`;

export const Label = styled.label`
    display: block;
    margin-top: 15px;
    font-size: 13px;
`;

export const Input = styled.input`
    display: block;
    margin-top: 7px;
    width: 100%;
    padding: 20px 10px;
    border: 2px solid #25CD89;
    border-radius: 10px;
    color: #FFF;
    outline: none;
    font-size: 15px;
    background-color: transparent;
`;

export const Warning = styled.p`
    font-size: 13px;
    color: #FF0000;
    margin-top: 7px;
`;

export const Button = styled.button`
    background-color: #25CD89;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 20px 40px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    margin-top: 30px;
`;
