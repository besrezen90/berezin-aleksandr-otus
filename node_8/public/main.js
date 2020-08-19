M.Tabs.init(document.querySelectorAll(".tabs"));

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".collapsible");
  var instances = M.Collapsible.init(elems, { accordion: false });
});
