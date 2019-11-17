function showEvents() {
    var data_row =  "";
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        data_row += "<tr><td>" + event.date + "</td><td><a href='" + event.link + "'>" + event.event + "</a></td><td>" + event.location + "</td></tr>";
    };
    document.getElementById("events-data").innerHTML = data_row;
}


function showSkills() {
var data_row =  "";
    for (let i = 0; i < skillsData.length; i++) {
        const skill = skillsData[i];
        data_row += "<tr><td><a href='" + skill.link + "'>" + skill.skill + "</a></td><td>" + skill.category + "</td><td>" + skill.started + "</td><td>" + skill.level + " %</td></tr>";
    };
    document.getElementById("skills-data").innerHTML = data_row;
}