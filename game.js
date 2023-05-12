class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "First Room");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('bg1', 'scene1bg.jpg');
        this.load.image('guy', 'guy.png');
    }

    onEnter() {
        //BG
        let bg1 = this.add.image(this.w*.25, this.h*.5, 'bg1');
        //Player
        let player = this.add.image(-100, this.h*.75,'guy')
        player.setScale(.35);
        //
        let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("Metal, bent."))
            .on('pointerdown', () => {
                this.showMessage("No touching!");
                this.tweens.add({
                    targets: clip,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("It's a nice key.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the key.");
                this.gainItem('key');
                this.tweens.add({
                    targets: key,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => key.destroy()
                });
            })

        let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("key")) {
                    this.showMessage("You've got the key for this door.");
                } else {
                    this.showMessage("It's locked. Can you find a key?");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*squeak*");
                    door.setText("🚪 unlocked door");
                    this.gotoScene('demo2');
                }
            })
            //animation
            this.tweens.add({
                targets: player,
                x: this.w*.25,
                delay: 500,
                duration: 5000,
                ease: 'Linear',
            })
    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        this.add.text(this.w * 0.3, this.w * 0.4, "just go back")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("You've got no other choice, really.");
            })
            .on('pointerdown', () => {
                this.gotoScene('demo1');
            });

        let finish = this.add.text(this.w * 0.6, this.w * 0.2, '(finish the game)')
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('*giggles*');
                this.tweens.add({
                    targets: finish,
                    x: this.s + (this.h - 2 * this.s) * Math.random(),
                    y: this.s + (this.h - 2 * this.s) * Math.random(),
                    ease: 'Sine.inOut',
                    duration: 500
                });
            })
            .on('pointerdown', () => this.gotoScene('outro'));
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('plane', 'plane.png');
    }

    create() {
        //BG
        let menuBG = this.add.graphics();
        menuBG.fillStyle(0x6dbbf7, 1);
        menuBG.fillRect(0, 0, 1920, 1080);
        //Text
        let menuText = this.add.text(1920*0.125,1080*.25, "That Time I Got Stranded\non an Island After a Plane\nCrash and Was Reborn as a\nFrog",
        {
            font: "Courier",
            color: "#ffffff",
            align: 'center',
        }
        ).setFontSize(90);
        let clickText = this.add.text(1920*.425,1080*.75, "Click anywhere to begin.").setFontSize(20);
        let plane = this.add.image(-1500, 1080*.5, 'plane').setScale(2);

        this.input.on('pointerdown', () => {
            this.tweens.add({//text fade
                targets: [clickText, menuText],
                alpha: 0,
                duration: 1000
            })
            this.tweens.add({//CraZy plAnE
                targets: [plane],
                x: 3200,
                angle: 900,
                delay: 1000,
                duration: 3000
            })

            //Fade to black
            this.time.delayedCall(1000, () => this.cameras.main.fade(1000, 0,0,0));
            this.time.delayedCall(2000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Outro],
    title: "Adventure Game",
});

