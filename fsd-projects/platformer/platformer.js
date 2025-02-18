$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(10, 300, 1200, 10, 20);
      createPlatform(1350, 400, 50, 50, "red");
      createPlatform(100, 200, 1400, 10, 20);
      createPlatform(10, 101, 1200, 10, 20);

    // TODO 3 - Create Collectables
    createCollectable("coin",1350, 50);
    createCollectable("coin", 200, 170, 0.5, 0.7,);
    createCollectable("coin", 500, 300, 0.7, 0.6);

    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);
    createCannon("right", 600, 700);
    createCannon("left", 600, 500);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
