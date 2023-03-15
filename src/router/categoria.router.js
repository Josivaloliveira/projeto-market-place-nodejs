const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validacategoria } = require("../middleware//validacao.middleware");

router.get("/find/:id", authMiddleware, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, categoriaController.findAllCategoriaController);

router.post("/create", authMiddleware, validacategoria, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, validacategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, categoriaController.deleteCategoriaController);

module.exports = router;