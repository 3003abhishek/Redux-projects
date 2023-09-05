import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import {useSelector,useDispatch} from "react-redux"
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';


function PostList(){
     const postlist=useSelector((state)=>state.posts);
     console.log(postlist);



    return (
     <Box>
        <Box sx={{marginBottom:"50px"}}>
            <Navbar/>
        </Box>
{
    postlist.map((el)=>{
        return (
            <Box key={el.id}>
                
                <Typography variant='h4'>{el.title}</Typography>
                <Typography>{el.content}</Typography>
                <Link to={`/postlist/${el.id}`}>view post</Link>
               
                
                </Box>
        )
    })
}





      




     </Box>
    )
}

export default PostList;