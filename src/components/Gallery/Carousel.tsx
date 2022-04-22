import { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { NavLink } from 'react-router-dom'
import { GalleryItemType, setAboutPhoto } from '../../store/reducers/galleryReducer'
import { useDispatch } from 'react-redux';

type PropsType = {
  photos: Array<GalleryItemType>
}

const CarouselGarelly = (props: PropsType) => {

  const [hover, setHover] = useState(false);

  const handleMouseIn = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <div onMouseOver={handleMouseIn} onMouseOut={handleMouseOut} className='carousel'>
      <Carousel indicators = {false} interval={null} fade>
        {props.photos.map(i => {
          return (
            <Carousel.Item key = {i.id}>
              {hover && <ButtonAboutPhoto {...i}/>}
              <img
                className="d-block w-100"
                src={i.url}
                alt={i.title}
              />
            </Carousel.Item>
          )
        })}
      </Carousel>
    </div>
  )
}

export default CarouselGarelly

const ButtonAboutPhoto = (props: GalleryItemType) => {

  const dispatch = useDispatch()

  const onClick = () => {
    dispatch(setAboutPhoto(props))
  }
  
  return (
    <div style = {{position: 'absolute', left: '20%', right: '20%'}}>
      <NavLink to={`/aboutphoto/${props.id}`}><div style={{backgroundColor: 'white', textAlign: 'center'}} onClick={() =>onClick()}>Подробности о картинке</div></NavLink>
    </div>
  )
}