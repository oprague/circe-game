
const TILESIZE = 64;
const FRAMERATE = 60;

const GRAVITY = 1;

// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
window.mobileAndTabletCheck = function() {
  let check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
};

function updateElementPosition(id, x, y) {
	const element = document.getElementById(id);
	element.style.left = x + 'px';
	element.style.top = y + 'px';
}
function appendNewTile(tile, x, y) {
	const container = document.getElementById('game-object-container');
	const newTile = '<img src="graphics/tiles/' + tile + '.png" class="tile" style="left: ' + x * TILESIZE + 'px; top: ' + y * TILESIZE + 'px;">';
	container.innerHTML += newTile;
}
/*
function main() {
	let playerX = 0;
	let playerY = 0;
	const playerWidth = 52;
	const playerHeight = 120;
	const speed = 10;

	const blockX = 100;
	const blockY = 100;
	const blockWidth = 52;
	const blockHeight = 52;
	const block = document.getElementById('block');
	block.style.left = blockX + 'px';
	block.style.top = blockY + 'px';

	document.addEventListener('keydown', function(event) {
		let inputX = 0
		let inputY = 0
		if (event.key == "ArrowLeft") {
			inputX = -1
		}
		else if (event.key == "ArrowRight") {
			inputX = 1
		}
		else if (event.key == "ArrowUp") {
			inputY = -1
		}
		else if (event.key == "ArrowDown") {
			inputY = 1
		};

		playerX += inputX * speed
		playerY += inputY * speed

		// collision
		if (playerX + playerWidth > blockX & playerX < blockX + blockWidth & playerY + playerHeight > blockY & playerY < blockY + blockHeight) {
			if (inputX > 0) {
				playerX = blockX - playerWidth
			}
			else if (inputX < 0) {
				playerX = blockX + blockWidth
			}
			else if (inputY > 0) {
				playerY = blockY - playerHeight
			}
			else if (inputY < 0) {
				playerY = blockY + blockHeight
			}
		};

		updatePlayerGraphic(playerX, playerY);
	});
};

main();
*/

