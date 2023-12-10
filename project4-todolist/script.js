/*---- Retrieve tasks from local storage-----*/
const storedTasks = localStorage.getItem("tasks");

/*--- Parse the storedTasks string if none assign an empty object---*/
const tasks = storedTasks ? JSON.parse(storedTasks) : {};
console.log(tasks, "tasks");

/*-----Updating the histroy container based on local Storage content---- */

histroyContainerLocalStorage();

/*------ setting object in local storage, on sucessful completion------
------------of task, this is used on load for data persistent----------*/

const localStorageUpdate = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

/*----Adding event listner to task form------- */

const addTaskbtn = document.querySelector(".addtask");
const todoContainer = document.querySelector(".todoContainer");

addTaskbtn.addEventListener("click", () => {
  let hoursValue = document.querySelector(".hours");
  let minutesValue = document.querySelector(".minutes");
  let secondsValue = document.querySelector(".seconds");
  let taskTitleValue = document.querySelector("#todoTitle");

  /*----Getting the values and parse it to change from string to number--- */

  let hours = parseInt(hoursValue.value);
  let minutes = parseInt(minutesValue.value);
  let seconds = parseInt(secondsValue.value);
  let taskTitle = taskTitleValue.value;

  /*----if input is empty it is set to 0 else appropriate number--- */

  hours = isNaN(hours) ? 0 : hours;
  minutes = isNaN(minutes) ? 0 : minutes;
  seconds = isNaN(seconds) ? 0 : seconds;

  let totalSeconds = hours * 60 * 60 + minutes * 60 + seconds;

  if ((hours || minutes || seconds) && taskTitle) {
    const todoItem = document.createElement("div");
    todoItem.className = "item";

    const todoTitle = document.createElement("div");
    todoTitle.className = "todoTitle";
    todoTitle.textContent = taskTitle;

    const todoTime = document.createElement("span");
    todoTime.className = "todoTime";

    /*----converting it to hh:mm:ss format by calling function and setting params--- */

    let initalformat = `${formatDigits(hours)}:${formatDigits(
      minutes
    )}:${formatDigits(seconds)}`;
    todoTime.textContent = initalformat;

    /*----Bell icon--- */

    const bellIcon = document.createElement("span");
    bellIcon.className = "bellIcon";
    bellIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>`;

    /*----adding child to the parent div--- */

    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoTime);
    todoItem.appendChild(bellIcon);

    /*----this parent div is then added to container div--- */

    todoContainer.appendChild(todoItem);
    timer(totalSeconds, todoTime, todoTitle, initalformat, todoItem, bellIcon);

    /*----Reseting the values to empty text box--- */

    hoursValue.value = "";
    minutesValue.value = "";
    secondsValue.value = "";
    taskTitleValue.value = "";
  }
});

/*----This function will set the numbers in two digits,------
  ------------ if we pass 5 min it will return as 05-------- */

const formatDigits = (number) => {
  return number.toLocaleString("en-us", {
    minimumIntegerDigits: 2,
  });
};

/*----Countdown timer--- */

const timer = (
  totalSeconds,
  todoTime,
  todoTitle,
  initalformat,
  todoItem,
  bellIcon
) => {
  let countDown = totalSeconds;

  /*----set interval of 1000ms is given to simulate the time--- */

  const startTimer = setInterval(() => {
    countDown -= 1;

    let hours = Math.floor(countDown / (60 * 60));
    let minutes = Math.floor((countDown % (60 * 60)) / 60);
    let seconds = countDown % 60;

    let formatTime = `${formatDigits(hours)}:${formatDigits(
      minutes
    )}:${formatDigits(seconds)}`;

    todoTime.textContent = formatTime;

    /*----If count down reaches to 0, this function will execute--- */

    if (countDown <= 0) {
      /*----Clear interval is given to remove setinterval event so it wont interfere 
      ------with other setinterval event, which inturn wont speeddown the time--- */

      clearInterval(startTimer);

      /*------bell audio created, which will ring once timer reaches to 0 --- */

      const bellAudio = new Audio("bell.mp3");
      bellAudio.play();
      bellAudio.loop = true;
      bellAudio.volume = 0.5;

      bellIcon.classList.add("active");

      /*------bell audio will ring for 2sec before gets removed from container,
      -----------------and added to the history container------------------ */

      setTimeout(() => {
        bellAudio.pause();

        bellIcon.classList.remove("active");
        todoItem.remove();
        removeTask(todoTitle, initalformat);
      }, 2000);
    }
  }, 1000);
};

/*---the removed tasks is then added to the history container------ */

const removeTask = (todoTitle, initalformat) => {
  const histroyContainer = document.querySelector(".histroyContainer");

  const task = document.createElement("div");
  task.className = "added";

  const taskTitle = document.createElement("span");
  const taskTime = document.createElement("span");

  taskTitle.textContent = todoTitle.textContent;
  taskTime.textContent = initalformat;

  task.appendChild(taskTitle);
  task.appendChild(taskTime);

  histroyContainer.appendChild(task);

  /*Adding task to the tasks object which is set in local storage */

  tasks[taskTitle.textContent] = taskTime.textContent;

  /* calling function to update the local storage  */
  localStorageUpdate();
};

function histroyContainerLocalStorage() {
  const histroyContainer = document.querySelector(".histroyContainer");

  for (let value of Object.entries(tasks)) {
    const task = document.createElement("div");
    task.className = "added";

    const taskTitle = document.createElement("span");
    const taskTime = document.createElement("span");

    taskTitle.textContent = value[0];
    taskTime.textContent = value[1];

    task.appendChild(taskTitle);
    task.appendChild(taskTime);

    histroyContainer.appendChild(task);
  }
}
