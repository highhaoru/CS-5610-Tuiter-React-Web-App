import PostSummaryList from "../PostSummaryList/index.js";
import NavigationTopbar from "../NavigationTopbar/index.js"
import SearchBar from "../SearchBar/index.js";
import TopicImage from "../TopicImage/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
            ${SearchBar()}
                       <!-- search field and cog -->
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
           ${NavigationTopbar()}
                      <!-- tabs -->
           </ul>
           ${TopicImage()}
           <!-- image with overlaid text -->
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;