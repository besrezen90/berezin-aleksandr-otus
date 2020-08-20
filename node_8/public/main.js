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
      accessButton.setAttribute("disabled");
    });
  }
};

accessButton.addEventListener("click", requestAccess);
