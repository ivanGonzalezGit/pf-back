//si quiero exportar let combo = [..], tengo que poner const { combo } = require('./combos'); en el otro archivo, para que lo desestructure y no importe un objeto combo sino lo que contiene (la propiedad combos.combo); 

export const combos = [
    {
        id: 1,
        nombre: "Toro y Pampa",
        ingredientes_sandwich: ["pan", "vacío", "lechuga", "tomate", "salsa secreta a base de chimichurri"],
        guarnicion: "papa fritas bastón",
        bebida: "vino con soda",
        precio: 5000,
        extra: null,
        espera: 4000
    },

    {
        id: 2,
        nombre: "Reina Isabel II",
        ingredientes_sandwich: ["pan de papa", "lonjas de ave en peligro de extinción", "lechuga morada", "aguacate", "salsa 007"],
        guarnicion: "papas noisette",
        bebida: "jugo de arándanos",
        precio: 15000,
        extra: null,
        espera: 5000
    },

    {
        id: 3,
        nombre: "Cajita Milonga",
        ingredientes_sandwich: ["pan", "medallón de carne vacuna", "queso fresco"],
        guarnicion: "papas fritas bastón",
        bebida: "gaseosa",
        precio: 20000,
        extra: "muñeco",
        espera: 3000
    },

    {
        id: 4,
        nombre: "Cipolla",
        ingredientes_sandwich: ["pan", "medallón de carne vacuna", "lechuga", "tomate", "pepinillos en conserva", "cebolla colorada", "salsa secreta"],
        guarnicion: "aros de cebolla",
        bebida: "gaseosa",
        precio: 6000,
        extra: null,
        espera: 4000
    },

    {
        id: 5,
        nombre:"6 y 30",
        ingredientes_sandwich:["pan", "medallón de carne de pollo", "panceta frita", "lechuga", "tomate", "pepino", "salsa secreta a base únicamente de mayonesa"],
        guarnicion:"ensalada de tomate, lechuga y huevo",
        bebida:"gaseosa",
        precio: 4000,
        extra: null,
        espera: 5500
    },

    {
        id: 6,
        nombre: "Gino Amattore",
        ingredientes_sandwich: ["pan árabe", "jamón serrano", "queso dambo", "tomates cherrys", "queso parmesano rayado", "aceite de oliva"],
        guarnicion: "Aceitunas con morrón y nueces",
        bebida: "cinzano",
        precio: 10000,
        extra: null,
        espera: 2000
    }
]
