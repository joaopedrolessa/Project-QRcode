import chalk from "chalk";

const promptSchemaQRCode = [
    {
        name: "link",
        description: chalk.yellow("digiti um link para gerar o QR CODE")
    },
    {
        name:"type",
        description: chalk.yellow(
            "Wscolha entre o tipo de QR code (1- normal ou (2- terminal"
        ),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("escolha apenas entyre 1 e 2"),
        required: true,
    },
]

export default promptSchemaQRCode