function getPin ()
{
  const randomNumber = Math.random()*10000;
  const pin = (randomNumber + ' ').split('.')[0];
  if (pin.length === 4)
  {
    return pin;
  }
  else {
    return getPin();
  }
}

//display pin//
function generatePin(){
const pinInput = document.getElementById("pin");
pinInput.value = getPin();
}

const buttonContainer = document.getElementById('digit-container').addEventListener('click',function(event){
  const digit = event.target.innerText;
  if (isNaN(digit))
  {
    //handle backspace//
    //handle clear//
    if (digit === 'C')
    {
      const typePin = document.getElementById("typed-pin");
      typePin.value = ' ';
    }
  }
  else 
  {
    const typePin = document.getElementById("typed-pin");
    typePin.value = typePin.value + digit;
  }
  
})

//notification//
function notification(){
  const pin = document.getElementById("pin").value;
  const typedPin = document.getElementById("typed-pin").value;
  if(pin === typedPin)
  {
    // const correct = document.getElementById("correct-pin");
    // correct.style.display = 'block';
    // const incorrect = document.getElementById("incorrect-pin");
    // incorrect.style.display = 'none';
    displayNotification('block','none');
  }
  else 
  {
    
    // const correct = document.getElementById("correct-pin");
    // correct.style.display = 'none';
    // const incorrect = document.getElementById("incorrect-pin");
    // incorrect.style.display = 'block';
        displayNotification('none','block');

  }
  
}
function displayNotification(correctStatus,incorrectStatus){
    const correct = document.getElementById("correct-pin");
    correct.style.display = correctStatus;
    const incorrect = document.getElementById("incorrect-pin");
    incorrect.style.display = incorrectStatus;
}