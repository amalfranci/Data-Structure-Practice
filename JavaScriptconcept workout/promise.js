const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 0); // Generates a random number between 0 and 9
    if (randomNumber !== 0) { // Check if the random number is not equal to 0
        resolve(randomNumber); // Resolve the promise with the random number
    } else {
        reject('Failed to generate a non-zero random number'); // Reject the promise with an error
    }
});

promise
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.error(err);
    });
