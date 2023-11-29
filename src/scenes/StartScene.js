
// You can write more code here

/* START OF COMPILED CODE */

class StartScene extends Phaser.Scene {

	constructor() {
		super("StartScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// logoSplash
		this.add.image(960, 478, "logo");

		// sad_Ball
		this.add.image(1283, 715, "Sad_Ball");

		// startBtn
		const startBtn = this.add.text(960, 969, "", {});
		startBtn.setOrigin(0.5, 0.5);
		startBtn.text = "Start";
		startBtn.setStyle({ "align": "center", "fontFamily": "junglefever", "fontSize": "60px" });

		// bucketBoundary
		const bucketBoundary = this.add.image(645, 394, "bucketBoundary");
		bucketBoundary.scaleX = 0.22;
		bucketBoundary.angle = 78;
		bucketBoundary.visible = false;

		// bucketBoundary_2
		const bucketBoundary_2 = this.add.image(781, 394, "bucketBoundary");
		bucketBoundary_2.scaleX = 0.22;
		bucketBoundary_2.angle = -78;
		bucketBoundary_2.visible = false;

		// bucketBoundary_1
		const bucketBoundary_1 = this.add.image(714, 489, "bucketBoundary");
		bucketBoundary_1.scaleX = 0.1;
		bucketBoundary_1.angle = 1;
		bucketBoundary_1.visible = false;

		// startBtn (components)
		new ScaleUpDown(startBtn);
		new onPointer(startBtn);

		this.startBtn = startBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	startBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		console.log("level started")
		this.ball = this.matter.add.image(714, 428, "medicine-ball").setCircle(40)

		this.bucketLeft = this.matter.add.image(645, 394, 'bucketBoundary', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.22, 1).setAngle(78).setStatic(true).setAlpha(0);
		this.bucketRight = this.matter.add.image(778, 394, 'bucketBoundary', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.22, 1).setAngle(-78).setStatic(true).setAlpha(0);;
		this.bucketBottom = this.matter.add.image(714, 489, 'bucketBoundary', null, {
			shape: {
				type: 'rectangle',
			}
		}).setScale(0.1,1).setAngle(0).setStatic(true).setAlpha(0).setOrigin(1, 0.5);
		this.startBtn.setInteractive().on("pointerdown",()=>{
			this.scene.stop("StartScene")
			this.scene.start("Level")
		}
		)
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
