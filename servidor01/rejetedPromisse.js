// Creating a function that returns a promise
function checkAge(age) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (age >= 18) {
        resolve("Access granted!"); // Promise resolves if the age is 18 or older
      } else {
        reject("Access denied. You must be at least 18 years old."); // Promise rejects if the age is under 18
      }
    }, 2000); // Delay of 2 seconds
  });
}

// Using the function with async/await and handling errors
async function main() {
  try {
    const result = await checkAge(16); // Change the age to test different cases
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
}

main();
console.log(
  "The rest of the code runs while the async function waits the promisse"
);
