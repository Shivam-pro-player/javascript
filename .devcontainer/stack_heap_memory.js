//stack (primitive), heap (non-primitive)
let myyoutubename = "hiteshchoudhary.com"

let anothername = "myyoutubename"
anothername = "chiaurcode"

console.log(myyoutubename);
console.log(anothername);

let userone = {
    email: "shivam@12345gmail.com",
    upi: "user@1344"
}

let usertwo = userone

usertwo.email = "hitesh@2345gamil.com"

console.log(userone.email);
console.log(usertwo.email);
