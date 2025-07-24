const colors = ["red ","green","yellow"];
const changeColor = ()=>{
    const RandIdx = Math.floor(Math.random()*colors.length);
    console.log(colors[RandIdx]);
}

changeColor();