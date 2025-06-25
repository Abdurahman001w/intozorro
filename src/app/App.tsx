import { Suspense } from 'react';
import { classNames } from '../shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=''>
                <AppRouter />
            </Suspense>
        </div>
    );
};