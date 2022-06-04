function clearScreen() {
    document.getElementsByClassName("display")[0].value = "";
   }
   function display(number) {
    document.getElementsByClassName("display")[0].value += number;
   }