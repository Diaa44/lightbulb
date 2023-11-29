const lightbulbSwitch = document.getElementById('lightbulb-switch');
const lightbulbImg = document.querySelector('#lightbulb-img');
let isLightbulbOn = false;


lightbulbSwitch.addEventListener('click', function() {
    if (isLightbulbOn) {
        lightbulbImg.src = "png.off.png"

        isLightbulbOn = false;
    } else {
        lightbulbImg.src = "on.png"

        isLightbulbOn = true;
    }
    console.log(isLightbulbOn);
})