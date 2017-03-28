
var info = document.getElementById("info");
var push = document.getElementById("push");
var gInfo = document.getElementById("green");
var rInfo = document.getElementById("red");
var wInfo = document.getElementById("white");
var uInfo = document.getElementById("blue");
var bInfo = document.getElementById("black");
var genInfo = document.getElementById("generic");
var clrButton = document.getElementById("clear");
var str;
var str1;

clrButton.addEventListener("click", function(){
  gInfo.value = '';
  rInfo.value = '';
  wInfo.value = '';
  uInfo.value = '';
  bInfo.value = '';
  genInfo.value = '';


});

push.addEventListener("click", function(){
    info.innerHTML = '';
    var gval = gInfo.value;
    var rval = rInfo.value;
    var wval = wInfo.value;
    var uval = uInfo.value;
    var bval = bInfo.value;
    var genval = genInfo.value;
    if (bval === '') bval = 0;
    if (rval === '') rval = 0;
    if (wval === '') wval = 0;
    if (uval === '') uval = 0;
    if (gval === '') gval = 0;
    if (genval === '') genval = 0;
    $.getJSON("./C16.json", function(json){
      for(i in json.cards){
        var black = 0, white = 0, green = 0, red = 0, blue = 0, generic = 0;
        if(json.cards[i].manaCost != undefined){
        str = json.cards[i].manaCost;
        str1 = str.replace(/{|}/g, "");
        if($.isNumeric(str1[0])){
          generic = parseInt(str1[0]);
          for (j=1; j< str1.length; j++){
            if(str1[j] == 'B') black += 1;
            if(str1[j] == 'R') red += 1;
            if(str1[j] == 'G') green += 1;
            if(str1[j] == 'U') blue += 1;
            if(str1[j] == 'W') white += 1;
          }
        }
        else {
          for (k=0; k< str1.length; k++){
            if(str1[k] == 'B') black += 1;
            if(str1[k] == 'R') red += 1;
            if(str1[k] == 'G') green += 1;
            if(str1[k] == 'U') blue += 1;
            if(str1[k] == 'W') white += 1;
        }
      }

        if (gval == green && rval == red && wval == white && bval == black && uval == blue && genval == generic){
          info.insertAdjacentHTML('beforeend','<a class="card" target="_blank" style="margin-left:.1em" href="http://gatherer.wizards.com/Pages/Card/Details.aspx?name=' + encodeURIComponent(json.cards[i].name) + '"><img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+ json.cards[i].multiverseid +'&type=card" alt="hello"/></a>');
        }
      }
      }
    });
});


    /* for(i = 0; i < str.length; i++){
        var cost = parseInt(str[0]) + str.length - 1;
      }
      info.insertAdjacentHTML("beforeend", 'converted mana cost: ' + cost);
      var arr1 = str.split('');
      console.log(arr1);

    });
});*/
