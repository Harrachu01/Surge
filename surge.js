var key = {}
for(i = 97; i < 122; i++) {
    key.fromCharCode(i) = false;
}
document.addEventListener("keydown", function(e) {
    key[e.key] = true;
});
document.addEventListener("keyup", function(e) {
    key[e.key] = false;
})
var canvas = document.getElementById("gameplay"); 
var ctx = canvas.getContext("2d");
setInterval(() => {
    
}, 50);
