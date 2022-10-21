const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
<!--                <a class="list-group-item" href="/">-->
<!--                    <i class="fab fa-twitter"></i></a>-->
            <!-- continue the rest of the list -->
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fab fa-twitter"></i></a>
           ${active === 'home' ? `            <a class="nav-link override-list list-group-item list-group-item-action active" href="../HomeScreen/index.html"><i class="fas fa-home"></i><span class="d-none d-xl-inline d-lg-none p-2">Home</span></a>
` : `            <a class="nav-link override-list list-group-item list-group-item-action " href="../HomeScreen/index.html"><i class="fas fa-home"></i><span class="d-none d-xl-inline d-lg-none p-2">Home</span></a>
`}

            ${active === 'explore' ? `<a class="nav-link override-list list-group-item list-group-item-action active" href="../ExploreScreen/index.html"><i class="fas fa-lg fa-hashtag"></i><span class="d-none d-xl-inline d-lg-none p-2">Explore</span> </a>
` : ` <a class="nav-link override-list list-group-item list-group-item-action " href="../ExploreScreen/index.html"><i class="fas fa-lg fa-hashtag"></i><span class="d-none d-xl-inline d-lg-none p-2">Explore</span> </a>
`}
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fas fa-bell"></i><span class="d-none d-xl-inline d-lg-none p-2">Notifications</span></a>
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fas fa-envelope d-inline-block"></i><span class="d-none d-xl-inline d-lg-none p-2">Messages</span></a>
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fas fa-bookmark d-inline-block"></i><span class="d-none d-xl-inline d-lg-none p-2">Bookmarks</span></a>
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fas fa-list"></i><span class="d-none d-xl-inline d-lg-none p-2">Lists</span></a>
            <a class="nav-link override-list list-group-item list-group-item-action " href="profile.html"><i class="fas fa-user"></i><span class="d-none d-xl-inline d-lg-none p-2"> Profile</span></a>
            <a class="nav-link override-list list-group-item list-group-item-action " href="#"><i class="fa-regular fa-circle-ellipsis"></i><i class="fas fa-ellipsis-h"></i><span class="d-none d-xl-inline d-lg-none p-2"> More</span></a>
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;