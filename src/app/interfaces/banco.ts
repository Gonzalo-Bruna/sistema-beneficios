export interface Banco {
    id_banco?:number;
    nombre:string;
}

export const bancos: Banco[] = [
    {id_banco: 1, nombre: 'Banco BCI'},
    {id_banco: 2, nombre: 'Banco de Chile'},
    {id_banco: 3, nombre: 'Banco Estado'},
    {id_banco: 4, nombre: 'Banco Internacional'},
    {id_banco: 5, nombre: 'Banco Itaú'},
    {id_banco: 6, nombre: 'Banco Santander'},
    {id_banco: 7, nombre: 'Scotiabank'}
];