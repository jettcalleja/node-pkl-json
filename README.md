# node-pkl

The `node-pkl` library provides a Node.js interface to run `pkl` commands on files directly from your JavaScript code. It simplifies the process of executing `pkl` and handling its output within Node.js applications.

## Prerequisites

Before using `node-pkl`, you must have the `pkl` command-line tool installed on your system. For instructions on how to install `pkl`, visit the official [pkl CLI installation guide](https://pkl-lang.org/main/current/pkl-cli/index.html#installation).

## Installation

To use `node-pkl` in your project, you can install it via npm by running the following command:

```bash
npm install --save node-pkl
```

## Example Usage

Here's how to use `node-pkl` to run a `pkl` command on a specific file:

```javascript
const { setPklPath, runPkl } = require('node-pkl');

// Set the path to your pkl command once
// Don't include the pkl in this path
setPklPath('/absolute/path/to/pkl');

// Example pkl file content (bird.pkl):
/*
  name = "Swallow"

  job {
    title = "Sr. Nest Maker"
    company = "Nests R Us"
    yearsOfExperience = 2
  }
*/

// Run the pkl command on a specific file
runPkl('/path/to/your/file.pkl')
  .then(result => {
    console.log('pkl result:', result);
    // Accessing nested properties
    console.log(result.job.title); // Sr. Nest Maker
  })
  .catch(error => {
    console.error('Failed to run pkl:', error);
  });
```

Replace '/absolute/path/to/pkl' and '/path/to/your/file.pkl' with the actual paths to your pkl installation and the .pkl file you wish to process, respectively.

## Contributing

Contributions to node-pkl are welcome. Please feel free to submit pull requests or open issues to improve the library or report bugs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
