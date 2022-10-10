function validation() {
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const qualifications = document.getElementById("qualifications").value;

  const error_message = document.getElementById("error_message");
  var text;

  error_message.style.padding = "10px";

  if (name.length < 5) {
    text = "Please Enter Valid Name";
    error_message.innerHTML;
    return false;
  }
  if (address.length < 9) {
    text = "Please Enter Valid Address";
    error_message.innerHTML;
    return false;
  }

  if (isNan(phone) || phone.length != 10) {
    text = "Please Enter Valid Phone Number";
    error_message.innerHTML;
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    text = "Please Enter Valid Email";
    error_message.innerHTML;
    return false;
  }
  if (qualifications.length < 140) {
    text = "Please Enter More Than 140 characters";
    error_message.innerHTML;
    return false;
  }
  alert("Form Submitted Successfully");
  return false;
}
