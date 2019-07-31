import React from 'react';
import TableRow from '@material-ui/core/TableRow';

import TableCellCustom from 'components/commons/Table/TableCellCustom/component';

const TableRowCustom = props => {
  const {
    columns,
    row,
    isEdit
  } = props;

    console.log('isEdit', isEdit);

  return (
    <TableRow key={row.id}>
      {
        columns.map(column => (
            <TableCellCustom
              key={column.id}
              column = {column}
              row = {row}
              isEdit = {isEdit}
          />
        ))
      }
    </TableRow>
  );
};

export default TableRowCustom;
