const fs = require("fs");

/*let text: string[] = fs.readFile(
  "/Users/kaifedin/dev/projects/adventofcode/A_01/input.txt",
  "utf8",
  (err: string, data: string) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);*/

let readMe: string[] = fs
  .readFileSync(
    "/Users/kaifedin/dev/projects/adventofcode/a_main/input.txt",
    "utf8"
  )
  .split("\n");

let counter: number = 0;

for (let i = 1; i < readMe.length; i++) {
  if (parseInt(readMe[i]) > parseInt(readMe[i - 1])) {
    counter += 1;
  }
}

console.log(counter);
