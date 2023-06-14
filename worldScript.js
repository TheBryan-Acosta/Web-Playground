let equipedPokemon = {
	1: "mew",
	2: "pikachu",
};

const zone1 = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 5, 1, 1, 6, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
];
const tenbyten = Array(10).fill(Array(10).fill(0));
const openWorld = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 5, 1, 1, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1],
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
	[1, 1, 1, 1, 1, 1, 8, 8, 1, 1],
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

function worldWalkable() {
	this.walkable = true;
}

function worldUnwalkable() {
	this.walkable = false;
}

function worldShrub() {
	this.walkable = true;
	this.enemys = true;
}

function zone1Sign() {
	this.walkable = false;
	this.type = "sign";
	this.text = "Welcome to zone1!";
}

function zoneRoom() {
	this.walkable = false;
	this.type = "door";
	this.where = "room";
	this.grid = room;
}

function zoneRoomF2() {
	this.walkable = false;
	this.type = "door";
	this.where = "roomF2";
	this.grid = roomF2;
}
function zoneArea1() {
	this.walkable = false;
	this.type = "door";
	this.where = "zone1";
	this.grid = zone1;
}

$(".fight-screen").hide();
$(".pokebar").hide();
worldObjGen(openWorld);

function gridGen(grid, img) {
	$(".zoneTiles").css(
		"background-image",
		"url('./assets/enviroment/" + img + ".png'"
	);

	for (var y = 0; y < 10; y++) {
		for (x = 0; x < 10; x++) {
			var objEl = document.createElement("div");
			$(objEl).css("background-size", "cover");

			$(objEl).addClass("world-obj");
			$(objEl).css("width", 100 / grid.length + "%");
			$(objEl).css("height", 100 / grid.length + "%");

			$(objEl).attr("id", x + 1 + "-" + Math.abs(y - 10));

			$(".zoneTiles").append(objEl);
		}
	}
}

function worldObjGen(zoneData) {
	let worldObj = {};

	for (var y = 0; y < zoneData.length; y++) {
		for (x = 0; x < zoneData[0].length; x++) {
			var id = zoneData[y][x];
			let objdata;
			switch (id) {
				case 0:
					//empty
					objdata = new worldWalkable();
					break;

				case 1:
					//grass
					objdata = new worldUnwalkable();
					break;

				case 2:
					//enemyshrub
					objdata = new worldShrub();

					break;

				case 4:
					break;

				case 5:
					//zone 1 sign
					objdata = new zone1Sign();

					break;

				case 6:
					objdata = new zoneRoom();
					break;

				case 7:
					objdata = new zoneRoomF2();

					break;

				case 8:
					objdata = new zoneArea1();

					break;
			}
			objdata.xy = x + 1 + "-" + Math.abs(y - zoneData.length);
			worldObj[x + 1 + "-" + Math.abs(y - zoneData.length)] = objdata;
		}
	}
	return worldObj;
}

$(document).ready(function () {
	$(".move-btn").click(function () {
		let direction = $(this).attr("id");
		var p = $(".player");
		let pz = $(".player-zone");
		var x = Number(p.attr("data-x"));
		var y = Number(p.attr("data-y"));
		let target;
		let worldObj = worldObjGen(eval($(pz).attr("data-zone")));
		console.log(worldObj);
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

		target = worldObj[x + "-" + y];

		if (target.walkable === true) {
			switch (pz.attr("data-outdoors")) {
				case "true":
					moveOutdoors(target, p, direction);
					break;

				case "false":
					moveIndoors(p, x, y, direction, target);
					break;
			}
		} else {
			p.attr("src", "./assets/player/standing" + direction + ".png");
		}
	});

	$("#Int").click(function () {
		let p = $(".player");
		let direction = p.attr("data-direction");
		var x = Number(p.attr("data-x"));
		var y = Number(p.attr("data-y")) + 1;
		let target;
		let worldObj = worldObjGen(eval($(".player-zone").attr("data-zone")));
		console.log(x + "-" + y);
		target = worldObj[x + "-" + y];
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

		interact(target);
	});
});

