// This is the players currently equiped starter pokemon.
let equipedPokemon = {
	1: "charmander",
	2: "pikachu",
};



// tenbyten is the standard grid layout, & standard sizing.
const tenbyten = Array(10).fill(Array(10).fill(0));
// openworld is 20x18, each ID corresponds to a different tile.

//Portal == [x,y,place,grid]
// ID KEY
// 0 - Unwalkable Tiles
// 1 - Walkable Tiles
// 2 - Random Enemy Shrub
// 3
const openWorld = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 5, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
	[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

const room = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 7],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 4, 4, 1, 1],
];

const roomF2 = [
	[1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 6],
	[0, 0, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1],
];

//create the view

// ID 0
function walkableTile() {
	this.walkable = true;
}

// ID 1
function unwalkableTile() {
	this.walkable = false;
}

// ID 2
function shrubTile() {
	this.walkable = true;
	this.enemys = true;
}

// ID 3
function Portal(x,y,place,grid) {
	this.type = 'portal';
	this.x = x;
	this.y = y;
	this.where = place;
	this.height = grid.length;
	this.width = grid[0].length;
}

// ID 5
//https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
function jokeTile() {
	
	this.walkable = false;
	this.type = "sign";
	this.text = "joke";
}

// ID 6
function toRoom() {
	this.walkable = false;
	this.type = "door";
	this.where = "room";
	this.grid = room;
}

// ID 7
function toRoomF2() {
	this.walkable = false;
	this.type = "door";
	this.where = "roomF2";
	this.grid = roomF2;
}

// ID 8
function toOpen() {
	this.walkable = false;
	this.type = "door";
	this.where = "openworld";
}
//GAME OBJECTS
function gameInstance() {
	this.player = new Player();
	this.world = new World();
}
let newSave = new gameInstance;

let game = newSave

// PLAYER
function Player() {
	this.pokemonInv = {
		1: "charmander",
		2: "pikachu",
	};

	this.x = 10;
	this.y = 10;
	this.location = 'openWorld';
	this.direction = 'Up';
	this.step = 1;
}

//WORLD
function World() {
	this.openWorld = {
		data: worldObjGen(openWorld),
		backgroundSize: '200vh',
		cameraSize: '10vh',
	};
	this.room = {
		data: worldObjGen(room),
		backgroundSize: '80vh',
		cameraSize: '10vh',

		type: 'indoors'
	};


}

Teleport(new Portal(game.player.x, game.player.y,'openWorld', openWorld));



function worldObjGen(zoneData) {
	let worldObj = {};

	for (var y = 0; y < zoneData.length; y++) {
		for (x = 0; x < zoneData[0].length; x++) {
			var id = zoneData[y][x];
			let objdata;
			switch (id) {
				case 0:
					//empty
					objdata = new walkableTile();
					break;

				case 1:
					//grass
					objdata = new unwalkableTile();
					break;

				case 2:
					//enemyshrub
					objdata = new shrubTile();

					break;

				case 3:
					objdata = new Portal(7,2,'room', room);
					break;

				case 4:
				objdata = new Portal(6,14,'openWorld', openWorld);
				break;

				case 5:
					//zone 1 sign
					objdata = new jokeTile();

					break;

				case 6:
					objdata = new toRoom();
					break;

				case 7:
					objdata = new toRoomF2();

					break;

			}
			objdata.xy = x + 1 + "-" + Math.abs(y - zoneData.length);
			worldObj[x + 1 + "-" + Math.abs(y - zoneData.length)] = objdata;
		}
	}
	return worldObj;
}

$(".fight-screen").hide();
$(".pokebar").hide();
worldObjGen(openWorld);

