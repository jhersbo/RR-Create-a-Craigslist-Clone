import React from "react"
import { postings } from "./postings"

function Posting(){
    let postingsFormatted = postings.map((posting)=>{
        return(
            <div>
                <div>
                    <h3>{posting.price}</h3>
                    <img src={posting.imageURL} alt={posting.title}/>
                </div>
                <div>
                    <h2>
                        <a href="*">{posting.title}</a>
                    </h2>
                    <h4>{posting.description}</h4>
                </div>
            </div>
        )
    })
    return(
        <div>
            {postingsFormatted}
        </div>
    )
}

export default Posting