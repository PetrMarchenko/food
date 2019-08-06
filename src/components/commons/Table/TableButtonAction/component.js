import React from 'react';
import { useStyles } from './stylesComponent';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';

const TableButtonAction = props => {
  const classes = useStyles();
  const {
    isEdit,
    row,
    onClickOpen,
    onClickSave,
  } = props;

  const [open, setOpen] = React.useState(isEdit);

  function handleRequestOpen(row) {
    setOpen((open !== true));
    onClickOpen(row);
  }

  function handleRequestClose(row) {
    setOpen((open !== true));
    onClickOpen(row);
    onClickSave();
  }


  if (open === false) {
    return (
      <Fab
        color="secondary"
        aria-label="edit"
        className={classes.fab}
        onClick={handleRequestOpen.bind(this, row)}
      >
        <Icon>edit_icon</Icon>
      </Fab>
    );
  }

  if (open === true) {
    return (
      <div>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleRequestClose.bind(this, row)}
        >
          Save
        </Fab>
        <Fab
          size="small"
          color="secondary"
          aria-label="add"
          className={classes.margin}
          onClick={handleRequestOpen.bind(this, row)}
        >
          Cancel
        </Fab>
      </div>
    )
  }
};

export default TableButtonAction;
