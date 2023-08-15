import { Navbar, Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <Navbar variant="dark">
            <Container>
                <Navbar.Brand >Film Directory</Navbar.Brand>
                <Nav>
                    <Nav.Link onClick={() => {
                        const anchor = document.querySelector('#trending')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} >Trending</Nav.Link>
                    <Nav.Link onClick={() => {
                        const anchor = document.querySelector('#superheroes')
                        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }} >Super Heroes</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavigationBar