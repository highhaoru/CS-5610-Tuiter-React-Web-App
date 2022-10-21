const NavigationTopbar = () => {
    return (`
        <ul class="nav nav-tabs override-bd">
            <li class="nav-item">
                <a class="nav-link active override-bt" href="for-you.html">
                    For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link override-bt" href="trending.html">
                    Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link override-bt" href="news.html">
                    News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link override-bt" href="sports.html">
                    Sports</a>
            </li>
            <li class="nav-item nav-end d-none d-sm-none d-md-block ">
                <a class="nav-link override-bt" href="entertainment.html">
                    Entertainment</a>
            </li>
        </ul>
    `)
}

export default NavigationTopbar;