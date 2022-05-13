import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import {Row,Col,Card}from 'react-bootstrap'
import { useParams } from 'react-router-dom'


function Details() {
    console.log(useParams())
    const {id}=useParams()
    const [data,setData]=useState([])
    const getMovies =async()=>{
        try {
            const {data} = await axios.get("https://movie-app-gmc.herokuapp.com/api/movies/"+id)
            setData(data)
            
        } catch (error) {
            console.error(error)
        }

    }
    useEffect(()=>{
        getMovies()
        },[])
  return (
      
    <div>  
        <Row xs={1} md={2} className="g-4">
                
                    <Col >
                        
                        <Card>
                            <Card.Img variant="top" src={data.imgUrl} />
                            <Card.Body>
                                <Card.Title>{data.title}</Card.Title>
                                <Card.Text>{data.description}</Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </Col>
               
            </Row>
    </div>
  )
}

export default Details