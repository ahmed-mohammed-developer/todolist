import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {  useContext, useState } from 'react';
import { TodosContext } from './context/TodosContext';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';



export default function Todo({todo, handleCheckClick}){

  const [showdelet, setShowdelet] = useState(false)
  const [showUpdate, setShowUpdate] = useState(false)
  const [updateTodo, setUupdateTodo] = useState({ title: todo.title, des: todo.des})
  const {todos , setTodos} = useContext(TodosContext)

  function handleDeletClick(){
    setShowdelet(true)
  }
  function handleUpdateClick(){
    setShowUpdate(true)
  }
  function handleClose(){
    setShowdelet(false)
  }
  function handleUpdateClose(){
    setShowUpdate(false)
  }

  function handleDeletConfrim(){
    setTodos(todos.filter(w => w.id !== todo.id)) ;
  }
  function handleUpdateConfrim(){
    const updatedTodoss = todos.map((e) => {
      if (e.id === todo.id){
        return {...e, title: updateTodo.title, des: updateTodo.des}
      } else {
        return e 
      }
    })
    setTodos(updatedTodoss)
    setShowUpdate(false)
  }

  function handleCheckClickicon(){
    const updataIscomplet = todos.map((e) => {
      if (e.id === todo.id){
        e.isCompleted = !e.isCompleted
      }
      return e
    })
    setTodos(updataIscomplet)
  }
    return(
        <>
        {/* Delet Pope */}
      <Dialog
        onClose={handleClose}
        open={showdelet}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"هل تريد الحذف؟"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            عند الحذف لا يمكنك التراجع
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>إلغاء</Button>
          <Button onClick={handleDeletConfrim}>
            موافق
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={showUpdate}
        onClose={handleUpdateClose}
      >
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="عنوان المهمة"
            fullWidth
            variant="standard"
            value={updateTodo.title}
            onChange={(e) => {
              setUupdateTodo({...updateTodo, title: e.target.value})
            }}
          />
           <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label=" المهمة"
            fullWidth
            variant="standard"
            value={updateTodo.des}
            onChange={(e) => {
              setUupdateTodo({...updateTodo, des: e.target.value})
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleUpdateClose}>إلغاء</Button>
          <Button onClick={handleUpdateConfrim}>تعديل</Button>
        </DialogActions>
      </Dialog>
        {/* Delet Pope */}
          <Card sx={{ minWidth: 275, background: "#283593" , color: "#ffffff", marginTop: 5}}>
        <CardContent>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
        <Typography variant="h5" component="div">
         {todo.title}
        </Typography>
        <Typography variant="h6" component="div">
        {todo.des}
        </Typography>
        </Grid>
        <Grid size={4} display="flex" justifyContent=" space-around" alignItems="center" >
        <IconButton
        onClick={handleCheckClickicon}
        className='iconButton'
        aria-label="delete"
        style={{color: "#8bc34a",
            background: todo.isCompleted ? "#8bc34c" : "#fff",
            border: "solid #8bc34c 3px"
        }}>
            
        <CheckIcon />
      </IconButton>
      <IconButton
      className='iconButton'
       aria-label="delete"
        style={{color: "#1769aa",
            background: "#fff",
            border: "solid #1769aa 3px"
        }}
        onClick={handleUpdateClick}
        >
            
        <ModeEditOutlineOutlinedIcon />
      </IconButton>
      <IconButton
      className='iconButton'
      aria-label="delete"
        style={{color: "red",
            background: "#fff",
            border: "solid red 3px"
        }}
        onClick={handleDeletClick}
        >
            
        <DeleteOutlineOutlinedIcon />
      </IconButton>
        </Grid>
      </Grid>
    </Box>
        </CardContent>
          </Card> 
        </>
    )
}