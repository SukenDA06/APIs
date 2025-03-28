import Ajv from "ajv"
import estaciones from "./estaciones.json"

//Crea un esquema JSON para validar el JSON de las estaciones de metro
const estacionesSchema = {
    type: "object",
    properties: {
      type: { type: "string" },
      features: {
        type: "array",
        items: {
          type: "object",
          properties: {
            type: { type: "string" },
            id: { type: "string" },
            geometry: {
              type: "object",
              properties: {
                type: { type: "string" },
                coordinates: {
                  type: "array",
                  items: { type: "number" },
                  minItems: 2,
                  maxItems: 2,
                },
              },
              required: ["type", "coordinates"],
            },
            geometry_name: { type: "string" },
            properties: {
              type: "object",
              properties: {
                ID_ESTACIO: { type: "number" },
                CODI_GRUP_ESTACIO: { type: "number" },
                NOM_ESTACIO: { type: "string" },
                PICTO: { type: "string" },
                DATA: { type: "string" },
              },
              required: [
                "ID_ESTACIO",
                "CODI_GRUP_ESTACIO",
                "NOM_ESTACIO",
                "PICTO",
                "DATA",
              ],
            },
          },
          required: ["type", "id", "geometry", "geometry_name", "properties"],
        },
      },
    },
    required: ["type", "features"],
    //Permetre propietats addicionals como el totalFeatures
    additionalProperties: true
  }


    const ajv = new Ajv()

    //Valida el JSON de las lineas de metro
    const validateEstaciones = ajv.compile(estacionesSchema)

    //Si el JSON no es valido, muestra un mensaje de error, si es valido muestra la informacion de las estaciones
    if (!validateEstaciones(estaciones)) {
        console.log("Les estaciones no son valides 🚇❌")
        console.log(validateEstaciones.errors)
    } else {
        console.log(`Aquestes son totes les estacions de metro:`)
        console.log(JSON.stringify(estaciones.features, null, 2), '!🚇✔');
}