const socket = io(); // Socket.IOクライアントを初期化
const messages = document.getElementById('messages');
const input = document.getElementById('message-input');

function sendMessage() {
  const message = input.value;
  if (message) {
    socket.emit('chat message', message); // サーバーにメッセージを送信
    input.value = '';
  }
}

socket.on('chat message', (msg) => {
  const item = document.createElement('div');
  item.textContent = msg;
  messages.appendChild(item);
  messages.scrollTop = messages.scrollHeight; // 最新のメッセージを表示
});
