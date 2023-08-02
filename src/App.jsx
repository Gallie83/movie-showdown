import styled from 'styled-components';

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

function App() {

  return <Container>
    <Header>
      Movie Showdown
    </Header>
  </Container>

}

export default App
