# Javascript Racer 1 Front End


## Summary

This is an improved version of the JavaScript racer from DevBootcamp. The
challenge is outlined below.

## Releases

### Release 0: The Setup

There is no skeleton for this challenge.  You will have to write the HTML, CSS and JavaScript files yourself (and link them all together).  Let's just start with building a simple two-player board.  This will be
rendered via HTML.  There are a few ways you could do it, e.g., a table that
looks like:

```html
<table class="racer_table">
  <tr id="player1_strip">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="player2_strip">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
```

Then, using CSS, you can provide styles like:

```css
.racer_table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.racer_table td.active {
  background-color: black;
}
```

Updating a player's position could be achieved by adding the `active` class to
the appropriate `td`.  There are many other ways to achieve a sensible board
output; this is just one suggestion.

Make sure you're able to "manually" produce all the board layouts you might
care about before you jump into the JavaScript.  Whatever way you choose, it
should be easy for jQuery/JavaScript to manipulate, so keep that in mind.

Use something like [normalize.css][] to enable sane default styles.

### Release 1: Add JavaScript

We need some way for JavaScript to update the board state.  Create simple
JavaScript functions that can update a particular player's position.  You give
the functions a player position as input and they update the underlying HTML to
reflect the new position.

It could look something like:

```javascript
updatePlayerPosition('player1', 10);
```

Store this JavaScript in a separate file and use the JavaScript console to
debug it and pass in values manually.

### Release 2: Binding to Key Presses

Now we'll make the game interactive!  Bind to the [keyup][] event to detect
when a player has "pressed" a key.  We don't bind to the [keydown][] or
[keypress][] events because those events fire when the keyboard repeats the
key, whereas the keyup event doesn't.

It'd be a boring game if you could just hold the key and go.  You want to bind
to the `document`, like so:

```javascript
$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detect which key was pressed and call the appropriate function
    // Google "jquery keyup what key was pressed" if you don't know how
  });
});
```

### Release 3: Starting and Winning States

The last bit is to have starting and winning states, so we can restart the game
and declare a winner when the game is over.  Add these features (starting,
playing, winning, and restarting) and submit your solution as a pull request
with at least three files: an HTML file, a CSS file, and a JavaScript file.
You can have more files, but all CSS and JavaScript should be linked externally
from the HTML file.

