// const num = document.getElementById('num');
// const input = document.getElementById('inp');

// const numButton = document.getElementById('btn');
// numButton.addEventListener('click', function(){
//     const val = document.getElementById('num').value;
//     display();
    

// })




function display(val){

 
    const input = document.getElementById('answer');
    vall = input.value += val;
    input.append(vall);
   
    // or
    // document.getElementById("inp").value+=val 

}

// function clear(){
//     var clear = document.getElementById('answer');
//     clear.value = "";
//     console.log(clear.value);
// }

var clearButton = document.getElementById('clearr')
clearButton.addEventListener('click',function(){
    document.getElementById('answer').value = ""
})


function solve(){
    let num1 = document.getElementById('answer').value;
    let ans = eval(num1);
    document.getElementById('answer').value= ans;
}




function deleteOne(){
    let x = ""
    let result = document.getElementById('answer');
    console.log(result)
    x = result.value
    var res = x.slice(0,x.length-1)
    console.log(res)
    // console.log(document.getElementById('answer').value)
    document.getElementById('answer').value = res  
    // console.log(document.getElementById('result').value = res)
}