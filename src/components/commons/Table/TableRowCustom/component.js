import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
import {useStyles} from "components/commons/Table/TableHeadCustom/stylesComponent";
import TableButtonAction from 'components/commons/Table/TableButtonAction/component';

const TableRowCustom = props => {
  const {
    columns,
    row,
    isEdit
  } = props;

  const classes = useStyles();
  const [values, setValues] = React.useState({
    id: row['id'],
    name: row['name'],
    age: row['age'],
    role: row['role'],
    position: row['position']
  });
  const handleChange = name => event => {
    console.log(values);
    setValues({...values, [name]: event.target.value});
  };


  const getComponent = (row, column) => {

    // console.log(row);

    if (column.type === 'object') {
      // return column.component(row);
      return <TableButtonAction
        isEdit = {isEdit}
        row = {row}
        onClickOpen = {() => {console.log('open')}}
        onClickSave = {() => {console.log('save', values)}}
      />;
    }

    if (column.id === 'id') {
      return row[column.id]
    }

    if (isEdit && column.type === 'text') {
      return (
        <TextField
          id="standard-name"
          label="Name"
          className={classes.textField}
          value={values[column.id]}
          onChange={handleChange(column.id)}
          margin="normal"
        />
      );
    }

    return row[column.id]
  };

  return (
    <TableRow key={row.id}>
      {
        columns.map(column => (
          <TableCell key={column.id} align="left"> {getComponent(row, column)}</TableCell>
        ))
      }
    </TableRow>
  );

};


export default TableRowCustom;
