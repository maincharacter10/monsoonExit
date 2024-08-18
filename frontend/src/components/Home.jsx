import React, { useState, useEffect } from 'react'
import { Grid,Card, CardMedia,CardContent,Typography, Button, CardActions } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    var[data,setData] = useState([]);
    var navigate = useNavigate();

    const del = (id)=>{
        axios.delete('http://localhost:3001/delete/'+id).then((response)=>{
        console.log(response);
        window.location.reload(true);
        }).catch((error)=>{
          console.log(error);
        })
    }

    const update = (data)=>{
        console.log(data)
        navigate('/add', {state :{val : data}})
        console.log(data);
    }

    useEffect (()=>{
        axios.get('http://localhost:3001/get').then((response)=>{
        console.log(response);
        setData(response.data);
        }).catch((error)=>{
          console.log(error)
        })
      },[])
  return (
    <div style={{marginTop:'3%'}}>
    <Grid justifyContent={'center'} container spacing={2} >
        {data.map((d)=>{
            return(
                <Grid item xs={6} md={3} key={d._id}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="img not loaded!"
                    height="140"
                    image={d.img_url}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {d.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {d.content}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={()=>{del(d._id)}} size="small" variant='contained'>Delete</Button>
                    <Button onClick={()=>{update(d)}} size="small" variant='contained'>Update</Button>
                </CardActions>
                </Card>
            </Grid>
            );
        })}
    </Grid>
    </div>
  )
}

export default Home
