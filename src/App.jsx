import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Grid, GridItem } from '@chakra-ui/react';
import Menu from './components/Menu';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <div style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
          <Grid
            templateAreas={`"header header"
                            "nav main"
                            "nav footer"`}
            gridTemplateRows={'50px 1fr 30px'}
            gridTemplateColumns={'150px 1fr'}
            gap='1'
            color='#333'
            fontWeight='bold'
            h='100%'
          >
            <GridItem pl='2' bg='#fff' area={'header'}>
              Header
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
              Footer
            </GridItem>
          </Grid>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
