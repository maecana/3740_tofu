// Package / Dependency Imports
import styled from 'styled-components';
// Local Imports
import './App.css';
import { devices } from './constants/devices';


const App = () => {

  return (
    <Container>
      <Background src="/assets/images/noise_black_wave_solid.svg" alt="" />
      3740 TOFU

    </Container>
  );
};


const Container = styled.div`
  position: relative;
  width: 100%;
  inset: 0;
  min-height: calc(100vh-70px);
  overflow: hidden;
`;

const Background = styled.img`
  z-index: -1;
  position: fixed;
  width: 100vw;
  height: 100vh;

  
`;

export default App;
