// @flow

class Interval {
  constructor(callback: Function, interval: number) {
    this.cleared = false;

    this.id = setInterval(
      () => {
        callback();
      },
      interval,
    );
  }

  clear = () => {
    clearInterval(this.id);
    this.cleared = true;
  }

  cleared: boolean;
  id: IntervalID;
}

export default Interval;
