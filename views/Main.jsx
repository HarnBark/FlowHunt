const React = require('react');
const Layout = require('./Layout');
const CandidatesList = require('./CandidatesList');
const Navigation = require('./Navigation');
const LeftNavigation = require('./LeftNavigation');

function Main({ title, candidatesDB }) {
  return (
    <Layout title={title}>
      <Navigation />
      <div className="container">
        <LeftNavigation />

        <CandidatesList candidatesDB={candidatesDB} />
      </div>
    </Layout>
  );
}

module.exports = Main;
