document.getElementById("survey-form").addEventListener("submit", function(event) {
  event.preventDefault();
  // Get form values
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const dob = document.getElementById("date-of-birth").value;
  const country = document.getElementById("country").value;

  const genderCheckboxes = document.querySelectorAll("input[type=checkbox]:checked");
  const genderValues = Array.from(genderCheckboxes).map(checkbox => checkbox.nextSibling.textContent);

  const profession = document.getElementById("profession").value;
  const email = document.getElementById("email").value;
  const mobileNumber = document.getElementById("mobile-number").value;

  // Display submitted values in the popup
  const submittedValues = `
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Date of Birth:</strong> ${dob}</p>
      <p><strong>Country:</strong> ${country}</p>
      <p><strong>Gender:</strong> ${genderValues.join(", ")}</p>
      <p><strong>Profession:</strong> ${profession}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mobile Number:</strong> ${mobileNumber}</p>
  `;

  document.getElementById("submitted-values").innerHTML = submittedValues;
  document.getElementById("popup").style.display = "block";
});

// Close the popup
document.getElementById("close-popup").addEventListener("click", function() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("survey-form").reset();
});

// Reset the form
document.querySelector("button.reset").addEventListener("click", function() {
  document.getElementById("survey-form").reset();
});