import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';

import { useStyles } from 'components/screan/Admin/UsersPage/UserTable/stylesComponent';

import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';

const UserTable = props => {

  const classes = useStyles();

  const {
    fetchUserAdmin,
    users,
    edit
  } = props;

   const [editRow, setEditRow] = useState(edit);

    const onClickEdit = (rowId) => {
        console.log(rowId);
        const newEdit = [...editRow];

        const index = newEdit.indexOf(rowId);

        console.log('index', index);

        if (index<0) {
            newEdit.push(rowId);
        } else {
            newEdit.splice(index, 1);
        }


        setEditRow(newEdit);


    };

    const editAction = (
        <Fab
            color="secondary"
            aria-label="edit"
            className={classes.fab}
        >
        <Icon>edit_icon</Icon>
    </Fab>);

    const addAction = (<Fab color="secondary" aria-label="edit" className={classes.fab}>
        <Icon>edit_icon</Icon>
    </Fab>);

  const columns = [
    { id: 'id', label: 'ID', type: 'int' },
    { id: 'name', label: 'Name', type: 'string' },
    { id: 'age', label: 'Age', type: 'string' },
    { id: 'role', label: 'User role', type: 'string' },
    { id: 'position', label: 'Position', type: 'string' },
    {
        id: 'editAction',
        label: 'Edit',
        component: editAction,
        type: 'actions',
        onClick: onClickEdit
    }
  ];


  const orderBy = 'id';
  const order = 'desc';

  const onClickSort = (order, orderBy ) => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchUserAdmin(params);
  };


  useEffect(() => {
    const params = {
      'order' : order,
      'orderBy' : orderBy,
    };
    fetchUserAdmin(params);
  }, [fetchUserAdmin]);


  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>

        <TableHeadCustom
          orderBy = {orderBy}
          order = {order}
          columns = {columns}
          onClickSort = {(order, orderBy)=> (onClickSort(order, orderBy))}
        />

        <TableBodyCustom
          columns = { columns }
          rows = { users }
          edit = {editRow}
        />
      </Table>
    </Paper>
  );
};

export default UserTable;
