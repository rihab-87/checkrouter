import { Card , Row, Col,Container} from 'react-bootstrap';
import MovieCard from './movieCard'
const MoviesList = ({data}) => {
  console.log(data)
    return (
             
  
  <Container  style={{marginTop:"150px"}} className="fluid">
       <Row>
  
    {data.map((mvCard,idx) =><Col lg="4" style={{ display:"flex" ,justifyContent:"center"}} className="col-pad"> <MovieCard movie={mvCard}/>  </Col>)}
       </Row>
    </Container>
   
    )
}

export default MoviesList
