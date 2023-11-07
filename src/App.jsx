import styled from 'styled-components';
import ContentCard from './components/ContentCard';
import Genres from './components/Genres';
import Movies from './components/Movies';



const Header = styled.div`
display:flex;
flex-direction:row;
background-color: red;
color: black;
padding: 1rem;
font-size: 3rem;
font-weight: bold;
box-shadow: 0 3px 6px 0 #555;
`;




function App() {

  return <>
    <nav>Movies</nav>
    <Header>
      Movie Showdown
    </Header>
    <Movies></Movies>
    {/* <Genres></Genres> */}
    {/* <ContentCard /> */}
  </>

}

export default App
