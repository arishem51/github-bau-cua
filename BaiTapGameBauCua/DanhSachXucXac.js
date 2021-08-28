import React from 'react'
import XucXac from './XucXac'
import {useSelector,useDispatch} from 'react-redux'

export default function DanhSachXucXac() {
    const dispatch = useDispatch()
    
    const danhSachXucXac = useSelector(state=>state.BaiTapGameBauCuaReducer.danhSachXucXac)
    const renderBody = ()=>{
        return danhSachXucXac.map((item,index)=>{
            let class__col =  index === 0 ? 'col-12 d-flex justify-content-center '  : 'col-6 d-flex justify-content-end ' ;
            return <div className={class__col} key={index}>
                <XucXac item={item}></XucXac>
            </div>
        })
    }
    return (
        <div className='mt-5'>
            <div className='bg-white ' style={{ width: 350, height: 350, borderRadius: "50%" ,margin:'0 auto'}}>
                <div className='row'>
                   {renderBody()}
                </div>
            </div>
            <div className=' text-center mt-3   '>
                <button className='btn btn-success px-3 py-2' onClick={()=>{
                    dispatch({
                        type:"PLAY_GAME_BAU_CUA",
                    })
                }}>Xốc</button>
            </div>
        </div>
    )
}
