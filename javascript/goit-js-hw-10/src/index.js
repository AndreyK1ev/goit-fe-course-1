import './styles.css';
import menuTepmlate from './template/menu.hbs';
import dataItem from './data/menu.json';

const refs = {
  postFeed: document.querySelector('.js-menu'),
  chbox: document.querySelector('input[type=checkbox]'),
};

console.log(refs.chbox);

buildPostFeed(dataItem);

function buildPostFeed(posts) {
  const markup = posts.map(post => menuTepmlate(post)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', markup);
}
