/** @jsx h */
import { h } from 'preact';

export default function WorkPreview({ posts }) {
  return (
    <section>
      <h2 class='cmp-work-preview__section-heading'>Work</h2>
      <ul class='cmp-work-preview'>
        {posts.map((post) => (
          <li>
            <a class='cmp-work-preview__card' href={`/work/${post.uri}`}>
              <h3 class='cmp-work-preview__title'>{post.title}</h3>
              <p class='cmp-work-preview__preview'>{post.preview}</p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
