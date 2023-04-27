const zone2 =   [[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[0,0,0,0,0,0,1,1,1,1]
                ,[0,0,0,0,0,0,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]];

const zone1 =   [[1,1,1,1,3,3,3,1,1,1]
                ,[2,2,2,2,1,5,1,2,2,2]
                ,[3,1,1,0,0,0,0,0,0,0]
                ,[2,3,1,0,0,0,0,0,0,0]
                ,[3,1,1,1,1,1,1,1,1,1]
                ,[2,3,4,4,4,1,4,4,4,1]
                ,[3,1,4,4,4,1,4,4,4,1]
                ,[2,3,3,3,3,3,3,1,1,1]
                ,[3,3,3,3,3,3,1,1,1,1]
                ,[2,2,2,2,2,2,2,2,2,2]];

const emptyzone =[[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]
                ,[1,1,1,1,1,1,1,1,1,1]];

                let equipedPokemon = {
                    1: 'charmander',
                    2: 'pikachu'
                }

const world = [[zone1,zone2,emptyzone],
               [emptyzone,emptyzone,emptyzone],
               [emptyzone,emptyzone,emptyzone],
]


function worldTree() {
    this.walkable = false;
    this.src = "url('./assets/enviroment/bigTree.png')"; 
}

function worldLand1() {
    this.walkable = true;
    this.src = "url('./assets/enviroment/land1.png')"; 
}

function worldLand0() {
    this.walkable = true;
    this.src = "url('./assets/enviroment/land0.png')"; 
}

function worldPillar() {
    this.walkable = false;
    this.src = "url('./assets/enviroment/pillar.png')"; 
}

function worldShrub() {
    this.walkable = true;
    this.src = "url('./assets/enviroment/bush.png')";
    this.enemys = 1;
}
function zone1Sign(){
    this.walkable = false;
    this.src = "url('./assets/enviroment/sign.png')";
    this.type = 'sign'
    this.text = 'What do you call a cow with no legs? Ground beef!!!';
}

function worldNone(){
    this.walkable = false;
    
}

$('.fight-screen').hide();
$('.pokebar').hide();

function worldGen(zoneData){
    for(var y = 0; y < zoneData.length;y++){

    for(x=0; x< 10;x++){
        var objEl = document.createElement('div');
        var id = zoneData[y][x];
        let objdata;
        switch(id){
            case 9:
                objdata = new worldNone;
                $(objEl).css("background-size", "cover");

                break;
            case 0:
                //empty
                objdata = new worldLand0;
                $(objEl).css("background-size", "cover");
            break;

            case 1:
                //grass
                objdata = new worldLand1;
                $(objEl).css("background-size", "cover");
            break;

            case 2:
                //tree
                objdata = new worldTree;
                $(objEl).css("background", "10vh 10vh")
                $(objEl).css("background-size", "cover");
                let queryString = '#' + (x + 1) + '-' + Math.abs((y) - 11)
                $(queryString).css("background-image", objdata.src);

            break;

            case 3:
                //pillar
                objdata = new worldPillar;
                $(objEl).css("background-size", "cover");
            break;

            case 4:
                //shrub
                objdata = new worldShrub;
                $(objEl).attr('data-enemys', objdata.enemys);
                $(objEl).css("background-size", "cover");
            break;

            case 5:
                //zone 1 sign
                objdata = new zone1Sign();
                $(objEl).attr('data-text', objdata.text);
                $(objEl).attr('data-type', objdata.type);
                $(objEl).css("background-size", "cover");
            break;
        }

        $(objEl).addClass('world-obj');
        $(objEl).attr('id', (x + 1) + '-' + Math.abs((y) - 10));
        $(objEl).attr('data-walkable', objdata.walkable);
        objEl.style.backgroundImage = objdata.src;
        $(".zoneTiles").append(objEl);
    }
}

}

function loadZone(zoneX, zoneY, direction){
    //Player Variables
    let p = $('.player');
    let x = Number(p.attr('data-x'));
    let y =  Number(p.attr('data-y'));
    let pz = $('.player-zone');
    $('.zoneTiles').empty();

    switch(direction) {
        case 'Up':
            p.attr('data-y', (y-9));
            pz.attr('data-zone-y', (zoneY - 1));
            worldGen(world[zoneY - 1][zoneX]);
            $("#" + x  + '-' + (y-9)).append(pz);
            break;
        case 'Down':
            p.attr('data-y', (y+9));
            pz.attr('data-zone-y', (zoneY + 1));
            worldGen(world[zoneY + 1][zoneX]);
            $("#" + x  + '-' + (y+9)).append(pz);
            break;
        case 'Left':
            p.attr('data-x', (x+9));
            pz.attr('data-zone-x', (zoneX - 1));
            worldGen(world[zoneY][zoneX - 1]);
            $("#" + (x+9)  + '-' + y).append(pz);
            break;
        case 'Right':
            p.attr('data-x', (x-9));
            pz.attr('data-zone-x', (zoneX + 1));
            worldGen(world[zoneY][zoneX + 1]);
            $("#" + (x-9)  + '-' + y).append(pz);
            break;
    }

}




$(document).ready(function() {
    

    $('.move-btn').click(function(){
        let direction = $(this).attr('id');
        var p = $('.player');
        var x = Number(p.attr('data-x'));
        var y = Number(p.attr('data-y'));
        let w = '';
        let useY = 0;
        let useX = 0;

        switch(direction){
            case 'Up':
                useY--;
                 w = $("#" + x + '-' + (y+1));
                break;
            case 'Down':
                useY++;
                 w = $("#" + x + '-' + (y-1));
                break;
            case 'Left':
                useX--;
                 w = $("#" + (x-1) + '-' + y);               
                break;
            case 'Right':
                useX++;
                 w = $("#" + (x+1) + '-' + y);
                break;
        }

        if(w.attr('data-walkable')  === 'true'){
            moveChar(p, x, y, direction, w);
        }

        else{
            p.attr('src' , './assets/player/standing' + direction +'.png')
            p.attr('data-direction', direction);
            var zoneX = Number($('.player-zone').attr('data-zone-x'));
            var zoneY = Number($('.player-zone').attr('data-zone-y'));

            if(world[zoneY + useY][zoneX + useX] != 0 && world[zoneY + useY][zoneX + useX] && !w.attr('data-walkable') ){
                loadZone(zoneX, zoneY, direction); 
            }
        }
    });

    $('.world').on ('keypress', function (e) {
        console.log(String.fromCharCode(e.which));
    })

    $('#Int').click(function(){
        let p =  $('.player');
        let d = p.attr('data-direction');
        var x = Number(p.attr('data-x'));
        var y = Number(p.attr('data-y'));
        switch(d){
            case 'Up':
                var w = $("#" + x + '-' + (y+1));

                break;
            case 'Down':
                var w = $("#" + x + '-' + (y-1));
                break;
            case 'Left':
                var w = $("#" + (x-1) + '-' + y);
                
                break;
            case 'Right':
                var w = $("#" + (x+1) + '-' + y);
                break;
        }

        interact(w);
    })
    
});

function moveChar(player, x, y, direction, w){
    $('.move-btn').prop('disabled', true);
    let marginStyle;
    let marginChange;
    var frame = 0;
    let step = '';
    let offset = 0;
    switch(direction){
        case 'Up':
            offset = 2;
            y++;
            step = player.attr('data-step');
            marginStyle = 'bottom';
            marginChange = .5;
            break;

        case 'Down':
            offset = 2;
            y--;
            step = player.attr('data-step');
            marginStyle = 'bottom';
            marginChange = -0.5;
            break;

        case 'Left':
            x--;
            marginStyle = 'left';
            marginChange = -0.5;
            break;

        case 'Right':
            x++;
            marginStyle = 'left'
            marginChange = 0.5;

            break;
    }
  
    player.attr('src' , './assets/player/walking' + direction + step + '.png');

    var timerID = setInterval(function() {
        frame++;
        player.css(marginStyle, ((frame*marginChange)+offset) + 'vh');
        if(frame == 15){
            player.attr('src' , './assets/player/standing' + direction +'.png')
        }
        if(frame == 20) {
            clearInterval(timerID);
            player.css("left", "0");
            player.css("bottom", "2vh");
            w.append($('.player-zone'));
            $('.move-btn').prop('disabled', false);

            if(w.attr('data-enemys')){
                if(Math.random() > .66){
                    $('.control-zone').hide();
                    fightScene(player);
                }
            }

        }
    }, 16.7);
    player.attr('data-x', (x));
    player.attr('data-y', (y));
    player.attr('data-direction', direction)

    switch(step){
        case '1':
            player.attr('data-step', '2');
            break;
        case '2':
            player.attr('data-step', '1');
            break;

    }

    
    
}

function interact(w){
    switch(w.attr('data-type')){
        case 'sign':
            let hud = $('.hud')
            $(hud).show();
            displayText(hud, $(w).attr('data-text'));
            console.log('hit')
            $(hud).one('click', function () {
                $(hud).text(' ');
                $(hud).hide();
                
            })
            break;

    }
    
}

function displayText(hud, text){
    $(hud).text(' ');
    console.log(text)
    let char = 0;
    let textScroll;
    let buildText = '';
    textScroll = setInterval(function(){
        buildText = buildText + text[char];
        console.log(buildText)
        $(hud).text(buildText)
        char++;

        if(char === text.length){
            clearInterval(textScroll);
            let arrow = document.createElement('img');
            $(arrow).addClass('arrow');
            $(arrow).attr('src', './assets/ui/arrow.png');
            $(hud).append(arrow);
            
        }
    }, 30);
}

function forceMove(x,y){
    $('.player').attr('data-x', x);
    $('.player').attr('data-y', y);
    let pz = $('.player-zone');

    $('#'+(x) + '-' + (y)).append(pz);

}

function pokebar(pokemonObj){
    let flexBox = $('.pokebarBalls');
    for(i = 0; i < 7;i++){
        if(Object.keys(pokemonObj).length > i){
            let barItem = document.createElement('img')
            $(barItem).attr('src', './assets/ui/pokeball.png')
            $(flexBox).append(barItem);
        }
        else{
            let barItem = document.createElement('img')
            $(barItem).attr('src', './assets/ui/emptyball.png')
            $(flexBox).append(barItem);
        }
    }
    $('.pokebar').show();
    
    
}

async function fightScene(p){
    let responseP = await fetch('https://pokeapi.co/api/v2/pokemon/' + $(p).attr('data-pokemon'));
    let jsonDataP = await responseP.json();

    let responseE = await fetch('https://pokeapi.co/api/v2/pokemon/' + (Math.floor(Math.random() * 251)));
    let jsonDataE = await responseE.json();

    let sprites = jsonDataP.sprites.versions['generation-ii'].gold;

    let spritesE = jsonDataE.sprites.versions['generation-ii'].gold;
    console.log(sprites) 
    $('.control-zone').hide();
   

    let intro = 'W i l d ' +jsonDataE.name.toUpperCase() + ' appeared!';

    
    let allTiles = $('.world-obj');
    let i = 0;
    let frame = 0
    //"url(" + sprites.back_default +  "
    $('.player-pokemon').css('background-image', "url(https://archives.bulbagarden.net/media/upload/5/53/GSC_Ethan_Back.png)")
    $('.enemy-pokemon').css('background-image', "url(" + spritesE.front_default +  ")")
    
    startAni = setInterval( await function(){
        
        if(frame < 100){
            $(allTiles[i]).css('background', 'black');
            i++;
        }
        
        frame++

        
        if(frame == 100){
            p.hide();
        }

        if(frame == 130){
            $('.fight-screen').show();
            $('.hud').show();
            
        }

        if( frame > 130 && frame < 200){
            $('.player-pokemon').css('right', ( (frame - 150) * 1.2)+ 'vh');
            $('.enemy-pokemon').css('left', ( (frame - 150) * 1.3)+ 'vh');
        }
        
            

        if(frame == 200){
            let priev = $('.player-pokemon').css('right');
            $('.player-pokemon').css('filter', 'none');
            $('.enemy-pokemon').css('filter', 'none');
        }

        if(frame == 230){
            pokebar(equipedPokemon);
            
            displayText($('.hud'), intro)
        }

        if(frame > 260 && frame < 263){
            $('.hud').one('click', function () {
                $('.hud').text('')
                console.log(frame);
                frame = 280
            })
            frame--
        }

        if(frame == 285){
            intro = 'GO! ' + equipedPokemon[1].toUpperCase() +'!';
                displayText($('.hud'), intro)
            $('.pokebar').hide();
        }

        if( frame > 285 && frame < 330){
            $('.player-pokemon').css('right', ( ((frame - 85) - 150) * 1.2)+ 'vh');
        }

        if( frame == 330){
            $('.player-pokemon').css('right', '55vh');
            $('.player-pokemon').css('background-image', "url(./assets/ui/gas1.png)")

        }

        if( frame == 335){
            $('.player-pokemon').css('background-image', "url(./assets/ui/gas2.png)")

        }

        if( frame == 340){
            $('.player-pokemon').css('background-image', "url(./assets/ui/gas3.png)")

        }
        if( frame == 345){
            $('.player-pokemon').css('background-image', "url(./assets/ui/gas4.png)")

        }

        if( frame == 347){
            $('.player-pokemon').css('background-image', "url(" + sprites.back_default +  ")")

        }


  

    }, 16.7);

}


worldGen(zone1);
forceMove(5,8);