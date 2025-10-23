const fetch = require('node-fetch'); // Imports library node-fetch for HTTP  

async function getPlanesAboveRomania(){
    const url = 'https://api.adsb.lol/v2/lat/45.94/lon/25.00/dist/400';
    const response = await fetch(url);
    const data = await response.json();

    //return only basic info for each plane

    return data.ac.map(plane =>({
        callsign: plane.call, //the plane code (Ex: WZZZ5BS)
        altitude: plane.alt_baro, 
        latitude: plane.lat,
        longitude: plane.lon,
        speed: plane.gs //ground speed in nodes
    }));
}

async function main(){
    const planes = await getPlanesAboveRomania();
    console.log(`Avioane deasupra Romaniei : ${planes.length}`)
    console.log(planes.slice(0,10));
}

main();