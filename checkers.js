function DrawBoard(){
  createRowEven(0);
  createRowOdd(1);
  createRowEven(2);
  createRowOdd(3);
  createRowEven(4);
  createRowOdd(5);
  createRowEven(6);
  createRowOdd(7);
  $(document).ready(function(){
    $("button").hide();
  });
  
 }

function createRowEven(row){
   
   //var _break = document.createElement("br");
   var element = document.getElementById("board");
   var ul = document.createElement("ul");
  for(i = 0; i < 8; i++){
      var listItem = document.createElement("li");
    if(i%2 === 0){
       listItem.setAttribute("class", "red");
       listItem.setAttribute("id", "p"+row+i);
       ul.setAttribute("id", "p"+row+i);
       ul.appendChild(listItem);
        element.appendChild(ul);
    }else{
      listItem.setAttribute("class", "black");
      listItem.setAttribute("id", "p"+row+i);
      ul.setAttribute("id", "p"+row+i);
      ul.appendChild(listItem);
      element.appendChild(ul);
    }
  }
 // element.appendChild(_break);
}

function createRowOdd(row){
  // var _break = document.createElement("br");
   var ul = document.createElement("ul");
   var element = document.getElementById("board");
  for(i = 0; i < 8; i++){
      var listItem = document.createElement("li");
    if(i%2 === 0){
     listItem.setAttribute("class", "black");
     listItem.setAttribute("id", "p"+row+i);
     ul.setAttribute("id", "p"+row+i);
     ul.appendChild(listItem);
     element.appendChild(ul);
    }else{
      listItem.setAttribute("class", "red");
      listItem.setAttribute("id", "p"+row+i);
      ul.setAttribute("id", "p"+row+i);
      ul.appendChild(listItem);
      element.appendChild(ul);
    }
  }
 // element.appendChild(_break);
}