$(document).ready(function(){
    showSkills();
});


function showSkills() {
    for (let i = 0; i < skillsData.length; i++) {
        const skill = skillsData[i];
        table_row = "<tr>"
            + "<td><a href='" + skill.link + "'>" + skill.skill + "</a></td>"
            + "<td>" + skill.started + "</td>"
            + "<td><div class='skillcontainer'><div class='skillbar " + skill.level + ' ' + skill.category + "'>" + skill.level + " %</div></div></td>"
            + "</tr>";
            $("#skills-data").append(table_row);
            $("." + skill.level).css("width", skill.level + "%");
            $("." + skill.category).css("background-color", categoryColor[skill.category]);
        };
}
