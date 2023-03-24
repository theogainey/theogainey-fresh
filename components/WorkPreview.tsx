import { Post } from '../types.d.ts';

type WorkPreviewProps = {
  posts: Post[];
};

export default function WorkPreview({ posts }: WorkPreviewProps) {
  return (
      <ul class='cmp-work-preview'>
        {posts.map((post) => (
          <li>
            <a class='cmp-work-preview__card' href={`/${post.uri}`}>
              <h3 class='cmp-work-preview__title'>{post.title}</h3>
              <p class='cmp-work-preview__preview'>{post.preview}</p>
              <time class='cmp-work-preview__date' dateTime={post.dateTime}>
                {post.date}
              </time>
            </a>
          </li>
        ))}
      </ul>
  );
}
