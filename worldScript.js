// This is the players currently equiped starter pokemon.
let equipedPokemon = {
	1: "charmander",
	2: "pikachu",
};

// openworld is 20x18, each ID corresponds to a different tile.

// ID KEY
// 0 - Walkable Tiles
// 1 - Unwalkable Tiles
// 2 - Random Enemy Shrub
// 3 - Portal - openworld --> room
// 4 - Portal - room --> openworld
// 5 - Random joke signs

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
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
	[1, 1, 1, 1, 1, 1, 1, 1],
	[0, 0, 1, 1, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1],
];

//WORLD OBJECTS

// ID 0
class walkableTile {
	walkable = true;
}

// ID 1
class unwalkableTile {
	walkable = false;
}

// ID 2
class shrub {
	walkable = true;
	enemys = true;
}

// ID 3
// The Portal constructor class passes 4 parameters - the players new x and y value, where you're going (location) and the 2d array that place uses.
class Portal {
	constructor(x, y, place, grid) {
		this.type = "portal";
		this.x = x;
		this.y = y;
		this.where = place;
		this.height = grid.length;
		this.width = grid[0].length;
	}
}

// ID 5
//https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit
class jokeSign {
	walkable = false;
	type = "sign";
	text = "joke";
}

//GAME
class gameInstance {
	player = new Player();
	world = new World();
}

// PLAYER
//Starting values

class Player {
	pokemonInv = {};

	x = 10;
	y = 10;
	location = "openWorld";
	direction = "Up";
	step = 1;
}

//WORLD
class World {
	openWorld = {
		data: worldObjGen(openWorld),
		backgroundSize: "200vh",
		cameraSize: "10vh",
	};
	room = {
		data: worldObjGen(room),
		backgroundSize: "80vh",
		cameraSize: "10vh",

		type: "indoors",
	};
}

//creating a new save -- Plans are to save this obj to local storage to save game data

let newSave = new gameInstance();

let game = newSave;

async function giveStarterPokemon() {
	game.player.pokemonInv = await createNewPokemon("charmander");
}

giveStarterPokemon();

Teleport(new Portal(game.player.x, game.player.y, "openWorld", openWorld));

//worldObjGen accepts a 2d Array, as its parameter. This function will create a hashmap of positions and its properties.
function worldObjGen(zoneData) {
	let hashMap = {};

	//in this double for loop. We iterate through the 2dArray, every array iteration is like incrementing y axis, and every index iteration is like incrementing x axis.
	for (var y = 0; y < zoneData.length; y++) {
		for (x = 0; x < zoneData[0].length; x++) {
			var id = zoneData[y][x];
			let objdata;
			switch (id) {
				//iterate through the entire 2d array. Depending on the integer - a new object(objdata) is created with a classes properties.
				case 0:
					//walkable
					objdata = new walkableTile();
					break;

				case 1:
					//unwalkable
					objdata = new unwalkableTile();
					break;

				case 2:
					//enemyshrub
					objdata = new shrub();

					break;
				case 3:
					//Portal - openWorld --> room
					objdata = new Portal(7, 2, "room", room);

					break;
				case 4:
					//Portal - room --> openWorld
					objdata = new Portal(6, 14, "openWorld", openWorld);

					break;

				case 5:
					//joke signs
					objdata = new jokeSign();

					break;
			}
			//every iteration in the 2d array sets the (x-y) as the key and the properties from (objdata).
			objdata.xy = x + 1 + "-" + Math.abs(y - zoneData.length);
			hashMap[x + 1 + "-" + Math.abs(y - zoneData.length)] = objdata;
		}
	}
	return hashMap;
}

$(".fight-screen").hide();
$(".pokebar").hide();

