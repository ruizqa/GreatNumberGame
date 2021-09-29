let spaceholder = document.querySelector('.result');

async function updatePage(event){
    event.preventDefault();
    let value = event.target.guess.value;
    let URL = '/compare';
    let RESET = '/reset';
    let settings = {
        method : 'GET'
    }

    let response = await fetch(URL, settings);
    let data = await response.json();
    
    spaceholder.innerHTML=""
    let result = document.createElement('div');
    result.classList.add('text-center','h3', 'p-3')

    if (value < data['number'] ) {

        let text= document.createTextNode("Try Again! Choose a higher number!")
        result.appendChild(text);
        result.classList.add('box','fail')
        

    }

    else if (value > data['number'] ){
        let text= document.createTextNode("Try Again! Choose a lower number!")
        result.appendChild(text);
        result.classList.add('box','fail')
        

    }

    else if (value == data['number'] ){
        let text= document.createTextNode(`Success! You chose the correct number: ${value} in ${data['attempts']} attempts!`)
        result.appendChild(text);
        result.classList.add('box', 'success')
        event.target.remove()
        let try_again = document.createElement('button');
        try_again.classList.add('btn','btn-light', 'm-3')
        try_again.innerHTML="Play Again!"
        try_again.onclick= function() {window.location.href='/reset'};
        result.appendChild(try_again);

    }

    
    spaceholder.appendChild(result)

}


