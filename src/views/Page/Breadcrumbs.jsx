// @flow

import React from 'react';

import Link from '../../components/Link/Link';
import { getPathname } from '../../redux/getters/router';
import { getBasePath } from '../../redux/getters/system';
import { getBreadcrumbs } from '../../shared/functions';
import storeRead from '../../shared/storeRead';
import type { State as StoreState } from '../../types/redux/states';

type Props = {
  storeState: StoreState,
};

const Breadcrumbs = (props: Props) => {
  const { storeState } = props;
  const basePath = getBasePath(storeState);
  const pathname = getPathname(storeState);
  const allBreadcrumbs = getBreadcrumbs(pathname, basePath);

  return (
    <ol className="breadcrumb">
      {
        allBreadcrumbs.map((breadcrumb, index) => {
          if (
            index === 0 &&
            index === (allBreadcrumbs.length - 1)
          ) {
            return (
              <li key={breadcrumb.path}>
                <i className="fas fa-thumbtack icon-left" />
                {breadcrumb.label}
              </li>
            );
          } else if (index === 0) {
            return (
              <li key={breadcrumb.path}>
                <i className="fas fa-thumbtack icon-left" />
                {
                  // eslint-disable-next-line jsx-a11y/anchor-is-valid
                  <Link
                    customClasses="breadcrumb-label"
                    linkData={{
                      external: false,
                      label: breadcrumb.label,
                      url: breadcrumb.path,
                    }}
                  />
                }
              </li>
            );
          } else if (index === (allBreadcrumbs.length - 1)) {
            return (
              <li key={breadcrumb.path} className="active">
                {breadcrumb.label}
              </li>
            );
          }

          return (
            <li key={breadcrumb.path}>
              {
                // eslint-disable-next-line jsx-a11y/anchor-is-valid
                <Link
                  customClasses="breadcrumb-label"
                  linkData={{
                    external: false,
                    label: breadcrumb.label,
                    url: breadcrumb.path,
                  }}
                />
              }
            </li>
          );
        })
      }
    </ol>
  );
};

export default storeRead(Breadcrumbs);
