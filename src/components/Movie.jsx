import axios from 'axios'
import React ,{useEffect, useState} from 'react'
import {Row,Col,Card}from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import { Button } from 'react-bootstrap';
import CustomModals from './modals/modals';

function Movie({search}) {
    let [data,setData]=useState([])
    const [movie,setMovie]=useState({})

    const getMovies =async()=>{
        try {
            const {data} = await axios.get("https://movie-app-gmc.herokuapp.com/api/movies")
            setData(data)
        } catch (error) {
            console.error(error)
        }

    }

    useEffect(()=>{
        getMovies()
    },[])

        const DeleteMovie = (id) =>{
            setData(data?.filter(el=> el._id !== id))
        }
        const pushData = () =>{
            if(Object.keys(movie).length !== 0 ){
                console.log('data ' ,movie)
                data = ([...data,movie])
                
                setData(data)
            }
        
        }
        useEffect(() => {
            pushData()
        }, [movie])
        
        console.log(data)
    return (
        <div>
            <Row xs={1} md={4} className="g-4">
                {data?.filter(el => el.title.toLowerCase().includes(search.toLowerCase())).map((el, idx) => (
                    <Col key={`Movie${idx}`}>
                        <Link to={`/Movie/${el._id }`}>
                        <Card>
                            <Card.Img variant="top" src={el.imgUrl} />
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Text>
                                    {el.description}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                
                                <ReactStars
                                    count={5}
                                    value={el.rate}
                                    edit={false}
                                    size={24}
                                    activeColor="#ffd700"
                                    classNames='myRating'
                                />
                                
                            </Card.Footer>
                        </Card>
                        </Link>
                        
                        <Button variant='outline-danger' onClick={()=> DeleteMovie(el._id)}>Delete</Button>
                        <CustomModals length={data[data.length -1 ]._id} setMovie={setMovie}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Movie