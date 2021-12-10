import { ThemeProvider } from 'styled-components';

import Router from './routes';
import {theme} from './styles/theme';
import GlobalStyle from './styles/globalStyles';

function App() {
    const isDark = true;

    return (
        <ThemeProvider theme={isDark? themeDark: theme}>
            <GlobalStyle />
            <Router />
        </ThemeProvider>
    );
}

export default App;