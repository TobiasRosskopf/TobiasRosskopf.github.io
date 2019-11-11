function showEvents() {
    var data_row =  "";
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        data_row += "<tr><td>" + event.date + "</td><td><a href='" + event.link + "'>" + event.event + "</a></td><td>" + event.location + "</td></tr>";
    };
    document.getElementById("events-data").innerHTML = data_row;
}
