import React from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRowCustom from 'components/commons/Table/TableRowCustom/component';

const TableBodyCustom = props => {
  const {
    columns,
    rows,
    edit  
  } = props;

  console.log(edit.indexOf(1), edit);

  return (
    <TableBody>
      {
        rows.map(row => (
          <TableRowCustom
              key={row.id}
              columns={columns}
              row={row}
              isEdit = {edit.indexOf(row.id) >= 0 ? true : false}
          />
        ))
      }
    </TableBody>
  );
};

export default TableBodyCustom;
