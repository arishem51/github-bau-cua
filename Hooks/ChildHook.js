import React , {memo} from 'react'

 function ChildHook(props) {
    console.log("re-render")
    return (
        <div > 
            {props.renderText()}
        </div>
    )
}

export default memo(ChildHook)
