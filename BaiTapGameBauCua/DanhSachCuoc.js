import QuanCuoc from './QuanCuoc'
import React from 'react'
import {useSelector} from 'react-redux'

export default function DanhSachCuoc() {
    const danhSachCuoc = useSelector(state=>state.BaiTapGameBauCuaReducer.danhSachCuoc)
    const renderBody = ()=>{
        return danhSachCuoc.map((item,index)=>{
            return <div className='col-4' key={index}>
                <QuanCuoc item={item}></QuanCuoc>
            </div>
        })
    }
    renderBody()
    return (
        <div  className='row mt-5 justify-evenly'>
           {renderBody()}
        </div>
        
    )
}
