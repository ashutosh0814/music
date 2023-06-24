
export async function fetchShazam() {
    const headers = {
      'X-RapidAPI-Key': 'b640a28515mshcb47bd58e128ab1p1eb2c6jsnf297d287ab3d',
		  'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
    }

    const response = await fetch ('https://shazam.p.rapidapi.com/shazam-events/list?artistId=73406786&l=en-US&from=2022-12-31&limit=50&offset=0',{
      headers: headers,
    });

    const result = await response.json();

    return result;

}