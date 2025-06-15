import { fs } from "../../src/main";

if (fs.gracefulify === undefined) throw new Error("❌ [Gracefulify]");

console.log("✅ [Gracefulify] Checks successful!");
