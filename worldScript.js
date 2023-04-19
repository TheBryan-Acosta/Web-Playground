const zone2 =   [[3,3,3,3,3,3,3,3,3,3]
                ,[4,4,4,4,4,1,0,1,0,1]
                ,[4,4,4,4,4,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]];

const zone1 =   [[1,0,1,0,1,3,3,3,3,3]
                ,[0,1,0,1,0,1,4,4,4,4]
                ,[3,0,3,5,1,0,4,4,4,4]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,4,4,4,1,0,1,0,1]
                ,[1,0,4,3,4,0,1,0,1,0]
                ,[0,1,4,4,4,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]];

const emptyzone =   [[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]
                ,[1,0,1,0,1,0,1,0,1,0]
                ,[0,1,0,1,0,1,0,1,0,1]];

const world = [[zone1,zone2,emptyzone],
               [emptyzone,emptyzone,emptyzone],
               [emptyzone,emptyzone,emptyzone],
]


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
function worldGen(zoneData){
    for(var y = 0; y < zoneData.length;y++){

    for(x=0; x< 10;x++){

        var objEl = document.createElement('div');
        var id = zoneData[y][x];

        switch(id){
            case 0:
                //empty
                var objdata = new worldLand0;
            break;

            case 1:
                //grass
                var objdata = new worldLand1;
            break;

            case 2:
                //
            break;

            case 3:
                //pillar
                var objdata = new worldPillar;
            break;

            case 4:
                //shrub
                var objdata = new worldShrub;
                $(objEl).attr('data-enemys', objdata.enemys);
            break;

            case 5:
                //zone 1 sign
                var objdata = new zone1Sign();
                $(objEl).attr('data-text', objdata.text);
                $(objEl).attr('data-type', objdata.type);
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

function worldGen(zoneData){
    for(var y = 0; y < zoneData.length;y++){

    for(x=0; x< 10;x++){

        var objEl = document.createElement('div');
        var id = zoneData[y][x];

        switch(id){
            case 0:
                //empty
                var objdata = new worldLand0;
            break;

            case 1:
                //grass
                var objdata = new worldLand1;
            break;

            case 2:
                //
            break;

            case 3:
                //pillar
                var objdata = new worldPillar;
            break;

            case 4:
                //shrub
                var objdata = new worldShrub;
                $(objEl).attr('data-enemys', objdata.enemys);
            break;

            case 5:
                //zone 1 sign
                var objdata = new zone1Sign();
                $(objEl).attr('data-text', objdata.text);
                $(objEl).attr('data-type', objdata.type);
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
    
            if(w.attr('data-enemys')){
                if(Math.random() > .66){
                    console.log('fight');
                }
            }
        }

        else{
            p.attr('src' , './assets/player/standing' + direction +'.PNG')
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
    $('.move-btn').prop('disabled', true);
    let marginStyle;
    let marginChange;
    var frame = 0;
    let step = '';
    let offset = 0;
    switch(direction){
        case 'Up':
            offset = 1;
            y++;
            step = player.attr('data-step');
            marginStyle = 'bottom';
            marginChange = .5;
            break;

        case 'Down':
            offset = 1;
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
            player.attr('src' , './assets/player/standing' + direction +'.PNG')
        }
        if(frame == 20) {
            clearInterval(timerID);
            player.css("left", "0");
            player.css("bottom", "1vh");
            w.append($('.player-zone'));
            $('.move-btn').prop('disabled', false);  
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
    console.log(w)
    switch(w.attr('data-type')){
        case 'sign':
            console.log('hit')
            let hud = document.createElement('div');
            $(hud).addClass('hud');
            $(hud).attr('id', 'text-box')
            $('.world').append(hud);
            displayText(hud, $(w).attr('data-text'));
            break;

    }
    
}

function displayText(hud, text){
    $('.control-zone').hide();
    let char = 0;
    let textScroll;
    let buildText = '';
    textScroll = setInterval(function(){
        buildText = buildText + text[char];
        $(hud).text(buildText)
        char++;

        if(char === text.length){
            clearInterval(textScroll);
            var arrow = document.createElement('img');
            $(arrow).addClass('arrow');
            $(arrow).attr('src', './assets/ui/arrow.png');
            $(hud).append(arrow);
            $('.hud').click(function(){
                $('.hud').remove();
                $('.control-zone').show();
            });
        }
    }, 30);
}



worldGen(zone1);