

function randomBackgroundImage() { 
    header_image= document.querySelector('.bg');
    // массив картинок
    images  = ['./images/Burger_one.jpg', './images/Burger_three.jpg', './images/Burger_two.jpg'];
   
    // выбираем случайную картинку
    image_number = Math.floor( Math.random()* images.length);
    header_image.style.backgroundImage= 'url(' + images[image_number] + ')';
}
setInterval('randomBackgroundImage()',1000);