const submitBtn = document.getElementById('submit-btn')
const inputText = document.getElementById('input-content')  
let errorMsg = document.getElementById('error-msg')  

// prevent default button click   
submitBtn.onclick = () => { 
  //get content 
  let contentStr = inputText.value
  
  //validate the content  
  errorMsg.innerHTML = ''
  if(contentStr == 0) { 
    errorMsg.innerHTML = 'Required'
  } else { 
    filterHex(contentStr)
  }

}

filterHex = (contentStr) => {  
  //regex to find potential hex values 
  const potentialHexRegex = /[0-9A-Fa-f]{8}/g
  //regex to find confirm that hex values also include letters 
  const hexValidateRegex =  /[A-Fa-f]/g
  
  //add each word in the input string to an array
  let content = []
  content = contentStr.split(' ')
  
  let hexValues = []
  
  //loop over content array to find hex and add value to hex array
  content.forEach(word => {
    if(word.match(potentialHexRegex)) { 
      if(word.match(hexValidateRegex)) {
        hexValues.push(word)
      }
    }
  }); 
  
  //quick validation  
  errorMsg.innerHTML = ''
  if(hexValues != 0) {
    console.log('found hex')
  } else { 
    errorMsg.innerHTML = 'Cannot find any hexadecimal values';
  }

}