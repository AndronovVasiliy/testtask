import './App.css';
import { Container, Row } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Gallery from './components/Gallery/Gallery';
import Header from './components/Header/Header';
import Aboutme from './components/Aboutme/Aboutme';
import { useEffect } from 'react';
import { getGallery } from './store/reducers/galleryReducer';
import { useDispatch } from 'react-redux';
import AboutPhoto from './components/Gallery/AboutPhoto';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGallery())
  }, [dispatch])


  return (
    <div>
      <Container style={{ backgroundColor: '#39352A', minHeight: '1310px', paddingBottom: '40px' }}>
        <Row style={{ height: '50px', paddingTop: '20px' }}><Header /></Row>
        <Row style={{ marginTop: '20px' }} className='justify-content-md-center'>
          <div>
            <Routes>
              <Route path='/' element={<Gallery />} />
              <Route path='/gallery' element={<Gallery />} />
              <Route path='/aboutme' element={<Aboutme />} />
              <Route path='/aboutphoto/:id' element={<AboutPhoto />} />
            </Routes>
          </div>
        </Row>
      </Container>
    </div>

  );

}

export default App;
