let equipedPokemon = {
    1: 'charmander',
    2: 'pikachu'
}



const zone1 = [[1,1,1,1,1,1,1,1,1,1],
                  [1,1,1,1,1,1,1,1,1,1],
                  [1,0,0,1,1,1,1,1,1,1],
                  [1,0,5,1,1,6,1,1,1,1],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,0,0,0,0,0,0,0,0,0],
                  [1,1,1,1,1,1,0,2,2,0],
                  [1,1,1,1,1,1,0,2,2,0],
                  [1,1,1,1,1,1,0,0,0,0]];

const room = [[1,1,1,1,1,1,1,1,1,1],
               [1,1,1,1,1,1,1,1,1,7],
               [1,1,1,1,1,1,0,0,0,0],
               [0,0,0,1,0,0,0,0,0,0],
               [0,0,0,1,1,1,1,1,0,0],
               [0,0,0,0,1,1,1,1,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [0,0,0,0,0,0,0,0,0,0],
               [1,1,1,1,1,1,8,8,1,1]];  

const roomF2 = [[1,1,1,1,1,1,1,1],
               [1,1,1,1,1,1,1,6,],
               [0,0,1,1,1,1,0,0,],
               [0,0,0,0,0,0,0,0,],
               [0,0,0,0,0,0,0,0,],
               [0,0,0,0,1,1,0,0,],
               [0,0,0,0,0,0,0,0,],
               [1,1,1,1,1,1,1,1,]];

const world = [[zone1]];


function worldWalkable(){
    this.walkable = true;
    
}

function worldUnwalkable(){
    this.walkable = false;
    
}

function worldShrub() {
    this.walkable = true;
    this.enemys = 1;
}

function amongus(){
    this.walkable = false;
    this.type = 'sign'
    this.text = 'What do you call a cow with no legs?splitGround beef!!!';
}
function zone1Sign(){
    this.walkable = false;
    this.type = 'sign'
    this.text = 'Welcome to zone1!';
}

function zoneRoom(){
    this.walkable = false;
    this.type = 'door';
    this.where = 'room';
    this.grid = room;
}

function zoneRoomF2(){
    this.walkable = false;
    this.type = 'door';
    this.where = 'roomF2';
    this.grid = roomF2;
}
function zoneArea1(){
    this.walkable = false;
    this.type = 'door';
    this.where = 'zone1';
    this.grid = zone1;

}




$('.fight-screen').hide();
$('.pokebar').hide();

function worldGen(zoneData, img, pz){

    $('.zoneTiles').css('background-image', "url('./assets/enviroment/"+ img + ".png'")
    console.log("url('./assets/enviroment/"+ img + ".png'")
    console.log(zoneData.length)


    for(var y = 0; y < zoneData.length;y++){

    for(x=0; x< zoneData.length;x++){
        var objEl = document.createElement('div');
        $(objEl).css("background-size", "cover");
        var id = zoneData[y][x];
        let objdata;
        switch(id){
            
            case 0:
                //empty
                objdata = new worldWalkable;
            break;

            case 1:
                //grass
                objdata = new worldUnwalkable;
            break;

            case 2:
                //enemyshrub
                objdata = new worldShrub;
                $(objEl).attr('data-enemys', objdata.enemys);
            break;


            case 4:
                objdata = new amongus();
                $(objEl).attr('data-text', objdata.text);
                $(objEl).attr('data-type', objdata.type);
                break;

            case 5:
                //zone 1 sign
                objdata = new zone1Sign();
                $(objEl).attr('data-text', objdata.text);
                $(objEl).attr('data-type', objdata.type);
            break;

            case 6:
                objdata = new zoneRoom;
                $(objEl).attr('data-type', objdata.type);
                $(objEl).attr('data-where', objdata.where);
                console.log(objdata.grid);
                break;

            case 7:
                objdata = new zoneRoomF2();
                $(objEl).attr('data-type', objdata.type);
                $(objEl).attr('data-where', objdata.where);
                console.log(objdata.grid);
                break;

            case 8:
                 objdata = new zoneArea1();
                $(objEl).attr('data-type', objdata.type);
                $(objEl).attr('data-where', objdata.where);
                console.log(objdata.grid);
                break;

            
        }

        $(objEl).addClass('world-obj');
        $(objEl).css('width', (100/zoneData.length)+'%')
        $(objEl).css('height', (100/zoneData.length)+'%')
        $(pz).css('width', (100/zoneData.length)+'vh')
        $(pz).css('height', (100/zoneData.length)+'%')
        $(objEl).attr('id', (x + 1) + '-' + Math.abs((y) - zoneData.length));
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
    $('button').prop('disabled', true);
    let marginStyle;
    let marginChange;
    var frame = 0;
    let step = '';
    let offset = 0;
    switch(direction){
        case 'Up':
            offset = 20;
            y++;
            step = player.attr('data-step');
            marginStyle = 'bottom';
            marginChange = 5;
            break;

        case 'Down':
            offset = 20;
            y--;
            step = player.attr('data-step');
            marginStyle = 'bottom';
            marginChange = -5;
            break;

        case 'Left':
            x--;
            marginStyle = 'left';
            marginChange = -5;
            break;

        case 'Right':
            x++;
            marginStyle = 'left'
            marginChange = 5;

            break;
    }
  
    player.attr('src' , './assets/player/walking' + direction + step + '.png');

    var timerID = setInterval(function() {
        frame++;
        player.css(marginStyle, ((frame*marginChange)+offset) + '%');
        if(frame == 15){
            player.attr('src' , './assets/player/standing' + direction +'.png')
        }
        if(frame == 20) {
            clearInterval(timerID);
            player.css("left", "0");
            player.css("bottom", "2vh");
            w.append($('.player-zone'));
            $('button').prop('disabled', false);

            if(w.attr('data-enemys')){
                if(Math.random() > .66){
                    let hud = $('.hud')
                    $('.control-zone').hide();
                    fightScene(player, hud);
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
    console.log(w.attr('data-type'))
    let pz = $('.player-zone');
    switch(w.attr('data-type')){
        
        case 'sign':
            let hud = $('.hud')
            $(hud).show();
            displayText(hud, $(w).attr('data-text'));
            break;

        case 'door':
            switch(w.attr('data-where')){
                case 'room':
                    
                    $('.zoneTiles').empty();
                    worldGen(room, 'room', pz);
                    $('#5-6').append(pz);
                    $('.zoneTiles').css('width', '80vh');
                    $('.zoneTiles').css('height', '80%');
                    $(pz).css('width', '8vh');
                    $(pz).css('height', '8%');
                    
                    
                    console.log(pz.attr('data-zone'));
                    if(pz.attr('data-zone') == 'roomF2'){
                        forceMove(10,8);
                    }

                    else{
                        forceMove(7,2);
                    }
                    
                    $(pz).attr('data-zone', 'room');
                
                    console.log('hit');
                    break;

                case 'roomF2':
                    $('.zoneTiles').empty();
                    $('.zoneTiles').css('width', '80vh')
                    $('.zoneTiles').css('height', '80%')
                    $(pz).css('width', '10vh');
                    $(pz).css('height', '10%');
                    worldGen(roomF2, 'roomF2');
                    $('#8-6').append(pz);
                    forceMove(8,6);
                    console.log('hit');
                    $(pz).attr('data-zone', 'roomF2');
                    break;
                case 'zone1':
                    $('.zoneTiles').empty();
                    $('.zoneTiles').css('width', '100vh');
                    $('.zoneTiles').css('height', '100%');
                    $(pz).css('width', '10vh');
                    $(pz).css('height', '10%');
                    worldGen(zone1, 'zone1');
                    $('#6-6').append(pz);
                    forceMove(6,6);
                    $(pz).css('width', '10vh');
                    $(pz).css('height', '10%');
                    console.log('hit');
                    $(pz).attr('data-zone', 'zone1');
                    break;
            }

        

    }
    
}

function displayText(hud, text, i){
    if(!i){
        i = 0;
    }
    $(hud).text(' ');
    let char = 0;
    let textScroll;
    let buildText = '';
    let textArr = text.split('split');
        let currText = textArr[i];
        textScroll = setInterval( function(){
        buildText = buildText + currText[char];
        $(hud).text(buildText)
        char++;

        if(char === currText.length){
            clearInterval(textScroll);
            
            
            if((i + 1) == textArr.length){
                if($('.fight-screen').is(":hidden") === true){
                    $(hud).one('click', function () {
                        $(hud).text('');
                        $(hud).hide();
                    })
                    
                }
                else{
                    let arrow = document.createElement('img');
            $(arrow).addClass('arrow');
            $(arrow).attr('src', './assets/ui/arrow.png');
            $(hud).append(arrow);
                    $(hud).one('click', function () {
                        $(hud).text('');
                    })
                }
            }
            i++;
            if(i < textArr.length){
                let arrow = document.createElement('img');
            $(arrow).addClass('arrow');
            $(arrow).attr('src', './assets/ui/arrow.png');
            $(hud).append(arrow);
                $(hud).one('click', function () { 
                    displayText(hud, text, i);
                    
                })
            }
            
            
            
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

function enemyInfoBar(pokeInfo){
    let {lvl, gender, name} = pokeInfo;
    let pokeHealthEl = document.createElement('div');
    $(pokeHealthEl).addClass('enemyhealth');
    $(pokeHealthEl).append('<h1>'+ name.toUpperCase() + '</h1>');
    $(pokeHealthEl).append("<img src='./assets/ui/levelSym.png'>" + '<h2>'+  lvl + '' + '</h2>' + "<img src='./assets/ui/"+ gender + ".png'>");
    $('.fight-screen').append(pokeHealthEl)

}

function playerInfoBar(pokeInfo, level, gender){
    let pokeHealthEl = document.createElement('div');
    $(pokeHealthEl).addClass('playerhealth');
    $(pokeHealthEl).append('<h1>'+ pokeInfo.name.toUpperCase() + '</h1>');
    $(pokeHealthEl).append("<img src='./assets/ui/levelSym.png'>" + '<h2>'+  level + '' + '</h2>' + "<img src='./assets/ui/"+ gender + ".png'>");
    $('.fight-screen').append(pokeHealthEl)

}

function calc_stat(stat, base_value,lvl, iv, ev) {
        if(stat==='hp')
        return Math.floor((((base_value+iv)*2+(Math.sqrt(ev)/4))*lvl)/100)+ lvl + 10;
        else
        return Math.floor((((base_value+iv)*2+(Math.sqrt(ev)/4))*lvl)/100)+ 5;
    }


function enemyPokemon(data, lvl, iv, ev, gender) {
    console.log(gender)
    switch(gender){
        case 0:
            this.gender = 'male';
            break;
        case 1:
            this.gender = 'female'
            break;
    }
    this.name = data.name
    this.sprite = data.sprites.versions['generation-ii'].gold;
    this.intro = 'W i l d ' +data.name.toUpperCase() + ' appeared!';
    this.lvl = lvl;
    
    this.Hp = calc_stat('hp', data.stats[0].base_stat, lvl, iv, ev);
    this.MaxHp = calc_stat('hp', data.stats[0].base_stat, lvl, iv, ev);
    this.Atk = calc_stat('atk', data.stats[1].base_stat, lvl, iv, ev);
    this.Def = calc_stat('def', data.stats[2].base_stat, lvl, iv, ev);
    this.spAtk = calc_stat('spatk', data.stats[3].base_stat, lvl, iv, ev);
    this.spDef = calc_stat('spdef', data.stats[4].base_stat, lvl, iv, ev);
    this.Speed = calc_stat('speed', data.stats[5].base_stat, lvl, iv, ev); 
}

async function fightScene(p, hud){
    let responseP = await fetch('https://pokeapi.co/api/v2/pokemon/' + $(p).attr('data-pokemon'));
    let jsonDataP = await responseP.json();

    let responseE = await fetch('https://pokeapi.co/api/v2/pokemon/' + Math.floor(Math.random() * 251));
    let jsonDataE = await responseE.json();


    $('.control-zone').hide();
    let enemy = new enemyPokemon(jsonDataE, (Math.floor(Math.random() * 5) + 3), 0, 0, Math.floor(Math.random() * 1));
    console.log(jsonDataE);
    console.log(enemy);
    let sprites = jsonDataP.sprites.versions['generation-ii'].gold;
    let allTiles = $('.world-obj');
    let frame = 0
    let playerPokemonEl = $('.player-pokemon');
    let enemyPokemonEl = $('.enemy-pokemon');

    $(playerPokemonEl).css('background-image', "url(https://archives.bulbagarden.net/media/upload/5/53/GSC_Ethan_Back.png)")
    $(enemyPokemonEl).css('background-image', "url(" + enemy.sprite.front_default +  ")")
    
    startAni = setInterval( await function(){

        if(frame < 100){
            $(allTiles[frame]).css('background', 'black');
        }
        
        frame++;

        
        if(frame == 100){
            p.hide();
        }

        if(frame == 130){
            $('.fight-screen').show();
            $(hud).show();
            
        }

        if( frame > 130 && frame < 200){
            $(playerPokemonEl).css('right', ( (frame - 150) * 1.2)+ 'vh');
            $(enemyPokemonEl).css('left', ( (frame - 150) * 1.3)+ 'vh');
        }
        
            

        if(frame == 200){
            let priev = $(playerPokemonEl).css('right');
            $(playerPokemonEl).css('filter', 'none');
            $(enemyPokemonEl).css('filter', 'none');
        }

        if(frame == 230){
            pokebar(equipedPokemon);
            
            displayText($(hud), enemy.intro)
        }

        if(frame == 263){
            $(hud).one('click', function () {
                $(hud).text('')
                enemyInfoBar(enemy);
                
                frame = 280;
                
            })
            frame = 'paused';
        }

        if(frame == 285){
            intro = 'GO! ' + equipedPokemon[1].toUpperCase() +'!';
                displayText($(hud), intro)
            $('.pokebar').hide();
        }

        if( frame > 285 && frame < 330){
            $(playerPokemonEl).css('right', ( ((frame - 85) - 150) * 1.2)+ 'vh');
        }

        if( frame == 330){
            $(playerPokemonEl).css('right', '55vh');
            $(playerPokemonEl).css('background-image', "url(./assets/ui/gas1.png)")

        }

        if( frame == 335){
            $(playerPokemonEl).css('background-image', "url(./assets/ui/gas2.png)")

        }

        if( frame == 340){
            $(playerPokemonEl).css('background-image', "url(./assets/ui/gas3.png)")

        }
        if( frame == 345){
            $(playerPokemonEl).css('background-image', "url(./assets/ui/gas4.png)")

        }

        if( frame == 347){
            $(playerPokemonEl).css('background-image', "url(" + sprites.back_default +  ")")

        }
        

        if( frame == 347){
            $(playerPokemonEl).css('background-image', "url(" + sprites.back_default +  ")")

        }

        if(frame == 380){
            $(hud).text('')
        }
        

        if( frame == 400){
            $(hud).css('background-image', "url(./assets/ui/fightbox.png)")
            playerInfoBar(jsonDataP, '5', 'male');
            
        }


    }, 16.7);

}


worldGen(zone1, 'zone1');
forceMove(5,6);