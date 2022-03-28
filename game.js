AFRAME.registerComponent("game-play", {
    schema: {
      elementId: { type: "string", default: "#ring1" },
    },

    init: function () {
 
    },
  
    update: function () {
        
        this.isCollided(this.data.elementId);
      },
    
      isCollided: function (elementId) {
       console.log(elementId)
        const element = document.querySelector(elementId);
        element.addEventListener("collide", (e) => {
          if (elementId.includes("#ring")) {
            element.setAttribute("visible", false); 
            this.updateScore(); 

            console.log(elementId + " collision");
          } 
        });
      },

      updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
      },
    });