//Teleport function takes in one parameter, data (the target Portal)
function Teleport(data) {
	//reassign the players information to the target location, x, and y values
	game.player.x = data.x;
	game.player.y = data.y;
	game.player.location = data.where;

	//remove the transition color
	$(".world-filter").css("backgroundColor", "");

	//set the position of the background - 10vh Left & 10vh Top is default to align the player to the grid on the background

	//one tile == 20vh x 20vh
	//ten + (the new areas width(in tiles) divided by two), subtracted by the players new x cordinate then multiplied by 20)
	$(".scene").css("marginLeft", 10 + (data.width / 2 - data.x) * 20 + "vh");

	//ten - (the new areas height(in tiles) divided by two), subtracted by the players new y cordinate +1 then multiplied by 20)
	$(".scene").css("marginTop", 10 - (data.height / 2 - data.y + 1) * 20 + "vh");

	//set the background to the new area's image
	$(".scene").attr("src", "./assets/enviroment/" + data.where + ".png");

	//here we have to set the worlds height, each area is specific, included in the the world class.
	$(".scene").css("height", game.world[data.where].backgroundSize);
}

$(document).ready(function () {
	//listen for button click on the controls
	$(".move-btn").click(function () {
		//grab the id of the movement button clicked, which is set as the direction
		game.player.direction = $(this).attr("id");
		var p = $(".player");
		//deconstruct the player class for our variables
		let { x, y, location, direction } = game.player;
		//for each location exist its own hashmap of positions and properties, here we match the key with the locaiton of the players current position.😎
		let worldData = game.world[location].data;

		//Our target is the next tile in the direction we inputed,
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
		//match the key and pull the properties of our target
		let target = worldData[x + "-" + y];

		//check if the walkable property is true
		if (target.walkable === true) {
			//if it is run the our move function which takes in three parameters, the target position, p(.player class in the dom), and direction of movement
			moveOutdoors(target, p, direction);
		} else {
			//if it is not, set the direction of the player to our input
			p.attr("src", "./assets/player/standing" + direction + ".png");
			game.player.direction = direction;
		}
	});

	//the same logic is implemented here but it runs our interact function

	$("#Int").click(function () {
		let { x, y, location, direction } = game.player;
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

$(".menu").hide();

$("#Menu").click(function () {
	$(".menu").toggle();

	$(".world-filter").css("backgroundColor", "rgba(0, 0, 0, 0.379)");
	$(".control-zone").toggle();
});

$(".menu li").click(function () {
	console.log(this);
});

function moveOutdoors(target, player, direction) {
	let ztEl = $(".scene");
	//we cant pull values in units of vh, only pixels. so I get the left margin, this is returned as a string, so i remove 'px' and convert the string to a number
	//now we have to convert everything to vh for our standard sizing.
	//our left margin is then divided by the view height in px rounded to a whole, then multiplied by 100 to now get our left margin in a percentage of our view width over view height
	let background_x = Math.round(
		(Number($(ztEl).css("marginLeft").replace("px", "")) /
			$(".container").height()) *
			100
	);
	//same logic applies here to convert the top margin as a percentage of the view height
	let background_y = Math.round(
		(Number($(ztEl).css("marginTop").replace("px", "")) /
			$(".container").height()) *
			100
	);

	//left and right steps are only applied to when you're moving up and down, so we set a blank for now
	let step = "";
	let X_change = 0;
	let Y_change = 0;

	//depending on the direction we set the change of x or y
	//and decrement or increment the players x and y value
	//& set our current step, pulling from our saved player data(1 is left foot & 2 is right foot)
	switch (direction) {
		case "Up":
			step = game.player.step;
			Y_change = 1;
			game.player.y++;
			break;
		case "Down":
			step = game.player.step;
			Y_change = -1;
			game.player.y--;
			break;
		case "Left":
			X_change = 1;
			game.player.x--;
			break;
		case "Right":
			X_change = -1;
			game.player.x++;
			break;
	}

	//set the dom players image to the direction with step (1, 2, or '');
	player.attr("src", "./assets/player/walking" + direction + step + ".png");

	//disable our controls until the movement is done(no stacking commands)
	$("button").prop("disabled", true);

	let frame = 0;
	let walk_animation = setInterval(function () {
		frame++;
		//since each tile is 20% of our view, the margin gets redefiend every frame by +- 1vh, 2vh... 20vh 😎
		$(ztEl).css("marginLeft", background_x + X_change * frame + "vh");
		$(ztEl).css("marginTop", background_y + Y_change * frame + "vh");

		// looks more realistic if we stand for a bit during the animation.
		if (frame == 15) {
			player.attr("src", "./assets/player/standing" + direction + ".png");
		}

		//once we're at a +- 20vh change, stop and enable controls.
		if (frame == 20) {
			clearInterval(walk_animation);
			$("button").prop("disabled", false);
			if (target.enemys == true) {
				//if the target position has the enemy == true property, theres a chance we start a battle
				if (Math.random() > 0.66) {
					let hud = $(".hud");
					$(".control-zone").hide();
					fightScene(player, hud);
				}
			}
		}
	}, 16.7);

	//increment or decrement step when we're finish.
	switch (game.player.step) {
		case 1:
			game.player.step++;
			break;
		case 2:
			game.player.step--;
			break;
	}
}

function interact(target) {
	//checkout the targets type
	switch (target.type) {
		case "sign":
			let hud = $(".hud");
			$(hud).show();
			displayText(hud, target.text);
			break;

		case "portal":
			//when we enter a portal the we fade in and out and after a bit we teleport
			$(".world-filter").css("backgroundColor", "black");
			setTimeout(function () {
				//our target is a portal so we pass that into our parameters
				Teleport(target);
			}, 300);
	}
}

//display text on the hud, letter by letter
async function displayText(hud, text, i) {
	//if our text is a joke - I used the joke api to produce a two part joke, spliting the setup and delivery with a ~ and declaring text as this
	if (text == "joke") {
		//GET request
		let response = await fetch(
			"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
		);

		let jokeJSON = await response.json();

		//only use jokes that conform to the hud size
		while (jokeJSON.delivery.length >= 40 || jokeJSON.setup.length >= 40) {
			response = await fetch(
				"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart"
			);
			jokeJSON = await response.json();
		}

		text = jokeJSON.setup + "~" + jokeJSON.delivery;
	}

	//clear any text in the hud
	$(hud).text(" ");
	//current character index
	let char = 0;
	//buildText is the string that displays in the hud
	let buildText = "";
	//The text passed in the parameter gets split up with any ~ characters, resulting in an array of strings called textArr
	let textArr = text.split("~");

	//if i does not exist set i equal to 0
	if (!i) {
		i = 0;
	}
	//currString is the text on the current iteration;
	let currString = textArr[i];

	//lights camera action
	//set an interval to run our function every 30 milliseconds(how fast the text scrolls)
	let textScroll = setInterval(function () {
		//every loop add the next character from the current string to buildText(the text that the hud uses)
		buildText = buildText + currString[char];
		$(hud).text(buildText);
		char++;

		//if the amount of characters reaches the end of our current string, stop the looping.
		if (char === currString.length) {
			clearInterval(textScroll);

			//if there is no more strings in our text array
			if (i + 1 == textArr.length) {
				//add a one time event listener on the hud that clears the text and hides the hud
				if ($(".fight-screen").is(":hidden") === true) {
					$(hud).one("click", function () {
						$(hud).text("");
						$(hud).hide();
					});
				}
				//if the fightscene is active, add an arrow to the hud and on click just clear the text
				else {
					let arrow = document.createElement("img");
					$(arrow).addClass("arrow");
					$(arrow).attr("src", "./assets/ui/arrow.png");
					$(hud).append(arrow);
					$(hud).one("click", function () {
						$(hud).text("");
					});
				}
			}
			//now increment i(associated with the textArr) so it goes to the next string
			i++;
			//if we're not at the last string in our array of text.
			if (i < textArr.length) {
				//add an arrow to the hud
				let arrow = document.createElement("img");
				$(arrow).addClass("arrow");
				$(arrow).attr("src", "./assets/ui/arrow.png");
				$(hud).append(arrow);
				//add a one time event to recursivly call displayText again, this time i already exist, so the function will continue again on the next string in our textArr
				$(hud).one("click", function () {
					displayText(hud, text, i);
				});
			}
		}
	}, 30);
}

//here we create the small ui that shows how many pokemon you have in your inventory.
function pokebar(pokemonObj) {
	//inline flex container for our icons
	let flexBox = $(".pokebarBalls");
	//create full pokeballs for every key existing in our pokemon inventory and append to this flexbox
	for (i = 0; i < 7; i++) {
		if (Object.keys(pokemonObj).length > i) {
			let barItem = document.createElement("img");
			$(barItem).attr("src", "./assets/ui/pokeball.png");
			$(flexBox).append(barItem);
			//when we dont have anymore keys append an empty pokeball img instead
		} else {
			let barItem = document.createElement("img");
			$(barItem).attr("src", "./assets/ui/emptyball.png");
			$(flexBox).append(barItem);
		}
	}
	//show the pokebar
	$(".pokebar").show();
}

//this displays the enemy info pertaining to level, gender, name, and health
function enemyInfoBar(pokeInfo) {
	//deconstruct pokeInfo properties.
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

function playerInfoBar(pokeInfo) {
	let pokeHealthEl = document.createElement("div");
	$(pokeHealthEl).addClass("playerhealth");
	$(pokeHealthEl).append("<h1>" + pokeInfo.name.toUpperCase() + "</h1>");
	$(pokeHealthEl).append(
		"<img src='./assets/ui/levelSym.png'>" +
			"<h2>" +
			pokeInfo.lvl +
			"" +
			"</h2>" +
			"<img src='./assets/ui/" +
			pokeInfo.gender +
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

async function createNewPokemon(name) {
	let responseP = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);
	let data = await responseP.json();
	console.log(data);
	return new Pokemon(data, 5, 0, 0, 0);
}

class Pokemon {
	constructor(data, lvl, iv, ev, gender) {
		switch (gender) {
			case 0:
				this.gender = "male";
				break;
			case 1:
				this.gender = "female";
				break;
		}

		this.type = [];
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

		if (data.types[1]) {
			this.type.push(data.types[0].type.name);
			this.type.push(data.types[1].type.name);
		} else {
			this.type.push(data.types[0].type.name);
		}

		this.name = data.name;

		if (Math.floor(Math.random() * 3) == 1) {
			this.shiny = true;
		} else {
			this.shiny = false;
		}
	}
}

async function fightScene(p, hud) {
	$(".control-zone").hide();
	let enemy = await createNewPokemon(Math.floor(Math.random() * 251));
	console.log(enemy);
	console.log(game.player);
	let sprites = game.player.pokemonInv.sprite;
	let frame = 0;
	let playerPokemonEl = $(".player-pokemon");
	let enemyPokemonEl = $(".enemy-pokemon");

	$(playerPokemonEl).css("background-image", "url(./assets/ui/playerBack.png)");
	switch (enemy.shiny) {
		case true:
			$(enemyPokemonEl).css(
				"background-image",
				"url(" + enemy.sprite.front_shiny + ")"
			);
			break;

		case false:
			$(enemyPokemonEl).css(
				"background-image",
				"url(" + enemy.sprite.front_default + ")"
			);
			break;
	}
	$(".world-filter").css("transition", ".7s");

	$(".world-filter").css("backgroundColor", "white");
	startAni = setInterval(
		await function () {
			frame++;

			if (frame == 130) {
				$(".fight-screen").show();
				$(hud).show();
				$(".world-filter").css("backgroundColor", "black");
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
				playerInfoBar(game.player.pokemonInv);
			}
		},
		16.7
	);
}
