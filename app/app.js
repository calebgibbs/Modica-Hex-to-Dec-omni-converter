const submitBtn = document.getElementById('submit-btn')
const inputText = document.getElementById('input-content')  
let errorMsg = document.getElementById('error-msg')  

const hexLen = 8

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
  //steralise data and remove "" 
  contentStr = contentStr.replace(/['"]+/g, '') 
  content = contentStr.split(' ') 

  let hexValues = [] 
  
  //loop over content array to find hex and add value to hex array
  content.forEach(word => { 
    if(word.length == hexLen){
      if(word.match(potentialHexRegex)) { 
        if(word.match(hexValidateRegex)) {
          hexValues.push(word)
        }
      }
    }
  })  

  console.log(hexValues) 

  
  //quick validation  
  errorMsg.innerHTML = ''
  if(hexValues != 0) {
    convertDecimal(hexValues)
  } else { 
    errorMsg.innerHTML = 'Cannot find any hexadecimal values';
  }
} 

//convert hex to dec
convertDecimal = (hexValues) => { 
  let decValues = []
  hexValues.forEach(hex => {
    hex = parseInt(hex, 16) 
    decValues.push(hex)
  }) 
  
  if(decValues != 0){
    createURL(decValues)
  }
} 

//convert dec to links for omni 1 & 2
createURL = (decValues) => {
  const omni1 = 'https://omni.modicagroup.com/reports/message/';
  const omni2 = 'https://omni2.modicagroup.com/reports/message/'; 

  let omni1Links = []
  let omni2Links = [] 

  decValues.forEach(value => {
    value1 = '<a href="'+omni1+''+value+'/view">'+value+'</a>'
    value2 = '<a href="'+omni2+''+value+'/view">'+value+'</a>' 
    omni1Links.push(value1)
    omni2Links.push(value2)
  })   

  //display links on the page 
  //omni1  
  //remove hidden content 
  const resultsDiv = document.getElementById('showResults') 
  resultsDiv.classList.remove('hidden')

  let om1Results = document.getElementById('omni1Results') 
  let om1LinkStr = ''
  omni1Links.forEach(link => { 
    om1LinkStr += '<li>' + link + '</li>'
  }) 
  om1Results.innerHTML = om1LinkStr 

  //omni2
  let om2Results = document.getElementById('omni2Results') 
  let om2LinkStr = ''
  omni2Links.forEach(link => {
    om2LinkStr += '<li>' + link + '</li>'
  }) 
  om2Results.innerHTML = om2LinkStr
 
  
}
