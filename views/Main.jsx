const React = require('react');
const Layout = require('./Layout');
const CandidatesList = require('./CandidatesList');

const LeftNavigation = require('./LeftNavigation');

function Main({ title, data, user }) {
  return (
    <Layout title={title} user={user}>
      <div className="container">
        <LeftNavigation data={data} />
        <CandidatesList candidatesDB={data} />
      </div>
    </Layout>
  );
}

module.exports = Main;
