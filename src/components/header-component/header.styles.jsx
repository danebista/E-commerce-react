import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

const OptionsContainerStyles = css`
        padding: 10px 15px;
        cursor: pointer;
        color: white;
`;

export const HeaderContiner = styled.div`
   height: 70px;
    width:100%;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
`;

export const LogoContainer = styled(Link)`
        height:20%;
        width: 100%;
        padding: 10px;

        .logo{
            width: 100px;
            height:100px;
        }
` ;

export const OptionsContainer = styled.div`
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        color: white;
`;

export const OptionLink = styled(Link)`
${OptionsContainerStyles}`;

export const OptionDiv = styled.div`
${OptionsContainerStyles};
`;
