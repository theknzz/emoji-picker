import React from 'react'
import styled from "@emotion/styled";

const Container = styled.div`
    display: flex;
    justify-content: center;
    color: #64B6AC;
    text-shadow: 1px 1px #5D737E;
`

const Header = () => {
    return (
        <Container>
            <h2>Emoji Picker 🍒</h2>
        </Container>
    );
}

export default Header;