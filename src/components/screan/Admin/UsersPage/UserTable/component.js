import React, { useEffect, useState } from 'react';
import Table from '@material-ui/core/Table';
import Paper from '@material-ui/core/Paper';
import TableHeadCustom from 'components/commons/Table/TableHeadCustom/component';
import TableBodyCustom from 'components/commons/Table/TableBodyCustom/component';
import { useStyles } from 'components/screan/Admin/UsersPage/UserTable/stylesComponent';
import TableButtonAction from 'components/commons/Table/TableButtonAction/component';

const UserTable = props => {

  const classes = useStyles();

  const {
    fetchUserAdmin,
    users,
  } = props;


  const action = function(row) {
    return <TableButtonAction
      isEdit = {(editList.indexOf(row.id) >= 0)}
      row = {row}
      onClickOpen = {setEdit}
    />;
  };
  const [editList, setEditRow] = useState([1,3]);
  const setEdit = (row) => {
    const rowId = row.id;
    const newEditList = [...editList];
    const index = newEditList.indexOf(rowId);
    if (index<0) {
      newEditList.push(rowId);
    } else {
      newEditList.splice(index, 1);
    }
    setEditRow(newEditList);
  };

  const columns = [
    { id: 'id', label: 'ID', type: 'text' },
    { id: 'name', label: 'Name', type: 'text' },
    { id: 'age', label: 'Age', type: 'text' },
    { id: 'role', label: 'User role', type: 'text' },
    { id: 'position', label: 'Position', type: 'text' },
    { id: 'action', label: 'Action', type: 'object' , component: action},
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
