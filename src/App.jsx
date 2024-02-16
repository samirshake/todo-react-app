

import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { Box, Typography,Container } from '@mui/material';
import Button from '@mui/joy/Button';
import Input from '@mui/joy/Input';
import AddIcon from '@mui/icons-material/Add';
import TodoItem from './component/TodoItem';
import { useState } from 'react';
import shortid from 'shortid';

function App() {
  const DemoPaper = styled(Paper)(({ theme }) => ({
    height: "auto",
    minHeight: 100,
    padding: theme.spacing(3),
    ...theme.typography.body2,
    textAlign: 'center',

  }));

  const commonStyles = {
    bgcolor: 'background.paper',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: '5rem',
    height: '5rem',
    display: 'flex', justifyContent: 'center',alignItems: "center"
    
  };

  //state 
  const [inputvalue,setInputValue] = useState("")
  const [database,setDatabase] = useState([])
  const [editable,setEditable] = useState(false)
  const [editingID,setEditingID] = useState("")
  const [count,setCount] = useState(0)
  //handler

  const handleSubmit = (e)=>{
    e.preventDefault();
    const data = {
      title: inputvalue,
      id: shortid.generate(),
      completed: false,
    }
    if(!inputvalue == "" && !editable){
      setDatabase([...database,data])
    }
    else if(!inputvalue =="" && editable){
      database.filter((data)=>{
      
        if (data.id == editingID){
          data.title = inputvalue
          setInputValue("")
          setEditable(false)
        }
    })}
        setInputValue("")
        
  }

  const handleChange =(e)=>{
    setInputValue(e.target.value)
  }
  const handleDelete = (id)=>{
    const updatedData = database.filter((data)=>{
      console.log(id);
      return data.id !== id
    })
    setDatabase(updatedData)
    
  }
  const handleEdit =(id) =>{
    database.filter((data)=>{
      if (data.id == id){
        setInputValue(data.title)
        setEditable(true)
        setEditingID(id)
      }
    })
    
  }
  const handleComplete = (id) =>{
    database.filter((data)=>{
    if(data.id == id && data.completed == false){
        setCount(count+1)
        data.completed = true

      }
     else if(data.id == id && data.completed == true){
        setCount(count-1)
        data.completed = false

      }
})
    
  }


  
  return (
    <>
    <Container maxWidth="lg">
    <Container >
      <h1>Todo Web Application</h1>
      <Container maxWidth="sm" sx={{display: "flex",gap: "2rem", flexDirection:"column"}}>
        {/* Progress Paper start */}
      <DemoPaper variant="elevation" >
      <Stack direction="row" spacing={2} justifyContent={"space-around"} alignItems={"center"}>
      <Box>
      <Typography variant='h4'>Todo Done</Typography>
      <Typography variant='subtitle1'>Keep it up</Typography>
      </Box>
      <Box>
      <Box sx={{...commonStyles,  borderRadius: '50%' }} >
        {count}/{database.length}
        </Box>
      </Box>
      </Stack>
      </DemoPaper>
    {/* Progress Paper end */}


    <Box>
      {/* form input start */}
    <form onSubmit={handleSubmit}>
      <Stack spacing={1} direction={'row'} justifyContent={"space-between"}>
        <Input variant="outlined" placeholder="Try to submit with no text!"
        sx={{width: "100%"}}
         value={inputvalue}
         onChange={handleChange}
         />
        <Button type="submit">
          <AddIcon></AddIcon>
        </Button>
      </Stack>
    </form>
      {/* form input end */}

    </Box>
      {/* Displaying to do item start */}

    <Box>
      {/* create component when you need to repeat the code */}
      <TodoItem  tasks={database} onDelete={handleDelete} onEdit={handleEdit} onComplete={handleComplete}></TodoItem>
      {/* Displaying to do item end */}
    </Box>
      </Container>
    </Container>
    </Container>

      
    </>
  )
}


export default App
