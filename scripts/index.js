const emailInput = document.getElementById("email");
const submitBtn = document.querySelector("button[type='submit']");
let erroricon = document.getElementById('erroricon');


submitBtn.addEventListener("click", function(event) {
  event.preventDefault(); 
  
  const email = emailInput.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailRegex.test(email)) {
    const errorMsg = document.getElementById("errortext");
    errorMsg.innerText = "Please provide a valid email";
    emailInput.insertAdjacentElement("afterend", errorMsg);
    erroricon.style.display = 'block'
   }  
  else {
    document.querySelector("form").submit();
  }
});

  