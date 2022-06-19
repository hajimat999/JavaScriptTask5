document.getElementById('button').onclick = function(){
    var div = document.getElementById('modal-containor');
    var button = document.getElementById('button')
    var containor = document.getElementById('containor')
    containor.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
    div.style.opacity = '1'
    button.style.opacity = '0'
}
document.getElementById('button2').onclick = function(){
    var div = document.getElementById('modal-containor');
    var button = document.getElementById('button')
    var containor = document.getElementById('containor')
    containor.style.backgroundColor = 'white'
    div.style.opacity = '0'
    button.style.opacity = '1'
}

function Validation(){
    var input = document.getElementById('username')
    var input2 = document.getElementById('password')
    var span = document.getElementById('span');
    span.style.color = 'white';
    span.style.fontWeight = 'bolder';
    span.style.textTransform = 'uppercase'
    span.style.fontSize = '12px'
    span.style.marginTop = '20px'
    span.style.fontFamily = 'sans-serif'
    var value = input.value;
    
    console.log(input2.value)
    if(value.trim().length >=4 && !(Number.isInteger(value))){
        for(var i = 0; i < value.length; i++){
            if((Number.isInteger(value[0]))){
                span.innerHTML = 'Username yalniz herflerden ibaret olmalidir';
                input.style.borderColor = 'red'
                return false;
            }
            if(value.charAt(i) !== value.charAt(i).toUpperCase()){
                span.innerHTML = 'Username 1-ci herfi boyuk olmalidir';
                return false;  
            }
            else{
                return true;
            }
        }   
    }
    else{
        span.innerHTML ='Username 4 herfden ibaret olmalidir';
        input.style.borderColor = 'red'
        return false;
    }     
}
document.body.onkeyup = function(e){
    if(e.key === 'Enter'){
        document.body.style.backgroundColor = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')'
    }
}

