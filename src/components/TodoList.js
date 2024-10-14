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
import { useState } from 'react';



const intiotodos = [
  {
    id: uuidv4(),
    title: "كتابة مقال",
    des: "كتابة مقال التفاصيل",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "المذاكرة",
    des: "المذاكرة التفاصيل",
    isCompleted: false
  },
  {
    id: uuidv4(),
    title: "البرمجة ",
    des: "التفاصيل",
    isCompleted: false
  }
]



export default function TodoList(){

  const [todos, setTodos] = useState(intiotodos)
  const [titleInput, setTitleInput] = useState("")
  const todoJsx = todos.map((t) => {
    return <Todo key={t.id} title={t.title} des={t.des}/>
  })
  function handleAddClick(){
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      des: "",
      isCompleted: false
    }
    setTodos([...todos, newTodo])
    setTitleInput("")
  }

    const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      style={{marginTop: "30px"}}
    >
      <ToggleButton value="left" aria-label="left aligned">
        الكل
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        المنجز
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
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


