const guestForm = document.getElementById("guest-form");

guestForm.addEventListener("submit", submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const formData = new FormData(guestForm);
  const userData = Object.fromEntries(formData);
  console.log(userData);
  fetch("http://localhost:8080/guestbook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userData }),
  });
  const nameInput = document.getElementById("user_name-input");
  const commentInput = document.getElementById("comment-input");
  nameInput.value = "";
  commentInput.value = "";
}

// Not sure what went wrong with the function below but the error in the client console said that jsonResult wasn't defined in renderComments, so it must have been an issue with return (which I haven't tried using much before) so I just copied the important parts into the renderComments function
// async function getData() {
//   const result = await fetch("http://localhost:8080/retrieve");
//   const jsonResult = await result.json();
//   // console.log("Data from server:", jsonResult[0]);
//   return jsonResult;
// }
// getData();

async function renderComments() {
  const result = await fetch("http://localhost:8080/retrieve");
  const jsonResult = await result.json();
  const guestbook = document.getElementById("guestbookComments");
  for (let i = 0; i < jsonResult.length; i++) {
    console.log("Comment 1:", jsonResult[i]);
    const commentContainer = document.createElement("div");
    commentContainer.className = "comment-box";
    commentContainer.id = `comment${i}`;
    guestbook.appendChild(commentContainer);
    const commentUser = document.createElement("p");
    commentUser.className = "comment-username";
    commentUser.textContent = jsonResult[i].user_name;
    commentContainer.appendChild(commentUser);
    const commentTime = document.createElement("p");
    commentTime.className = "comment-timestamp";
    commentTime.textContent = jsonResult[i].timestamp;
    commentContainer.appendChild(commentTime);
    const commentBody = document.createElement("p");
    commentBody.className = "comment-body";
    commentBody.textContent = jsonResult[i].comment;
    commentContainer.appendChild(commentBody);
  }
}
renderComments();
