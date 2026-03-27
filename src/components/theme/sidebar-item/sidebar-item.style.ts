import styled from 'styled-components';

export const Container = styled.div`
    margin: 30px 0;
    cursor: pointer;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #FFF;
    }
`;

export const Info = styled.div`
    flex: 1;
    margin-right: 20px;
`;

export const Title = styled.div`
    text-align: right;
    font-weight: bold;
    margin-bottom: 5px;
    font-size: 15px;
    color: #FFF;
`;

export const Description = styled.div`
    text-align: right;
    font-size: 12px;
    color: #B8B8D4;
`;

export const IconArea = styled.div<{ $selected: boolean }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${props => props.$selected ? '#25CD89' : '#494A7C'};
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.img`
    width: 24px;
`;

export const Point = styled.div<{ $selected: boolean }>`
    width: 12px;
    height: 12px;
    border: 2px solid #494A7C;
    border-radius: 50%;
    margin-left: 30px;
    margin-right: -6px;
    background-color: ${props => props.$selected ? '#25CD89' : 'transparent'};
`;