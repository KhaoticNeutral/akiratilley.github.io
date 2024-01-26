var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
//refrences the HTML

todoButton.addEventListener("click", displayActivity);
//once clicked display what to do today

var d = new Date(); //Relates the program to the date today

displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString(); //turns the date into a string
  }

  //Depedning on the day of the week the function will display what the user should do on
  //that day, starting with 0 being a sunday

  function displayActivity() {
    var dayOfWeek = d.getDay();
    var youShould;
  
    switch (dayOfWeek) {
        case 0:
          youShould = "Take it easy. You've earned it.";
          break;
        case 1:
          youShould = "Gotta do what ya gotta do!";
          break;
        case 2:
          youShould = "Take time to smell the roses!";
          break;
        case 3:
          youShould = "Don't forget to eat breakfast!";
          break;
        case 4:
        youShould = "Run around and scream";
        break;
        case 5:
          youShould = "Make a list of things you like to do.";
          break;
        case 6:
          youShould = "Do one thing from your list of things you like to do.";
          break;
        default:
          youShould = "Error Code I dont know what day it is";
          break;
      }
  
      document.getElementById("thingToDo").innerHTML = youShould;
    }
  