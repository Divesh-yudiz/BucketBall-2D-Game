class TweenManager {
    constructor(oScene) {
        this.oScene = oScene;
    }
	
	onHover(image){
			image.setInteractive().on("pointerover", () => {
				image.setScale(1.2,1.2)
			});
			image.setInteractive().on("pointerout", () => {
				image.setScale(1,1)
			});
	}
    
}