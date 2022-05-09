var turn = 1;
var cards = [
  {
    player:"Virat Kohli",
    matches:260,
    runs:12311,
    rank:2,
    average:58.07,
    strikerate:92.92,
    fifty:64,
    hundred:43,
    image:"images/ViratKohli.jfif",
  },
  {
    player:"Rohith Sharma",
    matches:230,
    runs:9283,
    rank:4,
    average:48.6,
    strikerate:89.02,
    fifty:44,
    hundred:29,
    image:"images/RohithSharma.jfif",
  },
  {
    player:"K L Rahul",
    matches:42,
    runs:1634,
    rank:26,
    average:46.69,
    strikerate:88.61,
    fifty:10,
    hundred:5,
    image:"images/Klrahul.jfif",
  },
  {
    player:"David Warner",
    matches:128,
    runs:5455,
    rank:9,
    average:45.08,
    strikerate:95.53,
    fifty:23,
    hundred:18,
    image:"images/DavidWarner.jfif",
  },
  {
    player:"Suryakumar Yadav",
    matches:7,
    runs:267,
    rank:90,
    average:53.4,
    strikerate:103.09,
    fifty:2,
    hundred:0,
    image:"images/SuryakumarYadav.jfif",
  },
  {
    player:"Babar Azam",
    matches:86,
    runs:4261,
    rank:1,
    average:59.18,
    strikerate:90.29,
    fifty:18,
    hundred:16,
    image:"images/BabarAzam.jfif",
  },
  {
    player:"Imam-ul-hq",
    matches:49,
    runs:2321,
    rank:3,
    average:53.98,
    strikerate:82.54,
    fifty:11,
    hundred:9,
    image:"images/Imamulhaq.jfif",
  },
  {
    player:"De Kock",
    matches:129,
    runs:5658,
    rank:5,
    average:46.0,
    strikerate:95.98,
    fifty:28,
    hundred:17,
    image:"images/QuintonDekock.jfif",
  },
  {
    player:"Johny Bairstrow",
    matches:89,
    runs:3498,
    rank:6,
    average:47.92,
    strikerate:105.01,
    fifty:14,
    hundred:11,
    image:"images/JohnyBairstrow.jfif",
  },
  {
    player:"RossTaylor",
    matches:236,
    runs:8602,
    rank:7,
    average:47.52,
    strikerate:83.26,
    fifty:51,
    hundred:21,
    image:"images/RossTaylor.jfif",
  },
  {
    player:"Van Dur Dussen",
    matches:35,
    runs:1365,
    rank:8,
    average:71.84,
    strikerate:88.81,
    fifty:11,
    hundred:2,
    image:"images/VanDurDussen.jfif",
  },
  {
    player:"Aaron Finch",
    matches:135,
    runs:5255,
    rank:10,
    average:41.05,
    strikerate:88.2,
    fifty:29,
    hundred:17,
    image:"images/AaronFinch.jfif",
  },
  {
    player:"Joe Root",
    matches:152,
    runs:6109,
    rank:11,
    average:51.34,
    strikerate:86.85,
    fifty:35,
    hundred:16,
    image:"images/JoeRoot.jfif",
  },
  {
    player:"Fakhar Zaman",
    matches:56,
    runs:2427,
    rank:12,
    average:46.67,
    strikerate:95.21,
    fifty:14,
    hundred:6,
    image:"images/FakharZaman.jfif",
  },
  {
    player:"Shai Hope",
    matches:89,
    runs:3738,
    rank:13,
    average:49.84,
    strikerate:74.67,
    fifty:20,
    hundred:10,
    image:"images/shaihope.jfif",
  },
  {
    player:"Shikhar Dhawan",
    matches:149,
    runs:6284,
    rank:14,
    average:45.54,
    strikerate:93.37,
    fifty:35,
    hundred:17,
    image:"images/shikardhawan.jfif",
  },
  {
    player:"Martin Guptil",
    matches:189,
    runs:7041,
    rank:15,
    average:41.91,
    strikerate:87.63,
    fifty:37,
    hundred:17,
    image:"images/martinguptil.jfif",
  }

];
var players = []
var player1 = [];
var player2 = [];

function isPlayerPresent(player,num){
  if(player.length == 0){
    return false;
  }
  for(var i =0;i<players.length;i++){
    if(num == players[i]){
      return true;
    }
  }
  return false;
}

function displayResult(playerwin,playerlost){
  setTimeout(function(){
    $(playerwin+" .stats-container").html("<img style='width:100%' class='res' src = 'images/win.jfif'>");
    $(playerlost+" .stats-container").html("<img style='width:100%' src = 'images/wrong.jfif'>");
  },2500);
  $('.yours h1').html("players left : "+player1.length);
  $('.opponent h1').html("players left : "+player2.length);
}

