
import { Card, Col, Container, Image, Row } from "react-bootstrap"
import duneImage from "../assets/images/trending/dune.jpg"
import everything from "../assets/images/trending/everything.jpg"
import infinite from "../assets/images/trending/infinite.jpg"
import joker from "../assets/images/trending/joker.jpg"
import lightyear from "../assets/images/trending/lightyear.jpg"
import morbius from "../assets/images/trending/morbius.jpg"


const Trending = () => {
    return (
        <div>
            <Container >
                <h1 className="text-white p-4" id="trending">TRENDING MOVIES</h1>
                <Row>
                    <Col md={4} className="movieWrapper">
                        <Card className="bg-dark  movieImage">
                            <Image src={duneImage} alt="Dune Movies" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Dune Movies</Card.Title>
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
                            <Image src={everything} alt="Everything Everywhere All At Once" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Everything Everywhere All At Once</Card.Title>
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
                            <Image src={infinite} alt="Infinite Storm" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Infinite Storm</Card.Title>
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
                            <Image src={joker} alt="Joker" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Joker</Card.Title>
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
                            <Image src={lightyear} alt="Buzz Lightyear" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Buzz Lightyear</Card.Title>
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
                            <Image src={morbius} alt="Morbius" className="images" />
                            <div className="m-2 p-1 text-white">
                                <Card.Title className="text-center">Morbius</Card.Title>
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

export default Trending