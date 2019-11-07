const eventsData = [
    {
        date: "2019/02/??",
        event: "DAWAKO",
        location: "TU Darmstadt"
    },
    {
        date: "2018/11/??",
        event: "Seminar Starkregen",
        location: "TU München"
    }
];

function showEvents() {
    var data_row =  "";
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        data_row += "<tr><td>" + event.date + "</td><td>" + event.event + "</td><td>" + event.location + "</td></tr>";
    };
    document.getElementById("events-data").innerHTML = data_row;
}
