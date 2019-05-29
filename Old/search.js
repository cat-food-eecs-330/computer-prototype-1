var foodIds = ["meatball", "mspag", "spag"]
var foodtoggels = [true, true, true, true, true]
function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    console.log(txtValue)
    console.log("This ran")
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function showDrpDwn() {
  console.log("work");
  document.getElementById("myDropdown").classList.toggle("show");
}
function click0() {
  showDrpDwn();
  document.getElementById("0").style.display = "";
  localStorage.lastLocaleSelection = "0";
}
function click1() {
  console.log(foodtoggels[1])
  if (foodtoggels[1] == true) {
      document.getElementById(foodIds[1]).style.display = "none"
      document.getElementById(foodIds[0]).style.display = "none"
      foodtoggels[1] = false
  } else {
    if (foodtoggels[2] == true) {
    console.log("THIS WAS CALLEDg")
  document.getElementById(foodIds[1]).style.display = "block"
  document.getElementById(foodIds[0]).style.display = "block"

    }
      foodtoggels[1] = true
  }
}
function click2() {
  console.log("THIS WAS CALLED")
  if (foodtoggels[2] == true && foodtoggels[1] == true) {
      document.getElementById(foodIds[1]).style.display = "none"
      document.getElementById(foodIds[0]).style.display = "none"
      foodtoggels[2] = false
  } else {
    if (foodtoggels[1] == true) {
  document.getElementById(foodIds[1]).style.display = "block"
  document.getElementById(foodIds[0]).style.display = "block"
  foodtoggels[2] = true
    }
  }
}
