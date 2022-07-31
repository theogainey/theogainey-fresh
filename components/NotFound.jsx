/** @jsx h */
import { h } from 'preact';

export default function NotFound() {
  return (
    <div class='cmp-not-found'>
      <h1>404 ERROR</h1>
      <p>
        Sorry, something went wrong on our end, and we can't seem to find the
        page you're looking for.
      </p>
    </div>
  );
}
