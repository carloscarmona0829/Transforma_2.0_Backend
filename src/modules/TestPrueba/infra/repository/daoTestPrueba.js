const sql = require("mssql");
const { conexion } = require("../../../../common/config/confSQL_connectionTransfroma");

class daoTestPrueba {
    async createTestPrueba(data) {
        try {
            let conn = await new sql.ConnectionPool(conexion).connect();
            await conn.query`
                INSERT INTO tbl_TestPrueba (strDato1, strDato2)
                VALUES (${data.strDato1}, ${data.strDato2})`;

            let result = {
                error: false,
                msg: "TestPrueba creado correctamente",
            };

            sql.close(conexion);
            return result;
        } catch (error) {
            let result = {
                error: true,
                msg: error.message || "Error al crear TestPrueba",
            };
            sql.close(conexion);
            return result;
        }
    }
}
module.exports = daoTestPrueba;
