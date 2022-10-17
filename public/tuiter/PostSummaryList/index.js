import posts from './posts.js'
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
   ${
        posts.map(post => {
            return(PostSummaryItem(post));
        }).join('')
    }
  
   `)
}

export default PostSummaryList;