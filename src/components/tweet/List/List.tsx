import { useEffect, useState } from 'react'
import { Link,useMatch} from "@reach/router";
import { useFetch } from "../../../utils";
import Card from "../../ui/Card";
import { RouteComponentProps } from "@reach/router"

interface TweetListProps extends RouteComponentProps {
   url?: string,
   userId?: string,
   isComment?: boolean
}


const List = (props: TweetListProps) => {

   const match = useMatch('/list/u/:userId');

   let url = props.url

   if(props.userId){ url = "posts?userId=" + props.userId }

  const { data, loading, error } = useFetch(url);
  
  const [isListing, setIsListing] = useState(false)

  useEffect(() => {
    if(match) {
       setIsListing(true)
    }
  }, [])


  return (
    <>
    {isListing && <h1>Listing - Author {props.userId}</h1>}

    {loading && "loading"}

    { props.isComment && <h3 className="comment">Comments</h3> }

    {data &&
      data.map((tw) => {
        return (
            <Card
              author={{email: tw.email, userId: tw.userId}}
              key={tw.id}
              title={<Link to={`/tweet/${tw.id}`}>{tw.title}</Link>}
              body={tw.body}
              isComment={props.isComment}
            />
        );
      })}
      
      {isListing && <Link to="/" className="link"> <button>Home</button></Link>}

      {error?.message && error?.message}
    </>
  );
};

export default List;
