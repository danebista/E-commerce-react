import styled, {css} from 'styled-components';

const invertedButtonStyles = css`
        background-color: #2B2B2B;
        color: white;
        border: 1px solid white;

        &:hover{
            background-color: white;
            color: #2B2B2B;
            border:none;
        }
`
const buttonStyles = css`
    background-color: #2B2B2B;
    color: white;
    border:none;
    
    &:hover{
        background-color: #2B2B2B;
        color: white;
        border: 1px solid white;
    }
`
const googleSignInStyles = css `
        background-color:#4285f4;
        color:white;
        
        &:hover{
        background-color: #357ae8;
        }
`

const getButtonStyles = props =>{
    if (props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted? invertedButtonStyles : buttonStyles;
}

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width:auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
`;
 