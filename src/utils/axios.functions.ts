import axios from 'axios';

const CallApi = async () => {
    let res = [];
    const req = await axios({
        method: 'GET',
        url: `https://api.punkapi.com/v2/beers/`,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            'Accept': 'application/json'
        },
    })
    res = req.data
    return res
}
export default CallApi