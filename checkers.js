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
   var _div = document.createElement("div");
       _div.setAttribute("id", "p"+row);
       _div.style.margin = "0";
       _div.style.padding = "0";
       _div.style.width = "600px";
       _div.style.height = "75px";
  for(i = 0; i < 8; i++){
      var innerDiv = document.createElement("div");
    if(i%2 === 0){
       innerDiv.setAttribute("class", "red");
       innerDiv.setAttribute("id", "p"+row+i);
       _div.appendChild(innerDiv);
      
    }else{
      if(row <= 2){
      var _svg = document.createElement("svg");
      var _circle = document.createElement("circle");
	  var _rect = document.createElement("rect");
      _svg.setAttribute("class", "redTeam");
      _svg.setAttribute("width", "75");
      _svg.setAttribute("height", "75");
	  _rect.setAttribute("height", "75");
	  _rect.setAttribute("width", "75");
	  _rect.setAttribute("fill", "black");
      _circle.setAttribute("cx", "25");
      _circle.setAttribute("cy", "25");
      _circle.setAttribute("r", "20");
      _circle.setAttribute("fill", "red");
	  _svg.appendChild(_rect);
      _svg.appendChild(_circle);
      innerDiv.setAttribute("class", "black");
      innerDiv.setAttribute("id", "p"+row+i);
      innerDiv.appendChild(_svg);
      _div.appendChild(innerDiv); 
      }else{
      innerDiv.setAttribute("class", "black");
      innerDiv.setAttribute("id", "p"+row+i);
      _div.setAttribute("id", "p"+row+i);
      _div.style.margin = "0";
      _div.style.padding = "0";
      _div.style.width = "600px";
      _div.style.height = "75px";
      _div.appendChild(innerDiv);
	  }
    }
     element.appendChild(_div);
  }
 // element.appendChild(_break);
}

function createRowOdd(row){
  // var _break = document.createElement("br");
   var _div = document.createElement("div");
   var element = document.getElementById("board");
  for(i = 0; i < 8; i++){
      var innerDiv = document.createElement("div");
    if(i%2 === 0){
     innerDiv.setAttribute("class", "black");
     innerDiv.setAttribute("id", "p"+row+i);
     _div.setAttribute("id", "p"+row+i);
     _div.style.margin = "0";
     _div.style.padding = "0";
     _div.style.height = "75px";
     _div.style.width = "60000px";
     _div.appendChild(innerDiv);
     element.appendChild(_div);
    }else{
      innerDiv.setAttribute("class", "red");
      innerDiv.setAttribute("id", "p"+row+i);
      _div.setAttribute("id", "p"+row+i);
      _div.style.margin = "0";
      _div.style.padding = "0";
      _div.style.width = "600px";
      _div.style.height = "75px";
      _div.appendChild(innerDiv);
      element.appendChild(_div);
    }
  }
 // element.appendChild(_break);
  
}

