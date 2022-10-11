console.log("[id-auto_increment] init");

function generateId() {
  var idSpan = document.getElementById("idSpan");
  var id = idSpan.innerText;

  newId = parseInt(id) + 1;

  idSpan.innerText = newId;
}
