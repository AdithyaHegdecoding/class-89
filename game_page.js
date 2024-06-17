var player1_name = localStorage.getItem("player_1")
var player2_name = localStorage.getItem("player_2")
document.getElementById("player1_name").innerHTML = player1_name + " :   ";
document.getElementById("player2_name").innerHTML = player2_name + " :   ";
var player1_score = 0
var player2_score = 0
document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name
document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name
function send(){
    get_word = document.getElementById("word").value
    word = get_word.toLowerCase()
         
        charAt1 = word.charAt(1);
        length_divide_2 = Math.floor(word.length/2)
        charAt2 = word.charAt(length_divide_2)
        word_3 = word.length - 1
        charAt3 = word.charAt(word_3)
        
        replace_1 = word.replace(charAt1 , "_")
        replace_2 = replace_1.replace(charAt2 , "_")
        replace_3 = replace_2.replace(charAt3 , "_")
        console.log(replace_3)
        

        question_word = "<h4 id = 'word display'>Q." + replace_3 +"</h4>";
        input_box = "<br> Answer : <input type = 'text' id = 'input_check_box'>";
        check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()' >check</button>";
        row = question_word + input_box + check_button;
        document.getElementById("output").innerHTML = row;
        document.getElementById("word").value = "";
}
answer_turn = "player2"
question_turn = "player1"
function check(){
    get_answer = document.getElementById("input_check_box").value
    answer = get_answer.toLowerCase()
    
    if (answer == word){
        if (answer_turn =="player1" ){
            player1_score = player1_score+1
            document.getElementById("player1_score").innerHTML = player1_score
            
        }
        else{
            player2_score = player2_score+1
            document.getElementById("player2_score").innerHTML = player2_score
        }
    }
    if (question_turn == "player1"){
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question turn - " + player2_name
    }
    else{
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question turn - " + player1_name 
    }


    if (answer_turn == "player1"){
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player2_name
    }
    else{
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answer turn - " + player1_name
    }
    document.getElementById("output").innerHTML = ""
}