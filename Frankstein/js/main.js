let login = document.querySelector("#send");

login.addEventListener("click", function (evt) {
  evt.preventDefault();

  console.log(evt);

  const name = document.querySelector("#usuario");

  const value = name.value;

  const password = document.querySelector("#password");

  const passwordValue = password.value;

  console.log(value);

  console.log(password.value);
});
