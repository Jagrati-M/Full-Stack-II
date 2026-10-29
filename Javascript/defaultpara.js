// Default Parameters

function test(quantity = 10) {
  return quantity;
}

console.log(test(undefined)); // 10 (Triggers default)
console.log(test(null));      // null (Does NOT trigger default)
console.log(test(0));         // 0 (Does NOT trigger default)

// Optional chaining 

const user = {
  name: "Alice",
  address: { city: "Agra", street: "Gwalior Road" }
};

// Traditional approach: verbose and messy
const cityOld = user && user.address && user.address.city;

// Optional chaining approach: clean and safe
const city = user?.address?.city;       // Returns "Paris"
const street = user?.address?.street;   // Returns undefined (instead of throwing an error)
const zip = user?.contact?.zipcode;     // Returns undefined (user.contact is undefined)
console.log(street);
console.log(zip);
