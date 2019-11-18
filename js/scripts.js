function showEvents() {
    var table_rows =  "";
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        table_rows += "<tr>" 
            + "<td>" + event.date + "</td>"
            + "<td><a href='" + event.link + "'>" + event.event + "</a></td>"
            + "<td>" + event.location + "</td>"
            + "</tr>";
    };
    document.getElementById("events-data").innerHTML = table_rows;
}


function showSkills() {
var table_rows =  "";
    for (let i = 0; i < skillsData.length; i++) {
        const skill = skillsData[i];
        table_rows += "<tr>"
            + "<td><a href='" + skill.link + "'>" + skill.skill + "</a></td>"
            //+ "<td>" + skill.description + "</td>"
            //+ "<td>" + skill.category + "</td>"
            + "<td>" + skill.started + "</td>"
            + "<td><div class='skillcontainer'><div class='skillbar' id='" + skill.skill + "'>" + skill.level + " %</div></div></td>"
            + "</tr>";
        };
    document.getElementById("skills-data").innerHTML = table_rows;

    for (let i = 0; i < skillsData.length; i++) {
        const skill = skillsData[i];
        document.getElementById(skill.skill).style.width = skill.level + "%";
    }
}
