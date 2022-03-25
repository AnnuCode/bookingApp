import {shortISO} from "../utils/data-wrangler"

export default function getData(url){
    return fetch(url)
    .then(resp => {
        if(!resp.ok){
            throw Error("There was a problem fetching data")
        }
        return resp.json()
    })
}

export function getBookings(bookableId, startDate, endDate){

    const url = "https://my-json-server.typicode.com/AnnuCode/JSON/bookings"
    const start = shortISO(startDate)
    const end = shortISO(endDate)
    // const query = `bookableId=${bookableId}&date_gte=${start}&date_lte=${end}`

    const query = `bookableId=${bookableId}` +
    `&date_gte=${start}&date_lte=${end}`
    return getData(`${url}?${query}`)
}
