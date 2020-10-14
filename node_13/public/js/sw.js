const PARAMS = {
  START_MESSAGE: "ServiceWorker activated!!!",
  SYSTEM_TITLE: "System notify:",
  WSS: "ws://localhost:3000",
};

let socket = new WebSocket(PARAMS.WSS);

const createNewMessage = (body, title = PARAMS.SYSTEM_TITLE) => {
  const { registration } = globalThis;

  try {
    registration.showNotification(title, {
      body,
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: "vibration-sample",
    });
  } catch (error) {
    console.error(error);
  }
};

const onOpenWss = (e) => {
  const { url } = e.target;
  createNewMessage(`WebSocket open: ${url}`);
};

const onCloseWss = (e) => {
  const { data } = e;
  createNewMessage(`WebSocket close: ${data}`);
};

const onErrorWss = (e) => {
  const { data } = e;
  createNewMessage(`WebSocket error: ${data}`);
};

const onMessageWss = async (e) => {
  const { title, body } = JSON.parse(e.data);

  try {
    const clients = await globalThis.clients.matchAll({
      includeUncontrolled: true,
      type: "window",
    });

    if (clients) {
      clients.forEach((client) => {
        client.postMessage({
          title,
          body,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const removeEventsToWebSocket = () => {
  socket.removeEventListener("open", (e) => onOpenWss(e));
  socket.removeEventListener("close", (e) => onOpenWss(e));
  socket.removeEventListener("message", (e) => onMessageWss(e));
  socket.removeEventListener("error", (e) => onErrorWss(e));
};

const addEventsToWebSocket = () => {
  socket.addEventListener("open", (e) => onOpenWss(e));
  socket.addEventListener("close", (e) => onOpenWss(e));
  socket.addEventListener("message", (e) => onMessageWss(e));
  socket.addEventListener("error", (e) => onErrorWss(e));
};

const getNewArticle = (e) => {
  const { data } = e;
  const socketState = socket.readyState;
  if (socketState === 2 || socketState === 3) {
    console.log(socketState);
    removeEventsToWebSocket();
    socket = new WebSocket(PARAMS.WSS);
    addEventsToWebSocket();
  }

  socket.send(`${data}`);
};

const startServiceWorker = (e) => {
  e.waitUntil(globalThis.clients.claim());
  createNewMessage(PARAMS.START_MESSAGE);
  addEventsToWebSocket();
};

globalThis.addEventListener("install", (e) => console.log("ServiceWorker install"));
globalThis.addEventListener("message", (e) => getNewArticle(e));
globalThis.addEventListener("activate", (e) => startServiceWorker(e));
