document.querySelector("#status").addEventListener('click',()=>{
    //fetch textarea
    let user_input=document.querySelector("#user_text").value;
    //CALCULATE
    let character= user_input.length;
    //display
    document.querySelector("#character").textContent=character;
    //calculate words
    let words = user_input.split(" ").length;
    //display
    document.querySelector("#words").textContent=words;
})