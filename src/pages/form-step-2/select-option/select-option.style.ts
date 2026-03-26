import styled from 'styled-components';

export const Container = styled.div<{ $selected: boolean }>`
    display: flex;
    border: 2px solid ${(props): string => props.$selected ? '#25CD89' : '#16195C'};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 15px;
    align-items: center;
    cursor: pointer;

    &:hover {
        border-color: #496459;
    }

`;

export const Icon = styled.span`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #191A59;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
`;

export const Info = styled.div`
    flex: 1;
    margin-left: 20px;
`;

export const Title = styled.h2`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 7px;
`;

export const Description = styled.p`
    font-size: 14px;
    color: #B8B8D4;
`;