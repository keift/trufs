import * as gracefulFs from "graceful-fs";
import * as fsExtra from "fs-extra";

const Trufs = {
  ...gracefulFs,
  ...fsExtra,
};

(async () => {
  const atomically = await import("atomically");

  Object.assign(Trufs, atomically);
})();

export default Trufs;