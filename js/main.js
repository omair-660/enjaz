let body = document.body

let name = document.getElementById("name"); // اسم المعلم
let degreeUniversy = document.getElementById("degreeUniversy"); // المؤهل
let jobTitle = document.getElementById("jobTitle"); // التخضض / النادة
let classes = document.getElementById("classes"); // الصفوف التي يتم تدريسها
let countClasses = document.getElementById("countClasses"); // عدد الحصص التي يتم تدريسها
let sea = document.getElementById("sea"); // الرؤية
let message = document.getElementById("message"); // الرساله

let goals = document.getElementById("goals"); // الاهداف
let goalsList = document.getElementById("goalsList"); //  الاهداف المضافة
let addGoal = document.querySelector(".addGoal"); //  زر الاهداف المضافة
let courses = document.getElementById("courses"); // الدورات
let coursesList = document.getElementById("coursesList"); // الدورات المضافة
let addCourse = document.querySelector(".addCourse"); // زر الدورات المضافة

let creatives = document.getElementById("creatives");
let previewCreativs = document.querySelector(".previewCreativs");
let worksPaper = document.getElementById("worksPaper");
let previewActivety = document.querySelector(".previewActivety");
let tasks = document.getElementById("tasks");
let previewTasks = document.querySelector(".previewTasks");
let creativesSec =document.querySelector('#creativesSec')
console.log(creativesSec);

let worksSec =document.querySelector('#worksSec')
let tasksSec =document.querySelector('#tasksSec')
let creativesCheck 
let worksCheck 
let tasksCheck 
let generateBtn = document.getElementById("generateBtn"); // انشاء الملف

let previewName = document.getElementById("previewName");
let previewJobTitle = document.getElementById("previewJobTitle");
let previewDegree = document.getElementById("previewDegree");
let previewClasses = document.getElementById("previewClasses");
let previewCount = document.getElementById("previewCount");
let previewVision = document.getElementById("previewVision");
let previewMessage = document.getElementById("previewMessage");
let previewGoalsList = document.getElementById("previewGoalsList");
let previewCoursesList = document.getElementById("previewCoursesList");

let errFiles = document.querySelector(".errFiles");
let errMessage = document.querySelector(".errMessage");

let currentDate = document.getElementById('currentDate')
let portfolioSection = document.getElementById('portfolioSection')
let theme = document.querySelector('.theme')

portfolioSection.style.display = "none";

let data = {
  nameVal: "",
  degreeUniversyVal: "",
  jobTitleVal: "",
  classesVal: "",
  countClassesVal: "",
  seaVal: "",
  messageVal: "",
  goalsVal: [],
  coursesVal: [],
  currentDateval : ''
};

generateBtn.addEventListener("click", () => {
  data.nameVal = name.value.trim().toLowerCase();
  data.degreeUniversyVal = degreeUniversy.value.trim().toLowerCase();
  data.jobTitleVal = jobTitle.value.trim().toLowerCase();
  data.classesVal = classes.value.trim().toLowerCase();
  data.countClassesVal = countClasses.value.trim().toLowerCase();
  data.seaVal = sea.value.trim().toLowerCase();
  data.messageVal = message.value.trim().toLowerCase();
  if (name.value.trim() == "" || name.value.trim().length < 8) {
    name.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML =
      "يرجى إدخال اسم المعلم بشكل صحيح (8 حرفًا على الأقل)";
  } else if (
    degreeUniversy.value.trim() == "" ||
    degreeUniversy.value.trim().length < 5
  ) {
    degreeUniversy.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML =
      "يرجى إدخال المؤهل الدراسي بشكل صحيح (5 أحرف على الأقل)";
  } else if (jobTitle.value.trim() == "" || jobTitle.value.trim().length < 5) {
    jobTitle.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML =
      "يرجى إدخال التخصص أو المادة بشكل صحيح (5 أحرف على الأقل)";
  } else if (classes.value.trim() == "" || classes.value.trim().length < 5) {
    classes.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = "يرجى إدخال الصفوف التي يتم تدريسها";
  } else if (
    countClasses.value.trim() == "" ||
    +countClasses.value.trim() < 1
  ) {
    countClasses.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = "يرجى إدخال عدد الحصص التي يتم تدريسها";
  } else if (sea.value.trim() == "" || sea.value.trim().length < 13) {
    sea.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = "يرجى إدخال الرؤية بشكل صحيح (13 حرفًا على الأقل)";
  } else if (message.value.trim() == "" || message.value.trim().length < 13) {
    message.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = "يرجى إدخال الرسالة بشكل صحيح (13 حرفًا على الأقل)";
  }  else if (!goalsList.innerHTML.includes('li')) {
    goals.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = 'يرجى إدخال هدف واحد على الأقل';
  }  else if (!coursesList.innerHTML.includes('li')) {
    courses.focus();
    errMessage.style.display = "block";
    errMessage.innerHTML = 'يرجى إدخال هدف واحد على الأقل';
  } else {
    errMessage.innerHTML = "";
    errMessage.style.display = "none";
    displayData();
    clearData();
    currentDate.innerHTML = new Date().toLocaleDateString('ar-EG');
    portfolioSection.style.display = "block";
  }
});

addGoal.addEventListener("click", () => {
  addGoals();
});

