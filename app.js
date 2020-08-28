var animationType = "./img/rect.png";

document.querySelector(".btn-1").addEventListener("click", function() {
    animationType = "./img/ramen.jpg";
    animate(animationType);
})


document.querySelector(".btn-2").addEventListener("click", function() {
    animationType = "./img/heightMap.png";
    animate(animationType);

})

document.querySelector(".btn-3").addEventListener("click", function() {
    animationType = "./img/ice2.jpg";
    animate(animationType);
})

document.querySelector(".btn-4").addEventListener("click", function() {
    animationType = "./img/dot.jpg";
    animate(animationType);
})

document.querySelector(".btn-5").addEventListener("click", function() {
    animationType = "./img/stripe1.png";
    animate(animationType);
})

document.querySelector(".btn-6").addEventListener("click", function() {
    animationType = "./img/fluid.jpg";
    animate(animationType);
})



function animate(animationType) {
    new hoverEffect({
        parent: document.querySelector('.distortion'),
        intensity: 0.2,
        speedIn: 2.5,
        speedOut: 2.5,
        // angle: Math.PI / 1,
        image1: './img/pexels-dazzle-jam-1164674.jpg',
        image2: './img/pexels-dazzle-jam-1164980.jpg',
        displacementImage: animationType.toString()
    });

    var canvasObject = document.querySelector(".distortion").children;

    var canvas = [];

    for (var i = 0; i < canvasObject.length - 1; i++) {
        canvas.push(canvasObject[i])
    }
    canvas.forEach(function(canva) {
        canva.classList.add("hide");
    })

}

animate(animationType);