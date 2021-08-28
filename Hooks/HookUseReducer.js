/* eslint-disable default-case */
import React, { useReducer } from 'react'

const gioHang = [
    { id: 1, name: 'iphone', price: 1000, amount: 1 }
]

// Get api dc san pham moi

const gioHangApi = [
    { id: 1, name: 'iphone', price: 1000,img : "https://img.xfinitymobile.com/image/fetch/e_trim/w_300,h_420,c_fit,f_auto,q_auto,fl_lossy/https%3A%2F%2Fimg.xfinitymobile.com%2Fimage%2Fupload%2Fv1602635146%2Fclient%2Fcatalog%2Fdevices%2Fapple%2FiPhone_12_Blue_PRI.png"},
    { id: 2, name: 'Note 10 plus', price: 2000, img:'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-white-new-600x600.jpg' },
    { id: 3, name: 'Note 20 plus', price: 3000, img:'https://www.gizmochina.com/wp-content/uploads/2020/05/Samsung-Galaxy-Note-20-Plus-5G-500x500.jpg' },
    { id: 4, name: 'Huawei P20', price: 4000, img:'https://cdn-files.kimovil.com/phone_front/0002/31/thumb_130357_phone_front_big.jpeg'}
]

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'addToCart' : {
            console.log(state)
            let cartUpdate = [...state]
            console.log(cartUpdate)
            let index = cartUpdate.findIndex(item=>item.id === action.item.id);
            if(index !== -1){
                cartUpdate[index].amount += 1;
            }else{
                const itemCart = {...action.item,amount:1};
                cartUpdate.push(itemCart)
            }
            console.log(state)
            console.log('11' - 1)
            return cartUpdate;
        }
    }
    return { ...state }
}
export default function HookUseReducer(props) {
    let [gioHangGiaoDien, dispatch] = useReducer(cartReducer, gioHang)
    let renderBody = () => {
        return gioHangGiaoDien.map((item, index) => {
            return <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>
                    <button className='btn btn-danger'>Xoa</button>
                    <button className='btn btn-success'>Cap nhat</button>
                </td>
            </tr>
        })
    }
    const addToCart = (item)=>{
        const action = {
            type:"addToCart",
            item
        }
        dispatch(action)
    }
    let renderDT = () => {
        return gioHangApi.map((item, index) => {
            return <div className='col-3' key={index}>
                <div className="card" style={{ width: '18rem' }}>
                    <img style={{height:"500px"}} src={item.img} className="card-img-top" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.price.toLocaleString()}</p>
                        <button className='btn btn-success' onClick={()=>{addToCart(item)}}>Them vao gio hang</button>
                    </div>
                </div>
            </div>
        })
    }
    return (
        <div className='container'>
            <div className='row'>
                {renderDT()}
            </div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
        </div>
    )
}
