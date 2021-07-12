import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';

const StyledTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.green,
        color: '#fff',
        boxShadow: theme.shadows[1],
        fontSize: 16,
        padding: 8,
        textDecoration: 'underline',
    },
    arrow: {
        color: theme.palette.green,
    },
}))(Tooltip);

export default StyledTooltip;
