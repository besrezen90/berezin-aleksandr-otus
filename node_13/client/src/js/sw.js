const PARAMS = {
  START_MESSAGE: 'ServiceWorker activated!!!',
  SYSTEM_TITLE: 'System notify:',
  WSS: 'wss://echo.websocket.org/',
};

const socket = new WebSocket(PARAMS.WSS);

globalThis.addEventListener('install', (e) =>
  console.log('ServiceWorker install'),
);

const createNewMessage = (body, title = PARAMS.SYSTEM_TITLE) => {
  const { registration } = globalThis;

  try {
    registration.showNotification(title, {
      body,
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'vibration-sample',
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
  const { data } = e;

  try {
    const clients = await globalThis.clients.matchAll({
      includeUncontrolled: true,
      type: 'window',
    });

    if (clients) {
      clients.forEach((client) => {
        client.postMessage({
          title: 'New message',
          body: data,
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getNewArticle = (e) => {
  const { data } = e;
  socket.send(`${data}`);
};

const startWebSocket = () => {
  socket.addEventListener('open', (e) => onOpenWss(e));
  socket.addEventListener('close', (e) => onOpenWss(e));
  socket.addEventListener('message', (e) => onMessageWss(e));
  socket.addEventListener('error', (e) => onErrorWss(e));
};

const startServiceWorker = (e) => {
  e.waitUntil(globalThis.clients.claim());
  createNewMessage(PARAMS.START_MESSAGE);
  startWebSocket();
};

globalThis.addEventListener('message', (e) => getNewArticle(e));
globalThis.addEventListener('activate', (e) => startServiceWorker(e));
