import React from "react"

export function TweetBoard({ tweets }) {
	return(
		<div>
			<header>
			React Version 1.0
			</header><br/>

			<div className="col">
			  <div className="col-sm-6 col-md-5">
			    <div className="thumbnail">
			      <div className="caption">
			         {Object.keys(tweets).reverse().map(key => {
			         	const tweet = tweets[key]
			         	return <Tweet key={key} tweet={tweet} />
			         })}
			      </div>
			    </div>
			  </div>
			</div>

			<div className="col">
			  <div className="col-sm-6 col-md-4">
			    <div className="thumbnail">
			      <div className="caption">
			       	Nickname : <input className="form-control" type="text" id="name" placeholder="ชื่อเล่น"/>
			       	Images link : <input className="form-control" type="text" id="link" placeholder="อัพโหลดรูป Comming soon" disabled/>
			       	Message : <textarea className="form-control" rows="5" id="comment" placeholder="ข้อความที่จะโพสต์"/>
			       	<button type="button" className="btn btn-primary" onClick={() => SetData()}>โพสต์</button>

			      </div>
			    </div>
			  </div>
			</div>

		</div>
	)
}

function Tweet({ tweet }) {
  return (
    <div
      style={{
        background: "#F2F2F2",
        borderRadius: 4,
        overflow:'hidden',
        color: "#222",
        display: "flex",
        marginBottom: 5
      }}
      className='tweet'
      onClick={() => console.log(tweet)}
    >
      <div
        style={{
          background: `url(${tweet.picture}) center no-repeat`,
          width: 120,
          backgroundSize: "cover",
          flex: "none"
        }}
      />

      <div style={{ padding: 10, flex: "auto",fontSize: "17px"}}>
          Nickname : {tweet.name}
        <div
          style={{ marginTop: 5, paddingTop: 5, borderTop: "1px solid #222" }}
        >
          Message : {tweet.massage}
        </div>
          <br/>
          <br/>
      </div>
    </div>
  )
}
/* global firebase */
let stref = firebase.database().ref('tweets/reactpost')
function SetData() {
	const first = document.getElementById("name").value;
    //const second = document.getElementById("link").value;
    const third = document.getElementById("comment").value;
   
    const Settemp = stref.push();
    Settemp.set({
            name: first,
            picture: "https://cdn4.iconfinder.com/data/icons/rcons-user/32/child_boy-512.png",
            massage: third
 })

 }

export default TweetBoard