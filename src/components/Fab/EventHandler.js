// @flow

import type { Props as FabProps, State as FabState } from './Fab';

type Master = {
  clickWithinChildButton: boolean,
  clickWithinContainer: boolean,
  clickOutsideContainer: boolean,
  +containerElement: ?HTMLDivElement,
  +menuElement: ?HTMLElement,
  +props: FabProps,
  +setState: ((prevState: FabState) => FabState) => void,
  +state: FabState,
  +updateStateOpen: (boolean) => void,
};

type WindowEvent = {
  target: {
    innerHeight: number,
  },
};

class EventHandler {
  constructor(master: Master) {
    this.master = master;
  }

  handleChildClick = (): void => {
    this.master.clickWithinChildButton = true;
    this.triggerMainButtonClick();
  };

  handleContainerClick = (event: SyntheticMouseEvent<HTMLElement>): void => {
    event.stopPropagation();
    if (this.master.state.bypassClick) {
      this.master.setState(prevState => ({ ...prevState, bypassClick: false }));

      return;
    }

    this.master.clickWithinContainer = true;

    if (
      this.master.clickWithinChildButton ||
      this.master.clickOutsideContainer
    ) {
      this.master.clickOutsideContainer = false;
      this.master.clickWithinChildButton = false;
      this.master.updateStateOpen(false);
      this.moveMenuElementToClosedPosition();
    } else {
      const menuState = this.master.menuElement && this.master.menuElement.dataset.mfbState;

      if (menuState === 'closed') {
        this.master.updateStateOpen(true);
        if (this.master.menuElement) {
          this.master.menuElement.style.bottom = 'unset';
          this.master.menuElement.style.top = '100%';
          this.master.menuElement.style.transform = 'translateY(-190%)';
        }
      } else if (menuState === 'open') {
        this.master.updateStateOpen(false);
        this.moveMenuElementToClosedPosition();
      }
    }
  };

  handleContainerMouseDown = (event: SyntheticMouseEvent<HTMLElement>): void => {
    event.persist();

    this.master.setState((prevState) => {
      if (!prevState.open) {
        const fromY = event.clientY;

        if (
          prevState.top === 0 &&
          this.master.menuElement
        ) {
          const transform = 'translateY(-50%)';
          const boundingRect = this.master.menuElement.getBoundingClientRect();

          if (this.master.menuElement) {
            this.master.menuElement.style.top = `${boundingRect.top}px`;
            this.master.menuElement.style.transform = transform;
            const elementTop = boundingRect.top;

            return ({
              ...prevState,
              fromY,
              maybeMoving: true,
              top: elementTop,
              transform,
            });
          }
        }

        return ({
          ...prevState,
          fromY,
          maybeMoving: true,
        });
      }

      return prevState;
    });

    this.timer = setTimeout(() => {
      if (this.master.state.maybeMoving) {
        this.master.setState(prevState => ({ ...prevState, readyToMove: true }));
      }
    }, 1000);
  };

  handleMenuMouseLeave = (): void => {
    clearTimeout(this.timer);
    this.master.setState(prevState => ({
      ...prevState,
      bypassClick: false,
      maybeMoving: false,
      moving: false,
      readyToMove: false,
    }));
  };

  handleContainerMouseLeave = (event: SyntheticMouseEvent<HTMLElement>): void => {
    const { target } = event;
    // $FlowFixMe
    const { classList } = target;
    if (classList.contains('mfb-component__wrap')) {
      // $FlowFixMe
      const mainButton = event.target.querySelector('a');
      mainButton.blur();
    }
  };

  handleContainerMouseMove = (event: SyntheticMouseEvent<HTMLElement>): void => {
    event.persist();

    this.master.setState((prevState) => {
      if (!prevState.open && prevState.readyToMove) {
        const toY: number =
          event.clientY ||
          // $FlowFixMe
          event.nativeEvent.touches[event.nativeEvent.touches.length - 1].clientY;
        const moving = Math.abs(toY - prevState.fromY) > this.tolerance;
        const transform = 'translateY(-65%)';
        const newTop = toY;

        if (this.master.menuElement) {
          this.master.menuElement.style.bottom = 'initial';
          this.master.menuElement.style.top = `${newTop}px`;
          this.master.menuElement.style.transform = transform;
        }

        return ({
          ...prevState,
          bypassClick: true,
          moving,
          top: newTop,
          transform,
        });
      }

      return prevState;
    });
  };

  handleContainerMouseUp = (): void => {
    clearTimeout(this.timer);

    const { state } = this.master;
    if (!state.open) {
      const bypassClick = (state.moving || state.readyToMove);
      this.master.setState(prevState => ({
        ...prevState,
        bypassClick,
        maybeMoving: false,
        moving: false,
        readyToMove: false,
      }));

      const { storeActions, storeState } = this.master.props;
      const copy = storeState.singletons.mfb.data;
      const { top, transform } = state;
      if (
        copy &&
        (
          copy.top !== top ||
          copy.transform !== transform
        )
      ) {
        storeActions.singletonsFab({
          data: {
            ...copy,
            top,
            transform,
          },
        });
      }
    }
  };

  handleDocumentClick = (): void => {
    if (this.master.clickWithinContainer) {
      this.master.clickWithinContainer = false;
      return;
    }

    const { containerElement } = this.master;
    const menuState = this.master.menuElement && this.master.menuElement.dataset.mfbState;

    if (menuState === 'open' && containerElement) {
      this.master.clickOutsideContainer = true;
      this.triggerMainButtonClick();
    }
  };

  handlePageContentScroll: WheelEventListener = (event): void => {
    // $FlowFixMe
    const { classList, offsetHeight, scrollTop } = event.target;
    if (classList.contains('page-content')) {
      const ratio = scrollTop / offsetHeight;
      const { containerElement, menuElement } = this.master;
      if (ratio > 0.95 && containerElement && menuElement) {
        menuElement.style.opacity = '0';
        containerElement.style.pointerEvents = 'none';
      } else if (ratio <= 0.95 && containerElement && menuElement) {
        menuElement.style.opacity = '1';
        containerElement.style.pointerEvents = 'auto';
      }
    }
  };

  handleWindowResize = (event: WindowEvent): void => {
    const height: number = event.target.innerHeight;
    if (this.master.menuElement) {
      this.master.menuElement.style.bottom = 'unset';
      this.master.menuElement.style.top = `${height}px`;
      const transform = 'translateY(-190%)';
      this.master.menuElement.style.transform = transform;
      this.master.setState(prevState => ({ ...prevState, top: height, transform }));
    }
  };

  moveMenuElementToClosedPosition = (): void => {
    if (this.master.menuElement) {
      this.master.menuElement.style.bottom = 'unset';
      this.master.menuElement.style.top = `${this.master.state.top}px`;
      this.master.menuElement.style.transform = this.master.state.transform;
    }
  };

  triggerMainButtonClick = (): void => {
    const { containerElement } = this.master;
    if (containerElement) {
      const anchor = containerElement.querySelector('a');
      if (anchor) {
        anchor.click();
      }
    }
  };

  +master: Master;
  timer: TimeoutID;
  +tolerance: number = 5;
}

export default EventHandler;
