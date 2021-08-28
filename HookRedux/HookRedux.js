import React,{useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {addUserComment} from '../Redux/actions/ToDoListActions'


export default function HookRedux(props) {
    
    //render ra man hinh = useSelector
    const dispatch = useDispatch();
    let comments = useSelector(state=>state.FakeBookReducer.comments); 
    let renderComments = ()=>{
        return comments.map((comment,index)=>{
            return <div className='row' key={index}>
            <div className='col-1' >
                <img style={{height:'60px' , width:'60px'}} className='img-fluid' src={`https://i.pravatar.cc/150?u=${comment.name}`} alt={`https://i.pravatar.cc/150?u=${comment.name}`}></img>
            </div>
            <div className='col-11'>
                <h6 className='text-dark mt-1 '>{comment.name}</h6>
                <p >{comment.content}</p>
            </div>
        </div>
        })
    }


    // Lay thong tin nguoi dung nhap vao
    // Tao state
    const [userComment,setUserComment] = useState({
        name:'',
        content:'',
        img:''
    })
    const handleChange = e =>{
        let {name,value} = e.target;
        setUserComment({
            ...userComment,
            [name]:value
        })
    }
    const handelSubmit = (e)=>{
        e.preventDefault();
        let usComment = {...userComment,img:`https://i.pravatar.cc/150?u=${userComment.name}`}
        dispatch(addUserComment(usComment))
    }
    return (
        <div className='container'>
            <h1>Facebook App</h1>
            <div className="card" style={{width:'70%'}}>
                <div className='card-header'>
                    {renderComments()}
                </div>
                <div className="card-body">
                   <form onSubmit = {handelSubmit}>
                      <div className='form-group'>
                            <h4>Name</h4>
                            <input  name='name' className='form-control' placeholder='ghi con me m ten vao' onChange={handleChange}></input>
                      </div>
                      <div className='form-group'> <h4>Content</h4>
                       <input name='content' className='form-control' placeholder='ghi content vao day' onChange={handleChange}></input></div>
                       <div className='form-group'><button className='mt-3 btn btn-success'>Send</button></div>
                   </form>
                </div>
            </div>
        </div>
    )
}
