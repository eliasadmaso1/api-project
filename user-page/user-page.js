function findApi() {
  return fetch("https://next.json-generator.com/api/json/get/NJ-UoW2Xq").then(
    (response) => {
      return response.json();
    }
  );
}

let results = [];
async function toUserPage() {
  try {
    results = await findApi();

// window.location.search = ?id=605acace4ab389d8ed54c496&firstName=daniel&email=asdas@gmail.com

/* 
URLSearchParams under the hook create a Map and set all the keys and values of the query params:
const queryParams = new Map(); // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/set
queryParams.set('id', '605acace4ab389d8ed54c496');
queryParams.set('firstName', 'daniel');
queryParams.set('email', 'asdas@gmail.com');

Then you can get the value of the key you want:
 
const userId = queryParams.get("id");
console.log(userId)
*/




    const queryParams = new URLSearchParams(window.location.search); // window.location.search = all the string after the ?

    const userId = queryParams.get("id");

    console.log({results, userId})
    results.forEach((element) => {
      if (userId == element._id) {
        document.body.innerHTML = 
               `<h1>User Page</h1>
                <div class="card">
                <h2>First Name - ${element.name.first}</h2>
                <h2>Last Name - ${element.name.last}</h2>
                <h2>email - ${element.email}</h2>
                <h2>Age - ${element.age}</h2>
                <h2>Phone - ${element.phone}</h2>

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
  window.location.replace("..index.html");
}
