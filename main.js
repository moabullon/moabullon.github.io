
function plus () {
      var x = document.querySelector("#text1").value;
      var y = document.querySelector("#text2").value;
      var z = +x + +y;
      document.querySelector("#result").innerHTML = z;
  }

   var button1= document.querySelector("#addition")
   button1.addEventListener ("click",plus)



function minus () {
      var x = document.querySelector("#text1").value;
      var y = document.querySelector("#text2").value;
      var z = +x - +y;
      document.querySelector("#result").innerHTML = z.toPrecision(4);
  }

   var button2= document.querySelector("#subtraction")
       button2.addEventListener ("click", minus)



function times () {
      var x = document.querySelector("#text1").value;
      var y = document.querySelector("#text2").value;
      var z = +x * +y;
      document.querySelector("#result").innerHTML = z
  }

       var button1= document.querySelector("#multiplication")
          button1.addEventListener ("click", times)


  function divide () {
      var x = document.querySelector("#text1").value;
      var y = document.querySelector("#text2").value;
      var z = +x / +y;
      document.querySelector("#result").innerHTML = z;
               }

      var button1= document.querySelector("#division")
          button1.addEventListener ("click", divide)
