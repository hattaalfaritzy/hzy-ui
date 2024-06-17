import * as fs from 'fs';

fs.rmdir("./dist", { recursive: true }, (err: NodeJS.ErrnoException | null) => {
  if (err) {
    return console.log("Error occurred in deleting directory", err);
  }

  console.log("Directory deleted successfully");
});
