
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

class SparkAnim {

	constructor(gameObject) {
		this.gameObject = gameObject;
		gameObject["__SparkAnim"] = this;

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {SparkAnim} */
	static getComponent(gameObject) {
		return gameObject["__SparkAnim"];
	}

	/** @type {Phaser.GameObjects.Sprite} */
	gameObject;
	/** @type {string} */
	SparkAnim = "";

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
