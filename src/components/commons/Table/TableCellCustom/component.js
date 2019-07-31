import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const TableCellCustom = props => {
  const {
    column,
    row,
    isEdit
  } = props;


  if (column.type === 'actions') {
      return (
          <TableCell
              key={column.id}
              align="left"
              onClick = {column.onClick.bind(this, row.id)}
          >
              {
                  column.component
              }
          </TableCell>
      );
  }

    if (isEdit) {
        return <TableCell key={column.id}  align="left"> 'edit' </TableCell>;
    }

  return <TableCell key={column.id}  align="left"> {row[column.id]}</TableCell>


};

export default TableCellCustom;