//the callback-name should be server side generated by using 'callback' parameter from querystring.
the_callback([
	{'title': 'Sample item - 1', 'description': 'Description - 1'},
	{'title': 'Sample item - 2', 'description': 'Description - 2'},
	{'title': 'Sample item - 3', 'description': 'Description - 3'},
	{'title': 'Sample item - 4', 'description': 'Description - 4'}
]);

/*
* An extremely simple sample of a callback handler in php

<?php

$response = array();

for ( $i = 1; $i <= 10; ++$i ) {
	$response[] = array('title' => "Sample item - $i", 'description' => "Description - $i");
}

echo $_GET['callback'] . '(' . json_encode($response) . ');';

***/