function fetchword(){
    let word=id_word.value

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then(res=>res.json()).then(data=>displaydata(data))


}
function displaydata(data){
    console.log(data);
    let wordname=data[0].word
    let phone=data[0].phonetic
    let definition=data[0].meanings[0].definitions[0].definition
    let example=data[0].meanings[0].definitions[0].example
    


    let htmldata=`
    <div class="card" style="width: 18rem;">

  <div class="card-body">
  
    <h5 class="card-title"> ${wordname}</h5>
    <p class="card-text"> <strong>Phonetics : </strong>${phone}</p>
    <p class="card-text"> <strong>definition : </strong>${definition}</p>
    <p class="card-text"> <strong>example : </strong>${example}</p>
  


    
    
  </div>
</div>
    
    
    `
document.querySelector("#id_result").innerHTML=htmldata

}