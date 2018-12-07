function countTotal(event){
    let count = 0 ;
    let prix = document.querySelectorAll('.prix');
    let btns = document.querySelectorAll('input.btn');
   prix= Array.from(prix);

    btns= Array.from(btns);
    for (i=0 ; i < btns.length;i++){
        if (btns[i].value > 0){
            console.log(count + prix[i].innerText*btns[i].value, prix[i].innerText, btns[i].value )
            count = count + prix[i].innerText*btns[i].value;
            console.log(prix[i]);
        }
    }
   return (document.getElementsByClassName('total')[0].innerText = `Le Total est = ${count}`);
}

document.addEventListener("click", function(event) {
    if (event.target.className === "btn btn-primary") {
      countTotal(event);
    }
});