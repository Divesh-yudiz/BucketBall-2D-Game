
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class onPointer extends UserComponent {

	constructor(gameObject) {
		super(gameObject);

		this.gameObject = gameObject;
		gameObject["__onPointer"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		gameObject.on('pointerover', function () {
			document.body.style.cursor = 'pointer'; // Change cursor to pointer
		});

		// Restore default pointer when moving out of the sprite
		gameObject.on('pointerout', function () {
			document.body.style.cursor = 'default'; // Change cursor back to default
		});
		/* END-USER-CTR-CODE */
	}

	/** @returns {onPointer} */
	static getComponent(gameObject) {
		return gameObject["__onPointer"];
	}

	/** @type {Phaser.GameObjects.Image} */
	gameObject;

	/* START-USER-CODE */
	// Write your code here.
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
