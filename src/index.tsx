import { createRoot } from 'react-dom/client';
import { App } from './app/App';
import { BrowserRouter } from 'react-router-dom';
import './app/styles/index.scss';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { ErrorBoundary } from './app/providers/ErrorBoundary';

const root = createRoot(document.getElementById('root')!);
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
);
