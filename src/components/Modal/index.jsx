import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    width: 100vw;
    height: 100vh;

    background: rgba(0, 0, 0, 0.27);
    
    & > div:first-child {
        position: relative;
        top: 50%;
        left: 50%;

        transform: translate(-50%, -50%);
    }
`

export const Modal = styled.div`
    max-width: 544px;

    border-radius: 4px;
    background: ${({ theme }) => theme.colors.white};

    padding: 55px;
`