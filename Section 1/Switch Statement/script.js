const day = prompt("What day is today");

switch (day) {
    case 'monday':
        console.log("Happy monday")
        break
    case 'tuesday':
        console.log("Happy tuesday")
        break
    case 'wednesday':
    case 'thursday':
        console.log("Happy wednesday and thursday")
    case 'friday':
        console.log("Happy friday")
    case 'saturday':
    case 'sunday':
        console.log("Happy weekend")

    default:
        break
}