import { fs } from "../../src/main";

if (fs.copy === undefined) throw new Error("❌ [Copy]");

console.log("✅ [Copy] Checks successful!");
