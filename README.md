# Game of Life

## Language Options
Currently Angular is the only option.<br>
<br>
### Angular
Open the ang folder to view the code.<br>

## Versions
V1 is main.v1.js in ang/js/<br>
This version has the game logic included in the angular controller<br>
<br>
V2 is in ang/js/ and needs main.v2.js and app.js<br>
app.js is the game logic<br>
main.v2.js for angular<br>

## To Run
```
clone repo<br>
open the ang folder<br>
open index.html
```
## Config
game_config contains all data that is needed to be pass from main.v2.js to app.js.<br>
It contains:<br>
```
func<br>
board<br>
grid_size<br>
speed<br>
```
## Required
func is required be to sent to app.js on every call.  If not, an alert 'APP ERROR' with pop up and the page will reload.
board, grid_size, and speed are not required on every call.<br>

## Options
Currently V2 is set. V1 is included.<br>  
To run V1, change the js source file from <code>main.v2.js</code> to <code>main.v1.js</code> and remove <code>app.js</code> from the index.html file<br>
<br>
The source for the background images are included in css/main.css.  Uncomment the full links and comment out the local references.<br>