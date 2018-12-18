// @flow

import * as React from 'react';

import withNavigation from '../../shared/withNavigation';
import storeRead from '../../shared/storeRead';
import { getHistory } from '../../redux/getters/router';
import { getBasePath } from '../../redux/getters/system';
import type { State as StoreState } from '../../types/redux/states';
import type { Link as LinkData, NavigateFunction } from '../../types/general';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  linkData: LinkData,
  navigate: NavigateFunction,
  storeState: StoreState,
  // Optional props
  customClasses: string,
  handleClick: ?(event: SyntheticEvent<HTMLAnchorElement>) => void,
  iconName: ?string;
};

const Link = (props: Props) => {
  const {
    children,
    customClasses,
    iconName,
    linkData,
    navigate,
    storeState,
  } = props;
  const basePath = getBasePath(storeState);
  const href = linkData.external ?
    linkData.url :
    `${basePath}${linkData.url}`;

  const handleClick = (event: SyntheticEvent<HTMLAnchorElement>): void => {
    event.preventDefault();
    event.stopPropagation();
    const history = getHistory(storeState);
    if (history) {
      navigate(storeState, history, href, linkData.external, basePath);
    }
  };

  return (
    <a
      className={`link-content ${customClasses}`}
      href={href}
      onClick={props.handleClick || handleClick}
    >
      {
        iconName &&
        <i className={`link-icon icon-left ${(iconName !== '') ? iconName : 'fa'}`} />
      }
      <span className="link-text">{linkData.label}</span>
      {children}
    </a>
  );
};

Link.defaultProps = {
  customClasses: '',
  handleClick: null,
  iconName: null,
};

export default withNavigation(storeRead(Link));
