import React from 'react';
import Header from '../components/Header';
import MainPokes from '../components/MainPokes';

export default class VerTodos extends React.Component {
  render() {
    return (
      <section className="section-seeall">
        <Header />
        <MainPokes />
      </section>
    )
  }
}
