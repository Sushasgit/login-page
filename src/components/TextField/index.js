import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';

const TextField = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
    },
    underline: {
        '&:after': {
            borderColor: theme.palette.green,
        },
    },
}))(Input);

export default TextField;
