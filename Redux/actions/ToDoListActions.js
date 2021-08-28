import { CHANGE__THEME, DELETE_TASK, DONE_TASK, EDIT_TASK, THEM_TASK ,UPDATE__TASK, USER_COMMENT} from "../types/ToDoList";

export const themTaskAction = (newTask) => ({
    type: THEM_TASK,
    newTask
})

export const changeThemeAction = (themeId) => ({
    type: CHANGE__THEME,
    themeId
})
export const doneTaskAction = (taskId) => ({
    type: DONE_TASK,
    taskId
})
export const deleteTaskAction = (taskId) => ({
    type: DELETE_TASK,
    taskId
})

export const editTask = (task) => ({
    type: EDIT_TASK,
    task
})


export const updateTask = (taskName) => ({
    type: UPDATE__TASK,
    taskName
})
export const addUserComment = (item) => ({
    type: USER_COMMENT,
    item
})

