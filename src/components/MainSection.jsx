import "./mainsection.css";
import {Link } from "react-router-dom";

export default function MainSection() {

  const Data = [
    {
        id: 'twitter__link',
        title: 'Twitter Link',
        link: 'https://twitter.com/Kodeman_',
    },
    {
        id: 'btn__zuri',
        title: 'Zuri Team',
        link: 'https://training.zuri.team/'
    },
    {
        id: 'books',
        title: 'Zuri Books',
        link: 'http://books.zuri.team'
    },
    {
        id: 'book__python',
        title: 'Python Books',
        link: 'https://books.zuri.team/python-for-beginners?ref_id=Olagunju_Oluwakolade'
    },
    {
        id: 'pitch',
        title: 'Background Check for Coders',
        link: 'https://background.zuri.team'
    },
    {
        id: 'book__design',
        title: 'Design Books',
        link: 'https://books.zuri.team/design-rules'
    },


    
]


  return (
    <div>
         
      <div className="linkcontainer">
{
  Data?.map((item, i) => <a key={i} href={item.link} target='_blank' rel="noreferrer"  id={item.id} 
    className="linkcontainer_btn">
      {item.title}
     </a>)
}

<Link to='/contact' className="linkcontainer_btn" id='contact'>Contact Me</Link>


 </div>
       <div className="socialcontainer">
<img
src='..\images\slack.svg'
 />
 <a href="https://github.com/kodeman2" target='_blank'  >
  <img
  src='..\images\github.svg'
  />
  </a>

       </div>
    </div>
  );
}
