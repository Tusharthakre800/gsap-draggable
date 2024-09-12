Draggable.create(".left", {
    type: "x",
    bounds: ".innermain"
  });


   const tushar1=()=>{
    var div1 = document.querySelector(".right");
    var div2 = document.querySelector(".left");

    var div3 = div1.getBoundingClientRect();
    var div4 = div2.getBoundingClientRect();

    if(div3.left<div4.right){
        document.querySelector(".main").style.backgroundColor="black"
    }else{
        document.querySelector(".main").style.backgroundColor="white"

    }
}

 
  window.addEventListener("mousemove", tushar1)