
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class onHover extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__onHover"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		gameObject.on('pointerover', function () {
			gameObject.setScale(1.2,1.2)
		});

		// Restore default pointer when moving out of the sprite
		gameObject.on('pointerout', function () {
			gameObject.seScale(1,1)
		});
		/* END-USER-CTR-CODE */
	}

	/** @returns {onHover} */
	static getComponent(gameObject) {
		return gameObject["__onHover"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
