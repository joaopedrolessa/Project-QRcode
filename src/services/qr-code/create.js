import prompt from "prompt";
import promptSchemaQRCode from "../../prompts/prompt-schema-qrcode.js";
import handler from "./handler.js";

async function crateQRcode() {
    prompt.get(promptSchemaQRCode, handler)
    prompt.start();
}

export default crateQRcode