import { ThemeProvider } from '@emotion/react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { customTheme } from './styles/theme';
import Index from './pages/index';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
