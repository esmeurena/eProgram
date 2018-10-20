var user_name;
const openbutton= document.querySelector('#open');
const statementdiv= document.querySelector('#statement');
openbutton.addEventListener('click', function(){
//get user input
const username= document.getElementById('username');
message= openAccount(username);
statementdiv.innerHTML= '<p>' +message+ '</p>';
});

function openAccount(name){
  user_name= name;
  // Set user_name equal to name below

  return name + 'has opened an account';
}
