// @flow

import * as React from 'react';

import storeRead from '../storeRead';
import storeWrite from '../storeWrite';
import * as actionCreators from '../../redux/actions/actionCreators';
import { getHistory } from '../../redux/getters/router';
import type { State as StoreState } from '../../types/redux/states';
import type { NavigationBlocker } from '../../types/router';

type Props = {
  storeActions: typeof actionCreators,
  storeState: StoreState,
};

type State = {
  blockersListLength: number,
};

class NavigationBarrier extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { blockersListLength: 0 };
    this.addNavigationCheck();
  }

  componentWillUnmount() {
    this.removeNavigationCheck();
  }

  addNavigationCheck = (): void => {
    const { storeActions, storeState } = this.props;
    const { navigation } = this.props.storeState.router;
    const navigationHasCheck = navigation.hasCheck.data;
    const history = getHistory(storeState);
    if (history && !navigationHasCheck) {
      const removeCheckToBePushed = history.block(this.performCheckBeforeNavigation);
      storeActions.routerNavigationHasCheck({ data: true });
      storeActions.routerNavigationRemoveCheck({ data: removeCheckToBePushed });
    }
  };

  handleModalAction = (blockerId: string): void => {
    const { storeActions, storeState } = this.props;
    storeActions.routerNavigationBlockersListRemove({ data: blockerId });
    this.setState(prevState => ({ blockersListLength: prevState.blockersListLength - 1 }));
    const history = getHistory(storeState);
    const { navigation } = this.props.storeState.router;
    const navigationIsBlocked = navigation.isBlocked.data;
    const urlAfterUnblocked = navigation.urlAfterUnblocked.data;
    const removeCheck = navigation.removeCheck.data;
    const { blockersListLength } = this.state;
    if (
      history &&
      navigationIsBlocked &&
      urlAfterUnblocked &&
      blockersListLength === 1
    ) {
      storeActions.routerNavigationIsBlocked({ data: false });
      history.push(urlAfterUnblocked);
      if (removeCheck) {
        removeCheck();
      }
      storeActions.routerNavigationUrlAfterUnblocked({ data: null });
      storeActions.routerNavigationHasCheck({ data: false });
    }
  };

  performCheckBeforeNavigation = (location): boolean => {
    const { storeActions } = this.props;
    const navigationData = location.state && location.state.navigation;
    const blockersIdsList = navigationData && navigationData.blockersIdsList;
    if (blockersIdsList && blockersIdsList.length && blockersIdsList.length > 0) {
      this.setState({ blockersListLength: blockersIdsList.length });
    }

    if (
      !blockersIdsList ||
      !blockersIdsList.length ||
      (
        blockersIdsList &&
        blockersIdsList.length &&
        blockersIdsList.length === 0
      )
    ) {
      this.removeNavigationCheck();

      return true;
    }

    storeActions.routerNavigationIsBlocked({ data: true });
    const urlAfterUnblocked = navigationData && navigationData.urlAfterUnblocked;
    if (urlAfterUnblocked) {
      storeActions.routerNavigationUrlAfterUnblocked({ data: urlAfterUnblocked });
    }

    const blockersList = this.props.storeState.router.navigation.blockersList.data;
    blockersList.forEach(blocker => this.processNavigationBlocker(blocker));

    return false;
  };

  processNavigationBlocker = (blocker: NavigationBlocker): void => {
    const { storeActions } = this.props;
    const {
      children,
      handleCancel,
      handleOk,
      showButtons,
    } = blocker.modalItem;

    const handleOkWrapper = (): void => {
      if (handleOk) {
        handleOk();
      }
      this.handleModalAction(blocker.id);
    };

    const handleCancelWrapper = (): void => {
      if (handleCancel) {
        handleCancel();
      }
      this.handleModalAction(blocker.id);
    };

    const modalItem = {
      children,
      handleCancel: handleCancelWrapper,
      handleOk: handleOkWrapper,
      showButtons: !(showButtons === false),
    };

    storeActions.singletonsModalPush({ data: modalItem });
  };

  removeNavigationCheck = (): void => {
    const { storeActions, storeState } = this.props;
    const removeCheck = storeState.router.navigation.removeCheck.data;
    storeActions.routerNavigationIsBlocked({ data: false });
    storeActions.routerNavigationUrlAfterUnblocked({ data: null });
    storeActions.routerNavigationHasCheck({ data: false });
    if (removeCheck) {
      removeCheck();
    }
  };

  render() {
    return null;
  }
}

export default storeRead(storeWrite(NavigationBarrier));
