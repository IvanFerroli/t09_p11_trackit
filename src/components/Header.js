import styled from "styled-components"
import { darkBlue, white } from "../constants/colors"
import sad from "../assets/img/sad.png"

export default function Header(props) {
    return(
        <StyledHeader>
            <StyledTitle>TrackIt</StyledTitle>
            <StyledAvatar src={sad} alt="avatar"/>
        </StyledHeader>
    )
}


const StyledHeader = styled.div`
position: absolute;
width: 100%;
height: 70px;
left: 0px;
top: 0px;

background: ${darkBlue};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
z-index: 2;
`

const StyledTitle = styled.h1`
position: absolute;
width: 97px;
height: 49px;
left: 18px;
top: 10px;

font-family: 'Playball', cursive;
font-weight: 400;
font-size: 38.982px;
line-height: 49px;
color: ${white};
z-index: 3;
`

const StyledAvatar = styled.img`
position: absolute;
width: 51px;
height: 51px;
left: 82%;
top: 9px;

background: url(image.png);
border-radius: 98.5px;
z-index: 3;
`
