var key = {a:false,b:false,c:false,d:false,e:false,f:false,g:false,h:false,i:false,j:false,k:false,l:false,m:false,n:false,o:false,p:false,q:false,r:false,s:false,t:false,u:false,v:false,w:false,x:false,y:false,z:false,0:false,1:false,2:false,3:false,4:false,5:false,6:false,7:false,8:false,9:false,ArrowUp:false,ArrowDown:false,ArrowLeft:false,ArrowRight:false,Shift:false,Control:false,Alt:false,Tab:false,Enter:false,Escape:false,Backspace:false,Delete:false,Insert:false,Home:false,End:false,PageUp:false,PageDown:false,CapsLock:false,NumLock:false,ScrollLock:false,Meta:false,ContextMenu:false,PrintScreen:false,Pause:false,AudioVolumeMute:false,AudioVolumeDown:false,AudioVolumeUp:false,MediaTrackNext:false,MediaTrackPrevious:false,MediaStop:false,MediaPlayPause:false,OS:false,Help:false,Select:false,Again:false,Undo:false,Cut:false,Copy:false,Paste:false,Find:false}
ctx.width = canvas.width;
ctx.height = canvas.height;
ctx.lineWidth = 8;  
var canvas = document.getElementById("gameplay"); 
var ctx = canvas.getContext("2d");
document.addEventListener("keydown", function(e) {
    key[e.key.toLowerCase] = true;
});
document.addEventListener("keyup", function(e) {
    key[e.key.toLowerCase] = false;
})
setInterval(() => {
}, 50);