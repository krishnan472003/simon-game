const buttoncolor = ["red","blue","green","yellow"];
let randomChoosenColor,level=0,index;
pattern= [];
let color;
function nextSequence(){
    var random =Math.floor(Math.random()*4);
    randomChoosenColor = buttoncolor[random];
    len = pattern.push(randomChoosenColor)
    $("#"+randomChoosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("/sounds/"+randomChoosenColor+".mp3");
    audio.play();

};

function wrong(){
   let a = new Audio("wrong.mp3");
   $("#page").addClass("game-over");
   setTimeout(function(){
    $("#page").removeClass("game-over");
   },200)
   a.play();
   $("#level-title").text("Game over, Press Any Key to Restart");


}
function press(){
for(let i = 0;i<4;i++){
    $("#"+buttoncolor[i]).click(function (e) { 
         color =buttoncolor[i];
        $("#"+buttoncolor[i]).addClass("pressed");
        setTimeout(function(){
            $("#"+buttoncolor[i]).removeClass("pressed");
        },100);
        if(color ===pattern[index]){
            console.log("index of "+index+ " "+pattern);
            index++;
        }
        else if(color !=pattern[index]){
            wrong();
            index = 0;
        }
        if(index >= len){
            level++;
            $("#level-title").text("level :"+level);
            setTimeout(nextSequence,1000);
            index = 0;
            console.log(index+"length is"+len)

        }
    });
        } 
    }
    $(document).keypress(function (e) { 
    level = 0;
    $("#level-title").text("level : 0")
    pattern =[];
    index =0;
    nextSequence();
    press();
});


