import styled from 'styled-components';
import ContentCard from './components/ContentCard';

const Container = styled.div`
display:flex;
flex-direction:column;

`;

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

  return <Container>
    <Header>
      Movie Showdown
    </Header>
    <ContentContainer>
      <ContentCard />
      <ContentCard />

    </ContentContainer>
  </Container>

}

export default App
