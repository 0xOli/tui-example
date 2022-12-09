import React from 'react';
import { render } from 'ink';
import meow from 'meow';

import ui from "./ui.js";

const cli = meow(`
	Usage
	  $ tui-example

	Options
		--name  Your name

	Examples
	  $ tui-example --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));
