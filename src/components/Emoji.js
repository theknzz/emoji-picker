import React, { useEffect, useState} from 'react'
import styled from "@emotion/styled";
import Clipboard from "clipboard";


const Card = styled.div`
    display: flex;
    cursor: pointer;
    border-radius: 10px;
    flex-direction: column;
    margin: 10px;
    width: 120px;
    height: 120px;
    -webkit-box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
    -moz-box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
    box-shadow: 10px 10px 28px -13px rgba(0,0,0,1);
    background-color: white;
    border: 3px solid white;
    position: relative;
    :hover {
        border: 3px solid #64B6AC;
        transition: border 0.2s ease;
    }
`

const EmojiWrapper = styled.div`
    font-size: 45px;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Label = styled.div`
    position: absolute;
    font-size: 11px;
    bottom: 0;
    background-color: #64B6AC;
    padding: 5px;
    border-radius: 5px;
    margin: 5px;
    color: #DAFFEF;
    opacity: ${props => props.visible? '1' : '0'};
    flex-grow = 0;
    transition: opacity 0.3s ease;
    font-weight: bold;
`

const Emoji = ({ emoji }) => {

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const clipboard = new Clipboard(".emoji");
        return () => {
            clipboard.destroy();
        };
    })

    const handleClick = (e) => {
        setVisible(true);
        setTimeout( () => setVisible(false), 900);
    }

    return (
        <Card onClick={handleClick} className="emoji" data-clipboard-text={emoji} >
            <EmojiWrapper>{emoji}</EmojiWrapper>
            <Label visible={visible}>Copied! </Label>
        </Card>
    );
}

export default Emoji;