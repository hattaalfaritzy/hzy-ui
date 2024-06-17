import * as fs from 'fs';

fs.rm("./dist", { recursive: true, force: true }, (err) => {
  if (err) {
    return console.log("error occurred in deleting directory", err);
  }

  console.log("Directory deleted successfully");
});
