import styled from 'styled-components';
import ContentCard from './components/ContentCard';
import Genres from './components/Genres';
import Movies from './components/Movies';
import Container from 'react-bootstrap/Container';
import './styles/App.css'


// const ContentContainer = styled.div`
// display:flex;
// flex-direction:row;
// flex-wrap: wrap;
// padding: 2rem;
// justify-content: space-evenly;
// `;


function App() {

  return <>
    <nav className='nav'>
      Movie Showdown
    </nav>

    <Genres></Genres>

    <Movies></Movies>
    {/* </Container> */}
    {/* <Genres></Genres> */}
    {/* <ContentContainer> */}
    {/* <ContentCard /> */}
    {/* </ContentContainer> */}
  </>

}

export default App
