import styled, { css } from 'styled-components'
import Text from '../../../Text'

const Container = styled(Text)`
    ${({ theme, bgColor }) => css`
        background: ${theme.colors[bgColor] ?? '#F88676'};
    `}

    border-radius: 23px;

    text-transform: uppercase;
    text-align: center;
    
    font-weight: 900;
    font-size: 7px;

    min-width: 56px;

    height: 6px;

    padding: 9px;
`

export { Container }
