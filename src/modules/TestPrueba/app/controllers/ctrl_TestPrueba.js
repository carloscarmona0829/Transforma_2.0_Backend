const createService = require("../../domain/createTestPrueba.service");

class ctrl_TestPrueba {
    async create(req, res) {
        try {
            let objParams = req.body;
            let result = await createService(objParams);

            if (result.error) {
                throw new Error(result.msg);
            }

            res.status(201).json(result);
        } catch (error) {
            let result = {
                error: true,
                msg: error.message,
            };
            res.status(400).json(result);
        }
    }
}
module.exports = ctrl_TestPrueba;
