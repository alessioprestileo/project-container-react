// @flow

class Timeout {
  constructor(callback: Function, delay: number) {
    this.callback = callback;
    this.delay = delay;
    this.cleared = false;
    this.expired = false;

    this.restart();
  }

  clear = (): void => {
    clearTimeout(this.id);
    this.cleared = true;
  };

  restart = (delay?: ?number = null): void => {
    if (this.id) {
      this.clear();
    }

    this.id = setTimeout(
      () => {
        this.expired = true;
        this.callback();
      },
      delay || this.delay,
    );
  };

  callback: Function;
  cleared: boolean;
  delay: number;
  expired: boolean;
  id: TimeoutID;
}

export default Timeout;
