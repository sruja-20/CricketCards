var turn = 1;
var cards = [
  {
    player:"Virat Kohli",
    runs:12311,
    rank:2,
    average:58.07,
    strikerate:92.92,
    image:"images/ViratKohli.jfif",
  },
  {
    player:"Rohith Sharma",
    runs:9283,
    rank:4,
    average:48.6,
    strikerate:89.02,
    image:"images/RohithSharma.jfif",
  },
  {
    player:"K L Rahul",
    runs:1634,
    rank:26,
    average:46.69,
    strikerate:88.61,
    image:"images/Klrahul.jfif",
  },
  {
    player:"David Warner",
    runs:5455,
    rank:9,
    average:45.08,
    strikerate:95.53,
    image:"images/DavidWarner.jfif",
  },
  {
    player:"Suryakumar Yadav",
    runs:267,
    rank:90,
    average:53.4,
    strikerate:103.09,
    image:"images/SuryakumarYadav.jfif",
  },
  {
    player:"Babar Azam",
    runs:4261,
    rank:1,
    average:59.18,
    strikerate:90.29,
    image:"images/BabarAzam.jfif",
  },
  {
    player:"Imam-ul-hq",
    runs:2321,
    rank:3,
    average:53.98,
    strikerate:82.54,
    image:"images/Imamulhaq.jfif",
  },
  {
    player:"De Kock",
    runs:5658,
    rank:5,
    average:46.0,
    strikerate:95.98,
    image:"images/QuintonDekock.jfif",
  },
  {
    player:"Johny Bairstrow",
    runs:3498,
    rank:6,
    average:47.92,
    strikerate:105.01,
    image:"images/JohnyBairstrow.jfif",
  },
  {
    player:"RossTaylor",
    runs:8602,
    rank:7,
    average:47.52,
    strikerate:83.26,
    image:"images/RossTaylor.jfif",
  },
  {
    player:"Van Dur Dussen",
    runs:1365,
    rank:8,
    average:71.84,
    strikerate:88.81,
    image:"images/VanDurDussen.jfif",
  },
  {
    player:"Aaron Finch",
    runs:5255,
    rank:10,
    average:41.05,
    strikerate:88.2,
    image:"images/AaronFinch.jfif",
  },
  {
    player:"Joe Root",
    runs:6109,
    rank:11,
    average:51.34,
    strikerate:86.85,
    image:"images/JoeRoot.jfif",
  },
  {
    player:"Fakhar Zaman",
    runs:2427,
    rank:12,
    average:46.67,
    strikerate:95.21,
    image:"images/FakharZaman.jfif",
  },
  {
    player:"Shai Hope",
    runs:3738,
    rank:13,
    average:49.84,
    strikerate:74.67,
    image:"images/shaihope.jfif",
  },
  {
    player:"Shikhar Dhawan",
    runs:6284,
    rank:14,
    average:45.54,
    strikerate:93.37,
    image:"images/shikardhawan.jfif",
  },
  {
    player:"Martin Guptil",
    runs:7041,
    rank:15,
    average:41.91,
    strikerate:87.63,
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
  else if(randomPlay==2){
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
  else if(randomPlay==3){
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
  <a class='runs' href='#'>Runs- "+cards[player[0]].runs+"</a>\
  <a class='average' href='#'>Average- "+cards[player[0]].average+"</a>\
  <a class='strikerate' href='#'>StrikeRate- "+cards[player[0]].strikerate+"</a></div></div></div>");
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
