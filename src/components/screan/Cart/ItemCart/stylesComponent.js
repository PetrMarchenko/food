import {makeStyles} from "@material-ui/core";
import {blueGrey} from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => ({
    iconHover: {
        margin: theme.spacing(2),
        '&:hover': {
            color: blueGrey[800],
        },
    },
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 100,
    }
}));

