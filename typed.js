var counter = 0;
function typed (name,description){
  var Name = ` ${description} `;
  var arr = Name.split('');
  var cont = arr.length;
  var new_user = "";
  var user = ` ${description}`;
  var tracker = 0;
  
  var x = setInterval(() => {
    if(cont > 0){
      cont--
      arr.length = cont;
      window.a.innerHTML = "";
      window.a.innerHTML += `<h2 style='text-align:center;'>I am <span style='color:blue;'>${name}</span>: ` + `<span style='color:red'>${arr.join("")}</span></h2>`;
    }if (cont == 0){
      new_user += user[tracker];
      if(new_user.length === user.length ){
        clearInterval(x);
        counter++;
        if(counter == 1){
          typed("Mohamed","Fullstack Developer");
        }
      
        if(counter == 2){
          typed("Omr","Backend Developer");
        }
      
        console.log(counter);
        if(counter == 3){
          typed("Ahmed","Frontend Developer");
          counter = 0;
        }
      }
      tracker++;
      window.a.innerHTML = "" ;
      window.a.innerHTML = `<h2 style='text-align:center'>I am <span style='color:blue;'>${name}</span>: ` + `<span style='color:red'>${new_user}</span></h2>`;
      
    }
  },300);
}

typed("Mohamed","Fullstack Developer");
