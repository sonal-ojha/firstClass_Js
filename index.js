console.log('Js file!!!');
add();
function add() {
    console.log('Declaration!!');
    const sum = 10 + 20;
    return sum;
}

const add = (a, b) => a + b;
	// this.getAll = function() {
	// 	return this.name + " " + "age : " + this.age;
	// }

let Employee = function(name, id, age) {
	this.name = name;
    this.age = age;
}

Employee.prototype.getAll = function() {
    return this.name + " " + "age : " + this.age;
}

getName();

let getName = function() {
	var fname = "sonal";
	var lname = "ojha";
	var getFullName = fname + " " + lname;
	return getFullName;
}





function move() {
    var elem = document.getElementById("myBar");   
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++; 
        elem.style.width = width + '%'; 
      }
    }
}

const data = [
    {
        fname: 'abc',
        lname: 'def',
        age: 23,
    },
    {
        fname: 'def',
        lname: 'ght',
        age: 28,
    },
    {
        fname: 'ijk',
        lname: 'lmbn',
        age: 20,
    }
];
const NewData = [...data].map((item, idx) => {
    const newItem = { ...item };
    newItem.id = idx;
    newItem.fullName = item.fname + " " + item.lname;
    return newItem;
});