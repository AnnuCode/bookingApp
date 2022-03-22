export default function shortISO(date){
    return date.totoISOString().split("T")[0]
}
