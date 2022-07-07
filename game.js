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