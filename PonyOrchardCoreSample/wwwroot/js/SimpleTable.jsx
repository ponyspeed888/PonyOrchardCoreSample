const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

//function createData(name, calories, fat, carbs, protein) {
//    return { name, calories, fat, carbs, protein };
//}

//const rows = [
//    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//    createData('Eclair', 262, 16.0, 24, 6.0),
//    createData('Cupcake', 305, 3.7, 67, 4.3),
//    createData('Gingerbread', 356, 16.0, 49, 3.9),
//];

export default function SimpleTable(props ) {
    const classes = ""; //useStyles();
    var rows = JSON.parse(props.rows);
    console.log(rows);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Title (100g serving)</TableCell>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Url</TableCell>
                        <TableCell align="right">ParentId</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.Id}>
                            <TableCell component="th" scope="row">
                                {row.Title}
                            </TableCell>
                            <TableCell align="right">{row.Id}</TableCell>
                            <TableCell align="right">{row.Title}</TableCell>
                            <TableCell align="right">{row.Url}</TableCell>
                            <TableCell align="right">{row.ParentId}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
