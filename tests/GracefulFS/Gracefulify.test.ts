import { fs } from "../../src/main";

if (fs.gracefulify === undefined) throw new Error("❌ Error");

console.log("✅ Success");
