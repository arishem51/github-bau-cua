/* eslint-disable no-fallthrough */
/* eslint-disable import/no-anonymous-default-export */
import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Theme/ToDoListPrimaryTheme";
import { CHANGE__THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, THEM_TASK, UPDATE__TASK } from "../types/ToDoList"
import arrTheme from "../../Theme/ThemeManagers";
const initialState = {
    theme : ToDoListDarkTheme,
    taskList:[
        {id:1,taskName:'task 1',done:true},
        {id:2,taskName:'task 2',done:false},
        {id:3,taskName:'task 3',done:true},
        {id:4,taskName:'task 4',done:false}
    ],
    taskEdit :{id:1,taskName:'task 1',done:true},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case THEM_TASK:{
            //Kiem tra rong
            if(action.newTask.taskName.trim() === ''){
                alert("Không được để rỗng");
                return {...state};
            }

            //Kiem tra ton tai
            let index = state.taskList.findIndex(item=>item.taskName === action.newTask.taskName);
            if(index !== -1){
                alert("Không được để tên trùng");
                return {...state};
            }

            //them vao reducer
            let taskListUpdate = [...state.taskList];
            state.taskList = [...taskListUpdate,action.newTask];
            return {...state}
        }
        case CHANGE__THEME :{
            let newTheme = arrTheme.find(item=>item.id == action.themeId);
            if(newTheme){
                state.theme = {...newTheme.theme}
            }
            return {...state};
        }
        case DELETE_TASK :{
            return {...state,taskList:state.taskList.filter(item => item.id !== action.taskId)}
        }
        case DONE_TASK:{
            let taskListUpdate = [...state.taskList];
            let index = taskListUpdate.findIndex(item=>item.id == action.taskId)
            if(index !== -1){
                taskListUpdate[index].done = true;
            }
            return {...state,taskList:taskListUpdate}
        }

        case EDIT_TASK :{
            return {...state,taskEdit:action.task}
        }
        case UPDATE__TASK:{
            //gan taskEdit  = taskUpdate
            state.taskEdit = {...state.taskEdit,taskName:action.taskName}

            //tim trong mang taskEdit moi cap nhat lai task edit
            let taskListUpdate = [...state.taskList]
            let index  =  taskListUpdate.findIndex(item=> item.id === state.taskEdit.id);
            if(index !== -1){
                taskListUpdate[index].taskName = action.taskName
            }
            state.taskList = [...taskListUpdate]
            return {...state}
        }
    default:
        return {...state}
    }
}
