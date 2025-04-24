import Trellocollage from "../assets/TrelloCollage.webp";

const Trellorow=()=>{
    return(
        <div className="trellocontent">
            <div className="trellodes">
            <h1><b>Trello brings all your tasks, teammates,<br/> and tools together</b></h1>
            <p>Keep everything in the same place—even if your team isn’t.</p>
            <form>
				<input type="email" name="email" placeholder="Email"></input>
				<button  >Sign up-it's free</button> 
			</form>
            </div>
            <div >
                <img className="trello-img"src={Trellocollage}></img>
            </div>
        </div>
    )
        

}
export default Trellorow;