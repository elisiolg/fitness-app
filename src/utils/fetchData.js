export const exerciseOptions = {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': '28f14c3ef2mshb10917dbd794c3fp15f6a7jsn05898bbf1219',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json()

    return data
}