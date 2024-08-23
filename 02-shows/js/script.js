import { searchShows } from "./api.js";

const txtSearch = document.getElementById("txtSearch");
const lstShows = document.getElementById("lstShows");
let timer = null;

const loadShows = async (query) => {
	const shows = await searchShows(query);

	let strShows = "";

	shows.forEach((item) => {
		const { name, image } = item.show;
		strShows += `<div class="col">
                <div class="card">
                    <img src="${image?.medium}" class="card-img-top" alt="${name}" />
                    <div class="card-body">
                        <h5 class="card-title">${name}</h5>
                    </div>
                </div>
            </div>`;
	});

	lstShows.innerHTML = strShows;
};

txtSearch.addEventListener("input", (e) => {
	const query = e.target.value;

	if (query.length < 3) {
		lstShows.innerHTML = "";
		return;
	}

    // It will create a delay for the search after we finished typing
	if (timer) clearTimeout(timer);

	timer = setTimeout(() => {
		loadShows(query);
	}, 500);
});