addCourse.addEventListener("click", () => {
  addCourseUl();
});
function addGoals() {
  if (goals.value.trim() === "") {
    errMessage.innerHTML = "برجاء إدخال هدف";
    errMessage.style.display = "block";
  } else {
    errMessage.style.display = "none";
    data.goalsVal.push(goals.value);
    displayGoals();
    goals.value = "";
  }
}
function displayGoals() {
  let box = "";
  data.goalsVal.forEach((goal, i) => {
    box += `<li>
                <span>
                    <i class="fa-solid fa-graduation-cap"></i>
                    ${goal}
                </span>
                <button onclick="delGoal(${i})" class="delete-btn" title="حذف">
                    <i class="fa-solid fa-trash-can"></i>
                </button>
            </li>`;
  });

  goalsList.innerHTML = box;
}
function delGoal(i) {
  data.goalsVal.splice(i, 1);
  displayGoals();
}
function addCourseUl() {
  if(courses.value.trim() == ''){
    errMessage.style.display = 'block'
    errMessage.innerHTML = "برجاء إدخال اسم الدورة";
}else{
      data.coursesVal.push(courses.value);
    errMessage.style.display = 'none'
    courses.value = ''
    displayCourses()
  }
}
function displayCourses(){
let box = "";
  data.coursesVal.forEach((course, i) => {
    box += `<li>
    <span><i class="fa-solid fa-graduation-cap"></i>${course}</span>
        <button onclick='delCourse(${i})' class="delete-btn" title="حذف"><i class="fa-solid fa-trash-can"></i></button>
        </li>
    `;
  });
  coursesList.innerHTML = box;
}

function delCourse(i) {
  data.coursesVal.splice(i, 1);
  displayCourses();
}
function displayData() {
  previewName.textContent = data.nameVal;
  previewJobTitle.textContent = data.jobTitleVal;
  previewDegree.textContent = data.degreeUniversyVal;
  previewClasses.textContent = data.classesVal;
  previewCount.textContent = data.countClassesVal;
  previewVision.textContent = data.seaVal;
  previewMessage.textContent = data.messageVal;
  data.goalsVal.forEach((ele) => {
    previewGoalsList.innerHTML += `<li>${ele}</li>`;
  });
  data.coursesVal.forEach((ele) => {
    previewCoursesList.innerHTML += `<li>${ele}</li>`;
  });
}

function clearData() {
  name.value = "";
  degreeUniversy.value = "";
  jobTitle.value = "";
  classes.value = "";
  countClasses.value = "";
  sea.value = "";
  message.value = "";
  goals.value = "";
  courses.value = "";
  goalsList.innerHTML = "";
  coursesList.innerHTML = "";
}
if (creativesCheck == 'undefined') {
    creativesSec.style.display ='block'
}else{
    creativesSec.style.display ='none'
}
if (tasksCheck == 'undefined') {
    tasksSec.style.display ='block'
}else{
    tasksSec.style.display ='none'
}
if (worksCheck == 'undefined') {
    worksSec.style.display ='block'
}else{
    worksSec.style.display ='none'
}
creatives.addEventListener("change", (e) => {
    creativesCheck = e.target.files.length

  for (let i = 0; i < e.target.files.length; i++) {
    if (e.target.files[i].type.includes("image")) {
      let src = URL.createObjectURL(e.target.files[i]);
      let img = document.createElement("img");
      img.setAttribute("src", src);
      previewCreativs.appendChild(img);
      console.log(e.target.files[i]);
      errFiles.style.display = "none";
    creativesSec.style.display ='block'
    } else {
      errFiles.innerHTML = "برجاء اختيار صور فقط";
      errFiles.style.display = "block";
    }
  }
});

worksPaper.addEventListener("change", (e) => {
    worksCheck = e.target.files.length

  for (let i = 0; i < e.target.files.length; i++) {
    if (e.target.files[i].type.includes("image")) {
      let src = URL.createObjectURL(e.target.files[i]);
      let img = document.createElement("img");
      img.setAttribute("src", src);
      previewActivety.appendChild(img);
      console.log(e.target.files[i]);
      errFiles.style.display = "none";
            worksSec.style.display = "block";
    } else {
      errFiles.innerHTML = "برجاء اختيار صور فقط";
      errFiles.style.display = "block";
            worksSec.style.display = "none";
    }
  }
});
tasks.addEventListener("change", (e) => {
    tasksCheck = e.target.files.length

  for (let i = 0; i < e.target.files.length; i++) {
    if (e.target.files[i].type.includes("image")) {
      let src = URL.createObjectURL(e.target.files[i]);
      let img = document.createElement("img");
      img.setAttribute("src", src);
      previewTasks.appendChild(img);
      console.log(e.target.files[i]);
      errFiles.style.display = "none";
            tasksSec.style.display = "block";
    } else {
      errFiles.innerHTML = "برجاء اختيار صور فقط";
      errFiles.style.display = "block";
            tasksSec.style.display = "none";
    }
  }
});
if (JSON.parse(localStorage.getItem("mode"))) {
    body.classList.add("dark");
} else {
    body.classList.remove("dark");
}
let darkMode = false
theme.addEventListener('click' , ()=>{
    body.classList.toggle('dark')
    if(body.classList.contains('dark')){
        theme.innerHTML = '<i class="fa-solid fa-sun"></i>'
        darkMode = true
    }else{
        theme.innerHTML = '<i class="fa-solid fa-moon"></i>'
        darkMode = false
    }
    localStorage.setItem("mode" , JSON.stringify(darkMode))
})
