import styled from 'styled-components'


export const Button = styled.button`
    background: ${props => props.primary ? "linear-gradient(red,blue)" : "linear-gradient(to right, #f64f59, #c471ed, #12c2e9)"};
    color:#fff;
    padding:15px 30px;
    border:none;
    border-radius : 5px;
    &:hover{
        opacity:.7;
        transition:all .7s
    }
    &.button__styled{
        margin:0 5px;
    }
`

export const SmallButton = styled(Button)`
    padding:10px 15px;
    font-size:10px;
`