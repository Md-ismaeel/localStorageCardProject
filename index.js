const saveBtn = document.getElementById("saveBtn");

/******************************************************
 *
 * @param
 * @returns
 ******************************************************/
function saveUserInfo() {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const country = document.getElementById("country").value;
  const phone = document.getElementById("phone").value;
  const state = document.getElementById("state").value;
  const city = document.getElementById("city").value;
  const village = document.getElementById("village").value;
  if (firstName && lastName && country && phone && state && city && village) {
    // Creating an object to store user information
    const userInfo = {
      firstName: firstName,
      lastName: lastName,
      country: country,
      phone: phone,
      state: state,
      city: city,
      village: village,
    };

    // Convert the object to a JSON string and store it in local storage
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    JSON.parse(localStorage.getItem("userInfo"));

    // Display the user information on the card
    displayUserInfo(userInfo);

    alert("Filled All the data SucessFully");
  } else {
    alert("Please fill in all fields");
  }
}

function displayUserInfo(userInfo) {
  // Update the HTML content to display user information
  const card = document.querySelector(".card");

  card.innerHTML = `
    <h2>User Saved Information</h2>
    <p><strong>First Name:-</strong> ${userInfo.firstName}</p>
    <p><strong>Last Name:-</strong> ${userInfo.lastName}</p>
    <p><strong>Country:-</strong> ${userInfo.country}</p>
    <p><strong>Phone Number:-</strong> ${userInfo.phone}</p>
    <p><strong>State:-</strong> ${userInfo.state}</p>
    <p><strong>City:-</strong> ${userInfo.city}</p>
    <p><strong>Village:</strong> ${userInfo.village}</p>`;

  card.style.width = "400px";
  card.style.display = "flex";
  card.style.flexDirection = "column";
  card.style.justifyContent = "center";
  card.style.alignItems = "start";
  card.style.left = "20%";
  card.style.backgroundColor = "blue";
  card.style.color = "white";

  card.style.fontVariant = "small-caps";
}

saveBtn.addEventListener("click", () => {
  saveUserInfo();
  displayUserInfo();
});

function reloadFunction() {
  const savedUserInfo = localStorage.getItem("userInfo");

  if (savedUserInfo) {
    const userInfo = JSON.parse(savedUserInfo);
    displayUserInfo(userInfo);
  }
}

window.onload = () => reloadFunction();
