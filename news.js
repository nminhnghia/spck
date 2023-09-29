const url = 'https://livescore6.p.rapidapi.com/news/v2/list';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9dfa9528dmshafba1bead7565f2p14e380jsndea7869679a7',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};
const news_section = document.getElementById("news_section")

	let news = fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.topStories.length; i++) {

                news_section.innerHTML += "<div class=\"news_item\">" + "<div class=\"card\" style=\"width: 18rem;\"> <img src=\"" + data.topStories[i].mainMedia[0].thumbnail.url + "\" class=\"card-img-top\"> <div class=\"card-body\"> <h5 class=\"card-title\">" + data.topStories[i].title + "</h5> <a target=\"_blank\" href=\"https://livescore.com" + data.topStories[i].url + "\" class=\"btn btn-primary\">Xem chi tiết</a> </div> </div>" + "</div>"

            }
        });
