import RC from "react"

interface Author {
   userId?: number,
   name?: string,
   email?: string
}

interface CardProps {
   title?: string | JSX.Element,
   body?: string,
   isComment?: boolean,
   author: Author
}

const Card = (props: CardProps) =>{
   return(
   <div className={`card ${props.isComment ? "comment" : ""}`}>

      {props.author.userId && <p className="author">{props.author.userId}</p>}
      {props.author.email && <p><strong>{props.author.email}</strong></p>}

      <h2>{props.title}</h2>
      <div>
         <p>
            { props.body }
         </p>
      </div>
   </div>   
   )
}

export default Card