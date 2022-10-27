import { PostProps } from '../types'
import PostPreview from './post-preview'

export default function MoreStories({ posts }: { posts: PostProps[] }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
        more things to read:
      </h2>
      <div className="m-4 flex flex-row">
        {posts.map((post) => (
          <div className="p-4">

          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            />
            </div>
        ))}
      </div>
    </section>
  )
}
