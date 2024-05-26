import prompt from "prompt";

import PromptSchemaMain from "./prompts/prompt-schema-main.js";
import crateQRcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";


async function main(){
    prompt.get(PromptSchemaMain, async (err, result) => {
        if(result.select == 1) await crateQRcode()
        if(result.select == 2) await createPassword()
    })

    prompt.start();
}

main();