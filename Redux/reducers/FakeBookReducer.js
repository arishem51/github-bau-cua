import { USER_COMMENT } from "../types/ToDoList"

const stateDefault = {
    comments:[
    ]
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = stateDefault,action)=>{
    // eslint-disable-next-line default-case
    switch(action.type){
        case USER_COMMENT :{
            state.comments  = [...state.comments, action.item];
            return{...state}
        }
    }
    return {...state}
}