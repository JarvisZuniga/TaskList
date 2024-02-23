import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Grid, GridItem } from '@chakra-ui/react';
import './App.css';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TaskPage from './pages/TaskPage';
import Footer from './components/Footer'; 
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
          <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'50px 1fr 100px'} // Aumentar el tamaño de la fila del footer
            gridTemplateColumns={'150px 1fr'}
            gap='1'
            color='#333'
            fontWeight='bold'
            h='100%'
          >
            <GridItem pl='2' bg='#fff' area={'header'}>
            <Header />
            </GridItem>
            <GridItem pl='2' bg='#eee' area={'nav'}>
              <nav>
                <Menu />
              </nav>
            </GridItem>
            <GridItem pl='2' bg='#fff' area={'main'}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/tasks" element={<TaskPage />} />
              </Routes>
            </GridItem>
            <GridItem pl='2' bg='#eee' area={'footer'}>
              <Footer />
            </GridItem>
          </Grid>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
