import { stat } from "fs/promises";

const fstat = await stat("file1.js");

console.log("filesize", fstat.size, "bytes");
console.log(`is file: ${fstat.isFile()}`);
console.log(`is folder: ${fstat.isDirectory()}`);
console.log(`is symbolic link: ${fstat.isSymbolicLink()}`);
