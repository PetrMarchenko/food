import React, { useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './stylesComponent';

import TableSortLabel from '@material-ui/core/TableSortLabel';

const UsersPage = props => {

  const classes = useStyles();
  const {
    fetchUserAdmin,
    users,
  } = props;

  useEffect(() => {
    fetchUserAdmin();
    console.log('useEffect fetchUserAdmin');
  }, [fetchUserAdmin]);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left">

              <TableSortLabel
                active={true}
                direction={'desc'}
                onClick={() => {console.log('lo-lo')}}
              >
                ID
                {/*{orderBy === row.id ? (*/}
                  <span className={classes.visuallyHidden}>
                  {/*{'desc' === 'desc' ? 'sorted descending' : 'sorted ascending'}*/}
                </span>
                {/*) : null}*/}
              </TableSortLabel>

            </TableCell>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Age</TableCell>
            <TableCell align="left">Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(row => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.age}</TableCell>
              <TableCell align="left">{row.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default UsersPage;
