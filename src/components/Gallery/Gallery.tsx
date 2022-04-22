import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import Preloader from "../Common/Preloader"
import CarouselGarelly from "./Carousel"

const Gallery = () => {

    const arrPhoto = useSelector((state: RootState) => state.gallery.gallery)

    const photoForCarousel1 = arrPhoto.slice(0, 6)
    const photoForCarousel2 = arrPhoto.slice(6, 12)
    const photoForCarousel3 = arrPhoto.slice(12, 18)
    const photoForCarousel4 = arrPhoto.slice(18, 24)

    return (
        <>
            { arrPhoto.length > 1 ?
                <Container>
                    <Row>
                        <Col >
                            <h2>Галерея 1</h2>
                            <CarouselGarelly photos={photoForCarousel1} />
                        </Col>
                        <Col >
                            <h2>Галерея 2</h2>
                            <CarouselGarelly photos={photoForCarousel2} />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: '20px' }}>
                        <Col >
                            <h2>Галерея 3</h2>
                            <CarouselGarelly photos={photoForCarousel3} />
                        </Col>
                        <Col >
                            <h2>Галерея 4</h2>
                            <CarouselGarelly photos={photoForCarousel4} />
                        </Col>
                    </Row>
                </Container>
                :
                <div><Preloader /></div>
            }
        </>
    )
}

export default Gallery