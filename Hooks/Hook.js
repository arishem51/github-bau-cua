import React, { useState,useEffect,useCallback,useMemo,useRef } from 'react'
import ChildHook from './ChildHook'
import { useSpring, animated } from 'react-spring'

export default function Hook() {
    let [number, setNumber] = useState(1)
    let [like, setLike] = useState(1)

    const handleNumber = ()=>{
        setNumber(number+1)
    }
    const handleLike = ()=>{
        setLike(like+1)
    }
    // DidMount
    // useEffect(()=>{
    //     console.log("Use effect DidMount")
    // },[])
    // useEffect(()=>{
    //     console.log("Number:", number)
    // },[number])

    // useEffect(()=>{
    //     console.log("GetDiveredFromProps")
    // })

    let donnotRenderText = useCallback(()=>{
        return console.log(`Ban da tha ${like} <3`)
    },[like])
    let index = useRef(0);
    let hi = ()=>{
        console.log("like",like);
        console.log('index',index);
        index.current +=1;
        setLike(like + parseInt(index.current))
    }
    const props = useSpring({ to: { color: 'red' }, from: { color: 'blue' },config:{duration:1000} })
    let prosUseSpring = useSpring({
        from:{
            width:"0%",
            height:"0%",
            fontSize:'10px',
        },
        to: async(next,cancle) =>{
            await next ({width:'100%',height:'100%',fontSize :'50px'});
            await next ({width:'50%',height:'50%',fontSize :'15px'});
            await next ({width:'120%',height:'120%',fontSize :'70px'});
        },
        config:{duration:5000}

    })
    return (
        <div>
            <button onClick={handleLike} >Like:{like}</button>
            <div className="card" style={{ width: '18rem' }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{number}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a onClick = {hi}  href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            <ChildHook renderText = {donnotRenderText}></ChildHook> 
            <animated.div style={props}>I will fade in</animated.div>
            <animated.div className='bg-dark text-light' style ={prosUseSpring}>Ao that day</animated.div>
        </div>
    )
}
