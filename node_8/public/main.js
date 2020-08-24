M.Tabs.init(document.querySelectorAll(".tabs"));

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, { accordion: false });
});

const accessButton = document.querySelector("#access-request");

const onRequestAccess = async () => {
  const courseId = accessButton.dataset.accessRequest;
  const url = `http://localhost:3000/api/course/request-access/${courseId}`;
  if (!accessButton.hasAttribute("disabled")) {
    await fetch(url, { method: "put" }).then(() => {
      accessButton.textContent = "Ожидание доступа";
      accessButton.setAttribute("disabled", true);
    });
  }
};

if (accessButton) {
  accessButton.addEventListener("click", onRequestAccess);
}

const addAccessButtons = document.querySelectorAll("#access-response");

const onAddAccess = async (e) => {
  const user = e.target.dataset.accessUser;
  const courseId = e.target.dataset.course;

  const url = `http://localhost:3000/api/course/response-access/${courseId}/${user}`;

  if (!e.target.hasAttribute("disabled")) {
    await fetch(url, { method: "put" }).then(() => {
      e.target.setAttribute("disabled", true);
    });
  }
};

if (addAccessButtons) {
  addAccessButtons.forEach((button) =>
    button.addEventListener("click", onAddAccess)
  );
}

const deleteCourseButton = document.querySelector("#delete-course");

const onDeleteCourse = async (e) => {
  const id = e.target.dataset.course;
  const url = `http://localhost:3000/api/course/remove/${id}/`;

  if (!e.target.hasAttribute("disabled")) {
    await fetch(url, { method: "delete" }).then(() => {
      e.target.setAttribute("disabled", true);
    });
  }
};

if (deleteCourseButton) {
  deleteCourseButton.addEventListener("click", onDeleteCourse);
}
