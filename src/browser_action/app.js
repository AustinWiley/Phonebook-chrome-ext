const contactList = [{
    name: "Austin Wiley",
    phone: "123-123-1234"
},
{
    name: "Sarah Wiley",
    phone: "123-123-1234"
},
{
    name: "Emmry Wiley",
    phone: "123-123-1234"
},
{
    name: "Haven Wiley",
    phone: "123-123-1234"
},
{
    name: "Ira Wiley",
    phone: "123-123-1234"
},
{
    name: "Austin Wiley",
    phone: "123-123-1234"
},
{
    name: "Chris christopherson",
    phone: "123-123-1234"
},
{
    name: "myly cyrus",
    phone: "123-123-1234"
},
{
    name: "poop plop",
    phone: "123-123-1234"
},
{
    name: "Soup eater",
    phone: "123-123-1234"
},
{
    name: "shelly mcmaster",
    phone: "123-123-1234"
},
{
    name: "fidor mangy",
    phone: "123-123-1234"
}

]


console.log(contactList[0])


var table = document.getElementById('tbody');
for (var i = 0; i < contactList.length; i++) {
var person = contactList[i];
var tr = document.createElement('tr');

var td1 = document.createElement('td');
var td2 = document.createElement('td');

var text1 = document.createTextNode(person.name);
var text2 = document.createTextNode(person.phone);

td1.appendChild(text1);
td2.appendChild(text2);
tr.appendChild(td1);
tr.appendChild(td2);

table.appendChild(tr);
}
// document.tbody.appendChild(table);

document.getElementById("button-addon2").addEventListener("click", displayDate);

function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
var newName = document.getElementById("nameInput").value
var newPhone = document.getElementById("phoneInput").value
console.log(newName)
console.log(newPhone)
var newEntry = {
name: newName,
phone: newPhone
};

contactList.push(newEntry)
console.log(contactList)
}