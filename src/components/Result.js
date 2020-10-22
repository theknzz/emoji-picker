import React, { useEffect } from 'react'
import styled from "@emotion/styled";
import { v4 as uuidv4 } from 'uuid';
import Emoji from './Emoji'

const Container = styled.div`
    margin-top: 100px;
    display: flex;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50%;
    flex-wrap: wrap;
`


const Result = ({ list }) => {


    const emojis = list && list.slice(0, 100).map(emoji => {
        if (emoji) {
            const id = uuidv4();
            return (
                <Emoji emoji={emoji.symbol} key={id} />
            );
        }
        return null;
    })


    return (
        <Container>
            <Wrapper>
                {emojis}
            </Wrapper>
        </Container>
    );
}

export default Result;