export interface Beneficio {
    id_beneficio?:number;
    fk_tarjeta:number;
    banco:string; //temporal (dsp tiene que ser la FK de tarjeta que consulte al banco através de los servicios)
    tarjeta:string; //temporal (dsp tiene que ser la FK que se consuma através del servicio)
    nombre:string;
    descripcion:string;
    dia?:number;
    mes?:number;
    ano?:number;
    porcentaje_descuento:number;
    ubicacion:string;
    rubro:string;
    imagen:string;
}

export const beneficios: Beneficio[] = [
    {id_beneficio: 1, fk_tarjeta: 1, banco: "Banco de Chile", tarjeta: "Tarjeta Gonzalo", nombre: "Descuento Rappi", descripcion: "Descuento Comida", porcentaje_descuento: 30, ubicacion: "Valparaiso", rubro: "comida", imagen: '../../assets/images/beneficios/rappi.png'},
    {id_beneficio: 2, fk_tarjeta: 1, banco: "Banco de Chile", tarjeta: "Tarjeta Gonzalo", nombre: "Descuento Pedidosya", descripcion: "Descuento Comida", porcentaje_descuento: 25, ubicacion: "Valparaiso", rubro: "comida", imagen: '../../assets/images/beneficios/pedidosya.png'},
    {id_beneficio: 3, fk_tarjeta: 1, banco: "Banco de Chile", tarjeta: "Tarjeta Gonzalo", nombre: "Descuento Uber Eats", descripcion: "Descuento Comida", porcentaje_descuento: 25, ubicacion: "Valparaiso", rubro: "comida", imagen: '../../assets/images/beneficios/ubereats.png'},
    {id_beneficio: 4, fk_tarjeta: 3, banco: "Banco Estado", tarjeta: "Tarjeta Cristian", nombre: "Descuento Falabella", descripcion: "Descuento Ropa", porcentaje_descuento: 10, ubicacion: "Valparaiso", rubro: "ropa", imagen: '../../assets/images/beneficios/falabella.jpg'},
    {id_beneficio: 5, fk_tarjeta: 3, banco: "Banco Estado", tarjeta: "Tarjeta Cristian", nombre: "Descuento Ripley", descripcion: "Descuento Ropa", porcentaje_descuento: 10, ubicacion: "Valparaiso", rubro: "ropa", imagen: '../../assets/images/beneficios/ripley.jpg'},
    {id_beneficio: 6, fk_tarjeta: 3, banco: "Banco Estado", tarjeta: "Tarjeta Cristian", nombre: "Descuento Adidas", descripcion: "Descuento Ropa", porcentaje_descuento: 10, ubicacion: "Valparaiso", rubro: "ropa", imagen: '../../assets/images/beneficios/adidas.jpg'},
    {id_beneficio: 7, fk_tarjeta: 5, banco: "Banco Estado", tarjeta: "Tarjeta Diego", nombre: "Descuento Gimnasio Pacific", descripcion: "Descuento Gimnasio", porcentaje_descuento: 80, ubicacion: "Valparaiso", rubro: "gimnasio", imagen: '../../assets/images/beneficios/pacific.jpg'}
];