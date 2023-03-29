const submitButton = document.getElementById("submit");

submitButton.addEventListener("click",(event)=>{
  event.preventDefault();
  const email= document.getElementById("email").value;
  console.log(email);
  
});