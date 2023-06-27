function moment() {
    function locale() {
        return 'en'
    }
    let date = new Date();
    let secund = date.getSeconds();
    let hours = (Math.abs(12 - date.getHours())) + ':' + (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes());
    let partDay = date.getHours() >= 12 ? 'PM' : 'AM'
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'December'];
    let weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    function format(key) {
        switch (key) {
            case 'LT':
                return hours + ' ' + partDay;
                break;
            case 'LTS':
                return hours + ':' + secund + ' ' + partDay;
                break;
            case 'L':
                return day + '/' + month + '/' + year;
                break;
            case 'LL':
                return months[month] + ' ' + day + ',' + year;
                break;
            case 'LLL':
                return months[month] + ' ' + day + ',' + year + ' ' + hours + ' ' + partDay;
                break;
            default:
                alert("Date isn't exist!");
                break;
        }
    }
    return {
        format,
        locale
    }
}

let value = prompt("'LT', 'LTS', 'L', 'LL', 'LLL' date formatlaridan birini tanlang!");

alert(moment().format(`${value}`))