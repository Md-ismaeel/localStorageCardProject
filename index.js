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
  const backCard = document.querySelector("#backCard");
  backCard.innerHTML = `
    <h2>User Saved Information Card</h2>
    <p class="p1"><strong>First Name:-</strong> ${userInfo.firstName}</p>
    <p class="p2"><strong>Last Name:-</strong> ${userInfo.lastName}</p>
    <p class="p3"><strong>Country:-</strong> ${userInfo.country}</p>
    <p class="p4"><strong>Phone Number:-</strong> ${userInfo.phone}</p>
    <p class="p5"><strong>State:-</strong> ${userInfo.state}</p>
    <p class="p6"><strong>City:-</strong> ${userInfo.city}</p>
    <p class="p7"><strong>Village:</strong> ${userInfo.village}</p>`;

  // backCard.style.width = "50%";
  // backCard.style.display = "flex";
  // backCard.style.flexDirection = "column";
  // backCard.style.justifyContent = "center";
  // backCard.style.alignItems = "center";
  // backCard.style.color = "white";
  // card.style.fontVariant = "small-caps";
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
