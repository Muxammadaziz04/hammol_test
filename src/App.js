import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './components/Navbar'
import { routes } from './routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Navbar />
          <Routes>
            {
              routes.map((route, index) => <Route path={route.path} element={<route.element key={index} />} />)
            }
          </Routes>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
