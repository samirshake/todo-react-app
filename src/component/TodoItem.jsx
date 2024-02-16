import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { Box, Typography} from '@mui/material';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/joy/Button';


// import { useEffect } from 'react';
 
const TodoItem = ({tasks,onDelete,onEdit,onComplete}) =>{

    return (
    <>
     {
        tasks.map((element) => {
            return <Paper key={element.id} variant="elevation" sx={{height:"40px",padding:".2rem 1rem",marginBottom:"1.5rem",cursor: "pointer"}} onClick={()=>onComplete(element.id)}>
            <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}> 
              <Stack direction={"row"} alignItems={"center"}>
                {element.completed?<Box sx={{  borderRadius: '50%', width: '1rem',
          height: '1rem', border: "3px solid green", marginRight: "1rem", cursor: "pointer" }} >
                </Box>:<Box sx={{  borderRadius: '50%', width: '1rem',
          height: '1rem',border: "3px solid red", marginRight: "1rem", cursor: "pointer" }} >
                </Box>}
                {element.completed?<Typography variant='h4' sx={{textDecoration: "line-through"}}>{element.title}</Typography>:
                <Typography variant='h4'>{element.title}</Typography>}
              </Stack>
      
              <Box>
              <Button onClick={()=>onEdit(element.id)}>
                  <EditIcon ></EditIcon>
                </Button>
                <Button onClick={()=>onDelete(element.id)}>
                  <DeleteIcon ></DeleteIcon>
                </Button>
              </Box>
            </Stack>
            </Paper>
        })
     }

    </>
    
    )
}


export default TodoItem;