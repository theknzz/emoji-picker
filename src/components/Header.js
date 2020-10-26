import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: #64B6AC;
    margin-bottom: 40px;
    text-shadow: 1px 1px #5D737E;
    > p {
        color: black;
        font-size: 15px;
        text-shadow: none;
    }
    > p > img {
        height: 20px;
        width: 20px;
    }
    > h1 {
        margin-bottom: 20px;
    }
    @media (max-width: 768px) {
        font-size: 25px;
        > p > img {
            height: 10px;
            width: 10px;
        }
    }
`

const Header = () => {
    return (
        <>
            <Container>
                <h1>Emoji Picker 🍒</h1>
                <p>Based in <a  href={"https://github.com/BraydenTW/react-emoji-search"}>Github Repository</a></p>
            </Container>
        </>
    );
}

export default Header;