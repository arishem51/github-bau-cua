import React, { Component } from 'react'
import { Button } from '../Styled/Button'
import { SmallButton } from '../Styled/Button'

export default class Demo extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Button  className='button__styled'>123</Button>
                <SmallButton className='button__styled'>321</SmallButton>
            </div>
        )
    }
}
