function typed (){
  var Name = ' Backend Developer ';
  var arr = Name.split('');
  var cont = arr.length;
  
  var new_user = "";
  var user = " Backend Developer";
  var tracker = 0;
  
  var x = setInterval(() => {
    if(cont > 0){
      cont--
      arr.length = cont;
      window.a.innerHTML = "";
      window.a.innerHTML += "<h2 style='text-align:center;'>I am <span style='color:blue;'>Mohamed</span>: " + `<span style='color:red'>${arr.join("")}</span></h2>`;
    }if (cont == 0){
      new_user += user[tracker];
      if(new_user.length === user.length ){
        clearInterval(x);
        typed();
        
      }
      tracker++;
      window.a.innerHTML = "" ;
      window.a.innerHTML = "<h2 style='text-align:center'>I am <span style='color:blue;'>Mohamed</span>: " + `<span style='color:red'>${new_user}</span></h2>`;
      
    }
  },300);
}
typed();