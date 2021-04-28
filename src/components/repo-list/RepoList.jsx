import React from 'react';
import { useHistory } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#000',
    color: '#fff',
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    cursor: 'pointer',
  },
}))(TableCell);

const StyledPaper = withStyles((theme) => ({
  root: {
    maxHeight: 600,
    maxWidth: '100vw',
  },
}))(Paper);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },

    '&:hover': {
      background: 'rgba(0,0,0,.1)',
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const RepoList = ({ data }) => {
  const history = useHistory();
  const classes = useStyles();

  const onRowClick = (row) => {
    history.push(row.name, row);
  };

  return (
    <TableContainer component={StyledPaper}>
      <Table className={classes.table} aria-label="repo table" stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell>#</StyledTableCell>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Language</StyledTableCell>
            <StyledTableCell>Archived</StyledTableCell>
            <StyledTableCell align="right">Watchers</StyledTableCell>
            <StyledTableCell align="right">Forks</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <StyledTableRow key={row.name} onClick={() => onRowClick(row)}>
              <StyledTableCell>{index + 1}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.language}</StyledTableCell>
              <StyledTableCell>{row.archived ? 'Yes' : 'No'}</StyledTableCell>
              <StyledTableCell align="right">{row.watchers}</StyledTableCell>
              <StyledTableCell align="right">{row.forks}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepoList;
