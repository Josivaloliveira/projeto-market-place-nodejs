const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.get("/find/:id", authMiddleware, produtoController.findProductByIdController);
router.get("/findAll:id", authMiddleware, produtoController.findAllProductsController);

router.post("/create", authMiddleware, produtoController.createProductController);

router.put("/update/:id", authMiddleware, produtoController.updateProductController);

router.delete("/remove/:id", authMiddleware, produtoController.deleteProductController);

module.exports = router;