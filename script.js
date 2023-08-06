const sayHello = () => {
    const name = document.getElementById('name').value;
    if(name.trim() === ''){
        alert('Please enter your name before clicking the button.');
    }
    else{
        const messageElement = document.getElementById('message');
        messageElement.innerText = 'Hello, ' + name + '!!!';
    }
}