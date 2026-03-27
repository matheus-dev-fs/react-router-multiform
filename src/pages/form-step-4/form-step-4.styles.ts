import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #25CD89;
    margin-bottom: 1rem;
    text-shadow: 0 2px 16px #16195c55;
    letter-spacing: 1px;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #FFF;
    text-align: center;
    max-width: 500px;
`;

export const MessageArea = styled.div`
    background-color: #16195C;
    border-radius: 20px;
    box-shadow: 0 4px 32px #16195c55;
    padding: 2.5rem 1rem;
    margin-top: 2rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`;

export const Message = styled.p`
    font-size: 1rem;
    color: #FFF;
    text-align: justify;
    line-height: 1.6;
    strong {
        color: #25CD89;
    }
`;

export const Highlight = styled.span`
    color: #25CD89;
    font-weight: bold;
`;

export const Email = styled.span`
    color: #FFD700;
    font-weight: bold;
    word-break: break-all;
`;

export const Github = styled.span`
    color: #61dafb;
    font-weight: bold;
    word-break: break-all;
`;