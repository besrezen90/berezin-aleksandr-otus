if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => serviceWorkerRegister());
  navigator.serviceWorker.addEventListener("message", (e) => receiveMessage(e));
}

const message = document.querySelector(".message");
const loader = document.querySelector(".spinner-border");
const button = document.querySelector(".button");
let serviceWorker;

const onClickButton = async (e) => {
  if (loader.classList.contains("hidden")) {
    hideElement();
    serviceWorker.active.postMessage("article");
  }
};

button.addEventListener("click", (e) => onClickButton(e));

const hideElement = (isSendReq = true) => {
  if (isSendReq) {
    loader.classList.remove("hidden");
    message.classList.add("hidden");
  } else {
    message.classList.remove("hidden");
    loader.classList.add("hidden");
  }
};

const receiveMessage = (e) => {
  const { title, body } = e.data;
  generateMessageContainer(title, body);
};

const generateMessageContainer = (title, body) => {
  const messageTitle = document.querySelector(".message-title");
  messageTitle.textContent = title;

  const messageBody = document.querySelector(".message-body");
  messageBody.textContent = body;

  hideElement(false);
};

const serviceWorkerRegister = async () => {
  try {
    await enableNotify();
    serviceWorker = await navigator.serviceWorker.register("/js/sw.js");

    if (serviceWorker) {
      await serviceWorker.update();
    }

    console.log("ServiceWorker registration successful with scope: ", serviceWorker.scope);
  } catch (error) {
    console.log("ServiceWorker registration failed: ", error);
  }
};

const enableNotify = async () => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }

  const result = await Notification.requestPermission();

  if (result !== "granted") {
    throw new Error("Turn on notifications!");
  }
};
