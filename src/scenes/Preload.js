
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// preview
		const preview = this.add.image(960, 540, "preview");
		preview.visible = false;

		// loading_Outside
		const loading_Outside = this.add.image(960, 963, "Progressbar_Base");

		// inside
		const inside = this.add.image(462, 959, "Progressbar");
		inside.setOrigin(0, 0.5);

		// logoSplash
		this.add.image(960, 461, "logoSplash");

		// ellipse
		const ellipse = this.add.ellipse(1408, -109, 50, 50);
		ellipse.visible = false;
		ellipse.isFilled = true;

		// ellipse_2
		const ellipse_2 = this.add.ellipse(1681, -226, 50, 50);
		ellipse_2.visible = false;
		ellipse_2.isFilled = true;

		// ellipse_3
		const ellipse_3 = this.add.ellipse(1244, 122, 50, 50);
		ellipse_3.visible = false;
		ellipse_3.isFilled = true;

		// ellipse_4
		const ellipse_4 = this.add.ellipse(1894, -108, 50, 50);
		ellipse_4.visible = false;
		ellipse_4.isFilled = true;

		// ellipse_5
		const ellipse_5 = this.add.ellipse(1143, 250, 50, 50);
		ellipse_5.visible = false;
		ellipse_5.isFilled = true;

		// ellipse_6
		const ellipse_6 = this.add.ellipse(1050, 141, 50, 50);
		ellipse_6.visible = false;
		ellipse_6.isFilled = true;

		// ellipse_8
		const ellipse_8 = this.add.ellipse(891, 101, 50, 50);
		ellipse_8.visible = false;
		ellipse_8.isFilled = true;

		// ellipse_10
		const ellipse_10 = this.add.ellipse(743.3419894538283, 235.57375701783636, 50, 50);
		ellipse_10.visible = false;
		ellipse_10.isFilled = true;

		// ellipse_12
		const ellipse_12 = this.add.ellipse(710, 405, 50, 50);
		ellipse_12.visible = false;
		ellipse_12.isFilled = true;

		// sad_Ball
		this.add.image(1304, 685, "Sad_Ball");

		// startBtn
		const startBtn = this.add.text(960, 959, "", {});
		startBtn.setOrigin(0.5, 0.5);
		startBtn.visible = false;
		startBtn.text = "Tap to Start";
		startBtn.setStyle({ "align": "center", "fontFamily": "junglefever", "fontSize": "40px" });

		// loadingEmoji
		const loadingEmoji = this.add.image(493, 961, "First_ball");

		// startBtn (components)
		new ScaleUpDown(startBtn);

		this.loading_Outside = loading_Outside;
		this.inside = inside;
		this.startBtn = startBtn;
		this.loadingEmoji = loadingEmoji;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	loading_Outside;
	/** @type {Phaser.GameObjects.Image} */
	inside;
	/** @type {Phaser.GameObjects.Text} */
	startBtn;
	/** @type {Phaser.GameObjects.Image} */
	loadingEmoji;

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();

		this.isGameLoaded1 = false;
		this.isGameLoaded2 = false;

		this.load.on(Phaser.Loader.Events.COMPLETE, (p) => {
			this.isGameLoaded1 = true;
		});

		this.insideWidth = this.inside.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.inside.x,
			this.inside.y - this.inside.displayHeight / 2,
			this.inside.displayWidth,
			this.inside.displayHeight
		);

		this.inside.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 40;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			this.inside.setVisible(true);
			this.currentProgress = currentInterval * progressIncrement;
			// console.log(this.currentProgress)
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.inside.x,
				this.inside.y - this.inside.displayHeight / 2,
				this.insideWidth * this.currentProgress,
				this.inside.displayHeight
			);
			if (this.currentProgress > 0 && this.currentProgress < 0.30) {
				this.loadingEmoji.setTexture("First_ball")
			}
			if (this.currentProgress > 0.30 && this.currentProgress < 0.70) {
				this.loadingEmoji.setTexture("Center_ball")
			}
			if (this.currentProgress > 0.70 && this.currentProgress < 1) {
				this.loadingEmoji.setTexture("Last_ball")
			}
			// console.log(this.currentProgress)
			// this.txt_progress.setText((this.currentProgress * 100).toFixed(0) + '%');
			currentInterval++;
			if (this.currentProgress >= 1) {
				this.loading_Outside.visible = false;
				this.inside.visible = false;
				this.startBtn.visible = true;
				this.loadingEmoji.visible = false
				this.startBtn.setInteractive().on("pointerdown", () => {
					this.scene.stop("Preload");
					this.scene.start("Level");
				})
				clearInterval(progressInterval);
				this.isGameLoaded2 = true;
			}
		};

		const progressInterval = setInterval(updateProgressBar, intervalDuration);

		this.graphics = this.add.graphics();

		this.path = { t: 0, vec: new Phaser.Math.Vector2() };

		this.points = [
			1894, -108,
			1681, -226,
			1408, -109,
			1399, -27,
			1143, 250,
			1050, 141,
			891, 101,
			743, 235,
			710, 405,
			// 664, 264
		];
		this.image = this.add.sprite(this.points[0], this.points[1], 'happy_Ball');
		this.image.setOrigin(0.5, 0.5); // Center the image at the point

		this.curve = new Phaser.Curves.Spline(this.points);
		this.curve.visible = false

		this.tweens.add({
			targets: this.path,
			t: 1,
			ease: 'Sine.easeInOut',
			duration: 2000,
		});
	}



	update() {
		if (this.isGameLoaded1 && this.isGameLoaded2) {
			// console.log("im full filled")

		}

		this.graphics.clear();

		this.graphics.lineStyle(1, 0xffffff, 1);

		this.graphics.fillStyle(0x00ff00, 1);

		this.curve.getPoint(this.path.t, this.path.vec);

		this.image.x = this.path.vec.x;
		this.image.y = this.path.vec.y;

		const emojiX = this.inside.x + this.insideWidth * this.currentProgress;
		const emojiY = this.loadingEmoji.y; // Keep the Y position the same as before

		this.loadingEmoji.setPosition(emojiX, emojiY);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
