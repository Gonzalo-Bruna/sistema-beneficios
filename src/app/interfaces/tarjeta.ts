export interface Tarjeta {
    id_tarjeta?:number;
    fk_banco:number;
    banco:string; //temporal (dsp tiene que ser la FK que se consuma através del servicio)
    nombre:string;
    descripcion:string;
    tipo:string;
}

export const tarjetas: Tarjeta[] = [
    {id_tarjeta: 1, fk_banco: 2, banco:"Banco de Chile", nombre: "Tarjeta Gonzalo", descripcion: "Gonzalo chupalo", tipo: "Crédito"},
    {id_tarjeta: 2, fk_banco: 2, banco:"Banco de Chile", nombre: "Tarjeta Diego", descripcion: "Gonzalo chupalo", tipo: "Crédito"},
    {id_tarjeta: 3, fk_banco: 2, banco:"Banco de Chile", nombre: "Tarjeta Cristian", descripcion: "Gonzalo chupalo", tipo: "Débito"},
    {id_tarjeta: 4, fk_banco: 3, banco:"Banco Estado", nombre: "Tarjeta Gonzalo", descripcion: "Gonzalo chupalo", tipo: "Débito"},
    {id_tarjeta: 5, fk_banco: 3, banco:"Banco Estado", nombre: "Tarjeta Diego", descripcion: "Gonzalo chupalo", tipo: "Débito"},
    {id_tarjeta: 6, fk_banco: 3, banco:"Banco Estado", nombre: "Tarjeta Cristian", descripcion: "Gonzalo chupalo", tipo: "Débito"},
];
