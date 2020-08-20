M.Tabs.init(document.querySelectorAll(".tabs"));

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, { accordion: false });
});

const accessButton = document.querySelector("#access-request");

const requestAccess = async () => {
  const courseId = accessButton.dataset.accessRequest;
  const url = `http://localhost:3000/course/request-access/${courseId}`;
  if (!accessButton.hasAttribute("disabled")) {
    await fetch(url, { method: "put" }).then(() => {
      accessButton.textContent = "Ожидание доступа";
      accessButton.setAttribute("disabled", true);
    });
  }
};

if (accessButton) {
  accessButton.addEventListener("click", requestAccess);
}

const addAccessButtons = document.querySelectorAll("#access-response");

const addAccess = async (e) => {
  const user = e.target.dataset.accessUser;
  const courseId = e.target.dataset.course;

  const url = `http://localhost:3000/course/response-access/${courseId}/${user}`;

  if (!e.target.hasAttribute("disabled")) {
    await fetch(url, { method: "put" }).then(() => {
      e.target.setAttribute("disabled", true);
    });
  }
};

if (addAccessButtons) {
  addAccessButtons.forEach((button) =>
    button.addEventListener("click", addAccess)
  );
}
