var counterRed = 1; 
var counterWhite = 1;
function DrawBoard(){
  $(document).ready(function(){
    $("#play").hide();
   // $(".circleR").setAttribute("ondragstart", null);
   // $(".circleW").setAttribute("ondragstart", null);
    $("#first").removeAttr("disabled");
   
  });
 
   var element = document.getElementById("board");
  
  for(i = 0; i < 8; i++){
    var _div = document.createElement("div");
    _div.style.margin="0";
    _div.style.padding="0";
    _div.style.width="800px";
    _div.style.height="100px";
    for(j = 0; j < 8; j++){
    if(i%2 === 0){
      if(j%2 === 0){
         _div.appendChild(redTile());
    }else
      _div.appendChild(blackTile(i,j));
    }else{
      if(j%2 === 0){
        _div.appendChild(blackTile(i,j));
      }else
        _div.appendChild(redTile());
    }
      element.appendChild(_div);
  }
    
  }
  

}
function redTile(){
  var redDiv = document.createElement("div");
  redDiv.setAttribute("class", "redTile");
  return redDiv;
}
function blackTile(row,column){
  var blackDiv = document.createElement("div");
  blackDiv.setAttribute("class", "blackTile");
  blackDiv.setAttribute("ondrop", "drop(event)");
  blackDiv.setAttribute("ondragover", "allowDrop(event)");
  blackDiv.setAttribute("id", ""+i+j);
  if(row < 3){
  blackDiv.appendChild(redP()); 
  counterRed++;
  }else if(row > 4){
    blackDiv.appendChild(whiteP(row+column+row));
    counterWhite++;
  }
  return blackDiv;
}
function redP(){
  var redPiece = document.createElement("div");
  redPiece.setAttribute("class", "circleR");
  redPiece.setAttribute("draggable", "true");
  redPiece.setAttribute("ondragstart", "drag(event)");
  redPiece.setAttribute("id", "r"+ counterRed);
  return redPiece;
}

function whiteP(){
  var whitePiece = document.createElement("div");
  whitePiece.setAttribute("class", "circleW");
  whitePiece.setAttribute("draggable", "true");
  whitePiece.setAttribute("ondragstart", "drag(event)");
  whitePiece.setAttribute("id", "w"+counterWhite);
  return whitePiece;
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
   
}

function drop(ev) {
  if(ev.target.className == "blackTile" && !ev.target.hasChildNodes()){
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }else
    return;
}

