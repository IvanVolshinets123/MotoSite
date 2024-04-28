let mob__menu_back = document.getElementsByClassName('mob__menu_back')[0];
let mob_menu = document.getElementsByClassName('mob_menu')[0];
let mob__menu_close = document.getElementById('mob__menu_close');

let burger = document.getElementById('burger');
burger.onclick = () => {
  setTimeout(function(){
    document.body.onclick = (e) => {
      if(mob__menu_back.style.display == 'block'){
        if(e.target!=mob_menu){
          document.body.style.overflow = "visible";
          mob__menu_back.style.display = 'none';
          mob_menu.style.display = 'none';
          document.body.onclick = (e) => {};
        }
      }
    }
  }, 1);
  document.body.style.overflow = "hidden";
  mob__menu_back.style.display = 'block';
  mob_menu.style.display = 'block';
}