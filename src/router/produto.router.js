const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaIdParams, validaId_Body } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaIdParams, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductsController);

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaIdParams, validaId_Body, produtoController.addCategoriaProdutoCottroller);

router.put("/update/:id", authMiddleware, validaIdParams, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaIdParams, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaIdParams, produtoController.removeCategoriaProdutoCottroller);

module.exports = router;