import 
{
    roof_Renderer, 
    wall_Renderer, 
    stair_Renderer,
    cylinder_Renderer, 
    cone_Renderer, 
    filled_roof_Renderer,
    createPillarRenderer,
    createWindow6Renderer
} 
from './shared/renderer.js';

// Define configurations for each pillar type
const pillarConfigs = {
    frontPillar: { width: 0.9, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sidePillar: { width: 0.9, height: 16, depth: 0.6, color: "#fbe5bf", heading: 130 },
    frontCornerPillar: { width: 1, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sideCornerPillar: { width: 1, height: 16, depth: 0.6, color: "#fbe5bf", heading: 133 },
    frontFloor1DetailedPillar: { width: 0.8, height: 8, depth: 0.25, color: "red", heading: 43 },
};

// Create renderers using the configuration
const frontPillarRenderer = createPillarRenderer(pillarConfigs.frontPillar);
const sidePillarRenderer = createPillarRenderer(pillarConfigs.sidePillar);
const frontCornerPillarRenderer = createPillarRenderer(pillarConfigs.frontCornerPillar);
const sideCornerPillarRenderer = createPillarRenderer(pillarConfigs.sideCornerPillar);

const window6Configs = {
    front6Window6: {heading: 43},
    behind6Window6: {heading: -135},
    side6Window6: {heading: -45},
    side1Window6: {heading: -46},
    side3Window6: {heading: 135}
}
const front6Window6Renderer = createWindow6Renderer(window6Configs.front6Window6);
const behind6Window6Renderer = createWindow6Renderer(window6Configs.behind6Window6);
const side6Window6Renderer = createWindow6Renderer(window6Configs.side6Window6);
const side1Window6Renderer = createWindow6Renderer(window6Configs.side1Window6);
const side3Window6Renderer = createWindow6Renderer(window6Configs.side3Window6);

require([
    "esri/Map",
    "esri/views/SceneView",
    "esri/layers/GeoJSONLayer",
    "esri/Graphic",
    "esri/geometry/Point",
    "esri/symbols/SimpleMarkerSymbol"
], function (Map, SceneView, GeoJSONLayer, Graphic, Point, SimpleMarkerSymbol) {
    const map = new Map({
        basemap: "topo-vector",
        ground: "world-elevation"
    });

    const view = new SceneView({
        container: "viewDiv",
        map: map,
        camera: {
            position: [106.701172, 10.779905, 200],
            heading: -90,
            tilt: 30
        }
    });

    // Function to create GeoJSONLayer for each cylinder
    function createGeoJsonLayer(name, renderer) {
        return new GeoJSONLayer({
        url: 'data/' + name + '.geojson',
        elevationInfo: {
            mode: "relative-to-ground"
        },
        renderer: renderer
        });
    }

    // Roof
    map.add(createGeoJsonLayer("roof1", roof_Renderer));
    map.add(createGeoJsonLayer("roof2", roof_Renderer));
    map.add(createGeoJsonLayer("roof3", roof_Renderer));
    map.add(createGeoJsonLayer("roof4", roof_Renderer));
    map.add(createGeoJsonLayer("roof5", roof_Renderer));
    map.add(createGeoJsonLayer("roof6", roof_Renderer));

    // Stair
    map.add(createGeoJsonLayer("stair", stair_Renderer));

    // Wall
    map.add(createGeoJsonLayer("wall-roof5", wall_Renderer));
    map.add(createGeoJsonLayer("wall", wall_Renderer));
    map.add(createGeoJsonLayer("triangle_wall", filled_roof_Renderer));

    // Cylinder
    map.add(createGeoJsonLayer("cylinder-roof5", cylinder_Renderer));

    // Cone
    map.add(createGeoJsonLayer("cone-roof5", cone_Renderer));

    //window 6
    map.add(createGeoJsonLayer("window6/window6-front-6", front6Window6Renderer));
    map.add(createGeoJsonLayer("window6/window6-behind-6", behind6Window6Renderer));
    map.add(createGeoJsonLayer("window6/window6-side-6", side6Window6Renderer));
    map.add(createGeoJsonLayer("window6/window6-side-1", side1Window6Renderer));
    map.add(createGeoJsonLayer("window6/window6-side-3", side3Window6Renderer));
    

    // Pillar
    map.add(createGeoJsonLayer("pillar/pillar-front-6", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-6", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-6", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-6", sideCornerPillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-side-1", sidePillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-front-5", frontPillarRenderer));


    // let startPoint = null;
    // let endPoint = null;

    // // Handle map click event to store points
    // view.on("click", (event) => {
    //     const { longitude, latitude } = event.mapPoint;

    //     if (!startPoint) {
    //         startPoint = [longitude, latitude];
    //         alert("Điểm bắt đầu đã được lưu.");
    //     } else if (!endPoint) {
    //         endPoint = [longitude, latitude];
    //         alert("Điểm kết thúc đã được lưu.");
    //     }

    //     if (startPoint && endPoint) {
    //         const points = generatePoints(startPoint, endPoint, 5);
    //         copyToClipboard(points);
    //         alert("Danh sách 7 điểm đã được lưu vào clipboard.");
    //     }
    // });

    // // Function to generate evenly spaced points
    // function generatePoints(start, end, numPoints) {
    //     const [startLng, startLat] = start;
    //     const [endLng, endLat] = end;

    //     const lons = Array.from({ length: numPoints + 2 }, (_, i) =>
    //         startLng + ((endLng - startLng) * i) / (numPoints + 1)
    //     );
    //     const lats = Array.from({ length: numPoints + 2 }, (_, i) =>
    //         startLat + ((endLat - startLat) * i) / (numPoints + 1)
    //     );

    //     return lons.map((lon, index) => [lon, lats[index], 2]);
    // }

    // // Function to copy points to clipboard
    // function copyToClipboard(points) {
    //     const geojson = {
    //         type: "FeatureCollection",
    //         features: points.map(([lon, lat, alt]) => ({
    //             type: "Feature",
    //             geometry: { type: "Point", coordinates: [lon, lat, alt] },
    //             properties: {}
    //         }))
    //     };
    //     navigator.clipboard.writeText(JSON.stringify(geojson)).then(() => {
    //         console.log("GeoJSON copied to clipboard!");
    //     });
    // }
});

