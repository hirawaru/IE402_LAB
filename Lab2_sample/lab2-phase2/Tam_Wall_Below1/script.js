import 
{
    roof_Renderer, 
    wall_Renderer, 
    stair_Renderer,
    cylinder_Renderer, 
    cone_Renderer, 
    filled_roof_Renderer,
    window_6_Renderer,
    createPillarRenderer,
    wall_below_Renderer,
    line_Renderer,
    line_below_Renderer, 
    line_between_Renderer,
    createStatueRenderer
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

// Define configurations for each statue type
const statueConfigs = {
    frontStatue: {heading: 45},
    sideLeftStatue: {heading: 134},
    sideRightStatue: {heading: -47},
    behindStatue: {heading: -135}
}

const frontStatueRenderer = createStatueRenderer(statueConfigs.frontStatue);
const sideLeftStatueRenderer = createStatueRenderer(statueConfigs.sideLeftStatue);
const sideRightStatueRenderer = createStatueRenderer(statueConfigs.sideRightStatue);
const behindStatueRenderer = createStatueRenderer(statueConfigs.behindStatue);

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


    map.add(createGeoJsonLayer("window6", window_6_Renderer));

    // Pillar
    map.add(createGeoJsonLayer("pillar/pillar-front-6", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-6", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-6", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-6", sideCornerPillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-side-1", sidePillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-front-5", frontPillarRenderer));

    // 3
    map.add(createGeoJsonLayer("pillar/pillar-front-4", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-4", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-4", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-6", sideCornerPillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-side-1 copy", sidePillarRenderer));
    
    // Wall and line
    map.add(createGeoJsonLayer("wall_line1/wall_front_right", wall_below_Renderer));
    map.add(createGeoJsonLayer("wall_line1/wall_front_left", wall_below_Renderer));

    map.add(createGeoJsonLayer("wall_line1/line_front_right", line_Renderer));
    map.add(createGeoJsonLayer("wall_line1/line_front_left", line_Renderer));

    map.add(createGeoJsonLayer("wall_line1/linefloor_right", line_Renderer));
    map.add(createGeoJsonLayer("wall_line1/linefloor_left", line_Renderer));

    map.add(createGeoJsonLayer("wall_line1/line_below_floor1_right", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line1/line_below_floor1_left", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line1/line_below_floor2_right", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line1/line_below_floor2_left", line_below_Renderer));

    map.add(createGeoJsonLayer("wall_line1/line_between_right", line_between_Renderer));
    map.add(createGeoJsonLayer("wall_line1/line_between_left", line_between_Renderer));

    //Statue
    map.add(createGeoJsonLayer("wall_line1/statue_front", frontStatueRenderer));
    map.add(createGeoJsonLayer("wall_line1/statue_side_left", sideLeftStatueRenderer));
    map.add(createGeoJsonLayer("wall_line1/statue_side_right", sideRightStatueRenderer));
    map.add(createGeoJsonLayer("wall_line1/statue_behind", behindStatueRenderer));
});




