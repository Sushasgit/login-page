import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        '@global': {
            html: {
                '-webkit-font-smoothing': 'antialiased',
                '-moz-osx-font-smoothing': 'grayscale',
                height: '100%',
                width: '100%',
            },
            '*, *::before, *::after': {
                boxSizing: 'border-box',
            },
            body: {
                margin: 0,
                fontFamily: 'Roboto, sans-serif',
            },
            '#root': {
                height: '100%',
                width: '100%',
            },
        },
    })
);

const GlobalStyles = () => {
    useStyles();

    return null;
};

export default GlobalStyles;
