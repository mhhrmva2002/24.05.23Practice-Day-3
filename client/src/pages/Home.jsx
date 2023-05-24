import React, { useEffect,useState } from 'react'
import {Box,Button,Grid, Typography} from "@mui/material";
import { Card } from "antd";
import Swal from "sweetalert2";
import {deleteColorlibById, getAllColorlib} from "../api/requests";
const Home = () => {
    const [colorlibs, setColorlibs] = useState([]);
    useEffect(()=>{
        getAllColorlib().then(res=>{
            setColorlibs(res);
        })
    }, [])
  return (
    <>
<section className='one'>
    <div className='onr-div' >
<h6>Process Visa without within hours</h6>
<h1>Immigrations & <br/> Visa Consultation</h1>
<button className='Book'>Book Consultancy</button>
    </div>
    <div className='shekil'></div>
</section>
<section>
    <div style={{display:"flex",justifyContent:"space-around",margin:" 3% 20%" ,backgroundColor:"#f9f9ff" }}>
        <p style={{fontSize:"30px"}}>Start <span>planning</span> your <br/>New <span>Dream</span></p>
        <p style={{fontSize:"20px",color:"gray"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit,<br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation.</p>
   <div> <button style={{padding:"10px 20px",fontSize:"17px", backgroundColor:"#f6214b",color:"white",border:"none"}}>Request Free Consultancy</button></div>
    </div>
</section>
<section>
    <div className='box'>
    <div  style={{fontSize:"20px",margin:" 3% 20%" ,textAlign:"center"}}>
        <h1>Requirements to be Immigrants</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
    <Box sx={{ flexGrow: 1, width: "90%", margin: "25px auto" }}>
        <Grid container spacing={2}>
          {colorlibs && colorlibs.map((colorlib)=>{
            return <Grid key={colorlib.id} item lg={3} md={6} sm={12}>
            <Card 
              hoverable
              cover={
                <img
                  style={{border:"none",
                    height: "250px",
                    objectFit: "",
                    objectPosition: "top center",
                  }}
                  alt="example"
                  src={colorlib.ImageURL}
                />
              }
            >
              <Typography> {colorlib.Body}</Typography>
              <Typography>{colorlib.Title}</Typography>
              <Typography>{colorlib.Likes}</Typography>
              <Button className='delete' onClick={()=>{
                  Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setColorlibs(colorlibs.filter((x)=>x._id!==colorlib._id))
                      Swal.fire(
                        `${colorlib.Body} Deleted!`,
                        'Your colorlib has been deleted.',
                        'success'
                      )
                      deleteColorlibById(colorlib._id)
                     
                    }
                  })
                }
              } variant="outlined" color="warning">Delete</Button>
            </Card>
          </Grid>
          })}
        </Grid>
      </Box>
    </div>
</section>
    </>
  )
}

export default Home