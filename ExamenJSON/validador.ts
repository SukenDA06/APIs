import Ajv from "ajv"
import lineas from "./lineas.json"

//Crea un esquema JSON para validar el JSON de las lineas de metro
const liniasSchema = {
    type: "object",
    additionalProperties: {
        type: "object",
        properties: {
            nombre: { type: "string" },
            línia: { type: "string" },
            color: { type: "string" },
            estacions: { type: "array" }
        },
        required: ["nombre", "línia", "color", "estacions"]
    }
}

const ajv = new Ajv()

//Valida el JSON de las lineas de metro
const validateLinia = ajv.compile(liniasSchema)

//Si el JSON no es valido, muestra un mensaje de error, si es valido muestra las estaciones de la linea 1
if (!validateLinia(lineas)) {
    console.log("La linea 1 no es valida 🚇❌")
} else {
    console.log(`Aquestes son totes les Lineas de metro: ${lineas.L1.estacions}!🚇✔`)
}