import "./mainsection.css";
export default function MainSection() {
const data = {

 name: 'Olagunju Oluwakolade',
 id: 'HNG-',


}

  return (
    <div className="topcontainer">
      <div className="topmain">
        <div className="main">
          <div className="profilecontainer">
            <div id="profile_img">

             </div>
             <div className="profiletext">
              <p>{data.name}</p>
             </div>
             <div className="profileavatar">

             </div>
          </div>
          <div className="linkcontainer">1 2 3 3 3</div>
        
        
           
        </div>
      </div>
      <div className="socialcontainer">1</div>
    </div>
  );
}
