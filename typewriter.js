//animate the sentence, revealing one character at a time.

const sentence = "hello there from lighthouse labs";
const sentence2 = "Twas brillig, and the slithy toves";

let delay = 0;
for (const char of sentence2) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write("\n")
}, delay);



// setTimeout(() => {
//   console.log(char);
// }, 1000);
//
//^^^In the first example, all the characters will print at once because they are all set
//to print out at 1 second after the program is run. There is no delay
//between each character.
//each loop creates a 1 second timer for each character, and all timers
//start at the same time.
//eg. three strings, three 1s timeouts created. After 1s, all three of them
//execute (in order). There is no visible delay!!