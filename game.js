function send() {
    number1= document.getElementById("numero1").value;
    number2= document.getElementById("numero2").value;
    actual_answer= parseInt(number1) * parseInt(number2);
    question_number= "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box= "<br>Resposta: <input type='text' id='input_check_box'>";
    check_button= "<br><br><button class='btn btn-info' onclick='check()'>Checar</button>";
    row= question_number + input_box + check_button;
    document.getElementById("output").innerHTML= row;
    document.getElementById("numero1").value= "";
    document.getElementById("numero2").value= "";
}
qTurn= "player1";
aTurn= "player2";
function check() {
    get_answer= document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        if(aTurn == "player1") {
            update_player1_score= playerScore1 + 1;
            document.getElementById("playerScore1").innerHTML= update_player1_score;
        }
        else {
            update_player2_score= playerScore2 + 1;
            document.getElementById("playerScore2").innerHTML= update_player2_score;
        }
        if(qTurn == "player1") {
            qTurn= "player2";
            document.getElementById("qTurn").innerHTML= "Turno de pergunta: " + playerName2;
        }
        else {
            qTurn= "player1"; 
            document.getElementById("qTurn").innerHTML= "Turno de pergunta: " + playerName1;
        }
    }
}