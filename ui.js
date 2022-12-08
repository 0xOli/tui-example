const React  = require('react');
const { h, Color, Box, Text } = require('ink');

const {useState, useEffect} = React;

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

async function cowSay(txt) {
  const { stdout, stderr } = await exec(`cowsay ${txt}`);
  if (stderr) {
    return stderr;
  }
  return stdout;
}

/*
const App = ({name = 'Stranger'}) => (
	<Text>
		Hello, <Text color="green">{name}</Text>
	</Text>
);

module.exports = App;
*/

const Window = ({ title, children }) => (
  <Box width={"50%"} flexDirection="column" borderStyle="single">
    <Box>
      <Text color="#00FF00">
        {title}
      </Text>
    </Box>
    <Box>
      {children}
    </Box>
  </Box>
);


function App() {
  const [window1, setWindow1] = useState("Waiting cowsay...");
  useEffect(() => {
    async function run() {
      const content = await cowSay("deez nuts");
      setWindow1(content);
    }
    run().catch((err) => {
      setWindow1(`Error running cowsay: ${err}`)
    })
  }, [])
  return <>
    <Box flexDirection="row">
      <Window title="Window 1">
        <Text>
          {window1}
        </Text>
      </Window>
      <Window title="Window 2">
        <Text>
          Window 2 content
        </Text>
      </Window>
    </Box>
    <Box>
      <Window title="Window 3">
        <Text>
          Window 3 content
        </Text>
      </Window>
      <Window title="Window 4">
        <Text>
          Window 4 content
        </Text>
      </Window>
    </Box>
  </>
}

module.exports = App;
