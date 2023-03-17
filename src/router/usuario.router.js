const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuario.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaUsuario, validaEndereco, validaIdParams, validaId_Body } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

//rotas GET
router.get('/findById:id', authMiddleware, validaIdParams, usuarioController.findUserByIdController);
router.get('/findAll', authMiddleware, paginacao, usuarioController.findAllUsersController);

//rotas POST
router.post('/create', validaUsuario, usuarioController.createUserController);
router.post('/addAddress/:id', authMiddleware, validaIdParams, validaEndereco, usuarioController.addUserAddressController);
router.post('/addFavProduct/:id', authMiddleware, validaIdParams, validaId_Body, usuarioController.addUserFavProductController);

//rotas PUT
router.put('/update/:id', authMiddleware, validaIdParams, validaUsuario, usuarioController.updateUserController);

//rotas DELETE
router.delete('/remove/:id', authMiddleware, validaIdParams, usuarioController.removeUserController);
router.delete('/removeAddress', authMiddleware, usuarioController.removeUserAddressController);
router.delete('/removeFavProduct/:id', authMiddleware, usuarioController.removeUserFavProductController);

module.exports = router;