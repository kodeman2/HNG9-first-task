import "./mainsection.css";

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
        link: 'https://books.zuri.team/python-for-beginners?ref_id=olagunju_oluwakolade'
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
  Data?.map((item, i) => <a key={i} href={item.link} target='_blank' rel="noreferrer" >
    <button id={item.id} 
    className="linkcontainer_btn">
      {item.title}
    </button>  </a>)
}
 </div>
       <div className="socialcontainer">1</div>
    </div>
  );
}
