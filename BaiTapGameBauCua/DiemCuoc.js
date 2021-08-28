import React from 'react'
import { useSelector } from 'react-redux'

export default function DiemCuoc() {
    let tongDiem = useSelector(state=>state.BaiTapGameBauCuaReducer.tongDiem);
    return (
        <div >
            <h3 className='text-center display-4' style={{color:'green'}}>Game Bầu Cua</h3>
            <div className='text-center mt-2'>
                <span style={{fontSize:'20px',borderRadius:'5px',letterSpacing:'1px',display:'inline-block'}} className='p-3 text-white bg-danger'>Tiền Thưởng: <span className='text-warning'>{tongDiem.toLocaleString()}$</span></span>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-success'>Chơi Lại</button>
            </div>
        </div>
    )
}