function Teleport(data) {
	console.log(data)
	game.player.x = data.x;
	game.player.y = data.y;
	game.player.location = data.where;

	$('.world-filter').css('backgroundColor', '')

	$(".scene").css(
		"marginLeft",
		 (10) + ((data.width/2 - data.x) * 20) + 'vh'
	);

	$(".scene").css(
		"marginTop",
		(10) - ((data.height/2 - data.y + 1) * 20) + 'vh'
	);
	
	
	$(".scene").attr(
		"src",
		"./assets/enviroment/" + data.where + ".png"
	);
	$(".scene").css(
		"height",
		game.world[data.where].backgroundSize
	);
	
}


$(document).ready(function () {
	$(".move-btn").click(function () {
		game.player.direction = $(this).attr("id");
		var p = $(".player");
		let {x, y, location, direction} = game.player;
		let worldData = game.world[location].data;

		switch (direction) {
			case "Up":
				y++;
				break;
			case "Down":
				y--;
				break;
			case "Left":
				x--;
				break;
			case "Right":
				x++;
				break;
		}
		let target = worldData[x + "-" + y];

		if (target.walkable === true) {
					moveOutdoors(target, p, direction);


		} else {
			p.attr("src", "./assets/player/standing" + direction + ".png");
		}
	});

	$("#Int").click(function () {
		let {x, y, location, direction} = game.player;
		let worldData = game.world[location].data;
		
		switch (direction) {
			case "Up":
				y++;
				break;
			case "Down":
				y--;
				break;
			case "Left":
				x--;
				break;
			case "Right":
				x++;
				break;
		}

		let target = worldData[x + "-" + y];
		interact(target);
	});
});

function moveOutdoors(target, player, direction) {
	let ztEl = $(".scene");
	let background_x = Math.round(10*(Number($(ztEl).css("marginLeft").replace('px', '')) / $(".container").height() * 100)) / 10;

	let background_y = Math.round(10*(Number($(ztEl).css("marginTop").replace('px', '')) / $(".container").height() * 100)) / 10;

	let step = "";
	let X_change = 0;
	let Y_change = 0;

	switch (direction) {
		case "Up":
			step = game.player.step;
			Y_change = 1;
			game.player.y++
			break;
		case "Down":
			step = game.player.step;
			Y_change = -1;
			game.player.y--
			break;
		case "Left":
			X_change = 1;
			game.player.x--
			break;
		case "Right":
			X_change = -1;
			game.player.x++
			break;
	}

	player.attr("src", "./assets/player/walking" + direction + step + ".png");

	$("button").prop("disabled", true);
	let frame = 0;
	let walk_animation = setInterval(function () {
		frame++;
		$(ztEl).css(
			"marginLeft",
			background_x + X_change * frame + "vh"
		);
		$(ztEl).css(
			"marginTop",
			background_y + Y_change * frame + "vh"
		);

		if (frame == 15) {
			player.attr("src", "./assets/player/standing" + direction + ".png");
		}

		if (frame == 20) {
			clearInterval(walk_animation);
			$("button").prop("disabled", false);
			if (target.enemys == true) {
				if (Math.random() > 0.66) {
					let hud = $(".hud");
					$(".control-zone").hide();
					fightScene(player, hud);
				} 
			}
		}
	}, 16.7);

	switch(game.player.step){
		case 1:
			game.player.step++;
			break;
		case 2:
			game.player.step--;
			break;
	}

}

//MOVE INDOORS
function moveIndoors(game, p) {
}


function interact(target) {

	switch (target.type) {
		case "sign":
			let hud = $(".hud");
			$(hud).show();
			displayText(hud, target.text);
			break;

		case "portal":
				$('.world-filter').css('backgroundColor', 'black')
			setTimeout(function() { Teleport(target); }, 300);
			
	}
}

