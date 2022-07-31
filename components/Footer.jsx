/** @jsx h */
import { h } from 'preact';

export default function Footer() {
  return (
    <footer class='cmp-footer '>
      <a
        href='https://github.com/theogainey'
        target='blank'
        class='cmp-footer__link hover-highlight'
      >
        GitHub
      </a>
      <a
        href='https://codepen.io/theogainey'
        target='blank'
        class='cmp-footer__link cmp-footer__link--odd hover-highlight'
      >
        CodePen
      </a>
      <a
        href='https://twitter.com/GaineyTheo'
        target='blank'
        class='cmp-footer__link hover-highlight'
      >
        Twitter
      </a>
    </footer>
  );
}
