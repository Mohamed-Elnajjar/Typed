let counter = 0;
function typed (name,description,img){
// variables
  const Name = ` ${description} `;
  let arr = Name.split('');
  let cont = arr.length;
  let new_user = "";
  const user_description = ` ${description}`;
  let tracker = 0;
  
  // stop function
  const x = setInterval(() => {
    if(cont > 0){
      cont--
      arr.length = cont;
      window.a.innerHTML = "";
      window.a.innerHTML += `
      <img style="display:block;margin: 0 auto;border-radius: 10px" src="${img}" alt="not found image" height="120" width="120"/>
      <h2 style='text-align:center;'>I am <span style='color:blue;'>${name}</span>: <span style='color:red'>${arr.join("")}</span></h2>`;
    }if (cont == 0){
      new_user += user_description[tracker];
      if(new_user.length === user_description.length ){
        clearInterval(x);
        counter++;
        if(counter == 1){
          typed("Ahmed","Frontend Developer",'./images/ahmed.jpg');
        }
        
        if(counter == 2){
          typed("Omr","Backend Developer",'./images/omr.jpg');
        }
        
        if(counter == 3){
          typed("Momen","Frontend Developer",'./images/momen.jpg');
        }
        
        if(counter == 4){
          typed("Mohamed","Fullstack Developer",'./images/mohamed.jpg');
          counter = 0;
        }
      }
      tracker++;
      window.a.innerHTML = "" ;
      window.a.innerHTML = `
      <img style="display:block;margin: 0 auto;border-radius: 10px;" src="${img}" alt="not found image" height="120" width="120"/>
      <h2 style='text-align:center'>I am <span style='color:blue;'>${name}</span>: <span style='color:red'>${new_user}</span></h2>
      `;
      
    }
  },300);
}

typed("Mohamed","Fullstack Developer",'./images/mohamed.jpg');
