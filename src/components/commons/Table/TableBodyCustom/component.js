import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import TableRowCustom from 'components/commons/Table/TableRowCustom/component';

const TableBodyCustom = props => {



  const {
    columns,
    rows,
    editList
  } = props;


  console.log('TableBodyCustom', rows);

  // const getComponent = (row, column) => {
  //   if (column.type === 'object') {
  //     return column.component(row);
  //   }
  //   return row[column.id]
  // };

  return (
      <TableBody>
        {rows.map(row => (
            <TableRowCustom
                row={row}
                columns={columns}
                isEdit = {(editList.indexOf(row.id) >= 0)}
            />
        ))}
      </TableBody>
  );
};



export default TableBodyCustom;
