Create a Like model with a count property and a like function. Use this.set to increment the likes and model.toJSON() in your view's render function combined with {{count}} in your template. Use the model.like() function to increment count each time the button is clicked.

Create a Loading model with two properties: text and isLoading. Use {{#if isLoading}}disabled{{/if}} in your template to control whether or not the button is disabled. Use model.set and setTimeout to change the button text and to reset the button back to its regular state after 4 seconds.
