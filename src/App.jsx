import styled from 'styled-components';
import ContentCard from './components/ContentCard';
import MovieBoard from './components/movie-board';
import Genres from './components/Genres';
import Movies from './components/Movies';
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

    <MovieBoard>
      {/* <Movies></Movies> */}
    </MovieBoard>
  </>

}

export default App
