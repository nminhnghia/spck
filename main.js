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
                news_section.innerHTML += "<div class=\"d-flex p-2 justify-content-center align-items-center flex-column\">" + "<a target=\"_blank\" href=\"https://livescore.com" + data.topStories[i].url + "\"><img width=\"300px\" src=\"" + data.topStories[i].mainMedia[0].thumbnail.url + "\"></a><a target=\"_blank\" href=\"https://livescore.com" + data.topStories[i].url + "\"><h6 style=\"width: 300px;\">" + data.topStories[i].title + "</h6></a>" + "</div>"
            }
        });
    console.log(news);
