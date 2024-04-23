import styled from 'styled-components';

export const Title = styled.h1`
    color: #bf4f74;
`;

export const TableColors = styled.article<{ $bgColor: string }>`
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background-color: ${props => props.$bgColor};
    color: ${props => (props.$bgColor === '#000000' ? '#FFFFFF' : '#000000')};
    margin: 2px;
`;
