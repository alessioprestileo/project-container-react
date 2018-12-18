// @flow

import * as React from 'react';

import Loading from '../Loading/Loading';
import TabPane from './TabPane';
import type { EventHandler, TabData } from '../../types/general';

type Props = {
  allTabsData: Array<TabData>,
  // Optional props
  visible: boolean,
  withinSidebar: boolean,
};

type State = {
  activeTabId: string,
};

class TabsGroup extends React.Component<Props, State> {
  static defaultProps = {
    visible: true,
    withinSidebar: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = { activeTabId: this.props.allTabsData[0].id };
  }

  assignTabsGroupElement = (element: ?HTMLUListElement): void => {
    if (element) {
      this.tabsGroup = element;
    }
  };

  focusActiveTab = (): void => {
    if (this.tabsGroup) {
      const allTabs = Array.from((this.tabsGroup && this.tabsGroup.children) || []);
      allTabs.forEach((tab) => {
        if (Array.from(tab.classList).indexOf('active') !== -1) {
          Array.from(tab.children)[0].focus();
        }
      });
    }
  };

  handleTabKeyDown = (event: KeyboardEvent) => {
    const { allTabsData } = this.props;
    let activeTabIndex = 0;

    allTabsData.forEach((tabData) => {
      const { activeTabId } = this.state;

      if (tabData.id === activeTabId) {
        activeTabIndex = allTabsData.findIndex(item => item.id === activeTabId);
      }
    });

    if (
      event.key === 'ArrowRight' &&
      activeTabIndex < (allTabsData.length - 1)
    ) {
      const nextTabId = allTabsData[activeTabIndex + 1].id;
      this.setState({ activeTabId: nextTabId });
    } else if (
      event.key === 'ArrowLeft' &&
      activeTabIndex > 0
    ) {
      const nextTabId = allTabsData[activeTabIndex - 1].id;
      this.setState({ activeTabId: nextTabId });
    }
  };

  handleTabClick: EventHandler = (event) => {
    event.preventDefault();

    const activeTabId =
      event.currentTarget.getAttribute('tab-id') ||
      this.props.allTabsData[0].id;
    this.setState({ activeTabId });
  };

  tabIsActive = (tabId: string): boolean => (
    tabId === this.state.activeTabId
  );

  tabsGroup: HTMLUListElement;

  render() {
    const {
      allTabsData,
      visible,
      withinSidebar,
    } = this.props;

    if (visible) {
      this.focusActiveTab();
    }

    return (
      <div className="tabs-group">
        <div className="tabs">
          <ul
            className="nav nav-tabs nav-justified control-sidebar-tabs"
            ref={(element: ?HTMLUListElement) => this.assignTabsGroupElement(element)}
          >
            {
              allTabsData.map((tabData, index) => (
                <li
                  key={tabData.id}
                  className={`tab ${this.tabIsActive(tabData.id) ? 'active' : ''}`}
                  onClick={this.handleTabClick}
                  onKeyDown={this.handleTabKeyDown}
                  role="presentation"
                  tab-id={tabData.id}
                >
                  <div
                    className="tab-element"
                    tabIndex={index}
                    role="presentation"
                  >
                    {
                      tabData.iconName &&
                      <i className={`icon-left ${tabData.iconName}`} />
                    }
                    {
                      tabData.label &&
                      <span className="tab-label">{tabData.label}</span>
                    }
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="tab-content">
          {
            allTabsData.map(tabData => (
              <TabPane
                key={tabData.id}
                active={this.tabIsActive(tabData.id)}
                customClasses={withinSidebar ? 'sidebar-menu' : ''}
                id={tabData.id}
              >
                {
                  tabData.loading &&
                  <Loading coverAllPage />
                }
                {
                  !tabData.loading &&
                  tabData.children
                }
              </TabPane>
            ))
          }
        </div>
      </div>
    );
  }
}

export default TabsGroup;
