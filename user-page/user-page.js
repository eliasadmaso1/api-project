function findApi() {
  return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq").then(
    (response) => {
      return response.json();
    }
  );
}
class user1{
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
async function toUserPage() {
  try {
    results = await findApi();
    
    const queryParams = new URLSearchParams(window.location.search); 
    const userId = queryParams.get("id");

    results.forEach((element) => {
      let userObj2 = new user1(element.name.first,element.name.last,element.email,element.age,element.phone,element._id);
      
      if (userId == userObj2.id) {
        document.body.innerHTML = 
               `<h1>User Page</h1>
                <div class="card">
                <h2>First Name - ${userObj2.firstName}</h2>
                <h2>Last Name - ${userObj2.lastName}</h2>
                <h2>email - ${userObj2.email}</h2>
                <h2>Age - ${userObj2.age}</h2>
                <h2>Phone - ${userObj2.phone}</h2>

               </div>
               <button onclick="goToHome()"> Back to home </button>
               `;
      }
    });
  } catch {
    mainDiv.innerHTML = `not found`;
  }
}

toUserPage();

function goToHome() {
  window.location.replace("../index.html");
}
