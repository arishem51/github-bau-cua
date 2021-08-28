import { config, useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';
import React,{Fragment} from 'react'


export default function XucXac(props) {
    let {item} = props;
    const [propUseSpring] = useSpring(()=>{
        return{
            to:{
                xyz:[1800,1800,1800]
            },
            from:{
                xyz:[0,0,0]
            },
            config:{
                duration:1000
            },
            reset:true
        }
    })
    propUseSpring.xyz.start({from:{xyz:[0,0,0]},to:{xyz:[1800,1800,1800]}})
    return (
       <Fragment>
            <div className='scene me-5'>
                <animated.div className='cube' style={{
                transform:propUseSpring.xyz.to((x,y,z)=>`translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`)
            }} >
                                    <img className='ms-3 cube__face front' src={item.hinhAnh} style={{ width: '100%' }} alt={item.hinhAnh}></img>
                                    <img className='ms-3 cube__face back' src='./GameBauCua/bau.png' style={{ width: '100%' }} alt={item.hinhAnh}></img>
                                    <img className='ms-3 cube__face left' src='./GameBauCua/ga.png' style={{ width: '100%' }} alt={item.hinhAnh}></img>
                                    <img className='ms-3 cube__face right' src='./GameBauCua/tom.png' style={{ width: '100%' }} alt={item.hinhAnh}></img>
                                    <img className='ms-3 cube__face top' src='./GameBauCua/nai.png' style={{ width: '100%' }} alt={item.hinhAnh}></img>
                                    <img className='ms-3 cube__face bottom' src='./GameBauCua/cua.png' style={{ width: '100%' }} alt={item.hinhAnh}></img>
                </animated.div>   
            </div >
       </Fragment>
    )
}
