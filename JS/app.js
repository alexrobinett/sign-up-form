
let pwValue = document.getElementById("user_password").value
let pwValueConfirm = document.getElementById("user_password_confirm").value

function checkPassowrd(pwValue){
   pwValue = document.getElementById("user_password").value
   pwValueConfirm = document.getElementById("user_password_confirm").value

   if(pwValue.length < 5 || pwValue.length > 15 || pwValue !== pwValueConfirm){  
      document.getElementById("user_password").classList.add("error");
      document.getElementById("user_password").classList.remove("valid");
      document.getElementById("user_password_confirm").classList.add("error");
      document.getElementById("user_password_confirm").classList.remove("valid");
    }else if(pwValue.length > 5 && pwValue.length < 15 && pwValue == pwValueConfirm){
      document.getElementById("user_password").classList.add("valid");
      document.getElementById("user_password").classList.remove("error");
      document.getElementById("user_password_confirm").classList.add("valid");
      document.getElementById("user_password_confirm").classList.remove("error");
      document.getElementById("psw-message").remove()
    }

}


document.querySelector("#user_password").addEventListener("input", checkPassowrd);
document.querySelector("#user_password_confirm").addEventListener("input", checkPassowrd);
