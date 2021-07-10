import { createTheme } from '@material-ui/core/styles';

export default createTheme({
    overrides: {
        MuiButton: {
            root: {
                fontWeight: 'bold',
                backgroundColor: 'red',
                margin: '10px',
                '&:hover': {
                    backgroundColor: 'green',
                },
            },
        },
    },
    palette: {
        green: '#27AE60',
    },
});
