import './post.css'

export default function Post() {
  return (
    <div className='post'>
      <img className='postImg' src="https://www.wallpaperflare.com/static/327/21/210/music-musical-notes-heart-simple-background-wallpaper.jpg" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet </span>
        <hr/>
        <span className="postDate">1 hour ago</span>
      </div>
      <p className='postDesc' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui laboriosam nemo natus ullam possimus est cumque numquam, ab at quia labore non optio eveniet unde praesentium, enim minima perspiciatis ad!
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam neque officia aspernatur, esse possimus dolorum laborum maxime tempore impedit facere qui quisquam explicabo ducimus iste dolorem aperiam aliquam, iusto voluptatem?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et quam ullam vero saepe odio debitis quia similique laborum rem, libero explicabo impedit quaerat, deserunt natus dolore nesciunt perferendis! Vero, illo.s</p>
    </div>
  )
}
