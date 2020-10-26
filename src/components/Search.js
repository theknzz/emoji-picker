import React from 'react'
import styled from "@emotion/styled";


const Container = styled.div`
    display: flex;
    justify-content: center;
    > input {
        padding: 20px 20px;
        width: 35%;
        font-size: 18px;
        border-radius: 10px;
        color: grey;
        border: none;
        -webkit-box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
        -moz-box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
        box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
    }
    > input: focus {
        outline: none;
        border: 2px solid #64B6AC;
    }
    @media (max-width: 768px) {
        > input {
            width: 80%;
        }
    }
`

const Search = ({ onChange }) => {
    const handleChange = (e) => {
        // when the input value is changed update the results in real time
        onChange(e.target.value);
    }

    return (
        <Container>
            <input placeholder={'Search for keyword...'} onChange={handleChange}/>
        </Container>
    );
}

export default Search;