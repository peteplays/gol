# Game of Life

This project has moved to <a href="https://github.com/peteplays/peteplays.github.io">Here</a>

## Check it out
<a href="http://peteplays.github.io/index.html">The Game of Life Project</a>

## Project Goal
This is my first project with JRS.  My goal is to sharpen my programming skills and have some fun.  I will be using the rules from <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a> to build a web app.

## Try Yourself
```
clone repo
open the ang folder
open index.html
```

## Options
Currently Angular is the only option.<br>
<br>
### Angular
Open the ang folder to view the code.<br>

## My Project Versions
#### V1
located in ang/js/ main.v1.js<br>
This version has the game logic included in the angular controller<br>
<br>
#### V2 
located in ang/js/ and needs main.v2.js and gol-app.js<br>
gol-app.js is the game logic<br>
main.v2.js for angular<br>

## Config
game_config contains all data that is needed to be pass from main.v2.js to gol-app.js.<br>
It contains:<br>
```
game_config = 
	{
		func : 'func name',
		board : [],
		grid_size : 10,
		speed : 500

	}
```
Parameter		Type		Description												Required
func			string		pass the function name you are calling from the ui		yes
board			array		

## Required
<table>
	<tr>
		<th>Parameter</th>
		<th>Type</th>
		<th>Description</th>
		<th>Required UI to gol-app</th>
	</tr>
	<tr>
		<td>func</td>
		<td>string</td>
		<td>pass the function name you are calling from the UI</td>
		<td>yes</td>
	</tr>
	<tr>
		<td>board</td>
		<td>array</td>
		<td>pass the board to the UI</td>
		<td>no</td>
	</tr>
	<tr>
		<td>grid_size</td>
		<td>string</td>
		<td>pass board size</td>
		<td>no</td>
	</tr>
	<tr>
		<td>speed</td>
		<td>string</td>
		<td>pass speed to board</td>
		<td>no</td>
	</tr>
</table>


## Options
Currently V2 is set. V1 is included.<br>  
To run V1, change the js source file from <code>main.v2.js</code> to <code>main.v1.js</code> and remove <code>gol-app.js</code> from the index.html file<br>
<br>
The full source link for the background images for the cells are included in css/main.css.  Uncomment the full links and remove the local references.<br>

## Contributors
Please feel free to contact me

## License
MIT<br>
Please feel free to use this project.