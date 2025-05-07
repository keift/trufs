import { fs } from "../../src/main";

const interval = setInterval(() => {
  fs.writeFileSync("./test/test.json", new Date().toISOString());
}, 10)

setTimeout(() => {
  clearInterval(interval);
}, 5000)

console.log("✅ [WriteFileSync] Checks successful!");