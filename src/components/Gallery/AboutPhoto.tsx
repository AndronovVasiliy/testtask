import { useEffect } from "react"
import { Button, Figure } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom"
import { getAboutPhoto } from "../../store/reducers/galleryReducer"
import { RootState } from "../../store/store"
import Preloader from "../Common/Preloader"

const AboutPhoto = () => {

  const photo = useSelector((state: RootState) => state.gallery.aboutPhoto)
  const dispatch = useDispatch()

  let id = useParams<{ id?: string }>()

  useEffect(() => {
    if (!photo.id && id.id) {
      dispatch(getAboutPhoto(id.id))
    }
  }, [photo, dispatch, id.id])



  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
      {photo.id ?
        <Figure style = {{boxSizing: 'border-box'}}>
          <Figure.Image
            alt={photo.title}
            src={photo.url}
          />
          <Figure.Caption>
            {photo.title}
          </Figure.Caption>
        </Figure>
        :
        <Figure>
          <Preloader />
          <Figure.Caption>
            Фото загружается
          </Figure.Caption>
        </Figure>
      }
      <div><NavLink to='/gallery'><Button variant="secondary">Назад</Button></NavLink></div>
    </div>

  )
}

export default AboutPhoto