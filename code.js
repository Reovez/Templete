
var x =1;
function print(){
    
    if(x>0){
        x--;
        alert('hi');
        print()
        
       
    }

}
print();
var tryingToPrint = document.getElementsByClassName("input").textContent;
var newHtml = `<div>${tryingToPrint}<div>`;

document.querySelector('#button').addEventListener('click',function(){
    document.getElementById('div').insertAdjacentHTML("beforeend",newHtml);
})


