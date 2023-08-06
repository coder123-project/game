import styled from "styled-components";

export const StyledGamesList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100vw;

    h1 {
        color: white;
        background-color: rgb(36, 61, 131);
        padding: 15px 40px;
        border-radius: 40px;
    }

    #card-box {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        flex-wrap: wrap;
    }
`