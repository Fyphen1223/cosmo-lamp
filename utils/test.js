const { channelGpt } = require("./gpt-client");
const client = new channelGpt();
async function main() {
    console.log(await client.generate("おはようございます！"));
    console.log(await client.generate("先程私はなんと言いましたか？"));
}

main();
