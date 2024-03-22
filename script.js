let count =0;
let vote_count =0;
let vote_count2 =0;
let vote_count3 =0;
if (count<=0){
function VT(){
    count++;
    vote_count++;
    alert("Voted Successfully");
} 
function VT2(){
        count++;
        vote_count2++;
        alert("Voted Successfully");
    }
function VT3(){
        count++;
        vote_count3++;
        alert("Voted Successfully");
    }
}
else{
    alert("You cannot vote more then once");
}
function result(){
      var re1 = document.getElementBy("writ");
      var re2 = document.getElementBy("writ2");
      var re3 = document.getElementBy("writ3");
      re1.innerHTML = vote_count;
      re2.innerHTML = vote_count2;
      re3.innerHTML = vote_count3;
}
function Sub(){
    alert("You have successfully submimtted the form")
}