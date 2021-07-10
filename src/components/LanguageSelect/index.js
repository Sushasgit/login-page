import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

const SelectStyled = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: '#fff',
        color: '#000',
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),

        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            backgroundColor: '#fff',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function LanguageSelect() {
    const classes = useStyles();
    const [language, setLanguage] = React.useState('english');

    const handleChange = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <>
            <FormControl className={classes.margin}>
                <Select
                    labelId="language-select-label"
                    id="language-select"
                    value={language}
                    onChange={handleChange}
                    defaultValue={language}
                    input={<SelectStyled />}
                >
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="russian">Русский</MenuItem>
                    <MenuItem value="espanol">Espanol</MenuItem>
                </Select>
            </FormControl>
        </>
    );
}
