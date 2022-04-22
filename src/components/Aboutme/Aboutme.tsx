import { Card, ListGroup, ListGroupItem } from "react-bootstrap"
import myPhoto from './photo/myPhoto.jpeg'


const Aboutme = () => {
    return (
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={myPhoto} />
            <Card.Body>
                <Card.Title>Мерзляков Василий</Card.Title>
                <Card.Text>
                    Занялся веб разработкой не так давно, раньше работал менеджером по продажам(думаю вам этот опыт не очень интересен).
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Мои навыки: JS, TS, Webpack, React, Redux, Redux-thunk, Bootstrap</ListGroupItem>
            </ListGroup>
        </Card>
    )
}

export default Aboutme