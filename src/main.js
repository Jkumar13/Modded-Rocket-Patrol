// Jay Kumar (jkumar4)

// Rocket Patrol: Into the Rocket Verse!!! (Modded Rocket Patrol)

// Completion Time: 4-5 hours

// Mods Chosen:

    // Add your own (copyright-free) looping background music to the Play scene (keep the volume low and be sure that multiple instances of your music don't play when the game restarts) (1)
        // Implementation: I loaded the background music in preload(), started playing in create(), and stopped once this.gameOver was reached (restarting the Play scene would restart the audio)

    // Allow the player to control the Rocket after it's fired (1)
        // Implementation: After firing the rocket, I removed the !isFiring check which makes the rocket move to the cursor position even while firing

    // Display the time remaining (in seconds) on the screen (3)
        // Implementation: I worked on this alongside the timing/scoring mechanism mod, established a variable that presented the in-game clock in seconds and added the text to screen.
            // I also ensured the clock would properly count down by periodically doing a check in update()

    // Create a new enemy Spaceship type (w/ new artwork) that's smaller, moves faster, and is worth more points (5)
        // Implementation: Made a copy of Spaceship.js and modified it to become FastShip.js, also made artwork

    // Implement a new timing/scoring mechanism that adds time to the clock for successful hits (5)
        // Implementation: After getting the in-game clock in seconds, I would add to this newly established variable in shipExplode() and update the text accordingly

    // Implement mouse control for player movement and mouse click to fire (5)
        // Implementation: Got input for mousePointer instead of WASD keys and set the cursor position to mouse position whenever necessary

// Sources Used:
    // https://rexrainbow.github.io/phaser3-rex-notes/docs/site/audio/ - For background music implementation

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, mouse;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;