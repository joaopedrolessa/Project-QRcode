# QRCode Project

![Status Badge](https://img.shields.io/badge/status-active-success.svg)

A utility kit for e-commerce that includes QR Code generation and secure password creation.

## Table of Contents

- [QRCode Project](#qrcode-project)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Configuration](#configuration)
    - [Running the Project](#running-the-project)
    - [Project Structure](#project-structure)
  - [License](#license)
  - [Contact](#contact)

## About

This project allows users to generate QR Codes and secure passwords. It utilizes the `chalk`, `prompt`, and `qrcode-terminal` libraries to provide an interactive and colorful command-line interface.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/joaopedrolessa/Project-QRcode

2. Navigate to the project directory:

```sh
cd your-project
```

3. Install the dependencies:

```sh
npm install
```

## Usage

### Configuration 
Create a .env file in the root of the project with the following content and fill in the variables as needed:

```sh
Copiar código
UPPERCASE_LETTERS=true
LOWERCASE_LETTERS=true
NUMBERS=true
SPECIAL_CHARACTER=true
PASSWORD_LENGTH=12
```

- UPPERCASE_LETTERS: Specify if uppercase letters should be included (true/false).
- LOWERCASE_LETTERS: Specify if lowercase letters should be included (true/false).
- NUMBERS: Specify if numbers should be included (true/false).
- SPECIAL_CHARACTER: Specify if special characters should be included (true/false).
- PASSWORD_LENGTH: Specify the password length.
  
### Running the Project
To start the project, run:

```sh
npm start
```

You will be prompted to choose between generating a QR Code or a secure password.

### Project Structure
- src/index.js: Entry point of the application.
- src/prompts/prompt-schema-main.js: Schema for the main prompt.
- src/prompts/prompt-schema-qrcode.js: Schema for the QR Code prompt.
- src/utils/permitted-characters.js: Function to get allowed characters for the password.
- src/handlers/handler.js: Handler for password creation.
- src/handlers/create-password.js: Function to create passwords.
- src/handlers/create-qrcode.js: Function to create QR Codes.

## License
This project is licensed under the ISC License - see the LICENSE file for details.

## Contact
João Pedro Lessa de Souza - joaopedro.lessa@outlook.com - [LinkedIn](https://www.linkedin.com/in/joaopedrolessa/)

Project Link: https://github.com/joaopedrolessa/Project-QRcode