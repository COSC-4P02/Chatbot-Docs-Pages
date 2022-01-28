# Hook Server

1. do_action: pre-embedded hook, each time the [same parameter] is given to the callback function of the hook
do_action(hook name, callback parameters)

2. apply_filters: Pre-embedded filters: each time the callback function of the hook takes [the result of the last filter as a parameter]
filter result = apply_filters(hook name, callback parameter to filter)

3. add_action: add a hook action, and link the operation at the pre-embedded hook
add_action(hook name, callback function, priority)

4. add_filter: add a hook filter, process parameters at the embedded filter, and return data
add_filter(hook name, callback function, priority)

5. Priority: The default is 10, and multiple actions or filters with the same hook name can be added. The higher priority is executed first, and the same priority is executed according to the order of addition.

Notice:
1. Action names of Action and Filter [do not repeat]
2. The difference from WP is that there is only one callback parameter. So when add is not needed, the priority is followed by the number of arguments. If multiple parameters are required, please use Object to implement, such as:

Pre-buried:
````js
var arg1 = 'xxx', arg2 = 'xxx';
do_action( 'action_name', {arg1,arg2} );
````
Use hooks:
````js
add_action( 'action_name', ( {arg1,arg2} ) => {
	console.log( arg1, arg2 );
} );
````