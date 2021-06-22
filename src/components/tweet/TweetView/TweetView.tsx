import { RouteComponentProps } from "@reach/router";

import { useState, useEffect } from "react";
import { Tweet, useFetch } from '../../../utils'
import { Link} from "@reach/router";
import List from '../List'

import Card from '../../ui/Card'

interface TweetProps extends RouteComponentProps
{
	tweetId?: string;
}

const TweetView = (props: TweetProps) => {

   const {data, loading, error} = useFetch("posts/" + props.tweetId)

   return ( 
     <>
       {loading && "Loading"}
       {data && (
         <div>
           <h1>Author: {data.userId}</h1>
           <Card title={data.title} body={data.body} author={data.userId}/>
           
           <List url={`posts/${props.tweetId}/comments`} isComment={true}/>

           <Link to="/" className="link">
             <button>Home</button>
           </Link>
           <Link to={`/list/u/${data.userId}`}>
             <button>All posts from this author</button>
           </Link>

         </div>
       )}
       {error?.message && error?.message}
     </>
   );
   
}

export default TweetView