centering_elements('.animation_box','h1')
function gettin_screen_values(){
var screen_width=$(window).width();
  if (screen_width<=991){document.querySelector('body').style.textAlign='-webkit-center'}

var screen_height=$(window).height();
var x_origin = screen_width/2;
var y_origin = screen_height/2;
return[screen_width,x_origin,screen_height,y_origin]}
array=gettin_screen_values();
screen_width=array[0];
x_origin=array[1];
screen_height=array[2];
y_origin=array[3]
x_pos=0
roration=1;
changing_text_color=0

y_intercept=screen_height

document.querySelector('.animation_box').style.top=screen_height+'px';
// $('.animation_box').animate({top:y_origin-100,right:x_origin},5000)


function rotation_continously(time,queryselector,initial_rotation,number_of_cycles){
  roration=initial_rotation
var counter=0;
setInterval(function(){
$(queryselector).css('transform','rotate('+roration+'deg)')
inner_element=document.querySelector(queryselector).childNodes[1]

$(inner_element).css('transform','rotate('+(-roration)+'deg)')

roration++
if (counter==number_of_cycles){$('.animation_box').fadeToggle();initial_rotation=roration;counter=0;}

if(roration==360){roration=0;counter++}
if(roration<=180){$('.text').css('color','#FBDF07')}
else if(roration>180){$('.text').css('color','white')}

},time)}

rotation_continously(1,'.animation_box',45,2)


function centering_elements(queryselect_container,queryselect_element){
var  element_height=$(queryselect_element).height();
var container_height=$(queryselect_container).height();
change_to_posy = (container_height/2)-(0.5*element_height)
$(queryselect_element).css('top',change_to_posy)
var  element_width=$(queryselect_element).width();
var container_width=$(queryselect_container).width();
change_to_posx = (container_width/2)-(0.5*element_width)
$(queryselect_element).css('left',change_to_posx)
}
