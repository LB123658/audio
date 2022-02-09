var div = document.getElementById("tracks");

function showButton() {
  var button = document.createElement("BUTTON");
  button.style.position = "fixed";
  button.style.top = "15px";
  button.style.right = "10px";
  button.style.height = "40px";
  button.style.width = "100px";
  button.style.border = "1px solid white";
  button.style.background = "transparent";
  button.style.color = "white";
  button.style.cursor = "pointer";
  button.style.fontSize = "16px";
  button.style.zIndex = "3";
  button.innerHTML = "Your data";
  button.title = "See your usage data";
  button.onclick = function() {showHistory(); };
  document.body.appendChild(button);
}

function showHistory() {
  div.innerHTML = "<p style='width:100%;text-align:center;color:white;font-size:3vw;'>" + localStorage.getItem("music_data").split("null")[1] + "</p>";
}
