AFRAME.registerComponent("bullets", {
    init: function () {
      this.shootBullet();
    },
    shootBullet: function () {

      var birdPosition = this.el.getAttribute("position");

  var camera = document.querySelector("#camera")
         // var cam = document.querySelector("#bird");
            pos = camera.getAttribute("position");
  
          this.el.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
          });
  
          var camera = document.querySelector("#bird").object3D;
  
         
  

  
        }
      });
    
 
  
  