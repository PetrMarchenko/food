import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableBodyCustom = props => {
  const {
    columns,
    rows
  } = props;


  const getComponent = (row, column) => {
    if (column.type === 'object') {
      return column.component(row);
    }
    return row[column.id]
  };

  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          {
            columns.map(column => (
              <TableCell key={column.id}  align="left"> {getComponent(row, column)}</TableCell>
            ))
          }
        </TableRow>
      ))}
    </TableBody>
  );
};



export default TableBodyCustom;
