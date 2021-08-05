import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import Translate, { translate } from "@docusaurus/Translate";

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Docs about Amazing Favorites project"
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <img
            src={useBaseUrl("images/20210805-002.gif")}
            alt="Example banner"
          />
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx("col col--4", styles.feature)}>
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl("images/concurrency.svg")}
                  />
                </div>
                <h3>
                  <Translate
                    id="homepage.高效检索"
                    description="The homepage 高效检索"
                  >
                    高效检索
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.高效检索.details"
                    description="The homepage 通过关键词、标记、本地语言等内容提供高效的检索功能"
                  >
                    通过关键词、标记、本地语言等内容提供高效的检索功能
                  </Translate>
                </p>
              </div>
              <div className={clsx("col col--4", styles.feature)}>
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl("images/scale-out.svg")}
                  />
                </div>
                <h3>
                  <Translate
                    id="homepage.安全可控"
                    description="The homepage 安全可控"
                  >
                    安全可控
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.安全可控.details"
                    description="The homepage 您的数据由您自己掌控，不存在任何其他人使用您的数据"
                  >
                    您的数据由您自己掌控，不存在任何其他人使用您的数据
                  </Translate>
                </p>
              </div>
              <div className={clsx("col col--4", styles.feature)}>
                <div className="text--center">
                  <img
                    className={styles.featureImage}
                    src={useBaseUrl("images/full-lifetime.svg")}
                  />
                </div>
                <h3>
                  <Translate
                    id="homepage.多端支持"
                    description="The homepage 多端支持"
                  >
                    多端支持
                  </Translate>
                </h3>
                <p>
                  <Translate
                    id="homepage.多端支持.details"
                    description="The homepage 轻松在多款 Chrome 内核浏览器中跨越使用，方便快捷"
                  >
                    轻松在多款 Chrome 内核浏览器中跨越使用，方便快捷
                  </Translate>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
