// pklRunner.js
const { exec } = require('child_process');

// Configuration object to store the path to pkl
let config = {
  pklPath: '', // Initialize empty to enforce setting the path
};

// Function to set the path to pkl
function setPklPath(path) {
  if (!path.endsWith('/')) {
    path += '/';
  }
  config.pklPath = path;
}

// Function to run pkl with a given file path
function runPkl(filePath) {
  return new Promise((resolve, reject) => {
    // Ensure the pklPath has been set
    if (!config.pklPath) {
      reject(new Error('The path to pkl has not been set. Please set it before calling runPkl.'));
      return;
    }

    const command = `${config.pklPath}./pkl eval -f json ${filePath}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(new Error(`Error executing pkl: ${error.message}`));
        return;
      }
      if (stderr) {
        reject(new Error(`pkl stderr: ${stderr}`));
        return;
      }

      try {
        const result = JSON.parse(stdout);
        resolve(result);
      } catch (parseError) {
        reject(new Error(`Error parsing pkl output: ${parseError.message}`));
      }
    });
  });
}

// Export the setPklPath and runPkl functions
module.exports = { setPklPath, runPkl };
