import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { FavoritesProvider } from './context/FavotiresContext';
import Routes from './routes';
import Global from './styles/global';
import theme from './styles/theme';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false, retry: false, cacheTime: 0 },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <QueryClientProvider client={queryClient}>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
