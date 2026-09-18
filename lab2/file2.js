import { writeFile, appendFile, readFile } from "fs/promises";

const readData = async (filename) => {
  try {
    const content = await readFile(filename, "utf-8");
    return content;
  } catch (e) {
    console.log(e.message);
    console.log("File not found");
  } finally {
    console.log("Read data finished");
  }
};

const writeData = async (filename, content) => {
  try {
    await writeFile(filename, content);
  } catch (e) {
    console.log(e.message);
  }
};

const appendData = async (filename, content) => {
  try {
    await appendFile(filename, content);
  } catch (e) {
    console.log(e.message);
  }
};

const deleteData = async (filename) => {
  try {
    await unlink(filename);
  } catch (e) {
    console.log(e.message);
  }
};
// If a function uses await keyword then the function must be asynchronous.

const data = await readData("file4.js");
console.log(data);