async function displayText(hud, text, i) {
	if(text == 'joke'){
		let response = await fetch(
			"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
		);
		let jokeJSON = await response.json();

		while(jokeJSON.delivery.length >= 40 || jokeJSON.setup.length >=  40){
			response = await fetch(
				"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
			);
			jokeJSON = await response.json();
		}
		
		text = jokeJSON.setup + '~' + jokeJSON.delivery;
	}

	if (!i) {
		i = 0;
	}
	$(hud).text(" ");
	let char = 0;
	let textScroll;
	let buildText = "";
	let textArr = text.split("~");
	let currText = textArr[i];
	textScroll = setInterval(function () {
		buildText = buildText + currText[char];
		$(hud).text(buildText);
		char++;

		if (char === currText.length) {
			clearInterval(textScroll);

			if (i + 1 == textArr.length) {
				if ($(".fight-screen").is(":hidden") === true) {
					$(hud).one("click", function () {
						$(hud).text("");
						$(hud).hide();
					});
				} else {
					let arrow = document.createElement("img");
					$(arrow).addClass("arrow");
					$(arrow).attr("src", "./assets/ui/arrow.png");
					$(hud).append(arrow);
					$(hud).one("click", function () {
						$(hud).text("");
					});
				}
			}
			i++;
			if (i < textArr.length) {
				let arrow = document.createElement("img");
				$(arrow).addClass("arrow");
				$(arrow).attr("src", "./assets/ui/arrow.png");
				$(hud).append(arrow);
				$(hud).one("click", function () {
					displayText(hud, text, i);
				});
			}
		}
	}, 30);
}

function snapTo(x, y) {
	let pz = $(".player-zone");

	$("#" + x + "-" + y).append(pz);
}

function pokebar(pokemonObj) {
	let flexBox = $(".pokebarBalls");
	for (i = 0; i < 7; i++) {
		if (Object.keys(pokemonObj).length > i) {
			let barItem = document.createElement("img");
			$(barItem).attr("src", "./assets/ui/pokeball.png");
			$(flexBox).append(barItem);
		} else {
			let barItem = document.createElement("img");
			$(barItem).attr("src", "./assets/ui/emptyball.png");
			$(flexBox).append(barItem);
		}
	}
	$(".pokebar").show();
}

function enemyInfoBar(pokeInfo) {
	let { lvl, gender, name } = pokeInfo;
	let pokeHealthEl = document.createElement("div");
	$(pokeHealthEl).addClass("enemyhealth");
	$(pokeHealthEl).append("<h1>" + name.toUpperCase() + "</h1>");
	$(pokeHealthEl).append(
		"<img src='./assets/ui/levelSym.png'>" +
			"<h2>" +
			lvl +
			"" +
			"</h2>" +
			"<img src='./assets/ui/" +
			gender +
			".png'>"
	);
	$(".fight-screen").append(pokeHealthEl);
}

function playerInfoBar(pokeInfo, level, gender) {
	let pokeHealthEl = document.createElement("div");
	$(pokeHealthEl).addClass("playerhealth");
	$(pokeHealthEl).append("<h1>" + pokeInfo.name.toUpperCase() + "</h1>");
	$(pokeHealthEl).append(
		"<img src='./assets/ui/levelSym.png'>" +
			"<h2>" +
			level +
			"" +
			"</h2>" +
			"<img src='./assets/ui/" +
			gender +
			".png'>"
	);
	$(".fight-screen").append(pokeHealthEl);
}

function calc_stat(stat, base_value, lvl, iv, ev) {
	if (stat === "hp")
		return (
			Math.floor((((base_value + iv) * 2 + Math.sqrt(ev) / 4) * lvl) / 100) +
			lvl +
			10
		);
	else
		return (
			Math.floor((((base_value + iv) * 2 + Math.sqrt(ev) / 4) * lvl) / 100) + 5
		);
}

function enemyPokemon(data, lvl, iv, ev, gender) {
	switch (gender) {
		case 0:
			this.gender = "male";
			break;
		case 1:
			this.gender = "female";
			break;
	}
	this.name = data.name;
	this.sprite = data.sprites.versions["generation-ii"].gold;
	this.intro = "W i l d " + data.name.toUpperCase() + " appeared!";
	this.lvl = lvl;

	this.Hp = calc_stat("hp", data.stats[0].base_stat, lvl, iv, ev);
	this.MaxHp = calc_stat("hp", data.stats[0].base_stat, lvl, iv, ev);
	this.Atk = calc_stat("atk", data.stats[1].base_stat, lvl, iv, ev);
	this.Def = calc_stat("def", data.stats[2].base_stat, lvl, iv, ev);
	this.spAtk = calc_stat("spatk", data.stats[3].base_stat, lvl, iv, ev);
	this.spDef = calc_stat("spdef", data.stats[4].base_stat, lvl, iv, ev);
	this.Speed = calc_stat("speed", data.stats[5].base_stat, lvl, iv, ev);
}

