type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  // create an event
  on(eventName: string, callback: Callback): void {
    // initial event value to be a Callback[] or undefined
    const handlers = this.events[eventName] || [];
    // create an array with callback arg
    handlers.push(callback);
    // key / value
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    // undefined or no elements
    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      // call events
      callback();
    });
  }
}
