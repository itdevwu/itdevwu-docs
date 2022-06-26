import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>项目文档</Translate>,
    Svg: require('@site/static/img/itdevwu-docs.svg').default,
    description: (
      <>
        <Translate>itdevwu Docs 托管了 itdevwu 的各类项目文档，并且为部分需要分版的项目提供了不同版本</Translate>
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('@site/static/img/powered-by-docusaurus.svg').default,
    description: (
      <>
        <Translate>Docusaurus 是 Meta 的开源项目，它提供了简单的、强大的文档管理方法。itdevwu Docs 使用了 Docusaurus 来构建网站。</Translate>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
