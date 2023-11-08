
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class ScaleUpDown extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__ScaleUpDown"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {ScaleUpDown} */
	static getComponent(gameObject) {
		return gameObject["__ScaleUpDown"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	awake() {
		this.scene.add.tween({
			targets: this.gameObject,
			scaleX: 1.2,
			scaleY: 1.2,
			duration: 500,
			yoyo: true,
			repeat: -1
		});
	}
	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
