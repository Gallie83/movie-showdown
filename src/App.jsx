// import MovieBoard from './components/movie-board';
import Movies from './components/Movies';
import './styles/App.css'


function App() {

  return <div className='bg-dark'>
    <nav className='nav'>
      Movie Showdown
    </nav>

    {/* <Genres></Genres> */}
    {/* <MovieBoard>
    </MovieBoard> */}
    <Movies></Movies>


  </div>

}

export default App
