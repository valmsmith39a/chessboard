var blackSquareImage = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/2000px-Solid_black.svg.png";

var whiteSquareImage = "http://static1.squarespace.com/static/55353df5e4b0ff30bba2b63c/55354a2ae4b0c8fb01946a04/5536fa5de4b011692d3cdaf7/1429666397490/White+Square.png";

var board = '';
var row = 0;
var col = 0;
var toggle = 0;

for (row=0;row<8;row++) {
  board=board+'<tr>';
    for(col=0;col<8;col++) {
      if(toggle==0) {
        board=board+'<td><img src=' + blackSquareImage + ' width=50px height=50px/></td>';
       }
       else {
         board=board+'<td><img src='+whiteSquareImage+'width=50px height=50px display: block/></td>';
       }
      toggle=(toggle == 0 ? 1:0);
    }
    toggle=(toggle == 0 ? 1:0);
    board=board+'</tr>';
}

$('#gameBoard tbody').append(board);
