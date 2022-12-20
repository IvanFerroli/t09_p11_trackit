import styled from "styled-components"
import { background } from "../constants/colors"

export default function Background() {
    return(
        <BackgroundWrapper></BackgroundWrapper>
    )
}

const BackgroundWrapper = styled.div`
position: absolute;
width: 100%;
height: 100%	;
left: 0px;
top: 0px;

background: ${background};
z-index: 0;
`