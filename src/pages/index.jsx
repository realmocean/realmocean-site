import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Translate from '@docusaurus/Translate';

const infos = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        4
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Globaly Created Realms
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        3
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Vendors
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        14
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Deployed Apps
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        55
      </Translate>
    ),
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        Users
      </Translate>
    ),
  }
]
const features = [
  {
    title: (
      <Translate
        id="homepage.features.easy-to-use.title"
        description="Title of feature of Easy to use on the home page">
        Identity Management as a Service
      </Translate>
    ),
    imageUrl: 'img/undraw_authentication_re_svpt.svg',
    description: (
      <Translate
        id="homepage.features.easy-to-use"
        description="Feature easy to use">
        {''}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.modern-ui.title"
        description="Title of feature of Modern UI on the home page">
        License Management as a Service
      </Translate>
    ),
    imageUrl: 'img/undraw_certification_re_ifll.svg',
    description: (
      <Translate
        values={{ angularJS: (<code>AngularJS</code>), reactJS: (<code>ReactJS</code>) }}
        id="homepage.features.modern-ui"
        description="Modern UI">
        {''}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.pluggable-extensible.title"
        description="The Virtual File System makes it possible to manage files that in client browser.">
        Integration Platform as a Service
      </Translate>
    ),
    imageUrl: 'img/undraw_product_iteration_kjok.svg',
    description: (
      <Translate
        values={{ starters: (<code>starters</code>) }}
        id="homepage.features.pluggable-extensible"
        description="Feature __Pluggable and Extensible">
        {''}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.connect-information.title"
        description="Title of feature of Connect your information on the home page">
        App Store as a Service
      </Translate>
    ),
    imageUrl: 'img/undraw_responsive_re_e1nn.svg',
    description: (
      <Translate
        id="homepage.features.connect-information"
        description="Feature Connect your information">
        {''}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.customize-easy.title"
        description="Title of feature of Customize easy on the home page">
        Internationalization
      </Translate>
    ),
    imageUrl: 'img/undraw_the_world_is_mine_re_j5cr.svg',
    description: (
      <Translate
        id="homepage.features.customize-easy"
        description="Feature Customize easy">
        {''}
      </Translate>
    ),
  },
  {
    title: (
      <Translate
        id="homepage.features.powered-by.title"
        description="Title of feature of Powered By on the home page">
        Typescript Support
      </Translate>
    ),
    imageUrl: 'img/undraw_code_review.svg',
    description: (
      <Translate
        values={{ autowired: (<code>@Autowired</code>) }}
        id="homepage.features.powered-by"
        description="Typescript Support">
       {''}
      </Translate>
    ),
  },
];

function InfoBox({ title, description }) {
  return (
    <div className={clsx('col col--3', styles.infobox)}>
      <h3 className={clsx(styles['infobox-header'])}>{title}</h3>
      <p className={clsx(styles['infobox-desc'])}>{description}</p>
    </div>
  );
}


function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig: { customFields = {}, tagline } = {} } = context;
  return (
    <Layout title={tagline} description={customFields.description}>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <h1 className={styles.heroProjectTagline}>


            <img
              alt="Awe logo"
              className={styles.heroLogo}
              src={useBaseUrl('img/undraw_freelancer_re_irh4.svg')}
            />



            <span className={styles.heroTitleTextHtml}>
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Become {superapp} vendor`}
              </Translate>
              <br />
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {` Create own {appstore}`}
              </Translate>
              <br />
              <Translate id="homepage.hero.title" description="Home page hero title, can contain simple html tags"
                values={{
                  superapp: (<b><Translate>superapp</Translate></b>),
                  appstore: (<b><Translate>appstore</Translate></b>),
                  apps: (<b><Translate>apps</Translate></b>),
                  bussiness: (<b><Translate>bussiness</Translate></b>)
                }}>
                {`Deploy {apps}`}
              </Translate>

            </span>
          </h1>

          <div style={{ color: 'rgba(255,255,255,0.5)' }} className={styles.indexCtas}>
            <ul>
              <li>
                Superapps can provide a more engaging and powerful experience for users.
              </li>
              <li>
                They are built as platforms used for personalized app experiences through mini-apps.
              </li>
              <li>
                Industries are adopting superapps to gain a competitive advantage.
              </li>
            </ul>

          </div>
          <div className={styles.indexCtas}>
            <div style={{ width: 'auto' }} className="container">
              <div className="row">
                <div className={clsx('col col--4')}>
                  <Link className={styles.singupButton} to={'https://app.realmocean.com/google_login?next='}>
                    <img className={styles['singupButton-img']} src={"https://www-static.cdn.prismic.io/www-static/7b66f955-63dd-41f5-a403-e6727b24d4ea_google-logo.svg"}></img>
                    <span className={styles['singupButton-span']}>
                      <Translate>Sign up with Google</Translate>
                    </span>
                  </Link>
                </div>
                <div className={clsx('col col--4')}>
                  <Link className={styles.singupButton} to={useBaseUrl('docs/')}>
                    <img className={styles['singupButton-img']} src={"https://www-static.cdn.prismic.io/www-static/0a3e37e0-1706-41d5-98d1-854585205a5e_github-logo.svg"}></img>
                    <span className={styles['singupButton-span']}>
                      <Translate>Sign up with Github</Translate>
                    </span>
                  </Link>
                </div>
                <div className={clsx('col col--4')}>
                  <Link className={styles.singupButton1} to={useBaseUrl('docs/')}>
                    <span className={styles['singupButton-span']}>
                      <Translate>Sign up with email</Translate>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*   <div className={clsx(styles.announcement, styles.announcementDark)}>
        <div className={styles.announcementInner}>
          <Translate
            values={{
              migrationGuideLink: (
                <Link to="/docs/guides/v4-migration">
                  <Translate>v3 to v4 migration guide</Translate>
                </Link>
              ),
            }}>
            {`Coming from v3? Check out our {migrationGuideLink}`}
          </Translate>
          .
        </div>
      </div> */}
      <main>


        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        {infos && infos.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {infos.map((props, idx) => (
                  <InfoBox key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
