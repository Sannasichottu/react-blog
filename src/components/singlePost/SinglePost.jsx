import './singlePost.css'

export default function SinglePost() {
  return (
    <div className='singlePost' >
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/2132180/pexels-photo-2132180.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
        <i className="singlePostIcon fa-solid fa-trash-can"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className='singlePostAuthor' >Author: <b>Sannasi</b></span>
        <span className='singlePostDate' >1 hour ago</span>
      </div>
      <p className='singlePostDesc' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos obcaecati nulla ipsam voluptatibus? Quidem iusto necessitatibus sunt aut illo saepe dignissimos ab eaque dolorem reprehenderit? Impedit error nihil a.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia consequuntur reiciendis incidunt vitae fuga doloribus ipsam eum atque libero culpa enim consequatur nostrum repellat dolore repudiandae, dolores debitis aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia id voluptas atque. Earum rerum maxime assumenda quasi accusantium, distinctio obcaecati enim cum neque officia ipsum. Eum tempore cum doloremque.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa dignissimos obcaecati nulla ipsam voluptatibus? Quidem iusto necessitatibus sunt aut illo saepe dignissimos ab eaque dolorem reprehenderit? Impedit error nihil a.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam officia consequuntur reiciendis incidunt vitae fuga doloribus ipsam eum atque libero culpa enim consequatur nostrum repellat dolore repudiandae, dolores debitis aut!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis officia id voluptas atque. Earum rerum maxime assumenda quasi accusantium, distinctio obcaecati enim cum neque officia ipsum. Eum tempore cum doloremque.
      </p>
    </div>
  )
}
