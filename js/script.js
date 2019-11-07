const eventsData = [

    {
        date: "21.02.2019",
        event: "DAWAKO - Darmstädter wasserbau- und wasserwirtschaftliches Kolloquium",
        location: "TU Darmstadt",
        link: "https://www.iww.tu-darmstadt.de/iww/foerderverein_2/dawako/2019/dakawo_4.de.jsp"
    },
    {
        date: "06.06.2018",
        event: "Starkregen und Sturtzfluten - Erfassen, Erforschen, Evaluieren",
        location: "TU München"
    },
    {
        date: "30.11.2017",
        event: "Jahreshauptversammlung der BWK Regionalgruppe",
        location: "Darmstadt"
    },
    {
        date: "22.11.2017",
        event: "Niederschlagsradardaten",
        location: "BEW Essen"
    },
    {
        date: "17.02.2017",
        event: "38. Hochschulgruppentreffen Simulation",
        location: "TU Darmstadt"
    },
    {
        date: "16.02.2017",
        event: "DAWAKO - Darmstädter wasserbau- und wasserwirtschaftliches Kolloquium",
        location: "TU Darmstadt",
        link: "https://www.iww.tu-darmstadt.de/iww/foerderverein_2/dawako/2017/dakawo_2017.de.jsp"
    },
    {
        date: "22.11.2016",
        event: "8. HochwasserTag der DWA",
        location: "Köln"
    },
    {
        date: "04.02.2016",
        event: "Students meet Business",
        location: "TU Darmstadt"
    },
    {
        date: "26.01.2016",
        event: "FME Schulung (3 Tage) Conterra",
        location: "Darmstadt"
    },
    {
        date: "12.03.2015",
        event: "22. Geotechnik-Kolloquium",
        location: "TU Darmstadt "
    },
    {
        date: "28.11.2014",
        event: "Jahrestagung Stiftung Bauwesen 'Hochwasser und Risiko'",
        location: "Stuttgart"
    },
    {
        date: "20.03.2014",
        event: "21. Geotechnik-Kolloquium",
        location: "TU Darmstadt"
    },
    {
        date: "27.11.2013",
        event: "STUVA-Tunnelbau-Tagung",
        location: "Stuttgart"
    },
    {
        date: "07.11.2013",
        event: "DWA Landestagung",
        location: "Mainz"
    },
    {
        date: "21.03.2013",
        event: "20. Geotechnik-Kolloquium",
        location: "TU Darmstadt"
    },
    {
        date: "26.09.2012",
        event: "Baugrundtagung DGGT",
        location: "Mainz"
    },
    {
        date: "27.04.2012",
        event: "SIFE Students meet Enterprises",
        location: "BAYER Leverkusen"
    },
    {
        date: "07.05.2011",
        event: "SIFE National Competition",
        location: "Telekom Bonn"
    }
];



function showEvents() {
    var data_row =  "";
    for (let i = 0; i < eventsData.length; i++) {
        const event = eventsData[i];
        data_row += "<tr><td>" + event.date + "</td><td><a href='" + event.link + "'>" + event.event + "</a></td><td>" + event.location + "</td></tr>";
    };
    document.getElementById("events-data").innerHTML = data_row;
}
