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
    //$("#skills-data").hide();
    
    for (let i = 0; i < skillsData.length; i++) {
        const skill = skillsData[i];
        let bar = document.getElementById(skill.skill);

        // Set width
        bar.style.width = skill.level + "%";

        // Set color
        let color = categoryColor[skill.category]
        if (color == null) {
            color = categoryColor["default"];
        }
        bar.style.backgroundColor = color;
    }
}


$(function(){
    $("#skills-data").hide();
})

