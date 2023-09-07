import { db } from "../db.js";


export const getSearch = (req, res) => {
    const searchTerm = req.query.buscar;
    const query = `SELECT * FROM produtos WHERE nmproduto LIKE '%${searchTerm}%'`;
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error executing SQL query', err);
        res.status(500).send('Internal Server Error');
        return;
      }
      res.send(results);
    });
   
}
