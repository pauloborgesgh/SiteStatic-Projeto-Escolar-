

function acesso(form)
{
  form.login.value = form.login.value.toLowerCase()
  form.senha.value = form.senha.value.toLowerCase()

  if (form.login.value == "login" &&  form.senha.value == "senha")  {
  location = "acesso.html.html"}

else{
  form.login.value=""
  form.senha.value=""
  alert("Dados incorreto")
}
}
function funcao()
      {
      alert("Logado Com Sucesso");
      }

