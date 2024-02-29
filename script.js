let key = prompt("Enter the key you want to send")
let value = prompt("Enter the value you want to send")


localStorage.setItem(key, value)

console.log(`The value at ${key} is ${localStorage.getItem(key)}`)