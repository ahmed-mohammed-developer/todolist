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



export default function TodoList(){

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
            <Todo />
        {/* To do Start */}
      </CardContent>
    </Card>

    </Container>
        </>
    )
}


