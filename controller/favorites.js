import { db } from "../db.js";

export const getFavorites = (req, res) => {
    const favUser = req.query.q;
    const q = `
        SELECT favoritos.idfavoritos as id, idproduto, nmproduto, preco, urlimg
        FROM produtos
        INNER JOIN favoritos ON favoritos.produtoid = produtos.idproduto
        WHERE usuarioid = ?`;
    
    db.query(q, [favUser], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(200).json(result);
    });
};


export const addFavorites = (req, res) => {
    const q = "INSERT INTO favoritos(`produtoid`, `usuarioid`) VALUES (?)";
    const values = [req.body.produtoid, req.body.usuarioid];
    
    db.query(q, [values], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
        }
        return res.status(201).json({ message: "Produto criado com sucesso." });
    });
};

export const deleteFavorites = (req, res) => {
    const q = "DELETE FROM favoritos WHERE `idfavoritos` = ?";
  
    db.query(q, [req.params.id], (err) => {
      if (err) return res.json(err);
  
      return res.status(204).json("favoritos removido com sucesso.");
    });
  };