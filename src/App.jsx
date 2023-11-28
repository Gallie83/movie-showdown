import MovieBoard from './components/movie-board';
import Genres from './components/Genres';
import Movies from './components/Movies';
import './styles/App.css'


function App() {

  return <>
    <nav className='nav mx-auto'>
      Movie Showdown
    </nav>

    {/* <Genres></Genres> */}
    <MovieBoard>

    </MovieBoard>
    {/* <img src={board} alt="" /> */}

  </>

}

export default App
