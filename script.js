function findApi(){
   return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq")
.then((response) => {
return response.json(); })
}

function goToUserPage(userId){
  window.location.replace(`user-page/user-page.html?id=${userId}`)
}
class user{
  constructor(firstName,lastName,email,age,phone,id){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.phone = phone;
    this.id = id;
  }
}


let results = [];

async function onBody(){
    try{
        
        results = await findApi();
        results.forEach(element => {
          let userObj = new user(element.name.first,element.name.last,element.email,element.age,element.phone,element._id);
            mainDiv.innerHTML += `
        
          <div class="card" onclick="goToUserPage('${userObj.id}')" >
          <h2>First Name - ${userObj.firstName}</h2>
          <h2>Last Name - ${userObj.lastName}</h2>
          <h2>Email - ${userObj.email}</h2>
          <h2>Age - ${userObj.age}</h2>
          <h2>Phone - ${userObj.phone}</h2>
          </div>
         
          `});
          

    }
    catch{
        mainDiv.innerHTML = `not found`; 
    }
   }
   onBody()



let objApi2 = [];
async function tableApi(){
    
   try{
        objApi2 = await findApi();
        document.body.innerHTML = `
        <table style="width:100%">
        <tr>
          <th style="width:300px">Firstname</th>
          <th style="width:300px">Lastname</th>
          <th style="width:300px">Email</th>
          <th style="width:300px">Age</th>
          <th style="width:300px">Phone</th>
        </tr>
        </table>
        `
        objApi2.forEach(element => {
          let userObj2 = new user(element.name.first,element.name.last,element.email,element.age,element.phone);

          document.body.innerHTML +=
            `
            <div style="background: firebrick;">
            <table style="width:100%">
            <tr>
              <td >${userObj2.firstName}</td>
              <td>${userObj2.lastName}</td>
              <td>${userObj2.email}</td>
              <td>${userObj2.age}</td>
              <td>${userObj2.phone}</td>
            </tr>
            </table>
           </div>
          `}) 
          document.body.innerHTML += `<button onclick="goToHome()">Return</button>`      
          

    }
    catch{
        mainDiv.innerHTML = `not found`; 
    }
   } 
   function goToHome() {
    window.location.replace("../index.html");
  }

   
    const options = {
      method:'POST',
      body:JSON.stringify({
       age: 25,
       email: "dollie.hensley@undefined.il",
       index: 10,
       name: {first: "Elias", last: "Admaso"},
       phone: "+1 (904) 421-31",
       picture: "http://placehold.it/32",
       _id: "605acace4ab389d8ed54c"
      })
    }

  function postToApi(){
    return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq", options)
    .then((response) => {
   return response.json(); 
   
  }) 
  }

let postObject = [];
async function addUser(){
    try{
        
        postObject = await postToApi();
        console.log(postObject);
        
   
          
       
         
          
          alert("user added");
          

    }
    catch{
        mainDiv.innerHTML = `not found`; 
    }
   }

   

  

   


   
   




   

