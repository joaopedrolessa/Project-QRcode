import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("Enter a link to generate the QR code")
    },
    {
        name:"type",
        description: chalk.yellow(
            "Choose between the type of QR code (1 - normal or (2 - terminal"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Choose only between 1 and 2"),
        required: true,
    },
]

export default promptSchemaQRCode