import styled from "styled-components";

export const StyledCard = styled.div`
    margin: 20px;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 0px 15px 0px #000000;

    &:hover {
        transform: scale(1.05);
    }

    .card {
        height: 400px;
        width: 300px;
    }

    .card-text {
        font-size: 0.8rem;
    }

    .card-title {
        border-bottom: 1px solid #000;
        text-align: center;
        font-weight: bold;
    }

    .card-text {
        height: 120px;
    }

    .info-box {
        display: flex;
    }

    .info-box p {
        color: #a1a1a1;
        font-size: 0.75rem;
        margin: 0;
    }

    .btn {
        height: 35px;
        margin-right: 20px;
        background-color: rgb(36, 61, 131);
        outline: 0;
        border: 0;
        transition: 0.2s ease-in-out;
    }

    .btn:focus,
    .btn:active {
        box-shadow: none;
        outline: 0;
    }

    .btn:active {
        transform: scale(0.95);
        color: black;
    }

    .btn:hover {
        background-color: rgb(101, 146, 207);
    }
`