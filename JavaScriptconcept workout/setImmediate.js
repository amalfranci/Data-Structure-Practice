
// Function that returns a promise to simulate an asynchronous operation
function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation (e.g., fetching data from an API)
        setTimeout(() => {
            const data = { message: "Data fetched successfully" };
            // Resolve the promise with the data
            resolve(data);
            // Uncomment the line below to simulate an error
            // reject(new Error("Error fetching data"));
        }, 2000); // Simulating a delay of 2 seconds
    });
}

// Using the promise
fetchData()
    .then((result) => {
        console.log(result.message);
    })
    .catch((error) => {
        console.error("Error:", error.message);
    });


setImmediate(() => {
    console.log("Executed in the next iteration of the event loop");
});
setTimeout(() => {
    console.log("Delayed execution after 1000 milliseconds");
}, 0);

console.log("anand")
