import styled from "styled-components";

export const StyledAboutCard = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .white {
        color: white;
    }

    .container {
        width: 50%;
        margin: auto;
        background-color: rgb(36, 61, 131);
        padding: 50px;
        border-radius: 25px;
        box-shadow: 5px 5px 15px 5px #000000;
    }

    .about,
    .contact {
        margin: 0px 20px;
    }

    .image-container {
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    img {
        margin-top: 25px;
        width: 150px;
        transition: 0.2s ease-in-out;
    }

    a:hover img {
        transform: scale(1.1);
    }

    .text {
        color: black;
        margin-left: 5px;
    }
`