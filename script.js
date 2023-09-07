const url = 'https://livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer&Timezone=7';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a9dfa9528dmshafba1bead7565f2p14e380jsndea7869679a7',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};
const matches_section = document.getElementById("matches_section")

	let news = fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.Stages.length; i++) {
                for (let j = 0; j < data.Stages[i].Events.length; j++) {
                    matches_section.innerHTML += "<tr><th scope=\"row\">" + (i + 1) + "</th><td>" + data.Stages[i].Snm + "</td><td>" + data.Stages[i].Cnm + "</td><td></td><td>" + data.Stages[i].Events[j].T1[0].Nm + " VS " + data.Stages[i].Events[j].T2[0].Nm + "</td>"
                }
            }
        });
    console.log(news);
