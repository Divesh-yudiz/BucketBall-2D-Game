class SoundManager {
    constructor(oScene) {
        this.oScene = oScene;
		this.jump=this.oScene.sound.add("jump");
		this.transform=this.oScene.sound.add("transform");
    }
    play(key, loop) {
        key.play();
        key.loop = loop;
    }
    stop(key, loop) {
        key.loop = loop
        key.stop();
    }
}