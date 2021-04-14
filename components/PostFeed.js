import Link from 'next/link';

export default function PostFeed({ posts, admin }) {
  return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
  // Naive method to calc word count and read time
  const wordCount = post?.content.trim().split(/\s+/g).length;
  const minutesToRead = (wordCount / 100 + 1).toFixed(0);

  return (
      <Link href={`/${post.username}/${post.slug}`}>
    <div className="p-8 my-8 bg-gray-100 border-gray-800 hover:border-blue-800 hover:border-4 rounded-md border">
      
      
        <h2 className="text-2xl">
          <strong>{post.title}</strong>
        </h2>

      <Link href={`/${post.username}`}>
        <a>
          <a>By @{post.username}</a>
        </a>
      </Link>


      <footer className="relative">
        <span>
          {wordCount} words. {minutesToRead} min read
        </span>


        <span className="push-left absolute bottom-0 right-0 ">💙 {post.heartCount || 0} Hearts</span>
      </footer>

      {/* If admin view, show extra controls for user */}
      {admin && (
        <>
          <Link href={`/admin/${post.slug}`}>
            <h3>
              <button className="btn-blue">Edit</button>
            </h3>
          </Link>

          {post.published ? <p className="text-success">Live</p> : <p className="text-danger">Unpublished</p>}
        </>
      )}
    </div>
      </Link>
  );
}