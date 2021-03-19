// 9 (4+5) will be shown in the console after 3 seconds
function delayedResultPromise(n1, n2, delayTime) {
    // your code here ...
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve(n1 + n2);
      }, 3000);
    });
    return promise;
}
delayedResultPromise(4, 5, 3000).then(console.log)

// result will be shown in the console after <delayTime> seconds
async function main() {
  // your code here, you should call delayedResultPromise here and get the result using async/await.
  const result = await delayedResultPromise(4, 5, 3000);
  console.log(result);
  }
main()