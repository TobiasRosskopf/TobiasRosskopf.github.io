$(document).ready(function(){
    showEvents();
});


function showEvents() {
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        table_row = "<tr>" 
            + "<td>" + event.date + "</td>"
            + "<td><a href='" + event.link + "'>" + event.event + "</a></td>"
            + "<td>" + event.location + "</td>"
            + "</tr>";
            $("#events-data").append(table_row);
    };
}
