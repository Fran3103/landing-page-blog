const produtos = document.querySelector('.producto');
const compania = document.querySelector('.company');
const conectar = document.querySelector('.connect');
const menu = document.querySelector('.burger');
const cerrar = document.querySelector('.close');
const menuContenedor = document.querySelector('.menu-container');
const listaProducto = document.querySelector('.lista_producto');
const listaCompania = document.querySelector('.lista_compania');
const listaConect = document.querySelector('.lista_conect');
const flechaDark = document.querySelectorAll('.arrow-dark');
const flechaLight = document.querySelectorAll('.arrow-light');



produtos.addEventListener('click', () => {

    abrirProducto()
} )

compania.addEventListener('click', () => {

    abrirCompania ();

} )

conectar.addEventListener('click', () => {

    abrirConect();

} )

menu.addEventListener('click', () => {

    abrirMenu();

} )

cerrar.addEventListener('click', () => {

    cerrarMenu();

} )

listaProducto.addEventListener('click', () => {

    abrirProducto();

} )
listaCompania.addEventListener('click', () => {

    abrirCompania();

} )

listaConect.addEventListener('click', () => {

    abrirConect();

} )

flechaDark.forEach( flechas = flecha =>{
    flecha.addEventListener('click', () => {

        cerrarProducto();
        cerrarCompania();
        cerrarConect();
})
} )
flechaLight.forEach( flechas = flecha =>{
    flecha.addEventListener('click', () => {

        cerrarProducto();
        cerrarCompania();
        cerrarConect();
})
} )



function abrirMenu(){
    menuContenedor.style.display = 'flex';
    menu.style.display = 'none';
    cerrar.style.display= 'flex';
}

function cerrarMenu(){
    menuContenedor.style.display = 'none';
    menu.style.display = 'flex';
    cerrar.style.display= 'none';
}

function abrirProducto (){

    listaProducto.style.display = 'flex'
    
}

function abrirCompania (){

    listaCompania.style.display = 'flex'
    
}
function abrirConect (){

    listaConect.style.display = 'flex'
    flechaDark.style.transform.rotate(Y) = '90'
    
}



function cerrarProducto (){

    listaProducto.style.display = 'none'
    
}

function cerrarCompania (){

    listaCompania.style.display = 'none'
    
}
function cerrarConect (){

    listaConect.style.display = 'none'    
}
