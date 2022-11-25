import { Button, Checkbox, FormControlLabel, FormLabel, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
//import { createTheme } from '@mui/material/styles';


const Addbook = () => {
  const [inputs, setInputs] = useState({
      name:'',
      author:'',
      description:'',
      price:'',
      available:false,
      image:'',
  });
  return (
    
    <form>
      <Box display='flex' flexDirection ={'column'} justifyContent={'center'} maxWidth={700} alignContent={'cneter'} alignSelf={'center'} marginLeft={'auto'} marginRight={'auto'} marginTop={10}>
      <FormLabel> Name:</FormLabel>
       <TextField margin="normal" fullWidth variant="outlined" name="name" />
       <FormLabel> Author:</FormLabel>
       <TextField margin='normal' fullWidth variant='outlined' name='author' />
       <FormLabel> Description:</FormLabel>
       <TextField margin='normal' fullWidth variant='outlined' name='description' />
       <FormLabel>Price: </FormLabel>
       <TextField type="number" margin='normal' fullWidth variant='outlined' name='price' />
       <FormLabel>Image: </FormLabel>
       <TextField type="number" margin='normal' fullWidth variant='outlined' name='price' />
       <FormControlLabel control={<Checkbox checked={false}/>} label="Available"/>
       <Button variant="contained" type='Submit'> Add Book</Button>
       </Box>
    </form>
  )
}

export default Addbook


//  const [count, setcount] = useState(0)
// return (
//   <div>
//      <Button onClick={() =>setcount(count+1)}> set me</Button>
//     <div>You clicked me {count} times</div>
//   </div>
// )
// }