import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './GameBauCua.css';

export default function BaiTapGameBauCua() {
    return (
        <div id='BaiTapGameBauCua' className='container-fluid'>
            <DiemCuoc></DiemCuoc>
            <div className='row'>
                <div className='col-8'>
                    <DanhSachCuoc></DanhSachCuoc>
                </div>
                <div className='col-4'>
                    <DanhSachXucXac></DanhSachXucXac>
                </div>
            </div>
        </div>
    )
}
