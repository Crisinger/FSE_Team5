/**
 * Created by johnn on 3/8/2017.
 */
var button = document.getElementById("loginButton");

/*
    When button is clicked it calls the functions below. Essentially,
    it checks the username and password in database.
    If the combination is in the database, then it initiates the login process.
 */
button.onclick = function(){
    var username = document.getElementById("loginUsername");
    var password = document.getElementById("loginPassword");
    if(checkLogIn(username, password)){
        loginProcess(username, password);
    }
};

/*
    Checks if the username and password combination are in the database.
    First checks username. If it is in the system, then checks the entered password.
    If a field is incorrect it will highlight the text field in light red. If it is
    correct it will highlight in light green. This is just for testing purposes.

 */
function checkLogIn(username, password){
    if(checkUsername(username.value)){
        username.style.backgroundColor = "#A0FFA0";

        if(checkPassword(username.value, password.value)){
            password.style.backgroundColor = "#A0FFA0";
            return true;
        } else {
            password.style.backgroundColor = "#F3A0A0";
        }

    } else {
        username.style.backgroundColor = "#F3A0A0";
    }

    return false;
}

/*
    Checks database for username. Clearly needs more work.
 */
function checkUsername(username){

    return username == "johnny35";

}

/*
    Checks database to make sure password goes with name. Clearly needs more work
 */
function checkPassword(username, password){

    // cant do username.password in this case sadly.
    return password == "Hollow13"; // the password associated with johnny35 account info.

}

/*
    Performs the necessary log in steps to access the account. Not sure what to put here temporarily.
 */
function loginProcess(username, password){
    alert("Logged In!");
}