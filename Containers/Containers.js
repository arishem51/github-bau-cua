import styled from 'styled-components'


export const Container = styled.div`
    width: 100%;
    padding-right:15px;
    padding-left:15px;
    margin-left:auto;
    margin-right:auto;
    border : 3px solid ${props=>props.theme.borderColor}
`