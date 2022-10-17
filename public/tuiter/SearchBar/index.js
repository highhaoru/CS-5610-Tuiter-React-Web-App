const SearchBar = () => {
    return(`
        <div class="d-flex override-bar position-relative align-items-center">
            <i class="fas fa-search position-absolute ps-4">
            </i>
            <input class="rounded-pill ps-5 form-control override-bar pe-auto" placeholder="Search Tuiter">
            <a href="explore-settings.html" class="ps-5 pe-2"><i class="fas fa-cog fa-2x"></i></a>
        </div>
    `);
}

export default SearchBar;