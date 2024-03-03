// const getcolor = ()=> {
//     const randomNumber = Math.floor(Math.random() + 16777215)
//     const randomCode ="#" +randomNumber.toString(16)
//     console.log(randomNumber,randomCode)
//     document.body.style.backgroundColor =randomCode;
// }

// document.getElementById('btn').addEventListener(
//     'click',
//     getcolor

// )  
// getcolor();
// const click = document.querySelector('#btn');
// function
function randomColor() {
    const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  console.log(randomColor()); // Output a random color from the array
  
//   console.log(randomColor()); 
//   function randomColor(){
//     const 
//   }