function main() {

	if (window.mobileAndTabletCheck()) {
		document.getElementById('mobile-controls-container').style.display = 'block';
	}

	function updatePlayerGraphic() {
		updateElementPosition('player', player.x, player.y);
		const playerElement = document.getElementById('player');
		if (player.facing == -1) {
			playerElement.style.transform = 'scale(-1, 1) translate(' + -player.translateX + 'px, ' + player.translateY + 'px)';
		} else {
			playerElement.style.transform = 'scale(1, 1) translate(' + player.translateX + 'px, ' + player.translateY + 'px)';
		}
	}

	function checkGrounded() {
		player.grounded = false;
		const groundCheckObj = {
			'x': player.x,
			'y': player.y + player.height,
			'width': player.width,
			'height': 2
		}
		for (obj of collideables) {
			if (groundCheckObj.x + groundCheckObj.width > obj.x & groundCheckObj.x < obj.x + obj.width & groundCheckObj.y + groundCheckObj.height > obj.y & groundCheckObj.y < obj.y + obj.height) {
				player.grounded = true;
			}
		}
	}

	function collision(axis) {
		let collision = false
		for (obj of collideables) {
			if (player.x + player.width > obj.x & player.x < obj.x + obj.width & player.y + player.height > obj.y & player.y < obj.y + obj.height) {
				if (axis == 'horizontal') {
					if (player.direction.x > 0) {
						player.x = obj.x - player.width
					}
					else if (player.direction.x < 0) {
						player.x = obj.x + obj.width
					}
				}
				else {
					if (player.direction.y > 0) {
						player.y = obj.y - player.height
						player.direction.y = 0
					}
					else if (player.direction.y < 0) {
						player.y = obj.y + obj.height
						player.direction.y = 0
					}
				}
			}
		}
	}

	const player = {
		'translateX': -74,
		'translateY': -40,

		'x': 100,
		'y': 200,
		'width': 44,
		'height': 112,
		'speed': 4,
		'jumpStrength': 24,
		'gravity': GRAVITY,
		'direction': {
			'x': 0,
			'y': 0,
		},
		'grounded': false,
		'facing': 1,

		'state': 'idle',
		'previousState': 'idle',
		'animationFrameLength': 10,
		'animationClock': 0,
		'frames': {
			'idle': ['graphics/player/idle/1.png'],
			'walk': [
				'graphics/player/walk/1.png',
				'graphics/player/walk/2.png',
				'graphics/player/walk/3.png',
				'graphics/player/walk/4.png'
			],
			'jump': ['graphics/player/jump/1.png']
		}
	};

	const collideables = [];
	const levelTileGridLayers = {
		'Background': [
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
			[3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3,  3 ],
		],
		'Ground': [
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[2,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0 ],
			[1,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2,  2,  2,  2 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  0,  0,  0,  0,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  0,  0,  0,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  0,  0,  0,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  2,  2,  2,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
			[1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1 ],
		]
	}
	
	// generate level & collision
	const collideableTileIds = [1, 2];
	for (layer in levelTileGridLayers) {
		const tileGrid = levelTileGridLayers[layer]
		const layerName = layer
		for (let y = 0; y < tileGrid.length; y++) {
			for (let x = 0; x < tileGrid[y].length; x++) {
				setTimeout(function() {
					const tile = tileGrid[y][x];
					if (tile > 0) {
						appendNewTile(tile, x, y);
						if (collideableTileIds.indexOf(tile) >= 0 && layerName == 'Ground') {
							const newTileObj = {
								'x': x * TILESIZE,
								'y': y * TILESIZE,
								'width': TILESIZE,
								'height': TILESIZE
							}
							collideables.push(newTileObj)
						}

						if (x == tileGrid[y].length-1 & y == tileGrid.length-1 && layerName == 'Ground') {
							console.log('game loaded');
							document.getElementById('loading-text').remove()
						}
					}
				}, 0)
			}
		}
	}

	// input
	let inputX = 0;
	let inputY = 0;
	let inputJump = false;

	// keyboard input
	document.addEventListener('keydown', function(event) {
		event.preventDefault();
		if (event.key == "a") {
			inputX = -1;
		}
		else if (event.key == "d") {
			inputX = 1;
		}
		else if (event.key == ' ') {
			inputJump = true;
		}
	});
	document.addEventListener('keyup', function(event) {
		if (event.key == "a" & inputX == -1) {
			inputX = 0;
		}
		else if (event.key == "d" & inputX == 1) {
			inputX = 0;
		}
	});

	// mobile input
	document.getElementById('button-left').addEventListener('touchstart', function(event) {
		event.preventDefault();
		inputX = -1;
	});
	document.getElementById('button-right').addEventListener('touchstart', function(event) {
		event.preventDefault();
		inputX = 1;
	});
	document.getElementById('button-left').addEventListener('touchend', function(event) {
		event.preventDefault();
		if (inputX == -1) {
			inputX = 0;
		}
	});
	document.getElementById('button-right').addEventListener('touchend', function(event) {
		event.preventDefault();
		if (inputX == 1) {
			inputX = 0;
		}
	});
	document.getElementById('button-jump').addEventListener('touchstart', function(event) {
		event.preventDefault();
		inputJump = 1;
	});

	// document.addEventListener('touchstart', function(event) {
	// 	event.preventDefault();
	// 	const touchX = event.changedTouches[0].clientX;
	// 	const touchY = event.changedTouches[0].clientY;
	// 	if (touchX > window.innerWidth/2) {
	// 		inputX = 1;
	// 	} else {
	// 		inputX = -1;
	// 	};
	// 	if (touchY < window.innerHeight/2) {
	// 		inputJump = true;
	// 	};
	// });
	// document.addEventListener('touchend', function(event) {
	// 	inputX = 0;
	// });

	// game loop
	let frame = 0;
	let gameTimer = window.setInterval(function() {

		checkGrounded()

		// jump
		if (inputJump) {
			if (player.grounded) {
				player.direction.y = -player.jumpStrength;
			};
			inputJump = false;
		};

		// horizontal movement
		player.direction.x = inputX;
		player.x += player.direction.x * player.speed;
		collision('horizontal');

		// vertical movement, gravity
		player.direction.y += player.gravity;
		player.y += player.direction.y;
		collision('vertical');

		if (inputX) {
			player.facing = inputX;
		};
		updatePlayerGraphic();

		// animate
		player.previousState = player.state;
		if (!player.grounded) {
			player.state = 'jump';
		}
		else if (player.direction.x) {
			player.state = 'walk';
		} else {
			player.state = 'idle';
		};
		if (player.state != player.previousState) {
			player.animationClock = 0;
		};
		player.animationClock++;
		frameIndex = Math.floor(player.animationClock / player.animationFrameLength) % player.frames[player.state].length;
		const playerElement = document.getElementById('player');
		playerElement.src = player.frames[player.state][frameIndex];

		// professional camera
		window.scrollTo(player.x + player.width/2 - window.innerWidth/2, player.y + player.height/2 - window.innerHeight/2);

		frame++;
	}, 1000/FRAMERATE);
}

main();