import 
{
    roof_Renderer, 
    wall_Renderer, 
    stair_Renderer,
    filled_roof_Renderer,
    window_6_Renderer,
    createPillarRenderer,
    createWallWindowRenderer,
    createCylinderRenderer,
    createConeRenderer,
    createWindowRenderer,
    createItemDecorRoof5Renderer
} 
from './shared/renderer.js';

// Define configurations for each pillar type
const pillarConfigs = {
    frontPillar: { width: 0.9, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sidePillar: { width: 0.9, height: 16, depth: 0.6, color: "#fbe5bf", heading: 130 },
    frontCornerPillar: { width: 1, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sideCornerPillar: { width: 1, height: 16, depth: 0.6, color: "#fbe5bf", heading: 133 },
    frontFloor1DetailedPillar: { width: 0.8, height: 8, depth: 0.25, color: "red", heading: 43 },
    frontPillarBuidling5: { width: 1.2, height: 26.5, depth: 1.4, color: "red", heading: 43 },
    frontPillarWindowBuidling5: { width: 0.5, height: 4, depth: 0.5, color: "#ffecc6", heading: 43 },
};

// Define configurations for each wall window type
const wallWindowConfigs = {
    windowRoof5: { width: 1.7, height: 1.5, depth: 0.5, color: "#ffecc6", heading: 41.9 }
};

// Define configurations for each cylinder type
const cylinderConfigs = {
    flagpoleRoof5: { width: 0.2, height: 6, depth: 0.2, color: "red", heading: 43 },
    cylinderConeRoof5: { width: 2, height: 1, depth: 2, color: "red", heading: 43 }
};

// Define configurations for each cone type
const coneConfigs = {
    coneRoof5: { width: 2.8, height: 2, depth: 2.8, color: "black", heading: 43 }
};

// Define configurations for each window roof 5 type
const windowConfigs = {
    windowRoof5: { width: 1.46, height: 2.55, depth: 0.01, heading: 41.9 },
    windowRoof5_fl: { width: 1.8, height: 2.55, depth: 0.01, heading: 41.9 }
};

// Define configurations for each cone type
const decorConfigs = {
    roof5: { width: 1, height: 0.5, depth: 0.1, heading: 41.9 },
};
var string_points = "";

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
        return;
    }
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}

// Create renderers using the configuration
const frontPillarRenderer = createPillarRenderer(pillarConfigs.frontPillar);
const sidePillarRenderer = createPillarRenderer(pillarConfigs.sidePillar);
const frontCornerPillarRenderer = createPillarRenderer(pillarConfigs.frontCornerPillar);
const sideCornerPillarRenderer = createPillarRenderer(pillarConfigs.sideCornerPillar);
const fronPillarBuilding5Renderer = createPillarRenderer(pillarConfigs.frontPillarBuidling5);
const frontWindowPillarBuilding5Renderer = createPillarRenderer(pillarConfigs.frontPillarWindowBuidling5);

const wallWindowRoof5Renderer = createWallWindowRenderer(wallWindowConfigs.windowRoof5);
const flagpoleRoof5Renderer = createCylinderRenderer(cylinderConfigs.flagpoleRoof5);
const cylinderRoof5Renderer = createCylinderRenderer(cylinderConfigs.cylinderConeRoof5);
const coneRoof5Renderer = createConeRenderer(coneConfigs.coneRoof5);

const windowRoof5Renderer = createWindowRenderer(windowConfigs.windowRoof5);
const windowRoof5FLRenderer = createWindowRenderer(windowConfigs.windowRoof5_fl);

const decorRoof5Renderer = createItemDecorRoof5Renderer(decorConfigs.roof5);


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

    view.popup.autoOpenEnabled = false; // Disable the default popup behavior
    view.on("click", function(event) { // Listen for the click event
        view.hitTest(event).then(function(hitTestResults) { // Search for features where the user clicked
        if (hitTestResults.results) {        
            string_points += "[" + event.mapPoint.longitude + ", " + event.mapPoint.latitude + "],"
            copyTextToClipboard(string_points);
            // console.log(list_points);
        }
        })
    });

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
    map.add(createGeoJsonLayer("wall-window-roof5", wallWindowRoof5Renderer));
    map.add(createGeoJsonLayer("wall", wall_Renderer));
    map.add(createGeoJsonLayer("triangle_wall", filled_roof_Renderer));

    // Cylinder
    map.add(createGeoJsonLayer("flagpole-roof5", flagpoleRoof5Renderer));
    map.add(createGeoJsonLayer("cylinder-roof5", cylinderRoof5Renderer));

    // Cone
    map.add(createGeoJsonLayer("cone-roof5", coneRoof5Renderer));

    // Window
    map.add(createGeoJsonLayer("window-roof5", windowRoof5Renderer));
    map.add(createGeoJsonLayer("window-roof5-first-last", windowRoof5FLRenderer));
    map.add(createGeoJsonLayer("window6", window_6_Renderer));


    // Pillar
    map.add(createGeoJsonLayer("pillar/pillar-front-6", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-6", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-6", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-6", sideCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-1", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-front-5", fronPillarBuilding5Renderer));
    map.add(createGeoJsonLayer("pillar/pillar-window-5", frontWindowPillarBuilding5Renderer));

    // Decor
    map.add(createGeoJsonLayer("wall-window-roof5-decor", decorRoof5Renderer));

});




