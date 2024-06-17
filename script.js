const header = document.querySelector('h1');
const add_btn= document.querySelector('#add');
const substract_btn = document.querySelector('#substract');
let num=0;
add_btn.addEventListener('click', function(){
  num += 1;
    header.innerText = num
})

substract_btn.addEventListener('click', function(){
  if(num >= 1){
    num -= 1;
    header.innerText = num
  }
})

