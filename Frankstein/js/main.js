let login = document.querySelector("#send");

function verificarLogin(name, password) {
  let usuariosValidos = [
    ["Gustavo", "123456"],
    ["Jose", "123456"],
  ];
  for (i in usuariosValidos) {
    let p = 1;
    let y = 0;
    if (password == usuariosValidos[i][p] && name == usuariosValidos[i][y]) {
      window.location.href = "http://127.0.0.1:5500/Frankstein/html/home.html";
    } else if (
      password != usuariosValidos[i][p] &&
      name != usuariosValidos[i][y]
    ) {
      alert("Usuario não localizado, Tente novamente com outro login");
      break;
    }
    y++;
    p++;
  }
}

function validacaoDeCampos(name, password) {
  if (name == "") {
    alert("Por favor preencha o campo Usuario");
  } else if (password == "") {
    alert("Por favor preencha o campo de Senha");
  } else if (name != "" && password != "") {
    verificarLogin(name, password);
  }
}

login.addEventListener("click", function (evt) {
  evt.preventDefault();

  console.log(evt);

  const name = document.querySelector("#usuario");

  const nameValue = name.value;

  const password = document.querySelector("#password");

  const passwordValue = password.value;

  validacaoDeCampos(nameValue, passwordValue);
});
