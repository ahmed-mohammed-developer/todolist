import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Todo from './Todo';
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { useState, useContext, useEffect , useMemo } from 'react';
import { TodosContext } from './context/TodosContext';
import { SnackBarContext } from './context/SnackBarContext';






export default function TodoList(){
  const {todos , setTodos} = useContext(TodosContext)
  const [titleInput, setTitleInput] = useState("")
  const [displayTodosType, setDisplayTodosType] = useState("all")
  const {showHideToast} = useContext(SnackBarContext)
  //filter isCompleted
  const completedTodos = useMemo(() => {
    return todos.filter((t) => {
      return t.isCompleted
    })
  }, [todos])

  //filter isCompleted
  const notCompletedTodos = useMemo(() => {
    todos.filter((t) => {
      return !t.isCompleted
    })
  }, [todos])

    let todosToBeRender = todos

    if (displayTodosType === "completed"){
      todosToBeRender = completedTodos
    } else if (displayTodosType === "non-completed"){
      todosToBeRender = notCompletedTodos
    } else {
      todosToBeRender = todos
    }
  const todoJsx = todosToBeRender.map((t) => {
    return <Todo key={t.id} todo={t} />
  })



  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"))
    setTodos(storageTodos)
  }, [])

   function changeDisplyeType(e){
    setDisplayTodosType(e.target.value)
   }
  function handleAddClick(){
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      des: "",
      isCompleted: false
    }
    const updateStorg = [...todos, newTodo]
    setTodos(updateStorg)
    localStorage.setItem("todos", JSON.stringify(updateStorg))
    setTitleInput("")
    showHideToast("تم الإضافة بنجاح")
  }
  
      
    return(
        <>
    <CssBaseline />
    <Container maxWidth="md">
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h2" component="div">
         مهامي
        </Typography>
        <Divider />
        {/* Toggle Button Start */}
        <ToggleButtonGroup
      value={displayTodosType}
      exclusive
      onChange={changeDisplyeType}
      aria-label="text alignment"
      style={{marginTop: "30px"}}
    >
      <ToggleButton value="all" aria-label="left aligned">
        الكل
      </ToggleButton>
      <ToggleButton value="completed" aria-label="centered">
        المنجز
      </ToggleButton>
      <ToggleButton value="non-completed" aria-label="right aligned">
        غير منجز
      </ToggleButton>
        </ToggleButtonGroup>
        {/* Toggle Button End */}
        {/* To do Start */}
            {todoJsx}
        {/* To do Start */}
        {/* Input Start */}
        <Grid container spacing={2}>
        <Grid size={8}>
        <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField
       style={{width: '100%'}}
        id="outlined-basic"
         label="عنوان المهمة"
         variant="outlined"
         value={titleInput}
         onChange={(e) => {
          setTitleInput(e.target.value)
         }}
         />
    </Box>
        </Grid>
        <Grid size={4} display="flex" justifyContent=" space-around" alignItems="center" >
        <Stack direction="row" spacing={2} >
      <Button
      onClick={handleAddClick}
       style={{width: "200px", height: '50px'}} variant="contained" color="success" >
        إضافة
      </Button>
      </Stack>
        </Grid>
      </Grid>
        {/* Input End */}

      </CardContent>
    </Card>

    </Container>
        </>
    )
}


