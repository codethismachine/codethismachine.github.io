var counterRed = 1; 
var counterWhite = 1;

function DrawBoard(){
  $(document).ready(function(){
    $("#play").hide();
    $("#first").removeAttr("disabled");
  
  });
 
   var element = document.getElementById("board");
  
  for(i = 0; i < 8; i++){
    var _div = document.createElement("div");
    _div.setAttribute("id", ""+i);
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
  for(i = 1; i <= 12; i++){
    var tempRed = document.getElementById("r" + i);
    var tempWhite = document.getElementById("w" + i);
    tempRed.removeAttribute("ondragstart");
    tempWhite.removeAttribute("ondragstart"); 
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
  redPiece.setAttribute("onclick", "getParent()");
  redPiece.setAttribute("id", "r"+ counterRed);
  return redPiece;
}


  /*$(document).on('click', '.circleR', function (e) {
    e.preventDefault();
   var example1 = $(this).parent('div').attr('id');
    var char1 = example1.charAt(0);
    var char2 = example1.charAt(1);
   var restrictId = document.getElementById(""+char1+char2).getAttribute("id");
    var restrict = document.getElementById("36");
   var test = document.getElementById("test");
    test.innerHTML = restrictId;    
    restrict.removeAttribute("ondrop");
    $('#results').append('<p>Result from example 1: <strong>' + example1 + '</strong></p>');
});*/




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

function EnableRed(){
    $("#second").removeAttr("disabled");
 for(i = 1; i <= 12; i++){
    var red = document.getElementById("r" + i);
    var white = document.getElementById("w" + i);
    red.setAttribute("ondragstart", "drag(event)");
    white.removeAttribute("ondragstart");
  }
   var tempFirst = document.getElementById("first");
   tempFirst.setAttribute("disabled", "disabled");
    $(document).on('click', '.circleR', function (e) {
    e.preventDefault();
   var example1 = $(this).parent('div').attr('id');
    var char1 = example1.charAt(0);
    var char2 = example1.charAt(1);
   var restrictId = document.getElementById(""+char1+char2).getAttribute("id");
    var restrict = document.getElementById("36");
   var test = document.getElementById("test");
    test.innerHTML = restrictId;    
    restrict.removeAttribute("ondrop");
    restrict.removeAttribute("ondragover");
    $('#results').append('<p>Result from example 1: <strong>' + example1 + '</strong></p>');
});

}
function EnableWhite(){
 for(i = 1; i <= 12; i++){
    var white = document.getElementById("w" + i);
    var red = document.getElementById("r" + i);
   white.setAttribute("ondragstart", "drag(event)");
   red.removeAttribute("ondragstart");
  }
   var tempSecond = document.getElementById("second");
   tempSecond.setAttribute("disabled", "disabled");
   var tempFirst = document.getElementById("first");
   tempFirst.removeAttribute("disabled");
  
   $(document).on('click', '.circleW', function (e) {
    e.preventDefault();
   var example1 = $(this).parent('div').attr('id');
    var char1 = example1.charAt(0);
    var char2 = example1.charAt(1);
   var restrictId = document.getElementById(""+char1+char2).getAttribute("id");
    var restrict = document.getElementById("34");
   var test = document.getElementById("test");
    test.innerHTML = restrictId;    
    restrict.removeAttribute("ondrop");
    restrict.removeAttribute("ondragover");
    $('#results').append('<p>Result from example 1: <strong>' + example1 + '</strong></p>');
});
}
