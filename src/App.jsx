import styled from 'styled-components';
import ContentCard from './components/ContentCard';
import Genres from './components/Genres';
import Movies from './components/Movies';
import Container from 'react-bootstrap/Container';


// const Container = styled.div`
// display:flex;
// flex-direction:column;
// `;

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

const ContentContainer = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
padding: 2rem;
justify-content: space-evenly;
`;


function App() {

  return <>
    <nav>Movies</nav>
    <Header>
      Movie Showdown
    </Header>
    <Container fluid>

      <Movies></Movies>
    </Container>
    {/* <Genres></Genres> */}
    {/* <ContentContainer> */}
    {/* <ContentCard /> */}
    {/* </ContentContainer> */}
  </>

}

export default App
