import fs from "fs";
import { JSHINT } from "jshint";
const jshintConfig = JSON.parse(fs.readFileSync(".jshintrc", "utf8"));
import { createInterface } from "readline";

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the path to the file you want to lint: ", (filePath) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      rl.close();
      return null;
    }
    const accpetedExtesnions = ["js", "jsx", "ts", "tsx"];
    if (!accpetedExtesnions.includes(filePath.split(".").pop())) {
      console.error("File is not a javascript file");
      rl.close();
      return null;
    }

    JSHINT(data, jshintConfig);
    console.log("data", JSHINT.data());

    // calculate score system
    const errors = JSHINT.errors ? JSHINT.errors.length : 0;
    const warnings = JSHINT.warnings ? JSHINT.warnings.length : 0;
    const complexity = JSHINT.data().functions
      ? JSHINT.data().functions.length
      : 0;
    const maxScore = 100;
    let score = maxScore - errors * 10 - warnings * 5 - complexity * 5;
    if (score < 0) score = 0;

    console.log(`Your score is ${score} out of ${maxScore}`);
    rl.close();
  });
});
