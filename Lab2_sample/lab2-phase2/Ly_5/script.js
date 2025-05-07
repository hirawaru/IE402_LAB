import 
{
    roof_Renderer, 
    wall_Renderer, 
    stair_Renderer,
    cylinder_Renderer, 
    cone_Renderer, 
    filled_roof_Renderer,
    window_6_Renderer,
    createPillarRenderer
} 
from './shared/renderer.js';

// Define configurations for each pillar type
const pillarConfigs = {
    frontPillar: { width: 0.9, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sidePillar: { width: 0.9, height: 16, depth: 0.6, color: "#fbe5bf", heading: 130 },
    frontCornerPillar: { width: 1, height: 16, depth: 0.6, color: "#fbe5bf", heading: 43 },
    sideCornerPillar: { width: 1, height: 16, depth: 0.6, color: "#fbe5bf", heading: 133 },
    frontFloor1DetailedPillar: { width: 0.8, height: 8, depth: 0.25, color: "red", heading: 43 },
    frontPillarBuidling5: { width: 1.2, height: 26.5, depth: 1.4, color: "red", heading: 43 }
};

// Create renderers using the configuration
const frontPillarRenderer = createPillarRenderer(pillarConfigs.frontPillar);
const sidePillarRenderer = createPillarRenderer(pillarConfigs.sidePillar);
const frontCornerPillarRenderer = createPillarRenderer(pillarConfigs.frontCornerPillar);
const sideCornerPillarRenderer = createPillarRenderer(pillarConfigs.sideCornerPillar);


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




    

    // Pillar
    map.add(createGeoJsonLayer("pillar/pillar-front-4", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-4", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-4", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-4", sideCornerPillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-side-1", sidePillarRenderer));

});




