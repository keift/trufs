import { fs } from "../../src/main";

if (fs.copy === undefined) throw new Error("❌ Error");

console.log("✅ Success");
