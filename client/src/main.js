const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const formData = new FormData(guestForm);
  const userData = Object.fromEntries(formData);
  console.log(userData);
  fetch("http://localhost:8080/test", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData }),
  });
}
