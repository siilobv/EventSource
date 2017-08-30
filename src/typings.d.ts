declare enum ReadyState {CONNECTING = 0, OPEN = 1, CLOSED = 2}

export class EventSourcePolyfill extends EventTarget {
  CONNECTING: ReadyState;
  OPEN: ReadyState;
  CLOSED: ReadyState;

  constructor(url: string, eventSourceInitDict?: EventSourceInit);
  url: string;
  readyState: ReadyState;
  onopen: Function;
  onmessage: (event: OnMessageEvent) => void;
  onerror: Function;
  close: () => void;
}

interface EventSourceInit {
  withCredentials?: boolean;
  headers?: Object;
  errorOnTimeout?: boolean;
  parameterCallback?: () => {[key:string]:string};
}

interface OnMessageEvent {
  data: string;
}