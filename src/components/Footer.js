import { useNavigate, Link } from "react-router-dom"
import styled from "styled-components"
import { lightBlue, white, highLight } from "../constants/colors"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
const percentage = 66;

export default function Footer() {
    return(
        <StyledFooter>
           <StyledHabitsLink><Link to="/habitos"><h1>Habitos</h1></Link>  </StyledHabitsLink>
           <StyledHistoryLink><Link to="/historico"><h1>Histórico</h1></Link>  </StyledHistoryLink>
           <CircularProgressbar value={percentage} styles={buildStyles({
            position: 'absolute',
            width: '91px',
            height: '91px',
            left: '142px',
            top: '566px',
           })}>
            <StyledTodayLink>
            <Link to="/hoje"><h1>Hoje</h1></Link>   
            </StyledTodayLink>
           </CircularProgressbar>
        </StyledFooter>
    )
}

const StyledFooter = styled.div`
position: absolute;
width: 100%;
height: 70px;
left: 0px;
top: 597px;

background: ${highLight};
z-index: 2;
`

const StyledHabitsLink = styled.h1`
position: absolute;
width: 68px;
height: 22px;
left: 36px;
top: 619px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: ${lightBlue};
z-index: 3;
`

const StyledHistoryLink = styled.h1`
position: absolute;
width: 79px;
height: 22px;
left: 265px;
top: 619px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: ${lightBlue};
z-index: 3;
`

const StyledProgressDiv = styled.div`
position: absolute;
left: 42.13%;
right: 39.47%;
top: 85.76%;
bottom: 2.4%;

color: ${white};
z-index: 3;
`

const StyledProgressDivBar = styled.div`
position: absolute;
width: 91px;
height: 91px;
left: 142px;
top: 566px;

color: ${lightBlue};
z-index: 3;
`

const StyledTodayLink = styled.h1`
position: absolute;
width: 40px;
height: 22px;
left: 167px;
top: 597px;

font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

color: ${white};
z-index: 3;
`


