
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// game_play_bg
		const game_play_bg = this.add.image(960, 540, "game_play_bg");
		game_play_bg.visible = false;

		// screenshot_2023_10_19_at_2_49_43_PM
		const screenshot_2023_10_19_at_2_49_43_PM = this.add.image(960, 540, "Frame-");
		screenshot_2023_10_19_at_2_49_43_PM.visible = false;

		// backgroundContainer
		const backgroundContainer = this.add.container(0, 0);

		// top_left_box
		const top_left_box = this.add.image(176, 150, "top_left_box");
		backgroundContainer.add(top_left_box);

		// top_Line
		const top_Line = this.add.image(1055, 23, "top_Line");
		backgroundContainer.add(top_Line);

		// top_right_BOX
		const top_right_BOX = this.add.image(1838, 177, "top_right_BOX");
		backgroundContainer.add(top_right_BOX);

		// right_line
		const right_line = this.add.image(1883, 630, "right_line");
		backgroundContainer.add(right_line);

		// left_line
		const left_line = this.add.image(18, 615, "left_line");
		backgroundContainer.add(left_line);

		// down_line
		const down_line = this.add.image(822, 1052, "down_line");
		backgroundContainer.add(down_line);

		// down_left_Box
		const down_left_Box = this.add.image(145, 1006, "down_left_Box");
		backgroundContainer.add(down_left_Box);

		// down_right_Box
		const down_right_Box = this.add.image(1628, 1006, "down_right_Box");
		backgroundContainer.add(down_right_Box);

		// medicine_ball
		const medicine_ball = this.add.image(332, 646, "medicine-ball");
		medicine_ball.scaleX = 0.135;
		medicine_ball.scaleY = 0.135;
		medicine_ball.visible = false;

		// replayBtn
		const replayBtn = this.add.image(121, 97, "Restart");
		replayBtn.scaleX = 0.9;
		replayBtn.scaleY = 0.9;

		// basket
		const basket = this.add.image(1432, 821, "Basket");
		basket.visible = false;

		// levelCompleteContainer
		const levelCompleteContainer = this.add.container(0, 0);
		levelCompleteContainer.visible = false;

		// level_complete
		const level_complete = this.add.image(960, 540, "level-complete");
		level_complete.visible = false;
		levelCompleteContainer.add(level_complete);

		// sparkAnimation
		const sparkAnimation = this.add.rectangle(960, 540, 1920, 1080);
		sparkAnimation.isFilled = true;
		sparkAnimation.fillColor = 0;
		sparkAnimation.fillAlpha = 0.1;
		levelCompleteContainer.add(sparkAnimation);

		// ui_base
		const ui_base = this.add.image(959, 495, "ui_base");
		levelCompleteContainer.add(ui_base);

		// nextLevelbtn
		const nextLevelbtn = this.add.image(1050, 572, "Next_BTN");
		levelCompleteContainer.add(nextLevelbtn);

		// homeBtn
		const homeBtn = this.add.image(869, 572, "Home_BTN");
		levelCompleteContainer.add(homeBtn);

		// levelNo
		const levelNo = this.add.text(964, 491, "", {});
		levelNo.setOrigin(0.5, 0.5);
		levelNo.text = "1";
		levelNo.setStyle({ "color": "#524827", "fontFamily": "junglefever", "fontSize": "40px" });
		levelCompleteContainer.add(levelNo);

		// sprakSprite
		const sprakSprite = this.add.sprite(862, 348, "sprakSprite", 0);
		levelCompleteContainer.add(sprakSprite);

		// star1
		const star1 = this.add.image(960, 314, "Star");
		levelCompleteContainer.add(star1);

		// star2
		const star2 = this.add.image(858, 344, "Star");
		star2.scaleX = 0.8;
		star2.scaleY = 0.8;
		star2.angle = -12.000000000000002;
		levelCompleteContainer.add(star2);

		// star3
		const star3 = this.add.image(1061, 342, "Star");
		star3.scaleX = 0.8;
		star3.scaleY = 0.8;
		star3.angle = 14;
		levelCompleteContainer.add(star3);

		// level_Completed
		const level_Completed = this.add.image(942, 804, "Level-Completed");
		levelCompleteContainer.add(level_Completed);

		// level_finished
		const level_finished = this.add.image(973, 441, "level-finished");
		levelCompleteContainer.add(level_finished);

		// ball_Stage
		const ball_Stage = this.add.image(340, 738, "Ball_Stage");
		ball_Stage.setInteractive(this.input.makePixelPerfect());

		// musicBtn
		const musicBtn = this.add.image(1853, 105, "Music_ON");

		// soundBtn
		const soundBtn = this.add.image(1857, 206, "Sound_ON");

		// levelName
		const levelName = this.add.image(860, 29, "L1");

		// lifeContainer
		const lifeContainer = this.add.container(0, 0);

		// medicine_ball_1
		const medicine_ball_1 = this.add.image(1060, 26, "medicine-ball");
		medicine_ball_1.scaleX = 0.5;
		medicine_ball_1.scaleY = 0.5;
		lifeContainer.add(medicine_ball_1);

		// ball_life
		const ball_life = this.add.image(1107, 27, "ball_life3");
		lifeContainer.add(ball_life);

		// replayBtn (components)
		new onPointer(replayBtn);

		// nextLevelbtn (components)
		new onPointer(nextLevelbtn);

		// homeBtn (components)
		new onPointer(homeBtn);

		// musicBtn (components)
		new onPointer(musicBtn);

		// soundBtn (components)
		new onPointer(soundBtn);

		this.backgroundContainer = backgroundContainer;
		this.replayBtn = replayBtn;
		this.sparkAnimation = sparkAnimation;
		this.nextLevelbtn = nextLevelbtn;
		this.homeBtn = homeBtn;
		this.levelNo = levelNo;
		this.sprakSprite = sprakSprite;
		this.star1 = star1;
		this.star2 = star2;
		this.star3 = star3;
		this.levelCompleteContainer = levelCompleteContainer;
		this.musicBtn = musicBtn;
		this.soundBtn = soundBtn;
		this.levelName = levelName;
		this.medicine_ball_1 = medicine_ball_1;
		this.ball_life = ball_life;
		this.lifeContainer = lifeContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	backgroundContainer;
	/** @type {Phaser.GameObjects.Image} */
	replayBtn;
	/** @type {Phaser.GameObjects.Rectangle} */
	sparkAnimation;
	/** @type {Phaser.GameObjects.Image} */
	nextLevelbtn;
	/** @type {Phaser.GameObjects.Image} */
	homeBtn;
	/** @type {Phaser.GameObjects.Text} */
	levelNo;
	/** @type {Phaser.GameObjects.Sprite} */
	sprakSprite;
	/** @type {Phaser.GameObjects.Image} */
	star1;
	/** @type {Phaser.GameObjects.Image} */
	star2;
	/** @type {Phaser.GameObjects.Image} */
	star3;
	/** @type {Phaser.GameObjects.Container} */
	levelCompleteContainer;
	/** @type {Phaser.GameObjects.Image} */
	musicBtn;
	/** @type {Phaser.GameObjects.Image} */
	soundBtn;
	/** @type {Phaser.GameObjects.Image} */
	levelName;
	/** @type {Phaser.GameObjects.Image} */
	medicine_ball_1;
	/** @type {Phaser.GameObjects.Image} */
	ball_life;
	/** @type {Phaser.GameObjects.Container} */
	lifeContainer;

	/* START-USER-CODE */

	// Write more your code here
	canMove = false;
	dots = [];
	level = 1
	gameOn = true
	obstacleAray = [];
	isObjectInCanvas = true;
	life = 3;

	create() {

		this.editorCreate();
		this.activateNextLevelbtn = false;
		this.isDrag = false;

		this.levelManager = new LevelManager(this);
		this.tweenManager = new TweenManager(this);


		this.input.keyboard.on('keydown-A', function () {
			this.openFullscreen()
		}, this);

		this.createGameScene();
	}

	openFullscreen() {
		const elem = document.getElementsByTagName("canvas")[0];
		if (elem.requestFullscreen) {
			elem.requestFullscreen();
		} else if (elem.webkitRequestFullscreen) { /* Safari */
			elem.webkitRequestFullscreen();
		} else if (elem.msRequestFullscreen) { /* IE11 */
			elem.msRequestFullscreen();
		}
	}
	addStars() {
		this.star1 = this.add.image(960, 314, "Star");
		this.levelCompleteContainer.add(this.star1);

		// star2
		this.star2 = this.add.image(858, 344, "Star");
		this.star2.scaleX = 0.8;
		this.star2.scaleY = 0.8;
		this.star2.angle = -12.000000000000002;
		this.levelCompleteContainer.add(this.star2);

		// star3
		this.star3 = this.add.image(1061, 342, "Star");
		this.star3.scaleX = 0.8;
		this.star3.scaleY = 0.8;
		this.star3.angle = 14;
		this.levelCompleteContainer.add(this.star3);

		this.startArr = [this.star2, this.star1, this.star3];

		for (let i = 0; i < this.startArr.length; i++) {
			this.startArr[i].visible = false;
			this.startArr[i].alpha = 0;
			this.startArr[i].setScale((i == 1) ? 8 : 7);
		}
	}

	createGameScene() {
		this.gameOn = true;
		this.levelName.setTexture(`L${this.level}`)
		this.activateNextLevelbtn = false
		this.lifeContainer.visible = true
		this.crashCount = 1;
		this.life = 3

		if (this.level == 1) {
			this.ball = this.matter.add.image(332, 646, "ball").setCircle(32)
			this.ball.setBounce(1, 20)
			this.ball.setInteractive();
			this.ball.setDepth(2)
			this.ballCover = this.add.image(332, 646, "Warried").setDepth(10)
		}



		this.ballParticles = this.add.particles('particalesImg');

		this.emitter = this.ballParticles.createEmitter({
			x: this.ball.x,
			y: this.ball.y,
			angle: { min: 0, max: 360 },
			scale: { start: 0.7, end: 0 },
			frequency: 1,
			lifespan: 250,
			tint: 0xffffff,
			depth: 1
		});
		this.emitter.startFollow(this.ball);
		// this.emitter.stop()  //to stop the particle animation

		const nameToFind = `Level ${this.level}`
		for (const levelId in this.levelManager.levels) {
			if (this.levelManager.levels[levelId].name === nameToFind) {
				let leftBoundary = this.levelManager.levels[levelId].bucketCoordinates.leftBoundary;
				let leftAngle = this.levelManager.levels[levelId].bucketCoordinates.leftBoundary.angle;
				let rightBoundary = this.levelManager.levels[levelId].bucketCoordinates.rightBoundary;
				let rightAngle = this.levelManager.levels[levelId].bucketCoordinates.rightBoundary.angle;
				let bottomBoundary = this.levelManager.levels[levelId].bucketCoordinates.bottomBoundary;
				let bottomAngle = this.levelManager.levels[levelId].bucketCoordinates.bottomBoundary.angle;
				this.winObjStat = this.levelManager.levels[levelId].winObjStat
				this.passThroughCoordinates = this.levelManager.levels[levelId].passThrough; // Check for the passThrough property

				this.leftBoundaryX = leftBoundary.x;
				this.leftBoundaryY = leftBoundary.y;
				this.leftStickAngle = leftAngle;


				this.rightBoundaryX = rightBoundary.x;
				this.rightBoundaryY = rightBoundary.y;
				this.rightStickAngle = rightAngle;

				this.bottomBoundaryX = bottomBoundary.x;
				this.bottomBoundaryY = bottomBoundary.y;
				this.bottomStickAngle = bottomAngle;


				this.bucket = this.add.image(this.winObjStat.x, this.winObjStat.y, "Basket").setAngle(this.winObjStat.angle).setDepth(3)

				if (this.levelManager.levels[levelId].obstacleCount > 0) {
					for (let i = 1; i <= this.levelManager.levels[levelId].obstacleCount; i++) {
						const obstacle = this.levelManager.levels[levelId].obstacleCoordinates[i];

						// Create a new obstacle using the specified coordinates
						this.obstacle = this.matter.add.image(obstacle.x, obstacle.y, "Obstacle_2")
							.setScale(obstacle.scaleX, obstacle.scaleY)
							.setAngle(obstacle.angle)
							.setStatic(true);
						this.obstacleAray.push(this.obstacle)
					}
				}

				if (this.passThroughCoordinates) {
					// Create the passThrough object if it's present in the level
					this.passThrough = this.add.sprite(this.passThroughCoordinates.x, this.passThroughCoordinates.y, "Barrier-1")
						.setScale(this.passThroughCoordinates.scaleX, this.passThroughCoordinates.scaleY)
						.setAngle(this.passThroughCoordinates.angle)
				}
			} else {
				// console.log("No such Level Found");
			}
		}

		this.createBucket();
		this.addListeners();

		this.graphics = this.add.graphics({ lineStyle: { width: 2, color: 0x2266aa } });
		this.arrowPath = new Phaser.Curves.Path(0, 0);
		this.arrowPath.add(new Phaser.Curves.Ellipse(0, 0, 20, 20));


		this.startArr = [this.star2, this.star1, this.star3];

		for (let i = 0; i < this.startArr.length; i++) {
			this.startArr[i].visible = false;
			this.startArr[i].alpha = 0;
			this.startArr[i].setScale((i == 1) ? 8 : 7);
		}

		this.ball.setInteractive();
		this.input.setDraggable(this.ball);
		this.ball.setStatic(true);
		this.addControls();
	}

	addControls() {
		let initialPosition = { x: 0, y: 0 };
		// this.matter.add.collider(this.ball, [this.inside, this.inside_1, this.inside_2]);

		if (this.isDrag) {
			this.ball.on("pointerdown", () => {
				console.log("thew ball has clicked", this.ball)
			})
		}

		this.input.on('dragstart', (pointer, gameObject) => {
			this.isDrag = true
			// console.log('dragstart');
			initialPosition.x = gameObject.x;
			initialPosition.y = gameObject.y;
		});


		this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
			if (gameObject == this.ball && this.isDrag) {
				this.updateTrajectory();
				var angle = Phaser.Math.Angle.Between(this.ball.x, this.ball.y, dragX, dragY);
				// console.log(angle)
				if (this.passThrough) {
					this.ball.passThrough = false
				}
				this.canMove = true;
				var nMaxStretch = 500;
				this.ball.setRotation(angle);
				this.nStretchDistance = Phaser.Math.Clamp(Phaser.Math.Distance.Between(this.ball.x, this.ball.y, dragX, dragY), 0, nMaxStretch) * 0.2;
			}
		});

		this.input.on('dragend', (pointer, gameObject) => {
			if (gameObject == this.ball && this.isDrag && this.nStretchDistance !== undefined) {
				this.isGameOn = true
				// this.updateTrajectory();
				this.isDrag = false
				for (const dot of this.dots) {
					dot.destroy();
				}
				gameObject.setStatic(false);
				this.ball.disableInteractive();
				var nVelocityX = Math.cos(this.ball.rotation) * this.nStretchDistance * 0.7;
				var nVelocityY = Math.sin(this.ball.rotation) * this.nStretchDistance * 0.7;
				gameObject.setVelocity(-nVelocityX, -nVelocityY);
				// this.graphics.setVisible(false);
				this.nStretchDistance = undefined
			}
		});
	}

	createBucket() {
		this.bucketLeft = this.matter.add.image(this.leftBoundaryX, this.leftBoundaryY, 'stick', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.35, 0.19).setAngle(this.leftStickAngle).setStatic(true).setAlpha(0);
		this.bucketRight = this.matter.add.image(this.rightBoundaryX, this.rightBoundaryY, 'stick', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.35, 0.19).setAngle(this.rightStickAngle).setStatic(true).setAlpha(0);;
		this.bucketBottom = this.matter.add.image(this.bottomBoundaryX, this.bottomBoundaryY, 'stick', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.35, 0.1).setAngle(this.bottomStickAngle).setStatic(true).setAlpha(0).setOrigin(1, 0.5);

		this.winObj = this.add.rectangle(this.winObjStat.x, this.winObjStat.y, 80, 80, 2);
		this.winObj.isFilled = false;

		// this.bucket = this.add.image(this.winObjStat.x, this.winObjStat.y,"Basket").setAngle(-30) 
	}

	checkBallOutsideOrInside() {
		if (
			this.ball.x < 0 ||
			this.ball.x > this.game.config.width ||
			this.ball.y > this.game.config.height
		) {
			if (this.isObjectInCanvas) {
				this.isObjectInCanvas = false;
				this.life -= 1;
				this.ball_life.setTexture(`ball_life${this.life}`)
				if (this.life == 0) {
					this.bucketLeft.destroy();
					this.bucketRight.destroy();
					this.bucketBottom.destroy();
					this.bucket.destroy();
					this.winObj.destroy();
					if (this.levelManager.levels[this.level].obstacleCount) {
						this.obstacleAray.forEach((obj) => {
							obj.destroy();
						})
					}
					this.ball.passedthrough = false;
					this.level = 1;

					this.scene.stop("Level")
					this.scene.start("StartScene")
					// this.createGameScene();
					this.levelCompleteContainer.visible = false
					this.isGameOn = true
				}
				this.ball.x = 332;
				this.ball.y = 646;
				this.ball.setStatic(true);
				this.ball.setVelocity(0, 0)
				this.ball.setInteractive();
				if (this.passThroughCoordinates) {
					this.passThrough.destroy();
					console.log("setting ball to false")
					// if (this.passThroughCoordinates) {
					this.passThrough = this.add.sprite(this.passThroughCoordinates.x, this.passThroughCoordinates.y, "Barrier-1")
						.setScale(this.passThroughCoordinates.scaleX, this.passThroughCoordinates.scaleY)
						.setAngle(this.passThroughCoordinates.angle)
					// }
					this.crashCount = 1
					this.ball.passedthrough = false;
				}
				this.ballCover.setTexture("Warried")
			}
		} else {
			this.isObjectInCanvas = true;
		}
	}

	updateTrajectory() {
		const gravity = 1;
		const dotCount = 20;
		const maxDotSize = 6; // Maximum dot size.
		const minDotSize = 2; // Minimum dot size.
		const dotSizeStep = (maxDotSize - minDotSize) / dotCount; // Size change per dot.

		const angle = this.ball.rotation;
		const initialVelocity = -this.nStretchDistance; // Invert the velocity.
		const separation = 2; // Separation between dots.

		for (const dot of this.dots) {
			dot.destroy();
		}
		this.dots = [];

		let x = this.ball.x;
		let y = this.ball.y;
		let velocityX = initialVelocity * Math.cos(angle);
		let velocityY = initialVelocity * Math.sin(angle); // Invert the initial velocity.

		for (let i = 0; i < dotCount; i++) {
			const dotSize = maxDotSize - i * dotSizeStep;
			const dot = this.add.circle(x, y, dotSize, 0xffffff); // Vary the dot size.
			this.dots.push(dot);

			x += velocityX * separation;
			y += velocityY * separation;
			velocityY += gravity * separation; // Account for gravity.
		}
	}

	addListeners() {
		this.tweenManager.onHover(this.homeBtn)
		this.tweenManager.onHover(this.nextLevelbtn)
		this.tweenManager.onHover(this.replayBtn)
		this.tweenManager.onHover(this.musicBtn)
		this.tweenManager.onHover(this.soundBtn)

		this.replayBtn.setInteractive().on("pointerdown", () => {
			// this.count = true;
			if (this.ball.x != 332 && this.ball.y != 646) {
				this.ball.x = 332;
				this.ball.y = 646;
				this.life -= 1;
				if (this.life == 0) {
					this.bucketLeft.destroy();
					this.bucketRight.destroy();
					this.bucketBottom.destroy();
					this.bucket.destroy();
					this.winObj.destroy();
					if (this.levelManager.levels[this.level].obstacleCount) {
						this.obstacleAray.forEach((obj) => {
							obj.destroy();
						})
					}
					this.ball.passedthrough = false;
					this.level = 1;

					this.scene.stop("Level")
					this.scene.start("StartScene")
					// this.createGameScene();
					this.levelCompleteContainer.visible = false
					this.isGameOn = true
				}
				this.ball_life.setTexture(`ball_life${this.life}`)
				this.ball.setStatic(true);
				this.ball.setVelocity(0, 0)
				this.count = false
				this.ball.passedthrough = false;
				if (this.passThrough) {
					if (this.passThroughCoordinates) {
						this.passThrough = this.add.sprite(this.passThroughCoordinates.x, this.passThroughCoordinates.y, "Barrier-1")
							.setScale(this.passThroughCoordinates.scaleX, this.passThroughCoordinates.scaleY)
							.setAngle(this.passThroughCoordinates.angle)
						this.crashCount = 1
					}
				}
				this.ball.setInteractive();
				this.ball.setTexture("medicine-ball")
			}
		})

		this.musicBtn.setInteractive().on("pointerdown", () => {
			if (this.musicBtn.texture.key == "Music_ON") {
				this.musicBtn.setTexture("Music_OFF");
			}
			else {
				this.musicBtn.setTexture("Music_ON");
			}
		});
		this.soundBtn.setInteractive().on("pointerdown", () => {
			if (this.soundBtn.texture.key == "Sound_ON") {
				this.soundBtn.setTexture("Sound_OFF");
			}
			else {
				this.soundBtn.setTexture("Sound_ON");
			}
		});


		this.homeBtn.setInteractive().on("pointerdown", () => {
			this.bucketLeft.destroy();
			this.bucketRight.destroy();
			this.bucketBottom.destroy();
			this.bucket.destroy();
			this.winObj.destroy();
			if (this.levelManager.levels[this.level].obstacleCount) {
				this.obstacleAray.forEach((obj) => {
					obj.destroy();
				})
			}
			this.ball.passedthrough = false;
			this.level = 1;

			this.scene.stop("Level")
			this.scene.start("StartScene")
			// this.createGameScene();
			this.levelCompleteContainer.visible = false
			this.isGameOn = true
		})

		this.ball.on('pointerover', function () {
			document.body.style.cursor = 'pointer'; // Change cursor to pointer
		});

		// Restore default pointer when moving out of the sprite
		this.ball.on('pointerout', function () {
			document.body.style.cursor = 'default'; // Change cursor back to default
		});
	}

	explodPrticle() {
		this.exploreEmitter = this.ballParticles.createEmitter({
			// speed: {min : -2000 , max : 2000},
			speed: 2000,
			scale: { start: 0.3, end: 0.35 },
			alpha: { start: 1, end: 0 },
			lifespan: 500,
		})
		this.exploreEmitter.start();
		this.exploreEmitter.explode(200, this.ball.x, this.ball.y);
	}

	starFun() {
		if (this.level != 1) {
			this.addStars();
		}
		this.nextLevelbtn.disableInteractive();
		this.sprakSprite.visible = true;
		for (let i = 0; i < this.startArr.length; i++) {
			this.startArr[i].visible = true;
			setTimeout(() => {
				this.tweenStart = this.tweens.add({
					targets: this.startArr[i],
					ease: 'Power3',
					alpha: 1,
					duration: 100,
					scale: (i == 1) ? 1 : 0.8,
					onComplete: () => {
						this.cameras.main.shake(50, 0.01);
						this.sprakSprite.x = this.startArr[i].x
						this.sprakSprite.y = this.startArr[i].y
						this.sprakSprite.anims.play("Spark");
						this.tweens.add({
							targets: this.startArr[i],
							ease: 'Power3',
							angle: { from: -360, to: 0 },
							duration: 500,
						});
						if (i >= 2) {
							console.log("button activated after star animation")
							this.activateNextLevelbtn = true
							this.nextLevelbtn.setInteractive();
						}
					}
				});
			}, 500 * (i + 1));
		}
	}


	update() {
		 this.ballCover.x = this.ball.x 
		 this.ballCover.y = this.ball.y 
		// console.log("ball pass through", this.ball.passThrough)
		if (this.ball) {
			this.checkBallOutsideOrInside()
		}
		const circleBounds = new Phaser.Geom.Circle(this.ball.x, this.ball.y, this.ball.radius);
		if (this.passThroughCoordinates) {
			const rectangleBounds = new Phaser.Geom.Rectangle(this.passThrough.x - this.passThrough.width / 2, this.passThrough.y - this.passThrough.height / 2, this.passThrough.width, this.passThrough.height);

			// Check for collision between the circle and rectangle
			if (Phaser.Geom.Intersects.CircleToRectangle(circleBounds, rectangleBounds)) {
				// Handle collision
				this.ball.passedthrough = true;
				this.ballCover.setTexture("HAppy")
				this.sprakSprite.anims.play("Spark");
				if (this.crashCount = 1) {
					this.crashCount++
					this.passThrough.anims.play("breakBreakAnim")
					console.log(this.crashCount)
				}

			}
		}

		const winObj = new Phaser.Geom.Rectangle(
			this.winObj.x,
			this.winObj.y,
			this.winObj.width,
			this.winObj.height
		);

		if (Phaser.Geom.Intersects.CircleToRectangle(circleBounds, winObj)) {
			if (!this.passThroughCoordinates && this.isGameOn == true) {
				console.log("collided")
				this.ballCover.setTexture("HAppy")
				this.isGameOn = false
				this.ball.setVelocity(0, 0)
				this.explodPrticle();
				this.sprakSprite.visible = false;
				this.replayBtn.disableInteractive();
				this.levelCompleteContainer.visible = true
				this.levelName.visible = false;
				this.lifeContainer.visible = false;
				this.starFun();
				this.levelCompleteContainer.setDepth(5);
				this.levelNo.setText(this.level)
				this.nextLevelbtn.once("pointerup", () => {
					for (let i = 0; i < this.startArr.length; i++) {
						this.startArr[i].destroy();
					}
					console.log("next level button clicked")
					this.bucketLeft.destroy();
					this.bucketRight.destroy();
					this.bucketBottom.destroy();
					this.bucket.destroy();
					this.winObj.destroy();
					if (this.levelManager.levels[this.level].obstacleCount) {
						this.obstacleAray.forEach((obj) => {
							obj.destroy();
						})
					}
					this.ball.passedthrough = false;
					this.level += 1;
					this.life = 3
					this.ball_life.setTexture(`ball_life${this.life}`)
					this.ballCover.setTexture("Warried")
					this.createGameScene();
					this.ball.x = 332;
					this.ball.y = 646;
					this.levelCompleteContainer.visible = false
					this.levelName.visible = true;
					this.isGameOn = true

					// }
				})
				// }
			} else if (this.passThroughCoordinates && this.ball.passedthrough == true && this.isGameOn == true) {
				console.log("collided")
				this.isGameOn = false
				this.ballCover.setTexture("HAppy")
				console.log("when the pass through is present ", this.ball)
				this.ball.setVelocity(0, 0)
				this.explodPrticle();
				this.replayBtn.disableInteractive();
				this.sprakSprite.visible = false;
				this.levelCompleteContainer.visible = true
				this.levelName.visible = false;
				this.lifeContainer.visible = false
				this.starFun();
				//				// this.levelCompleteContainer.setScale(0, 0);
				// this.visibleContainer();
				this.levelCompleteContainer.setDepth(5);
				this.levelNo.setText(this.level)

				// if (this.activateNextLevelbtn == true) {
				console.log("condition satified..")
				this.nextLevelbtn.once("pointerup", () => {
					this.star1.destroy()
					this.star2.destroy()
					this.star3.destroy()
					// if(this.activateNextLevelbtn == true){
					console.log("next level button clicked")
					this.bucketLeft.destroy();
					this.bucketRight.destroy();
					this.bucketBottom.destroy();
					this.bucket.destroy();
					this.winObj.destroy();
					if (this.levelManager.levels[this.level].obstacleCount) {
						this.obstacleAray.forEach((obj) => {
							obj.destroy();
						})
					}
					if (this.levelManager.levels[this.level].passThrough) {
						this.ball.passedthrough = false;
						this.passThrough.destroy();
						this.level += 1;
						this.life = 3
						this.ball_life.setTexture(`ball_life${this.life}`)
					}
					this.ballCover.setTexture("Warried")
					this.createGameScene();
					this.ball.x = 332;
					this.ball.y = 646;
					// this.ball.setTexture("medicine-ball")
					this.levelCompleteContainer.visible = false
					this.levelName.visible = true;
					this.isGameOn = true
					// }
				});
				// }
			} else {
				// console.log("not going either both ", this.ball)
			}

		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
