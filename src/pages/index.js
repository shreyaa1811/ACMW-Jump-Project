import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import ProfileContent from '@site/docs/profile.md';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="ACMW-Jump Mentorship Project">
      <main className="container margin-top--lg margin-bottom--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            <ProfileContent />
          </div>
        </div>
      </main>
    </Layout>
  );
}