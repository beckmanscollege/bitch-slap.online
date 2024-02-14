document.addEventListener("DOMContentLoaded", function() {
    // Hitta ljud-elementen
    var clickSounds = [
        document.getElementById("clickSound1"),
        document.getElementById("clickSound2"),
        document.getElementById("clickSound3"),
        document.getElementById("clickSound4")
    ];

    // Hitta alla bild-element med klassen "image"
    var images = document.querySelectorAll(".image");
    
    // Funktion för att spela ljud och byta bild
    function playSoundAndChangeImage() {
        // Generera ett slumpmässigt index för ljudfilen
        var randomIndex = Math.floor(Math.random() * clickSounds.length);
        
        // Spela upp ljudet med det slumpmässiga indexet
        clickSounds[randomIndex].play();
        
        // Visa den nästa bilden och dölj den nuvarande bilden
        for (var i = 0; i < images.length; i++) {
            if (this === images[i]) {
                images[i].style.display = "none";
                if (i === images.length - 1) {
                    images[0].style.display = "block";
                } else {
                    images[i+1].style.display = "block";
                }
                break;
            }
        }
    }
    
    // Lägg till händelselyssnare för mouseover-händelse på bilderna
    images.forEach(function(image) {
        image.addEventListener("mouseover", playSoundAndChangeImage);
    });
});