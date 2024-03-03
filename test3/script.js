// const increasebtn = document.querySelector('#increase')
// const decreasebtn = document.querySelector('#dec')
// const ressetbtn = document.querySelector('#reset')
// const numberd = document.querySelector('.number')

// let value=0
// function increase(){
//     value++;
//     numberd.innerHTML=value;        
//     console.log(value)
// }
// function decrease(){
//     value--;
//     numberd.innerHTML=value;        
//     console.log(value)
// }
// function reset(){ 
//     numberd.innerHTML=0;        
//     console.log(value)
//     value = 0
// }


// increasebtn.addEventListener('click',increase)
// decreasebtn.addEventListener('click',decrease)
// ressetbtn.addEventListener('click',reset)




const increasebtn = document.getElementById('increase')
const decreasebtn = document.getElementById('dec')
const ressetbtn = document.getElementById('reset')
const displayvalue =document.querySelector('h2')



let initialvalue=0;
function increasevalue(){
    initialvalue++
    displayvalue.innerHTML=initialvalue
}
function decreasevalue(){
    initialvalue--
    displayvalue.innerHTML=initialvalue
}
function resetvalue(){
    initialvalue=0
    displayvalue.innerHTML=initialvalue
}

increasebtn.addEventListener('click',increasevalue)
decreasebtn.addEventListener('click',decreasevalue)
ressetbtn.addEventListener('click',resetvalue)