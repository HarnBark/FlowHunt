const React = require('react');
const Layout = require('./Layout');
const CandidatesList = require('./CandidatesList');

function Main({ title }) {
  return (
    <Layout title={title}>
      <h1>Main page</h1>
      <CandidatesList />
    </Layout>
  );
}

module.exports = Main;
