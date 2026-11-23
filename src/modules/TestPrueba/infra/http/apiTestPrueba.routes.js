const routes = require("express").Router();
const classController = require("../../app/controllers/ctrl_TestPrueba");

routes.post(
    "/transforma/api/testPrueba/create",
    async (req, res) => {
        let controller = new classController();
        await controller.create(req, res);
    }
);

module.exports = routes;
