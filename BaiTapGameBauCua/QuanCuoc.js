import React ,{useEffect}  from 'react'
import { useDispatch, } from 'react-redux';
import {useSpring,animated,to} from 'react-spring'

export default function QuanCuoc(props) {
    const distpatch = useDispatch()
    const [propsUseRightSpring] = useSpring(()=>{
        return {
            to:{scale:1},
            from:{scale:0},
            reset:true
        }
    })
    const [propsUseLeftSpring] = useSpring(()=>{
        return {
            to:{scale:1},
            from:{scale:0},
            reset:true
        }
    })

   
   
    
    const {item} = props;
    return (
        <div>
                <img  style={{width:'60%',margin:'20px 20%'}} src={item.hinhAnh} alt={item.hinhAnh}></img>
                <div className='bg-success p-1 text-center' style={{borderRadius:'5px',width:'60%',margin:'0 20%'}}>
                    <animated.button style={{transform: propsUseRightSpring.scale.to(scale=>`scale(${scale})`)}} onClick={()=>{
                        propsUseRightSpring.scale.start({from:{scale:0.7},to:{scale:1.05}})
                        distpatch(({
                            type:"DAT_CUOC_BAU_CUA",
                            item,
                            tangGiam:true
                        }))
                    }} className='me-3 btn btn-danger'><i className='fa fa-plus'></i></animated.button>
                    <span className='text-waring'>{item.diemCuoc}</span>
                    <animated.button style={{transform: propsUseLeftSpring.scale.to(scale=>`scale(${scale})`)}} onClick={()=>{
                        propsUseLeftSpring.scale.start({from:{scale:0.7},to:{scale:1.05}})
                        distpatch(({
                            type:"DAT_CUOC_BAU_CUA",
                            item,
                            tangGiam:false
                        }))
                    }} className='ms-3 btn btn-danger'>-</animated.button>
                </div>
        </div>
    )
}
