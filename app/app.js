const submitBtn = document.getElementById('submit-btn'); 
const inputText = document.getElementById('input-content');  
let errorMsg = document.getElementById('error-msg');  

// prevent default button click   
submitBtn.onclick = () => { 
  //get content 
  let content = inputText.value; 
  
  //validate the content  
  errorMsg.innerHTML = ''; 
  if(content == 0) { 
    errorMsg.innerHTML = 'Required';
  } else { 
    filterHex(content);
  }

}

filterHex = (content) => {
  //empty array for the hex 
  //find hex in content 
  //pass array to new function
}