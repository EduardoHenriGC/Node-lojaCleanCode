import { db } from "../db.js";

export const getProducts = (_, res) => {
  const q = "SELECT * FROM produtos";

  db.query(q, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(data);
  });
};

export const getProductsbyId = (req, res) => {
  const q = "SELECT * FROM produtos WHERE idproduto = ?";

  db.query(q, req.params.id, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json(data);
  });
};

export const addProducts = (req, res) => {
  const q =
    "INSERT INTO produtos(`nmproduto`, `preco`, `urlimg`, `descricao`) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.nmproduto,
    req.body.preco,
    req.body.urlimg,
    req.body.descricao,
  ];

  db.query(q, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(201).json({ message: "Produto criado com sucesso." });
  });
};

export const updateProduct = (req, res) => {
  const q =
    "UPDATE produtos SET `nmproduto` = ?, `preco` = ?, `urlimg` = ?, `descricao` = ? WHERE `idproduto` = ?";

  const values = [
    req.body.nmproduto,
    req.body.preco,
    req.body.urlimg,
    req.body.descricao,
    req.params.id,
  ];

  db.query(q, values, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json({ message: "Produto atualizado com sucesso." });
  });
};

export const deleteProduct = (req, res) => {
  const q = "DELETE FROM produtos WHERE `idproduto` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    return res.status(200).json({ message: "Produto deletado com sucesso." });
  });
};
