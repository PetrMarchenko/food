import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    cardMedia: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flexGrow: 1,
    },
}));



