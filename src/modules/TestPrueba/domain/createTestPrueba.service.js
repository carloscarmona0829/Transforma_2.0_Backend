const dao = require("../infra/repository/daoTestPrueba");

const createTestPrueba = async (data) => {
    let repository = new dao();
    return await repository.createTestPrueba(data);
};

module.exports = createTestPrueba;
