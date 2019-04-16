var mymap = L.map('mapid').setView([42.357362, -71.065042 ], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYWJsZWljaGZlbGQiLCJhIjoiY2p1azZ3dGoxMXN2ZjQ1bzI0Z3U5aDFqZCJ9.aprixnlrY_kPCaj-4H3XSw'
}).addTo(mymap);




var twelveSeventy = L.marker([42.344877, -71.096308]).addTo(mymap);
twelveSeventy.bindPopup("<b>1270</b><br><i>1270 Boylston St.</i><br>Opened: 1970<br>Closed: 1988");
var avalon = L.marker([42.347684, -71.095685]).addTo(mymap);
avalon.bindPopup("<b>Avalon</b><br><i>15 Lansdowne St.</i><br>Opened: 1992<br>Closed: 2007");
var axis = L.marker([42.347584, -71.095466]).addTo(mymap);
axis.bindPopup("<b>Axis</b><br><i>13 Lansdowne St.</i><br>Opened: 1992<br>Closed: 2007");
var bobbys = L.marker([42.364232, -71.059386]).addTo(mymap);
bobbys.bindPopup("<b>Bobby's</b><br><i>69 Canal St.</i><br>Opened: 1990<br>Closed: 1995");
var eagle1 = L.marker([42.342301, -71.099067]).addTo(mymap);
eagle1.bindPopup("<b>The Boston Eagle</b><br><i>88 Queensberry St.</i><br>Opened: 1983<br>Moved to 520 Tremont around 1985");
var eagle2 = L.marker([42.344748, -71.070066 ]).addTo(mymap);
eagle2.bindPopup("<b>The Boston Eagle</b><br><i>520 Tremont St.</i><br>Moved from 88 Queensberry St. around 1985<br>Still open");
var buddies1 = L.marker([42.349712, -71.080457 ]).addTo(mymap);
buddies1.bindPopup("<b>Buddies</b><br><i>733 Boylston St.</i><br>Opened: 1979<br>Moved to 51 Stuart St. in 1986");
var buddies2 = L.marker([42.351255, -71.064220 ]).addTo(mymap);
buddies2.bindPopup("<b>Buddies</b><br><i>51 Stuart St.</i><br>Moved from 733 Boylston St. in 1986<br>Closed: 1992");
var manray = L.marker([42.363565, -71.102208]).addTo(mymap);
manray.bindPopup("<b>Campus Manray</b><br><i>21 Brookline St., Cambridge</i><br>Opened: 1983<br>Closed: 2005");
var casablanca = L.marker([42.373655, -71.121547 ]).addTo(mymap);
casablanca.bindPopup("<b>Casablanca</b><br><i>40 Brattle St., Cambridge</i><br>Opened: 1955<br>Closed: 2012");
var chaps1 = L.marker([42.348714, -71.078241]).addTo(mymap);
chaps1.bindPopup("<b>Chaps</b><br><i>27 Huntington Ave.</i><br>Opened: 1975<br>Moved to 100 Warrenton St. in 1997");
var chaps2 = L.marker([42.350749, -71.066248]).addTo(mymap);
chaps2.bindPopup("<b>Chaps</b><br><i>100 Warrenton St.</i><br>Moved from 27 Huntington Ave. in 1997<br>Closed: ?");
var citadel = L.marker([42.353291, -71.063377]).addTo(mymap);
citadel.bindPopup("<b>Citadel</b><br><i>22 Avery St.</i><br>Opened: 1970s<br>Closed: 1988");
var citi = L.marker([42.347394, -71.095862]).addTo(mymap);
citi.bindPopup("<b>Citi</b><br><i>15 Lansdowne St.</i><br>Opened: 1988<br>Closed: 1992");
var communityClub = L.marker([42.351997, -71.069396 ]).addTo(mymap);
communityClub.bindPopup("<b>The Community Club/The Bar/Skipper's</b><br><i>252 Boylston St.</i><br>Opened: 1976<br>Closed: 1984");
var darts = L.marker([42.346523, -71.075324]).addTo(mymap);
darts.bindPopup("<b>Darts</b><br><i>111 Dartmouth St.</i><br>Opened: 1978<br>Closed: 1979");
var jacks = L.marker([42.368575, -71.110210]).addTo(mymap);
jacks.bindPopup("<b>Jacks</b><br><i>952 Massachusetts Ave., Cambridge</i><br>Opened: 1960s<br>Closed: 1987");
var marquee = L.marker([42.364003, -71.102040]).addTo(mymap);
marquee.bindPopup("<b>Marquee</b><br><i>512 Massachusetts Ave., Cambridge</i><br>Opened: 1970s<br>Closed: 1980s");
var maxSecurity = L.marker([42.344790, -71.096169]).addTo(mymap);
maxSecurity.bindPopup("<b>Max Security</b><br><i>1270 Boylston St. (basement)</i><br>Opened: 1988<br>Closed: 1992");
var napoleon = L.marker([42.349691, -71.069229]).addTo(mymap);
napoleon.bindPopup("<b>The Napoleon Club</b><br><i>52 Piedmont St.</i><br>Opened: 1952<br>Closed: 1998");
var obsessions = L.marker([42.363370, -71.060758]).addTo(mymap);
obsessions.bindPopup("<b>Obsessions</b><br><i>The intersection of Merrimac and Portland Streets</i><br>Opened: 1989<br>Closed: 1991");
var paradise = L.marker([42.360787, -71.096379 ]).addTo(mymap);
paradise.bindPopup("<b>Paradise</b><br><i>180 Massachusetts Ave., Cambridge</i><br>Opened: 1981<br>Closed: 2018");
var pipeline = L.marker([42.347022, -71.095221]).addTo(mymap);
pipeline.bindPopup("<b>Pipeline</b><br><i>10 Lansdowne St.</i><br>Opened: 1980<br>Closed: 1982");
var playland = L.marker([42.352380, -71.061803]).addTo(mymap);
playland.bindPopup("<b>Playland</b><br><i>25 Essex St.</i><br>Opened: 1937<br>Closed: 1988");
var prelude = L.marker([42.350679, -71.077377]).addTo(mymap);
prelude.bindPopup("<b>Prelude</b><br><i>271 Dartmouth St.</i><br>Opened: 1982<br>Closed: 1988");
var rainbowRoom = L.marker([42.347023, -71.095410]).addTo(mymap);
rainbowRoom.bindPopup("<b>The Rainbow Room</b><br><i>12 Lansdowne St.</i><br>Opened: 1975<br>Closed: 1978");
var somewhere = L.marker([42.357080, -71.052771]).addTo(mymap);
somewhere.bindPopup("<b>Somewhere</b><br><i>295 Franklin St.</i><br>Opened: 1976<br>Closed: 1982");
var sporters = L.marker([42.361011, -71.066664]).addTo(mymap);
sporters.bindPopup("<b>Sporters</b><br><i>228 Cambridge St.</i><br>Opened: 1957<br>Closed: 1995");
var cave = L.marker([42.352361, -71.065576]).addTo(mymap);
cave.bindPopup("<b>The Cave</b><br><i>114 Boylston St.</i><br>Opened: 1945<br>Closed: 1970s");
var saints = L.marker([42.358402, -71.054498]).addTo(mymap);
saints.bindPopup("<b>The Saints</b><br><i>33 Broad St.</i><br>Opened: 1973<br>Closed: 1980");
var fritz = L.marker([42.346955, -71.070646]).addTo(mymap);
fritz.bindPopup("<b>Uncle Charlie's Rustlers/FRITZ</b><br><i>26 Chandler St.</i><br>Opened: 1980<br>Closed: 1982");

/*
var barName = L.marker([la.titude, -lo.ngitude]).addTo(mymap);
barName.bindPopup("<b>Bar Name</b><br><i>XX Address St.</i><br>Opened: YEAR<br>Closed: YEAR");
*/