function moveOutdoors(target, player, direction) {
	let ztEl = $(".zoneTiles");
	let background_x = [];
	background_x = $(ztEl).css("backgroundPositionX").split("%");
	background_x = Number(background_x[0]);

	let background_y = [];
	background_y = $(ztEl).css("backgroundPositionY").split("%");
	background_y = Number(background_y[0]);

	let step = "";
	let X_change = 0;
	let Y_change = 0;

	let player_x = player.attr("data-x");
	let player_y = player.attr("data-y");

	switch (direction) {
		case "Up":
			step = player.attr("data-step");
			Y_change = -0.625;
			player.attr("data-y", Number(player_y) + 1);
			break;
		case "Down":
			step = player.attr("data-step");
			Y_change = 0.625;
			player.attr("data-y", Number(player_y) - 1);
			break;
		case "Left":
			X_change = -0.5;
			player.attr("data-x", Number(player_x) - 1);
			break;
		case "Right":
			X_change = 0.5;
			player.attr("data-x", Number(player_x) + 1);
			break;
	}

	player.attr("src", "./assets/player/walking" + direction + step + ".png");

	$("button").prop("disabled", true);
	let frame = 0;
	let walk_animation = setInterval(function () {
		frame++;

		$(ztEl).css(
			"backgroundPositionX",
			Number(background_x) + X_change * frame + "%"
		);
		$(ztEl).css(
			"backgroundPositionY",
			Number(background_y) + Y_change * frame + "%"
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

	switch (step) {
		case "1":
			player.attr("data-step", "2");
			break;
		case "2":
			player.attr("data-step", "1");
			break;
	}
}

//MOVE INDOORS
function moveIndoors(player, x, y, direction, target) {
	$("button").prop("disabled", true);
	let marginStyle;
	let marginChange;
	var frame = 0;
	let step = "";
	let offset = 0;
	switch (direction) {
		case "Up":
			offset = 20;
			step = player.attr("data-step");
			marginStyle = "bottom";
			marginChange = 5;
			break;

		case "Down":
			offset = 20;
			step = player.attr("data-step");
			marginStyle = "bottom";
			marginChange = -5;
			break;

		case "Left":
			marginStyle = "left";
			marginChange = -5;
			break;

		case "Right":
			marginStyle = "left";
			marginChange = 5;

			break;
	}

	player.attr("src", "./assets/player/walking" + direction + step + ".png");

	var timerID = setInterval(function () {
		frame++;
		player.css(marginStyle, frame * marginChange + offset + "%");
		if (frame == 15) {
			player.attr("src", "./assets/player/standing" + direction + ".png");
		}
		if (frame == 20) {
			clearInterval(timerID);
			player.css("left", "0");
			player.css("bottom", "2vh");

			$("#" + x + "-" + y).append($(".player-zone"));

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
	player.attr("data-x", x);
	player.attr("data-y", y);

	player.attr("data-direction", direction);

	switch (step) {
		case "1":
			player.attr("data-step", "2");
			break;
		case "2":
			player.attr("data-step", "1");
			break;
	}
}

function interact(target) {
	let pz = $(".player-zone");

	console.log(target);
	switch (target.type) {
		case "sign":
			let hud = $(".hud");
			$(hud).show();
			displayText(hud, target.text);
			break;

		case "door":
			switch (target.where) {
				case "room":
					$(".zoneTiles").empty();

					gridGen(target.grid, "room");

					$("#8-2").append(pz);
					$(".zoneTiles").css("width", "80vh");
					$(".zoneTiles").css("height", "80%");
					$(pz).css("width", "8vh");
					$(pz).css("height", "8%");

					$(pz).attr("data-zone", "room");
					$(pz).attr("data-outdoors", "false");
					$(".player").attr("data-x", "8");
					$(".player").attr("data-y", "2");

					$(".zoneTiles").css("background-size", "cover");

					break;

				case "roomF2":
					$(".zoneTiles").empty();
					$(".zoneTiles").css("width", "80vh");
					$(".zoneTiles").css("height", "80%");
					$(pz).css("width", "10vh");
					$(pz).css("height", "10%");
					gridGen(roomF2, "roomF2");
					$("#8-6").append(pz);

					$(pz).attr("data-zone", "roomF2");
					$(pz).attr("data-outdoors", "false");

					$(".zoneTiles").css("background-size", "cover");
					break;
				case "zone1":
					$(".zoneTiles").empty();
					$(".zoneTiles").css("width", "100vh");
					$(".zoneTiles").css("height", "100%");
					$(pz).css("width", "10vh");
					$(pz).css("height", "10%");
					gridGen(zone1, "zone1");
					$("#6-6").append(pz);
					$(pz).css("width", "10vh");
					$(pz).css("height", "10%");

					$(pz).attr("data-outdoors", "true");
					$(pz).attr("data-zone", "zone1");

					$(".zoneTiles").css("background-size", "200% 180%");

					break;
			}
	}
}

function displayText(hud, text, i) {
	if (!i) {
		i = 0;
	}
	$(hud).text(" ");
	let char = 0;
	let textScroll;
	let buildText = "";
	let textArr = text.split("split");
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
		"https://pokeapi.co/api/v2/pokemon/" + $(p).attr("data-pokemon")
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
	let allTiles = $(".world-obj");
	let frame = 0;
	let playerPokemonEl = $(".player-pokemon");
	let enemyPokemonEl = $(".enemy-pokemon");

	$(playerPokemonEl).css(
		"background-image",
		"url(https://archives.bulbagarden.net/media/upload/5/53/GSC_Ethan_Back.png)"
	);
	$(enemyPokemonEl).css(
		"background-image",
		"url(" + enemy.sprite.front_default + ")"
	);

	startAni = setInterval(
		await function () {
			if (frame < 100) {
				$(allTiles[frame]).css("background", "black");
			}

			frame++;

			if (frame == 100) {
				p.hide();
			}

			if (frame == 130) {
				$(".fight-screen").show();
				$(hud).show();
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

gridGen(zone1, "zone1");
snapTo(5, 5);
