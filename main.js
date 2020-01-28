function goldOrgauntlet() {
  var response = document.getElementById("response").value

  if (response === "TAKE GOLD") {
    document.getElementById("gold").classList.toggle("hidden")
    document.getElementById("intro").classList.toggle("hidden")
  } else if (response == "TAKE GAUNTLET") {
    document.getElementById("gauntlet").classList.toggle("hidden")
    document.getElementById("intro").classList.toggle("hidden")
  } else {
    document.getElementById("error").innerHTML =
      "I'm sorry, please make a selection."
  }
}
