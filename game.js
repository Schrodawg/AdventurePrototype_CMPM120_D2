class scene1 extends AdventureScene {
    constructor() {
        super("scene1", "The Crash");
    }

    preload(){
        this.load.path = './assets/';
        this.load.image('bg1', 'scene1bg.jpg');
        this.load.image('guy', 'guy.png');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        this.time.delayedCall(500, () => this.showMessage('I can\'t believe I survived!'));
        //BG
        let bg1 = this.add.image(this.w*.25, this.h*.5, 'bg1');
        //Player
        let player = this.add.image(-100, this.h*.75,'guy')
            .setScale(.35);
        //Direction arrow
        let arrow = this.add.image(this.w*.6,this.h*.875,'arrow').setScale(.25);
        //Direction text
        let crashText = this.add.text(this.w*.528,this.h*.94, '(Go Inland)')
            .setStyle({color: '#0'})
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('I best start exploring...');
                this.tweens.add({
                    targets: crashText,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })
            .on('pointerdown', () => this.gotoScene('scene2'));

        
        //
        // let clip = this.add.text(this.w * 0.3, this.w * 0.3, "📎 paperclip")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => this.showMessage("Metal, bent."))
        //     .on('pointerdown', () => {
        //         this.showMessage("No touching!");
        //         this.tweens.add({
        //             targets: clip,
        //             x: '+=' + this.s,
        //             repeat: 2,
        //             yoyo: true,
        //             ease: 'Sine.inOut',
        //             duration: 100
        //         });
        //     });

        // let key = this.add.text(this.w * 0.5, this.w * 0.1, "🔑 key")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         this.showMessage("It's a nice key.")
        //     })
        //     .on('pointerdown', () => {
        //         this.showMessage("You pick up the key.");
        //         this.gainItem('key');
        //         this.tweens.add({
        //             targets: key,
        //             y: `-=${2 * this.s}`,
        //             alpha: { from: 1, to: 0 },
        //             duration: 500,
        //             onComplete: () => key.destroy()
        //         });
        //     })

        // let door = this.add.text(this.w * 0.1, this.w * 0.15, "🚪 locked door")
        //     .setFontSize(this.s * 2)
        //     .setInteractive()
        //     .on('pointerover', () => {
        //         if (this.hasItem("key")) {
        //             this.showMessage("You've got the key for this door.");
        //         } else {
        //             this.showMessage("It's locked. Can you find a key?");
        //         }
        //     })
        //     .on('pointerdown', () => {
        //         if (this.hasItem("key")) {
        //             this.loseItem("key");
        //             this.showMessage("*squeak*");
        //             door.setText("🚪 unlocked door");
        //             this.gotoScene('scene2');
        //         }
        //     })
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

class scene2 extends AdventureScene {
    constructor() {
        super("scene2", "Inland");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('bg2', 'bgscene2.png');
        this.load.image('grave', 'grave.png');
        this.load.image('guy', 'guy.png');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        let bg1 = this.add.image(this.w*.25, this.h*.5, 'bg2');
        let grave = this.add.image(this.w * .6, this.h * .76, 'grave').setScale(.6)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage('"An explorer? I wonder what he had?..."')
            })
            .on('pointerdown', () => {
                this.showMessage('"Woah! A Machete!"');
                this.gainItem('Machete');
                this.tweens.add({
                    targets: grave,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 1500,
                    onComplete: () => grave.destroy()
                });
            })
        let player = this.add.image(-100, this.h*.75,'guy')
            .setScale(.35);
        let arrow = this.add.image(this.w*.4,this.h*.6,'arrow').setScale(.4).setAngle(-90);
        this.tweens.add({
            targets: player,
            x: this.w*.17,
            delay: 500,
            duration: 5000,
            ease: 'Linear',
        });
        let furtherText = this.add.text(this.w * 0.3, this.w * 0.4, "(Go further)")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.tweens.add({
                    targets: furtherText,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })
                this.showMessage('"I\'ve gotta keep moving"');
            })
            .on('pointerdown', () => this.gotoScene('scene3'))
    }
}

class scene3 extends AdventureScene {
    constructor() {
        super("scene3", "Further Inland");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('bg2', 'bgscene2.png');
        this.load.image('grave', 'grave.png');
        this.load.image('guy', 'guy.png');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        let bg1 = this.add.image(this.w*.25, this.h*.5, 'bg2');
        let player = this.add.image(-100, this.h*.75,'guy')
            .setScale(.35);
        this.tweens.add({
            targets: player,
            x: this.w*.17,
            delay: 500,
            duration: 5000,
            ease: 'Linear',
        });
        let plant = this.add.graphics();
        plant.fillStyle(0x00ff51);
        plant.fillRect(this.w*.487,this.h*.5, 500, 500)
        let goBack = this.add.text(this.w*.3,this.h*.8, '(go back)')
        .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.tweens.add({
                    targets: goBack,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            })
            .on('pointerdown', () => this.gotoScene('scene2'))
        let furtherText = this.add.text(this.w*.487+195,this.h*.5+225, "(FOLIAGE)")
            .setFontSize(this.s * 2)
            .setStyle({color: '#0'})
            .setInteractive()
            .on('pointerover', () => {
                this.tweens.add({
                    targets: furtherText,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })
                if (this.hasItem("Machete")) {
                    this.showMessage('"I could cut right through this!"');
                } else {
                    this.showMessage('"This stuff is DENSE, I can\'t get through it. I\'d need a blade or something"');
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("Machete")) {
                    this.loseItem("Machete");
                    this.showMessage("*slash!*");
                    this.gotoScene('scene4');
                }
            })
    }
}

class scene4 extends AdventureScene {
    constructor() {
        super("scene4", "Shrine");
    }

    preload() {
        this.load.path = './assets/';
        this.load.image('bg2', 'bgscene2.png');
        this.load.image('grave', 'grave.png');
        this.load.image('guy', 'guy.png');
        this.load.image('arrow', 'arrow.png');
    }

    onEnter() {
        let bg4 = this.add.image(this.w*.25, this.h*.5, 'bg2');
        let player = this.add.image(100, this.h*.75,'guy')
            .setScale(.35);
        this.tweens.add({
            targets: player,
            x: this.w*.17,
            delay: 500,
            duration: 2000,
            ease: 'Linear',
        });
        let artifact = this.add.graphics();
        artifact.fillStyle(0x0);
        artifact.fillEllipse(this.w * 0.37, this.w * 0.45, 200, 200, 24);
        let endText = this.add.text(this.w * 0.5, this.w * 0.45, "(Grab the Artifact)")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.tweens.add({
                    targets: [artifact, endText],
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                })
                this.showMessage('"What is this??"');
            })
            .on('pointerdown', () => {
                this.tweens.add({
                    targets: player,
                    x: this.w*.4,
                    duration: 5000,
                    ease: 'Linear',
                });
                this.gotoScene('outro');
            });
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
            this.time.delayedCall(2000, () => this.scene.start('scene1'));
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
    scene: [scene4, Outro],
    title: "Adventure Game",
});

