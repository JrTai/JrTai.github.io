function changeMessage() {
  document.getElementsByClassName("welcome-message")[0].innerHTML = "Have a Good Time!";
}

function showHidden() {
  var hidden_element = document.getElementsByClassName("flex-center-hidden");
  for (var i = 0; i < hidden_element.length; ++i) {
    var div = hidden_element[i];
    div.style.display = "flex";
  }
}
