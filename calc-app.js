function getNum(num){
    var outcome = document.getElementById('answer');
    outcome.value += num;
}

function clearBtn(){
    var outcome = document.getElementById('answer');
    outcome.value = "";
}

function result(){
    var outcome = document.getElementById('answer');
    outcome.value = eval(outcome.value);
}