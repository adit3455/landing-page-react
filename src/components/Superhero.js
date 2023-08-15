
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import antman from "../assets/images/superhero/antman.jpg"
import avenger from "../assets/images/superhero/avenger.jpg"
import batman from "../assets/images/superhero/batman.jpg"
import robinhood from "../assets/images/superhero/robinhood.jpg"
import spiderman from "../assets/images/superhero/spiderman-cover.jpg"
import superman from "../assets/images/superhero/superman.jpg"



const SuperHero = () => {
    return (
        <div>
            <Container >
                <h1 className="text-white p-4" id="superheroes">SUPERHEROES</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={antman} alt="Antman" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Antman</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={avenger} alt="Avenger" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Avenger</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage ">
                            <Image src={batman} alt="Batman" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Batman</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={robinhood} alt="Robin Hood" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Robin Hood</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={spiderman} alt="Spiderman" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Spiderman</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={superman} alt="Superman" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Superman</Card.Title>
                                <Card.Text className="text-left ">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                                <Card.Text>Last updated 3 mins ago</Card.Text>
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div className="p-2"></div>
            </Container>
        </div>
    )
}

export default SuperHero