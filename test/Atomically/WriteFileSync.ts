import { fs } from "../../src/main";

const interval = setInterval(() => {
  fs.writeFileSync("./test/test.json", JSON.stringify({updated_at: new Date().toISOString()}));
}, 10);

setTimeout(() => {
  clearInterval(interval);

  console.log("✅ [WriteFileSync] Checks successful!");
}, 5000);