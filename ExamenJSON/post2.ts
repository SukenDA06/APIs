//genera el archivo post2.json con la informacion de las estaciones de metro de cada linea
export type Post = {
    type: string,
    features: [
        {
            type: string,
            id: string,
            geometry: {
                type: string
                coordinates: [number, number]
            }
            geometry_name: string,
            properties: {
                ID_ESTACIO: number,
                CODI_GRUP_ESTACIO: number,
                NOM_ESTACIO: string,
                PICTO: string,
                DATA: string
            }
        }
    ]
}