const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validacategoria, validaIdParams } = require("../middleware//validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");


router.get("/find/:id", authMiddleware, validaIdParams, categoriaController.findCategoriaByIdController);
router.get("/findAll", authMiddleware, paginacao, categoriaController.findAllCategoriaController);

router.post("/create", authMiddleware, validacategoria, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, validaIdParams, validacategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, validaIdParams, categoriaController.deleteCategoriaController);

module.exports = router;