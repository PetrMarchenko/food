import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableBodyCustom = props => {
  const {
    columns,
    rows
  } = props;

  return (
    <TableBody>
      {rows.map(row => (
        <TableRow key={row.id}>
          {
            columns.map(column => (
              <TableCell key={column.id}  align="left"> {row[column.id]}</TableCell>
            ))
          }
        </TableRow>
      ))}
    </TableBody>
  );
};

export default TableBodyCustom;
