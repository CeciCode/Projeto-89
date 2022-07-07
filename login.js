function addUser() {
    user_name1= document.getElementById("login_input1").value;
    localStorage.setItem("user_name", user_name1);
    user_name2= document.getElementById("login_input2").value;
    localStorage.setItem("user_name", user_name2);
    window.location= "game.html";
}