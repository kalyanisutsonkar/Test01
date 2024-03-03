const increasebtn = document.querySelector('#increase')
const decreasebtn = document.querySelector('#dec')
const ressetbtn = document.querySelector('#reset')
const numberd = document.querySelector('.number')

let value=0
function increase(){
    value++;
    numberd.innerHTML=value;        
    console.log(value)
}
function decrease(){
    value--;
    numberd.innerHTML=value;        
    console.log(value)
}
function reset(){ 
    numberd.innerHTML=value;        
    console.log(value)
}


increasebtn.addEventListener('click',increase)
decreasebtn.addEventListener('click',decrease)
ressetbtn.addEventListener('click',reset)


