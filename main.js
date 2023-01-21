//selecting the eye
let eye_ref = document.querySelectorAll(".eye");

//mousemove and mouse touchmove
let events = ["mousemove", "touchmove"];

//check for touch screen
function isTouchDevice() {
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (e) {
    return false;
  };
};

//same function for both events
events.forEach((eventType) => {
  document.body.addEventListener(eventType,
    (event) => {
      eye_ref.forEach((eye) => {
        let eyex = eye.getBoundingClientRect()
          .left + eye.clientWidth / 2;
        let eyey = eye.getBoundingClientRect().
          top + eye.clientHeight / 2;
        //clientx and clienty
        var x = !isTouchDevice() ? event.clientX :
          event.touches[0].clientX;
        var y = !isTouchDevice() ? event.clientY :
          event.touches[0].clientY;
        
        //subtract
        let radian = Math.atan2(x - eyex, y - eyey);
        // convert radian to deg
        let rotationDegrees = radian * (180 / Math.PI) * -1 + 180;
        
        //rotat the eye
        eye.style.transform = "rotate(" + rotationDegrees + "deg)"
      });
    });
});