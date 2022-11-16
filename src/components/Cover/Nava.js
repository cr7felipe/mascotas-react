import { Nav } from 'react-bootstrap'
import "./Nava.css";
import { Outlet, Link } from 'react-router-dom'

const Nava = () => {
    return (
        <Nav className="Nava"
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >

            <Nav.Item>
                <Nav.Link href="/">Inicio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/Logi"> Registro</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/About"> Nosostros</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Buscados mascotas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Adopta a un amigo</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">Nuestro blog</Nav.Link>
            </Nav.Item>

            <Outlet />
        </Nav>

    )

}
export default Nava