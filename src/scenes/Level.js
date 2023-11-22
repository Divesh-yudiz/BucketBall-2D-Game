
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

		// screenshot_2023_10_19_at_2_49_43_PM
		this.add.image(960, 540, "Frame-");

		// medicine_ball
		const medicine_ball = this.add.image(332, 646, "medicine-ball");
		medicine_ball.scaleX = 0.135;
		medicine_ball.scaleY = 0.135;
		medicine_ball.visible = false;

		// replayBtn
		const replayBtn = this.add.image(121, 97, "Restart");

		// basket
		const basket = this.add.image(1432, 821, "Basket");
		basket.visible = false;

		// stick
		const stick = this.add.image(1360, 828, "stick");
		stick.scaleX = 0.35;
		stick.scaleY = 0.19;
		stick.angle = -11;
		stick.visible = false;

		// stick_1
		const stick_1 = this.add.image(1503, 829, "stick");
		stick_1.scaleX = 0.35;
		stick_1.scaleY = 0.19;
		stick_1.angle = 11;
		stick_1.visible = false;

		// stick_2
		const stick_2 = this.add.image(1430, 910, "stick");
		stick_2.scaleX = 0.35;
		stick_2.scaleY = 0.1;
		stick_2.angle = 90;
		stick_2.setOrigin(1, 0.5);
		stick_2.visible = false;

		// barrier
		const barrier = this.add.image(932, 410, "barrier2");
		barrier.scaleX = 0.625;
		barrier.scaleY = 0.37;
		barrier.visible = false;

		// rectangle_1
		const rectangle_1 = this.add.rectangle(1137, 873, 50, 50);
		rectangle_1.visible = false;
		rectangle_1.isFilled = true;

		// levelName
		const levelName = this.add.text(960, 26, "", {});
		levelName.setOrigin(0.5, 0.5);
		levelName.text = "L e v e l  1";
		levelName.setStyle({ "fontFamily": "junglefeverMain", "fontSize": "40px" });

		// barrier_1
		const barrier_1 = this.add.image(1657, 624, "barrier2");
		barrier_1.scaleY = 0.365;
		barrier_1.angle = -65.5;
		barrier_1.visible = false;

		// barrier_2
		const barrier_2 = this.add.image(736, 877, "barrier2");
		barrier_2.scaleY = 0.365;
		barrier_2.angle = 90;
		barrier_2.visible = false;

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
		const ui_base = this.add.image(959, 560, "ui_base");
		levelCompleteContainer.add(ui_base);

		// nextLevelbtn
		const nextLevelbtn = this.add.image(1050, 637, "Next_BTN");
		levelCompleteContainer.add(nextLevelbtn);

		// home_BTN
		const home_BTN = this.add.image(869, 637, "Home_BTN");
		levelCompleteContainer.add(home_BTN);

		// levelFinishedText
		const levelFinishedText = this.add.text(973, 500, "", {});
		levelFinishedText.setOrigin(0.5, 0.5);
		levelFinishedText.text = "Level Finished";
		levelFinishedText.setStyle({ "align": "center", "color": "#bd9a2a", "fontFamily": "junglefever", "fontSize": "25px" });
		levelCompleteContainer.add(levelFinishedText);

		// levelNo
		const levelNo = this.add.text(964, 550, "", {});
		levelNo.setOrigin(0.5, 0.5);
		levelNo.text = "1";
		levelNo.setStyle({ "color": "#524827", "fontFamily": "junglefever", "fontSize": "40px" });
		levelCompleteContainer.add(levelNo);

		// sprakSprite
		const sprakSprite = this.add.sprite(862, 413, "sprakSprite", 0);
		levelCompleteContainer.add(sprakSprite);

		// star1
		const star1 = this.add.image(960, 379, "Star");
		levelCompleteContainer.add(star1);

		// star2
		const star2 = this.add.image(858, 409, "Star");
		star2.scaleX = 0.8;
		star2.scaleY = 0.8;
		star2.angle = -12.000000000000002;
		levelCompleteContainer.add(star2);

		// star3
		const star3 = this.add.image(1061, 407, "Star");
		star3.scaleX = 0.8;
		star3.scaleY = 0.8;
		star3.angle = 14;
		levelCompleteContainer.add(star3);

		// level_Completed
		const level_Completed = this.add.image(942, 263, "Level-Completed");
		levelCompleteContainer.add(level_Completed);

		// tap_to_con_
		const tap_to_con_ = this.add.image(960, 806, "tap_to_con.");
		levelCompleteContainer.add(tap_to_con_);

		// obstacle_2
		const obstacle_2 = this.add.image(2107, 737, "Obstacle_2");
		obstacle_2.scaleX = 1.2;
		obstacle_2.scaleY = 1.65;
		obstacle_2.angle = 34;
		obstacle_2.visible = false;

		// obstacle
		const obstacle = this.add.image(821, 759, "Obstacle_2");
		obstacle.scaleX = 1.2;
		obstacle.scaleY = 1.05;
		obstacle.visible = false;

		// obstacle_1
		const obstacle_1 = this.add.image(1665, 511, "Obstacle_1");
		obstacle_1.scaleX = 1.5;
		obstacle_1.scaleY = 1.2;
		obstacle_1.angle = 24.000000000000004;
		obstacle_1.visible = false;

		// ball_Stage
		this.add.image(340, 738, "Ball_Stage");

		// tap_to_con_ (components)
		new ScaleUpDown(tap_to_con_);

		this.replayBtn = replayBtn;
		this.levelName = levelName;
		this.sparkAnimation = sparkAnimation;
		this.nextLevelbtn = nextLevelbtn;
		this.levelNo = levelNo;
		this.sprakSprite = sprakSprite;
		this.star1 = star1;
		this.star2 = star2;
		this.star3 = star3;
		this.levelCompleteContainer = levelCompleteContainer;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	replayBtn;
	/** @type {Phaser.GameObjects.Text} */
	levelName;
	/** @type {Phaser.GameObjects.Rectangle} */
	sparkAnimation;
	/** @type {Phaser.GameObjects.Image} */
	nextLevelbtn;
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

	/* START-USER-CODE */

	// Write more your code here
	canMove = false;
	dots = [];
	level = 1
	gameOn = true
	obstacleAray = [];
	isObjectInCanvas = true;

	create() {

		this.editorCreate();
		this.activateNextLevelbtn = false;
		this.isDrag = false;

		this.levelManager = new LevelManager(this);

		this.createGameScene();
	}

	createGameScene() {
		this.gameOn = true;
		this.levelName.setText(`Level ${this.level}`)
		this.activateNextLevelbtn == false

		if (this.level == 1) {
			this.ball = this.matter.add.image(332, 646, "medicine-ball").setCircle(32)
			this.ball.setBounce(1, 20)
			this.ball.setInteractive();
			this.ball.setDepth(2)
		}

		this.ballParticles = this.add.particles('particalesImg');

		this.emitter = this.ballParticles.createEmitter({
			x: this.ball.x,
			y: this.ball.y,
			angle: { min: 0, max: 360 },
			scale: { start: 0.8, end: 0 },
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


				this.bucket = this.add.image(this.winObjStat.x, this.winObjStat.y, "Basket").setAngle(this.winObjStat.angle)
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
				console.log(angle)
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

		this.winObj = this.add.rectangle(this.winObjStat.x, this.winObjStat.y, 50, 50);
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
				this.ball.x = 332;
				this.ball.y = 646;
				this.ball.setStatic(true);
				this.ball.setVelocity(0, 0)
				this.ball.setInteractive();
				if (this.ball.passedthrough == false) {
					console.log("setting ball to false")
					if (this.passThroughCoordinates) {
						this.passThrough = this.add.sprite(this.passThroughCoordinates.x, this.passThroughCoordinates.y, "Barrier-1")
							.setScale(this.passThroughCoordinates.scaleX, this.passThroughCoordinates.scaleY)
							.setAngle(this.passThroughCoordinates.angle)
					}
					this.ball.passedthrough = false;
				}
				this.ball.setTexture("medicine-ball")
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
		this.replayBtn.setInteractive().on("pointerdown", () => {
			// this.count = true;
			if (this.ball.x != 332 && this.ball.y != 646) {
				this.ball.x = 332;
				this.ball.y = 646;
				this.ball.setStatic(true);
				this.ball.setVelocity(0, 0)
				this.count = false
				this.ball.passedthrough = false;
				if (this.passThrough) {
					if (this.passThroughCoordinates) {
						this.passThrough = this.add.sprite(this.passThroughCoordinates.x, this.passThroughCoordinates.y, "Barrier-1")
							.setScale(this.passThroughCoordinates.scaleX, this.passThroughCoordinates.scaleY)
							.setAngle(this.passThroughCoordinates.angle)
					}
				}
				this.ball.setInteractive();
				this.ball.setTexture("medicine-ball")
			}
		})
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
		// console.log("hello")
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
							angle: { from: -270, to: -30 },
							duration: 500,
						});
						if (i >= 2) {
							console.log("button activated after star animation")
							this.activateNextLevelbtn = true
						}
					}
				});
			}, 500 * (i + 1));
		}

		// 
		// function moveStar(obj){

		// }
	}


	update() {
		console.log(this.activateNextLevelbtn)
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
				this.ball.setTexture("Sad_Ball")
				this.sprakSprite.anims.play("Spark");
				this.passThrough.anims.play("barrierAnim")
					.on('complete', () => {
						console.log("hello")
						this.passThrough.visible = false;
					});

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
				this.isGameOn = false
				this.ball.setVelocity(0, 0)
				this.explodPrticle();
				this.replayBtn.disableInteractive();
				this.sprakSprite.visible = false;
				this.levelCompleteContainer.visible = true
				this.starFun();
				//				// this.levelCompleteContainer.setScale(0, 0)
				// this.visibleContainer();
				this.levelCompleteContainer.setDepth(5);
				this.levelNo.setText(this.level)
				console.log("checking condition : ", this.activateNextLevelbtn == true)
				if (this.activateNextLevelbtn == true) {
					console.log("condition satified..")
					this.nextLevelbtn.setInteractive().once("pointerup", () => {
						// if (this.activateNextLevelbtn == true) {
						console.log("next level button clicked")
						// this.activateNextLevelbtn == false
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
						this.createGameScene();
						this.ball.x = 332;
						this.ball.y = 646;
						this.levelCompleteContainer.visible = false
						this.isGameOn = true

						// }
					})
				}
			} else if (this.passThroughCoordinates && this.ball.passedthrough == true && this.isGameOn == true) {
				this.isGameOn = false
				console.log("when the pass through is present ", this.ball)
				this.ball.setVelocity(0, 0)
				this.explodPrticle();
				this.replayBtn.disableInteractive();
				this.sprakSprite.visible = false;
				this.levelCompleteContainer.visible = true
				this.starFun();
				//				// this.levelCompleteContainer.setScale(0, 0);
				// this.visibleContainer();
				this.levelCompleteContainer.setDepth(5);
				this.levelNo.setText(this.level)
				
				if (this.activateNextLevelbtn == true) {
					console.log("condition satified..")
					this.nextLevelbtn.setInteractive().once("pointerup", () => {
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
						}
						this.createGameScene();
						this.ball.x = 332;
						this.ball.y = 646;
						this.ball.setTexture("medicine-ball")
						this.levelCompleteContainer.visible = false
						this.isGameOn = true
						// }
					});
				}
			} else {
				// console.log("not going either both ", this.ball)
			}

		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
