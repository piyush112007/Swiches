const switches = document.querySelectorAll(".switch input");
const textBoxes = document.querySelectorAll(".text-box");

function checkSwitchStates() {
  let activeSwitchCount = 0;
  switches.forEach((switchElement, index) => {
    if (switchElement.checked) {
      activeSwitchCount++;
    }
  });

  if (activeSwitchCount > 2) {
    // Deactivate a random switch
    const activeSwitches = [];
    switches.forEach((switchElement, index) => {
      if (switchElement.checked) {
        activeSwitches.push(index);
      }
    });

    const randomIndex =
      activeSwitches[Math.floor(Math.random() * activeSwitches.length)];
    switches[randomIndex].checked = false;
  }

  setTimeout(checkSwitchStates, 100); // Check the states again after 100 milliseconds
}

// Start the checking process
checkSwitchStates();

textBoxes.forEach((textBox) => {
  textBox.disabled = false; // Ensure all text boxes are always enabled
});
