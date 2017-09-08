
/*function credentials(){
    var text = document.getElementById("emailId").value();
    var text1 = document.getElementById("password").value();

        if (text = "minnu@gmail.com") {
            if (text1 = "minnu") {
                alert("Login Successfull");
            }
            alert("enter pass")
        }

        else {
            alert("email or Password does not match")
        }

}


var text = document.getElementById("emailId").innertext = "minnu@gmail.com";
if (text === 'minnu@gmail.com') {
    alert('Yay, I love chocolate ice cream!');
} else {
    alert('Awwww, but chocolate is my favorite...');
}
document.querySelector('btn btn-success').onclick = function() {
    alert('Ouch! Stop poking me!');

}
var Person = function(name,age,yearOfBirth){
    this.name = name;
    this.age = age;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calAge =
    function(){
console.log(2019-yearOfBirth);
}
Person.prototype.lastName = "smith";
var john = new Person("john",22,1990);
console.log(john.lastName);
console.log(john);

john.calAge();

alert("hello");

var button = document.getElementById('btn');
var studentInfo = document.getElementById(('student-info"'));

button.addEventListener('click',function () {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'https://jsonplaceholder.typicode.com/posts');
    xml.onload = function(){
        var ourData = JSON.parse(xml.responseText);
        renderHTML(ourData);
    };
    xml.send();
});

function renderHTML(data){
    var HTMLSring = "";
    for(i-0; i<data.length; i++){
        HTMLString += "<tr>";
        HTMLString += "<td>"+data.userId+"</td>";
        HTMLString += "<td>"+data.id+"</td>";
        HTMLString += "<td>"+data.title+"</td>";
        HTMLString += "<td>"+data.body+"</td>";
        studentInfo.insertAdjacentHTML('beforeend', HTMLString);

    }
}*/

