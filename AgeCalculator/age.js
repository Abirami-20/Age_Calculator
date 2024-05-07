document.getElementById("age").addEventListener("click", function() {
    calculateAge();
});

function calculateAge() {
    var birthdate = new Date(document.getElementById("birthday").value);
    var currentDate = new Date();

    var age = currentDate.getFullYear() - birthdate.getFullYear();

    // Adjust age if birthday hasn't occurred yet this year
    if (currentDate.getMonth() < birthdate.getMonth() || (currentDate.getMonth() === birthdate.getMonth() && currentDate.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById("result").innerText = age + " years old";
}
