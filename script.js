const btn_signup= document.querySelector('.btn-signup');
const btn_reg= document.querySelector('.btn_reg');
const user_name= document.querySelector('#input_name');
const password= document.querySelector('#password');
const menu= document.querySelector('#menu');

const openFormBtn = document.querySelector('#open_form_btn');

function randomBackgroundImage() { 
    header_image= document.querySelector('.bg');
    // массив картинок
    images  = ['./images/Burger_one.jpg', './images/Burger_three.jpg', './images/Burger_two.jpg'];
    image_number = Math.floor( Math.random()* images.length);
    header_image.style.backgroundImage= 'url(' + images[image_number] + ')';
}
setInterval('randomBackgroundImage()',1000);

 // Авторизация
 btn_signup.addEventListener('click',()=>{
    let xhttp = new XMLHttpRequest();
    xhttp.open('post','action.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`user_name=${ user_name.value} & Password=${password.value} `);
    xhttp.onreadystatechange = function () {
            if (this.status ==200 && this.readyState ==4) {
                console.log(this.response);
                // Пользователь авторизован
                if( this.response.trim()=='1'){
                    let User_greeting = document.createElement('p');
                    menu.prepend(User_greeting);
                    text = document.createTextNode(user_name.value);
                    User_greeting.appendChild( text);    
               }  
                else{
                    eror.innerHTML='Вы забыли указать логин или пароль';
                }     
            }
    }})

// Регистрация
btn_reg.addEventListener('click',()=>{
    let xhttp = new XMLHttpRequest();
    xhttp.open('post','reg.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`user_name=${ user_name.value} & Password=${password.value} `);
    xhttp.onreadystatechange = function () {
    if (this.status ==200 && this.readyState ==4) {
    // Заносим данные в Бд
        if (  xhttp.responseText.trim()=='1'){
            btn_reg.disabled = true;
            eror.innerHTML='';

        }
        else {
            user_name.value='';
            password.value='';
            eror.innerHTML='Пароль должен быть уникальным';
        }
        
    }
    }
});
