

function addWindow(){
    document.getElementById('window').insertAdjacentHTML('afterbegin', '<div class="window-notice" id="window-notice"><div class="content"><div class="content-text">Selecciona una imagen</div><div class="images-btn"><button id="btn-img1" onclick="btn1()" class="btn btn-outline-dark mt-auto"><img src="imagenes/img-car/logoMarvel.jpg" alt=""></button><button id="btn-img1" onclick="btn2()" class="btn btn-outline-dark mt-auto"><img src="imagenes/img-car/pareja.png" alt=""></button></div><div class="content-buttons"><button class="btn btn-outline-dark mt-auto" onclick="remove()">Cancelar</button></div></div></div>');

}

function remove() {
    imagen = document.getElementById('window-notice');
    padre = imagen.parentNode;
    padre.removeChild(imagen);

}

function btn1(){
    imagen = document.getElementById('window-notice');
    padre = imagen.parentNode;
    padre.removeChild(imagen);
    document.getElementById("img1").src="imagenes/playerasPer/p-negra-marvel.jpg";
}

function btn2(){
    imagen = document.getElementById('window-notice');
    padre = imagen.parentNode;
    padre.removeChild(imagen);
    document.getElementById("img1").src="imagenes/playerasPer/p-negra-pareja.jpg";
}

function chcolorblack(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-negra-v.jpg";
}

function chcolorgrey(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-gris-v.jpg";
}

function chcolorgreen(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-verde-v.jpg";
}

function chcolorwhite(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-blanca-v.jpg";
}

function chcoloryellow(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-amarilla-v.jpg";
}

function chcolororange(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-naranja-v.jpg";
}

function chcolorred(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-rojo-v.jpg";
}

function chcolorpurple(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-morado-v.jpg";
}

function chcolorpink(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-rosa-v.jpg";
}

function chcolorblue(){
    document.getElementById("img1").src="imagenes/playerascomprar/playeras-color/p-azul-v.jpg";
}


function addProduct(){
    document.getElementById('prod1').insertAdjacentHTML('afterbegin', '<th scope="row">1</th><td><a href="#" class="text-danger"><i class="ri-delete-bin-3-line"></i></a></td><td><img src="imagenes/miniatura.jpg" class="img-fluid" width="35" alt="product"></td><td>Playera negra cueyo V</td><td><div class="form-group mb-0"><input type="number" class="form-control cart-qty" name="cartQty1" id="cartQty1" value="1"></div></td><td>$150</td><td class="text-right">$150</td></tr>');
    document.getElementById('prod2').insertAdjacentHTML('afterbegin', '<tr><td>Sub Total :</td><td>$150.00</td></tr><tr><td>Shipping :</td><td>$149.00</td></tr><tr><td class="f-w-7 font-18"><h4>Total :</h4></td><td class="f-w-7 font-18"><h4>$299.00</h4></td></tr>');
}

function addCart(){
    document.getElementById('minCarrito').innerHTML = '1';
}

