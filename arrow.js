AFRAME.registerComponent("arrows", {
  init: function () {
    this.shootBullet();
  },
  shootBullet: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var bullet = document.createElement("a-entity");
         console.log("i am working")
        bullet.setAttribute("geometry", {
          primitive: "sphere",
          radius: 0.1,
        });

        bullet.setAttribute("material", "color", "black");

        var cam = document.querySelector("#camera");
        pos = cam.getAttribute("position");

        bullet.setAttribute("position", {
          x: pos.x,
          y: pos.y + 0.1,
          z: pos.z - 0.5,
        });

        var camera = document.querySelector("#camera").object3D;

        //get the camera direction as Three.js Vector
        var direction = new THREE.Vector3();
        camera.getWorldDirection(direction);

        //set the velocity and it's direction
        bullet.setAttribute("velocity", direction.multiplyScalar(-10));

        var scene = document.querySelector("#scene");

        //set the bullet as the dynamic entity
        bullet.setAttribute("dynamic-body", {
          shape: "sphere",
          mass: "50",
        });

        //add the collide event listener to the bullet
        //bullet.addEventListener("collide", this.removeBullet);

        scene.appendChild(bullet);

 
      }
    });
  },
  removeBullet: function (e) {
    var scene = document.querySelector("#scene");
    
    //bullet element
    var element = e.detail.target.el;

    //element which is hit
    var elementHit = e.detail.body.el;

    if (elementHit.id.includes("enemy")) {
      
      var countTankEl = document.querySelector("#countTank");
      var tanksFired = parseInt(countTankEl.getAttribute("text").value);
      tanksFired -= 1;

      countTankEl.setAttribute("text", {
        value: tanksFired
      });

      if (tanksFired === 0) {
        var txt = document.querySelector("#completed");
        txt.setAttribute("visible", true);       
        
      }
      scene.removeChild(elementHit);
    }
    //remove event listener
    element.removeEventListener("collide", this.removeBullet);

    //remove the bullets from the scene   
    scene.removeChild(element);
  },
});
