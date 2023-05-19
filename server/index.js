import fs from "fs";
import { JSHINT } from "jshint";
const jshintConfig = JSON.parse(fs.readFileSync(".jshintrc", "utf8"));
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Prompt the user to enter the path to the file they want to lint.
 * @param {string} filePath - The path to the file.
 */
rl.question("Enter the path to the file you want to lint: ", (filePath) => {
  // remove"\' from the path
  filePath = filePath.replace(/['"]+/g, "");

  /**
   * Read the file content and perform linting.
   * @param {Error} err - The error object, if any.
   * @param {string} data - The content of the file.
   */
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      rl.close();
      return null;
    }

    const accpetedExtesnions = ["js", "jsx", "ts", "tsx"];
    if (!accpetedExtesnions.includes(filePath.split(".").pop())) {
      console.error("File is not a JavaScript file");
      rl.close();
      return null;
    }

    // Perform linting using JSHINT.
    JSHINT(data, jshintConfig);
    const { jshint } = JSHINT;

    /**
     * Represents a linting error.
     * @typedef {Object} LintingError
     * @property {string} reason - A description of the error.
     * @property {number} line - The line number where the error occurred.
     * @property {number} character - The column number where the error occurred.
     */

    /**
     * Log linting errors to the console.
     * @param {LintingError} error - The linting error.
     */
    (jshint.errors || []).forEach((error) => {
      if (error) {
        console.log(
          `Error: ${error.reason} at line ${error.line} and column ${error.character}`
        );
      }
    });

    /**
     * Represents a linting warning.
     * @typedef {Object} LintingWarning
     * @property {string} reason - A description of the warning.
     * @property {number} line - The line number where the warning occurred.
     * @property {number} character - The column number where the warning occurred.
     */

    /**
     * Log linting warnings to the console.
     * @param {LintingWarning} warning - The linting warning.
     */
    (jshint.warnings || []).forEach((warning) => {
      if (warning) {
        console.log(
          `Warning: ${warning.reason} at line ${warning.line} and column ${warning.character}`
        );
      }
    });

    /**
     * Represents a linted function.
     * @typedef {Object} LintedFunction
     * @property {string} name - The name of the function.
     * @property {Object} metrics - The metrics associated with the function.
     * @property {number} metrics.complexity - The complexity metric of the function.
     */

    /**
     * Log information about linted functions to the console.
     * @param {LintedFunction} func - The linted function.
     */
    (jshint.functions || []).forEach((func) => {
      if (func) {
        console.log(
          `Function: ${func.name} has a complexity of ${func.metrics.complexity}`
        );
      }
    });

    // Calculate the linting score.
    const errors = JSHINT.errors ? JSHINT.errors.length : 0;
    const warnings = JSHINT.warnings ? JSHINT.warnings.length : 0;
    const complexity = JSHINT.data().functions
      ? JSHINT.data().functions.length
      : 0;
    const maxScore = 100;
    let score = maxScore - errors * 10 - warnings * 5 - complexity * 1;
    if (score < 0) score = 0;
    console.log(`Your score is ${score} out of ${maxScore}`);
    rl.close();
  });
});
