class WebSocketService {
  public url;
  public socket: WebSocket | null;
  private messageHandler: ((message: string) => void) | null = null;

  constructor() {
    this.url = "wss://blurr-api.staginglab.info/api/cli/connect-socket/";
    this.socket = null;
  }

  connect() {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = () => {
      console.log("WebSocket connection open");
    };

    this.socket.onmessage = (event) => {
      console.log("WebSocket message received:", event.data);
      if (this.messageHandler) {
        this.messageHandler(event.data); // Call the handler with the message
      }
    };

    this.socket.onclose = () => {
      console.log("WebSocket closed");
    };

    this.socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };
  }

  sendMessage(message: string) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error("WebSocket is not open. Unable to send message.");
    }
  }

  // ✅ Provide a way to set the external message handler
  setOnMessage(handler: (message: string) => void) {
    this.messageHandler = handler;
  }
}

export default WebSocketService;
