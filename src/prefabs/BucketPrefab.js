
// You can write more code here

/* START OF COMPILED CODE */

class BucketPrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 8, y ?? 8);

		// inside
		const inside = scene.add.image(-64, -34, "Inside");
		inside.scaleX = 0.2;
		inside.scaleY = 0.7;
		inside.angle = -98;
		this.add(inside);

		// inside_1
		const inside_1 = scene.add.image(1, 49, "Inside");
		inside_1.scaleX = 0.13;
		inside_1.scaleY = 0.7;
		inside_1.angle = -180;
		this.add(inside_1);

		// inside_2
		const inside_2 = scene.add.image(63, -35, "Inside");
		inside_2.scaleX = 0.2;
		inside_2.scaleY = 0.7;
		inside_2.angle = -83;
		this.add(inside_2);

		/* START-USER-CTR-CODE */
		// Write your code here.

		scene.matter.add.image(inside.x, inside.y, 'Inside', null, {
			shape: {
				type: 'rectangle',
				width:inside.width,
				height:inside.height
			}
		}).setScale(0.12, 1).setStatic(true);

		scene.matter.add.image(inside_1.x, inside_1.y, 'Inside', null, {
			shape: {
				type: 'rectangle',
				width:inside_1.width,
				height:inside_1.height
			}
		}).setScale(0.12, 1).setStatic(true);

		scene.matter.add.image(inside_2.x, inside_2.y, 'Inside', null, {
			shape: {
				type: 'rectangle',
				width:inside_2.width,
				height:inside_2.height
			}
		}).setScale(0.12, 1).setStatic(true);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
