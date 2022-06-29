function makeMessage(){
    let firstName = document.getElementById('fname').value;
      let lastName = document.getElementById('lname').value;
      
    
    if (firstName == ''| lastName == '') {
      alert(`Please enter First Name and Last Name`);
      document.getElementById("welcome").innerHTML = `Please enter first name and last name.`;
    }
    else {
    document.getElementById("welcome").innerHTML = `Welcome ${firstName} ${lastName}!`;
    }
    
    document.querySelector('form').reset();
      
    };