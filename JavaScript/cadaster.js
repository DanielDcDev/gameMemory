const button = document.querySelector('.button');
const input = document.querySelector('.login_input');
const form = document.querySelector('.login_form')



const handleSubmit = (event)=>{
    event.preventDefault();
    console.log('test');
}



input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);

function validateInput (arg) {
    if(arg.value > 2){
        button.removeAtribute('disabled');
        return;
    }
    button.setAtribute('disabled','');
}