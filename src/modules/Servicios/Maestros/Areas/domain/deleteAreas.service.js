//clases
const classInterfaceDAOAreas = require("../infra/conectors/interfaseDAOAreas")

class deleteAreas{
    #intIdAreas;
    #objResult;

    constructor(objParms) {
        this.#intIdAreas = objParms.intId;
    }

    async main() {
        await this.#validations();
        await this.#deleteAreas();

        return this.#objResult;
    }

    async #validations() {
        if (!this.#intIdAreas) {
            throw new Error("Se esperaban parametros de entrada");
        }
    }

    async #deleteAreas(){
        let dao = new classInterfaceDAOAreas();
        let query = await dao.deleteAreas({
            intId: this.#intIdAreas,
        });

        if (query.error) {
            throw new Error(
                "Ha ocurrido un error al momento de eliminar el Areas"
            );
        }

        this.#objResult = {
            error: query.error,
            data: query.data,
            msg: query.msg,
        };
    }

}
module.exports = deleteAreas