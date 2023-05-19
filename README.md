<div align="center">  <h1 style="font-size:30px" >code checker <br />
<img src="https://raw.githubusercontent.com/meteor314/ny-cli/master/src/ny-cli.png" width="48px" height="48px" > </h1>  </div>
<p align="center">A  tool to check if your code is valid or not.</p>
</p>

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub release](https://img.shields.io/github/release/meteor314/ny-cli.svg)](https//github.com/devops-master-4/code-checker/releases/latest)
[![Reactjs](https://img.shields.io/badge/Reactjs-17.0.2-blue.svg)](https://reactjs.org/)
[![Nodejs](https://img.shields.io/badge/Nodejs-14.17.0-blue.svg)](https://nodejs.org/en/)
[![JSHint](https://img.shields.io/badge/JSHint-2.13.1-blue.svg)](https://jshint.com/)

<img src="https://i.imgur.com/RuFpoVU.png" width="100%" height="100%" >

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Linting and Scoring](#linting-and-scoring)
- [License](#license)

## Installation

1. Clone the repository.

```bash
git clone https://github.com/devops-master-4/code-checker.git
cd code-checker
cd client && npm install && cd ../server && npm install
```

2. Run `npm install` to install the dependencies.

## Usage

To run the program, use the following command:

```shell
cd client && npm start
# or
cd server && npm start
```

OR you can run the program via Docker.

# Linting and Scoring

Follow the prompts to enter the path to the file you want to lint.
Linting and Scoring

This program uses JSHINT to perform linting on JavaScript files. It checks for errors, warnings, and calculates a linting score based on a scoring system.

Linting Errors and Warnings:

- Errors indicate code violations that may cause issues or errors during execution.
- Warnings highlight potential issues or non-standard code practices.

Linted Functions:

- Displays information about linted functions, including their names and complexity metrics.

Scoring System:

- The linting score is calculated based on the number of errors, warnings, and function complexity.
- The maximum score is 100.
- Score calculation: maxScore - errors _ 10 - warnings _ 5 - complexity \* 1.

License

This project is licensed under the MIT License. See the LICENSE file for details.

```txt
MIT License
```
