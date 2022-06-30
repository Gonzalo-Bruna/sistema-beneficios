export interface Beneficio {
    id_beneficio?:number;
    fk_tarjeta:number;
    tarjeta:string; //temporal (dsp tiene que ser la FK que se consuma através del servicio)
    nombre:string;
    descripcion:string;
    dia?:number;
    mes?:number;
    ano?:number;
    porcentaje_descuento:number;
    ubicacion:string;
    rubro:string;
}

export const beneficios: Beneficio[] = [
    {id_beneficio: 1, fk_tarjeta: 1, tarjeta: "Tarjeta Gonzalo", nombre: "descuento rappi", descripcion: "descuento comida", porcentaje_descuento: 30, ubicacion: "valparaiso", rubro: "comida"},
    {id_beneficio: 2, fk_tarjeta: 1, tarjeta: "Tarjeta Gonzalo", nombre: "descuento pedidosya", descripcion: "descuento comida", porcentaje_descuento: 25, ubicacion: "valparaiso", rubro: "comida"},
    {id_beneficio: 3, fk_tarjeta: 1, tarjeta: "Tarjeta Gonzalo", nombre: "descuento uber eats", descripcion: "descuento comida", porcentaje_descuento: 25, ubicacion: "valparaiso", rubro: "comida"},
    {id_beneficio: 4, fk_tarjeta: 3, tarjeta: "Tarjeta Cristian", nombre: "descuento falabella", descripcion: "descuento ropa", porcentaje_descuento: 10, ubicacion: "valparaiso", rubro: "ropa"},
    {id_beneficio: 5, fk_tarjeta: 3, tarjeta: "Tarjeta Cristian", nombre: "descuento ripley", descripcion: "descuento ropa", porcentaje_descuento: 10, ubicacion: "valparaiso", rubro: "ropa"},
    {id_beneficio: 6, fk_tarjeta: 3, tarjeta: "Tarjeta Cristian", nombre: "descuento adidas", descripcion: "descuento ropa", porcentaje_descuento: 10, ubicacion: "valparaiso", rubro: "ropa"},
    {id_beneficio: 7, fk_tarjeta: 5, tarjeta: "Tarjeta Diego", nombre: "descuento gimnasio pacific", descripcion: "descuento gimnasio", porcentaje_descuento: 80, ubicacion: "valparaiso", rubro: "gimnasio"}
];