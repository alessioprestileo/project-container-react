// @flow

import * as React from 'react';
import { cold } from 'react-hot-loader';
import * as FabComponents from 'react-mfb';

import EventHandler from './EventHandler';
import storeReadWrite from '../../shared/storeReadWrite';
import {
  getFabChildren,
  getFabTop,
  getFabTransform,
  getFabVisible,
} from '../../redux/getters/singletons';
import * as actionCreators from '../../redux/actions/actionCreators';
import type { State as StoreState } from '../../types/redux/states';
import '../../../container-assets/styles/mfb/mfb.scss';

const ChildButton = cold(FabComponents.ChildButton);
const MainButton = cold(FabComponents.MainButton);
const { Menu } = FabComponents;

export type Props = {
  storeActions: typeof actionCreators, // eslint-disable-line react/no-unused-prop-types
  storeState: StoreState,
  // Optional props
  effect: string,
  method: string,
  position: string,
};

export type State = {
  bypassClick: boolean,
  fromY: number,
  maybeMoving: boolean,
  moving: boolean,
  open: boolean,
  readyToMove: boolean,
  top: number,
  transform: string,
};

class Fab extends React.Component<Props, State> {
  static defaultProps = {
    effect: 'slidein-spring',
    method: '',
    position: 'br',
  };

  constructor(props: Props) {
    super(props);

    this.eventHandler = new EventHandler(this);

    const { storeState } = this.props;
    const top = getFabTop(storeState);
    const transform = getFabTransform(storeState);
    this.state = {
      bypassClick: false, // eslint-disable-line react/no-unused-state
      fromY: 0, // eslint-disable-line react/no-unused-state
      maybeMoving: false, // eslint-disable-line react/no-unused-state
      moving: false,
      open: false,
      readyToMove: false,
      top: top || 0, // eslint-disable-line react/no-unused-state
      transform: transform || 'translateY(-190%)', // eslint-disable-line react/no-unused-state
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.eventHandler.handleDocumentClick);
    document.addEventListener('wheel', this.eventHandler.handlePageContentScroll);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.eventHandler.handleDocumentClick);
    document.removeEventListener('wheel', this.eventHandler.handlePageContentScroll);
  }

  assignReferences = (element: ?HTMLDivElement): void => {
    this.containerElement = element;
    if (element) {
      this.menuElement = element.querySelector('[data-mfb-state]');

      const { menuElement } = this;
      if (menuElement) {
        menuElement.addEventListener('mouseleave', this.eventHandler.handleMenuMouseLeave);

        const { top, transform } = this.state;
        if (top !== 0) {
          menuElement.style.top = `${top}px`;
          menuElement.style.transform = transform;
        }
        window.addEventListener('resize', this.eventHandler.handleWindowResize);
      }
    }
  };

  updateStateOpen = (isOpen: boolean): void => {
    this.setState({ open: isOpen });
  };

  clickWithinChildButton: boolean = false;
  clickWithinContainer: boolean = false;
  clickOutsideContainer: boolean = false;
  containerElement: ?HTMLDivElement;
  eventHandler: EventHandler;
  menuElement: ?HTMLElement;

  render() {
    const {
      effect,
      method,
      position,
      storeState,
    } = this.props;
    const children = getFabChildren(storeState);
    const visible = getFabVisible(storeState);
    const {
      moving,
      open,
      readyToMove,
    } = this.state;

    return (
      <React.Fragment>
        {
          visible &&
          <div
            className={`mfb-container ${moving ? 'moving' : ''} ${open ? 'open' : 'closed'} ${readyToMove ? 'ready-to-move' : ''}`}
            onClick={this.eventHandler.handleContainerClick}
            onContextMenu={event => event.preventDefault()}
            onDragStart={(event) => { event.preventDefault(); }}
            onMouseDown={this.eventHandler.handleContainerMouseDown}
            onMouseLeave={this.eventHandler.handleContainerMouseLeave}
            onMouseMove={this.eventHandler.handleContainerMouseMove}
            onMouseUp={this.eventHandler.handleContainerMouseUp}
            onTouchCancel={this.eventHandler.handleContainerMouseLeave}
            onTouchEnd={this.eventHandler.handleContainerMouseUp}
            onTouchMove={this.eventHandler.handleContainerMouseMove}
            onTouchStart={this.eventHandler.handleContainerMouseDown}
            ref={this.assignReferences}
            role="presentation"
          >
            <Menu
              effect={effect}
              method={method}
              position={position}
            >
              <MainButton
                iconResting="fas fa-plus"
                iconActive="fas fa-times"
              />
              {
                (
                  children && children.map(child => (
                    <ChildButton
                      key={child.label}
                      icon={child.icon}
                      label={child.label}
                      onClick={() => {
                        this.eventHandler.handleChildClick();
                        child.onClick();
                      }}
                    />
                  ))
                ) ||
                []
              }
            </Menu>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default storeReadWrite(Fab);
