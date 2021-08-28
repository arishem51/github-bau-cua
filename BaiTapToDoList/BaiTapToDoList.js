import React, { Component } from 'react'
import { Container } from '../ToDoListComponents/Container'
import { ThemeProvider } from 'styled-components'
import { ToDoListDarkTheme } from '../Theme/ToDoListDarkTheme'
import { ToDoListLightTheme } from '../Theme/ToDoListLightTheme'
import { ToDoListPrimaryTheme } from '../Theme/ToDoListPrimaryTheme'
import { Dropdown } from '../ToDoListComponents/Dropdown'
import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '../ToDoListComponents/Heading'
import { TextField } from '../ToDoListComponents/TextField'
import { Button } from '../ToDoListComponents/Button'
import { Table, Tr, Tbody, Td, Th, Thead } from '../ToDoListComponents/Table'
import { connect } from 'react-redux'
import { changeThemeAction, deleteTaskAction, doneTaskAction, editTask, themTaskAction, updateTask } from '../Redux/actions/ToDoListActions'
import arrayTheme from '../Theme/ThemeManagers'
 class BaiTapToDoList extends Component {
    renderTaskToDo = ()=>{
        return this.props.taskList.filter(task=> !task.done).map((item,index)=>{
            return <Tr key={index}>
                            <Th>{item.taskName}</Th>
                            <Th className='text-end'>
                                <Button onClick={()=>{
                                    this.setState({
                                        disable : false
                                    },()=>{
                                        this.props.dispatch(editTask(item));
                                    })
                                }} className='me-2' ><i className='fa fa-edit'></i> </Button>
                                <Button onClick={()=>{
                                    this.props.dispatch(doneTaskAction(item.id))
                                }} className='me-2' ><i className='fa fa-check'></i> </Button>
                                <Button onClick={()=>{this.props.dispatch(deleteTaskAction(item.id))}} className='me-2' ><i className='fa fa-trash'></i> </Button>
                            </Th>
                    </Tr>
        })
    }
    renderTaskDone = ()=>{
        return this.props.taskList.filter(task=> task.done).map((item,index)=>{
            return <Tr key={index}>
                            <Th>{item.taskName}</Th>
                            <Th className='text-end'>
                                <Button onClick={()=>{this.props.dispatch(deleteTaskAction(item.id))}} className='me-2' ><i className='fa fa-trash'></i></Button>
                            </Th>
                    </Tr>
        })
    }

    state= {
        taskName : '',
        disable : true
    }

    handleChange = (e)=>{
        let {name,value} = e.target;
        this.setState({
            [name]:value
        })
    }

    renderTheme = ()=>{
        return arrayTheme.map((item,index)=>{
            return <option key={index} value={item.id}>
                    {item.name}
            </option>
        })
    }
    componentDidUpdate(prevProps, prevState){
        if(prevProps.taskEdit.id !== this.props.taskEdit.id){
            this.setState({
                taskName : this.props.taskEdit.taskName
            })
        }
    }
    
    render() {
        return (
            <ThemeProvider theme={this.props.theme}>
                <Container className='w-50'>
                    <Dropdown onChange={(e)=>{
                        let {value} = e.target;
                        this.props.dispatch(changeThemeAction(value));
                    }}>
                        {this.renderTheme()}
                    </Dropdown>
                    <Heading3 className='mt-1'>To Do List</Heading3>
                    <TextField value={this.state.taskName} name='taskName' label='Task Name' className='me-2' onChange={this.handleChange}></TextField>
                    <Button className='me-2' onClick={()=>{
                        let newTask = {
                            id : Date.now(),
                            taskName:this.state.taskName,
                            done:false
                        }

                        this.props.dispatch(themTaskAction(newTask));
                    }}> <i className='fa fa-plus'></i> Add Task</Button>
                    { this.state.disable ? <Button disabled onClick={()=>{
                        let {taskName} = this.state;
                        this.setState({
                            taskName : '',
                            disable : true
                        },()=>{
                            this.props.dispatch(updateTask(taskName))
                        })
                    }} className='me-2'><i className='fa fa-upload'></i> Update Task</Button>  : <Button  onClick={()=>{
                        let {taskName} = this.state;
                        this.setState({
                            taskName : '',
                            disable : true
                        },()=>{
                            this.props.dispatch(updateTask(taskName))
                        })
                       
                    }} className='me-2'><i className='fa fa-upload'></i> Update Task</Button> }
                    <Heading3>Task To Do</Heading3>
                    <Table>
                        <Thead>
                           {this.renderTaskToDo()}
                        </Thead>
                    </Table>
                    <Heading3>Task Completete</Heading3>
                    <Table>
                        <Thead>
                          {this.renderTaskDone()}
                        </Thead>
                    </Table>
                </Container>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = state =>{
    return {
        theme: state.ToDoListReducer.theme,
        taskList: state.ToDoListReducer.taskList,
        taskEdit : state.ToDoListReducer.taskEdit,
    }
}



export default connect(mapStateToProps)(BaiTapToDoList)