async function fightScene(p, hud) {
	let responseP = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + 'charmander'
	);
	let jsonDataP = await responseP.json();

	let responseE = await fetch(
		"https://pokeapi.co/api/v2/pokemon/" + Math.floor(Math.random() * 251)
	);
	let jsonDataE = await responseE.json();

	$(".control-zone").hide();
	let enemy = new enemyPokemon(
		jsonDataE,
		Math.floor(Math.random() * 5) + 3,
		0,
		0,
		Math.floor(Math.random() * 1)
	);


	let sprites = jsonDataP.sprites.versions["generation-ii"].gold;
	let frame = 0;
	let playerPokemonEl = $(".player-pokemon");
	let enemyPokemonEl = $(".enemy-pokemon");

	$(playerPokemonEl).css(
		"background-image",
		"url(./assets/ui/playerBack.png)"
	);
	$(enemyPokemonEl).css(
		"background-image",
		"url(" + enemy.sprite.front_default + ")"
	);
	$('.world-filter').css('transition', '.7s')

	$('.world-filter').css('backgroundColor', 'white')
	startAni = setInterval(
		await function () {
			frame++;


			if (frame == 130) {
				$(".fight-screen").show();
				$(hud).show();
				$('.world-filter').css('backgroundColor', 'black')
			}

			if (frame > 130 && frame < 200) {
				$(playerPokemonEl).css("right", (frame - 150) * 1.2 + "vh");
				$(enemyPokemonEl).css("left", (frame - 150) * 1.3 + "vh");
			}

			if (frame == 200) {
				let priev = $(playerPokemonEl).css("right");
				$(playerPokemonEl).css("filter", "none");
				$(enemyPokemonEl).css("filter", "none");
			}

			if (frame == 230) {
				pokebar(equipedPokemon);

				displayText($(hud), enemy.intro);
			}

			if (frame == 263) {
				$(hud).one("click", function () {
					$(hud).text("");
					enemyInfoBar(enemy);

					frame = 280;
				});
				frame = "paused";
			}

			if (frame == 285) {
				intro = "GO! " + equipedPokemon[1].toUpperCase() + "!";
				displayText($(hud), intro);
				$(".pokebar").hide();
			}

			if (frame > 285 && frame < 330) {
				$(playerPokemonEl).css("right", (frame - 85 - 150) * 1.2 + "vh");
			}

			if (frame == 330) {
				$(playerPokemonEl).css("right", "55vh");
				$(playerPokemonEl).css("background-image", "url(./assets/ui/gas1.png)");
			}

			if (frame == 335) {
				$(playerPokemonEl).css("background-image", "url(./assets/ui/gas2.png)");
			}

			if (frame == 340) {
				$(playerPokemonEl).css("background-image", "url(./assets/ui/gas3.png)");
			}
			if (frame == 345) {
				$(playerPokemonEl).css("background-image", "url(./assets/ui/gas4.png)");
			}

			if (frame == 347) {
				$(playerPokemonEl).css(
					"background-image",
					"url(" + sprites.back_default + ")"
				);
			}

			if (frame == 347) {
				$(playerPokemonEl).css(
					"background-image",
					"url(" + sprites.back_default + ")"
				);
			}

			if (frame == 380) {
				$(hud).text("");
			}

			if (frame == 400) {
				$(hud).css("background-image", "url(./assets/ui/fightbox.png)");
				playerInfoBar(jsonDataP, "5", "male");
			}
		},
		16.7
	);
}

snapTo(5, 5);
