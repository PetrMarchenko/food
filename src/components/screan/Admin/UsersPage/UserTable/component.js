import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';

import { useStyles } from 'components/screan/Admin/UsersPage/UserTable/stylesComponent';

const UserTable = props => {

  const classes = useStyles();

  const {
    fetchUserAdmin,
    users,
  } = props;

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name' },
    { id: 'age', label: 'Age' },
    { id: 'role', label: 'User role' },
    { id: 'position', label: 'Position' },
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
        />
      </Table>
    </Paper>
  );
};

export default UserTable;