function displayBackCard(){
  $(".player2").html("<div class='cardback'><img src='images/CardBack.jfif' style='border-radius:0;margin:2.1rem'></div>");
}
function update(addedplayer,removedplayer){
  var removed = removedplayer.shift();
  addedplayer.push(removed);
  addedplayer.push(addedplayer.shift());

}


function timer(){
  setTimeout(function(){
    displayPlayer(".player1",player1);

    if(turn == 0){
      displayBackCard();
      $(".player1 a").bind("click");
    }
    else{
      displayPlayer(".player2",player2);
      $(".player1 a").unbind("click");
      computerPlay();
    }
  },5000);

}

function computerPlay(){
  var randomPlay = Math.floor(Math.random()*4);
  if(randomPlay==0){
    $(".player2 .rank").css("background-color","green");
    if(cards[player1[0]].rank>cards[player2[0]].rank){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==1){
    $(".player2 .match").css("background-color","green");
    if(cards[player1[0]].matches<cards[player2[0]].matches){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==2){
    $(".player2 .runs").css("background-color","green");
    if(cards[player1[0]].runs<cards[player2[0]].runs){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==3){
    $(".player2 .average").css("background-color","green");
    if(cards[player1[0]].average<cards[player2[0]].average){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==4){
    $(".player2 .strikerate").css("background-color","green");
    if(cards[player1[0]].strikerate<cards[player2[0]].strikerate){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==5){
    $(".player2 .fifty").css("background-color","green");
    if(cards[player1[0]].fifty<cards[player2[0]].fifty){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
  else if(randomPlay==6){
    $(".player2 .hundred").css("background-color","green");
    if(cards[player1[0]].hundred<cards[player2[0]].hundred){
      turn = 1;
      update(player2,player1);
      displayResult(".player2",".player1");
    }
    else{
      turn = 0;
      update(player1,player2);
      displayResult(".player1",".player2");
    }
    timer();
  }
}

function playerSelection(player){
  var j = 0;
  while(j!=7){
    var randValue = Math.floor(Math.random()*cards.length);
    if(!isPlayerPresent(player1,randValue)){
      players.push(randValue)
       player.push(randValue);
       j++;
    }
  }
}




function displayPlayer(playertype,player){
  $(playertype).html("<div class='player-container'><div class='div-item'>\
  <img src= "+cards[player[0]].image+"></div><div class='div-item'><h2>"+cards[player[0]].player+"</h2>\
  <div class='stats-container'><a class = 'rank' href='#'>Rank- "+cards[player[0]].rank+"</a>\
  <a class='match' href='#'>Matches- "+cards[player[0]].matches+"</a>\
  <a class='runs' href='#'>Runs- "+cards[player[0]].runs+"</a>\
  <a class='average' href='#'>Average- "+cards[player[0]].average+"</a>\
  <a class='strikerate' href='#'>StrikeRate- "+cards[player[0]].strikerate+"</a>\
  <a class='fifty' href='#'>50- "+cards[player[0]].fifty+"</a>\
  <a class='hundred' href='#'>100- "+cards[player[0]].hundred+"</a></div></div></div>");
  $(".rank").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].rank<cards[player2[0]].rank){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".match").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].matches>cards[player2[0]].matches){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".runs").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].runs>cards[player2[0]].runs){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".average").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].average>cards[player2[0]].average){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".strikerate").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].strikerate>cards[player2[0]].strikerate){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".fifty").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].fifty>cards[player2[0]].fifty){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  $(".hundred").click(function(){
    displayPlayer(".player2",player2);
    if(cards[player1[0]].hundred>cards[player2[0]].hundred){
      update(player1,player2);
      turn = 0;
      displayResult(".player1",".player2");
    }
    else{
      update(player2,player1);
      turn = 1;
      displayResult(".player2",".player1");
    }
    timer();
  });
  if(player2.length==0){
    $("body").html("<h1 style='text-align:center;font-size:1.5rem'>You win<h1>");
  }
  else if(player1.length==0){
    $("body").html("<h1 style='text-align:center;font-size:1.5rem'>You Lose<h1>");
  }
}

playerSelection(player1);
playerSelection(player2);

displayPlayer(".player1",player1);
displayBackCard();

$(".yours").html("<h1>Players left : "+player1.length+"</h1>");
$(".opponent").html("<h1>Players left : "+player2.length+"</h1>");
