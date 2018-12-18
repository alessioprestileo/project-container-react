// @flow

import * as React from 'react';

import Interval from '../../shared/classes/Interval';
import Timeout from '../../shared/classes/Timeout';
import './Loading.scss';

type Props = {
  // Optional props
  children: React.Node,
  coverAllPage: boolean,
  delay: number,
  onLoadingRef: ?(element: HTMLElement) => void,
  onSuccessfullyLoadedRef: ?(element: HTMLElement) => void,
  readyToRender: boolean,
  styling: Object,
};

type State = {
  loadingHeight: number,
  successfullyLoadedHeight: number,
};

class Loading extends React.Component<Props, State> {
  static defaultProps = {
    children: null,
    coverAllPage: true,
    delay: 250,
    onLoadingRef: null,
    onSuccessfullyLoadedRef: null,
    readyToRender: true,
    styling: {},
  };

  constructor(props: Props) {
    super(props);

    this.state = { loadingHeight: 0, successfullyLoadedHeight: 0 };
  }

  componentDidMount() {
    this.renewTimeout();
    this.renewInterval();
  }

  componentWillUnmount() {
    this.timeout.clear();
    this.interval.clear();
  }

  handleLoadingRef = (element: HTMLElement): void => {
    const { height } = element.getBoundingClientRect();
    if (this.state.loadingHeight === 0 && height !== 0) {
      this.setState({ loadingHeight: height });
    } else if (height !== this.state.loadingHeight) {
      this.setState({ loadingHeight: height });
      if (this.props.onLoadingRef) {
        this.props.onLoadingRef(element);
      }
    }
  };

  handleSuccessfullyLoadedRef = (element: HTMLElement): void => {
    const { height } = element.getBoundingClientRect();
    if (this.state.successfullyLoadedHeight === 0 && height !== 0) {
      this.setState({ successfullyLoadedHeight: height });
    } else if (height !== this.state.successfullyLoadedHeight) {
      this.setState({ successfullyLoadedHeight: height });
      if (this.props.onSuccessfullyLoadedRef) {
        this.props.onSuccessfullyLoadedRef(element);
      }
    }
  };

  renewTimeout = () => {
    this.timeout = new Timeout(
      () => {},
      this.props.delay,
    );
  };

  renewInterval = () => {
    this.interval = new Interval(
      () => {
        this.forceUpdate();
      },
      this.props.delay,
    );
  };

  delayIsOver: boolean = false;
  interval: Interval;
  timeout: Timeout;

  render() {
    const {
      children,
      coverAllPage,
      readyToRender,
      styling,
    } = this.props;

    if (
      this.timeout &&
      this.timeout.expired &&
      readyToRender &&
      children
    ) {
      this.interval.clear();

      return (
        <div ref={element => element && this.handleSuccessfullyLoadedRef(element)}>
          {children}
        </div>
      );
    } else if (this.interval && this.interval.cleared) {
      this.renewTimeout();
      this.renewInterval();
    }

    return (
      <div
        className={`loading-container ${coverAllPage ? 'cover-all' : ''}`}
        ref={element => element && this.handleLoadingRef(element)}
        style={styling}
      >
        <img className="gif-image" src="/project-assets/images/loading.gif" alt="Loader" />
      </div>
    );
  }
}

export default Loading;
