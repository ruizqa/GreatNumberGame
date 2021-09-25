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
        result.classList.add('bg-warning')
        

    }

    else if (value > data['number'] ){
        let text= document.createTextNode("Try Again! Choose a lower number!")
        result.appendChild(text);
        result.classList.add('bg-info')
        

    }

    else if (value == data['number'] ){
        let text= document.createTextNode(`Success! You chose the correct number: ${value}!`)
        result.appendChild(text);
        result.classList.add('bg-success', 'my-5')
        event.target.remove()
        let try_again = document.createElement('button');
        try_again.classList.add('btn','btn-primary')
        try_again.innerHTML="Try Again"
        try_again.onclick= function() {window.location.href='/reset'};
        result.appendChild(try_again);

    }

    
    spaceholder.appendChild(result)

}


