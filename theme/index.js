import { createTheme } from '@material-ui/core/styles';

export default createTheme({
    overrides: {
        MuiButton: {
            root: {
                fontWeight: 'bold',
                margin: '10px',
            },
        },
    },
    palette: {
        green: '#27AE60',
    },
});
