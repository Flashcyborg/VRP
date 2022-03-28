// Registering component in Target.js

AFRAME.registerComponent("target-ring", {
    init: function () {
      for (var i = 1; i <= 100; i++) {
        //id
        var id = `ring${i}`;
  
        //position variables     
        var posX =(Math.random() * 300 + (-100));      
        var posY = (Math.random() * 8 + (10));
        var posZ = (Math.random() * 300 + -100);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createRings(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var environment = document.querySelector("#environment");
  
      var ringEl = document.createElement("a-entity");
  
      ringEl.setAttribute("id",id);
      ringEl.setAttribute("position",position);
      
      ringEl.setAttribute("material","color","#ff9100");
      
      ringEl.setAttribute("geometry",{ primitive: "torus",radius: 8 }); 
      
      ringEl.setAttribute("static-body", {
        shape: "sphere",
        sphereRadius: 2
      });
  
  
   ringEl.setAttribute("game-play", {
        elementId: `#${id}`
      });
  
  
      environment.appendChild(ringEl);
    }
  });
  
  