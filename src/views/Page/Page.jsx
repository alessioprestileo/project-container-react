// @flow

import * as React from 'react';

import Breadcrumbs from './Breadcrumbs';

type Props = {
  children: React.Node,
  title: string,
  // Optional props
  excerpt: string,
};

const Page = (props: Props) => {
  const { children, excerpt, title } = props;

  return (
    <div className="page">
      <section className="content-header">
        <h1>
          {title}
          <small>{excerpt}</small>
        </h1>
        <Breadcrumbs />
      </section>
      <section className="content page-content">
        {children}
      </section>
    </div>
  );
};

Page.defaultProps = {
  excerpt: '',
};

export default Page;
