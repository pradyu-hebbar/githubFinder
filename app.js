// Init Github
const github = new GitHub();
// Init ui
const ui = new UI();

// Search Input
const searchUser = document.getElementById("searchUser");

// Search input event litsener
searchUser.addEventListener("keyup", (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== "") {
    // Make Http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show Alert
        ui.showAlert("User Not Found", "alert alert-danger");
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    // Clear profile
    ui.clearProfile();
  }
});
