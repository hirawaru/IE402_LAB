import
{
    roof_Renderer,
    wall_Renderer,
    stair_Renderer,
    cylinder_Renderer,
    cone_Renderer,
    filled_roof_Renderer,
    createPillarRenderer,
    createWindowRenderer,
    wall_below_Renderer,
    line_Renderer,
    line_below_Renderer,
    line_between_Renderer,
    createStatueRenderer,
    createItemDecorRoof5Renderer,
    createCylinderRenderer,
    createConeRenderer,
    createWallWindowRenderer,
    createWindowRoof5Renderer,
    createMainGateRenderer,
    createWindowF1Renderer,
    createGLBRenderer,
    createWindowCornerFloor2Renderer,
} 
from './shared/renderer.js';

//Start: Define configuration for renderers
// Pillar
const pillarConfigs = {
    frontPillar: {width: 0.9, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43},
    sidePillar: {width: 0.9, height: 16, depth: 0.6, color: "#fbe5bf", heading: 130},
    frontCornerPillar: {width: 1, height: 16.2, depth: 0.6, color: "#fbe5bf", heading: 43},
    sideCornerPillar: {width: 1, height: 16, depth: 0.6, color: "#fbe5bf", heading: 133},
    frontPillarBuidling5: {width: 1.2, height: 26.5, depth: 1.2, color: "#fbe5bf", heading: 43},
    frontPillarWindowBuidling5: {width: 0.5, height: 5, depth: 0.5, color: "#ffecc6", heading: 43},
};

// Define configurations for each wall window type
const wallWindowConfigs = {
    windowRoof5: {width: 1.7, height: 1.9, depth: 0.5, color: "#ffecc6", heading: 41.9},
    windowSideRoof5: { width: 2.3, height: 1.9, depth: 1.95, color: "#ffecc6", heading: 41.9 },
};

// Define configurations for each cylinder type
const cylinderConfigs = {
    flagpoleRoof5: {width: 0.2, height: 6, depth: 0.2, color: "red", heading: 43},
    cylinderConeRoof5: {width: 2, height: 1, depth: 2, color: "red", heading: 43}
};

// Define configurations for each cone type
const coneConfigs = {
    coneRoof5: {width: 2.8, height: 2, depth: 2.8, color: "black", heading: 43}
};

// Define configurations for each cone type
const decorConfigs = {
    roof5: {width: 1.2, height: 0.6, depth: 0.1, heading: 41.9},
};

// Define configurations for each window roof 5 type
const windowConfigs = {
    windowRoof5: {width: 1.46, height: 3.5, depth: 0.01, heading: 41.9},
    windowRoof5_fl: {width: 1.8, height: 3.5, depth: 0.01, heading: 41.9},
    windowSideRoof5: { width: 2.1, height:3.5, depth: 0.01, heading: 41.9 }
};

// Window heading
const windowHeadingConfig = {
    front6: 43.5,
    front4: 45,
    behind6: -136,
    behind4: -137,
    side6: -49,
    side1: -49,
    side3: 134.5,
    side4: 133
}


// Window href
const windowHrefConfig = {
    floor1: "data/mesh_object/window_floor1.glb",
    floor1front6 : "data/mesh_object/window_floor1/window_floor1_1.glb",
    floor1behind6: "data/mesh_object/window_floor1/window_floor1_2.glb",
    floor1behind4: "data/mesh_object/window_floor1/window_floor1_3.glb",
    floor2: "data/mesh_object/window7/window_floor2_front6.glb",
    floor2_front4: "data/mesh_object/window7/window_floor2_front4.glb",
    floor2_behind4: "data/mesh_object/window7/window_floor2_behind4.glb",
    floor2_behind6: "data/mesh_object/window7/window_floor2_behind6.glb",
    floor2_side1: "data/mesh_object/window7/window_floor2_side1.glb",
    floor2_side3: "data/mesh_object/window7/window_floor2_side3.glb",
    floor2_side4: "data/mesh_object/window7/window_floor2_side4.glb",
    floor2_side6: "data/mesh_object/window7/window_floor2_side6.glb",
    floor3: "data/mesh_object/windowroof5.glb"
}

//Window pitch
const windowRollConfig = {
    none: 0,
    front4: 1.2,
    behind4: -0.6,
    side3: 0.5,
    side1: -0.3,
    behind6: 0.5,
    side6: -1,
    side4: 1
}

//Window width
const windowWidthConfig = {
    front6: 2.2,
    behind6: 2.4,
    side1: 2.2,
    side3: 2.2,
    behind4: 2.35,
    side4: 2.6,
    front4: 2.4
}
//Window height
const windowHeightConfig = {
    front6: 2.85,
    behind6: 2.7,
    side1: 2.95,
    side3: 2.8,
    behind4: 2.85,
    side4: 2.76,
    front4: 2.83
}

//tatue type
//Statue type
const statueConfigs = {
    frontStatue: {heading: 45},
    sideLeftStatue: {heading: 134},
    sideRightStatue: {heading: -47},
    behindStatue: {heading: -135}
}

// Floor 1 wall for window
const windowWallF1Configs = {
    front_6: {width: 32, height: 0.7, depth: 0.5, color: "#fbe5bf", heading: 43},
    front_4: {width: 28, height: 0.7, depth: 0.3, color: "#fbe5bf", heading: 43, roll: 2.1},
    behind_6: {width: 15, height: 0.7, depth: 0.2, color: "#fbe5bf", heading: 43.5, roll: -1.5},
    behind_4: {width: 18, height: 0.7, depth: 0.3, color: "#fbe5bf", heading: 43.5, roll: 1.5},
    side_46: {width: 30, height: 0.5, depth: 0.3, color: "#fbe5bf", heading: 133},
    side_13: {width: 30, height: 0.7, depth: 0.3, color: "red", heading: 133, roll: 1.5},
}

// Main Gate
const mainGateHrefConfig = {
    gateFloor0: "data/mesh_object/main_gate/gate_floor0.glb",
    gateFloor1: "data/mesh_object/main_gate/gate_floor1.glb",
    gateFloor2: "data/mesh_object/main_gate/gate_floor2.glb",
    gateMiddle: "data/mesh_object/main_gate/gate_middle.glb"
}
const mainGateHeadingConfigs = {
    gateFloor0: 42.5,
    gateFloor1: 42.5,
    gateFloor2: 42.5,
    gateMiddle: 42.5
}

// roof line for foor 2, 3
const glbRoof5HrefConfig = {
    side: "data/mesh_object/roof5_long_detailed_line.glb",
    behind: "data/mesh_object/roof5_long_detailed_line.glb",
    front: "data/mesh_object/roof5_detailed_line.glb",
    sideBetween: "data/mesh_object/roof5_side_between_line.glb"
};

const detailedLineRoof5Configs = {
    front: { href: glbRoof5HrefConfig.front, height: 0.3, heading: -136, width: 5.3, roll: -0.5},
    frontBetween:  { href: glbRoof5HrefConfig.side, height: 0.3, heading: -47.8, width: 0.108},
    left: { href: glbRoof5HrefConfig.side, height: 0.3, heading: 43, tilt: 1.8, width: 0.122},
    leftBetween: { href: glbRoof5HrefConfig.sideBetween, height: 0.3, heading: -226.5, tilt: -1.8, width: 1},
    right: { href: glbRoof5HrefConfig.side, height: 0.3, heading: -137, tilt: -1.4, width: 0.121},
    rightBetween: { href: glbRoof5HrefConfig.sideBetween, height: 0.3, heading: -45, tilt: 1.8, width: 1},
    behind: { href: glbRoof5HrefConfig.side, height: 0.3, heading: -227, width: 0.111},
};

//Window corner floor 1&2
const windowCornerFloor2Configs = {
    //floor 2
    front_5: {href: "data/mesh_object/window_corner_f2_1.glb", width: 2.2, height: 8.3, depth: 0.7, heading: 43},
    front_6: {href: "data/mesh_object/window_corner_f2_2.glb",width: 3.2, height: 9, depth: 0.7, heading: 43},
    front_4: {href: "data/mesh_object/window_corner_f2_3.glb",width: 2.8, height: 9, depth: 0.7, heading: 44.5, roll: 1.5},
    behind_4: {href: "data/mesh_object/window_corner_f2_3.glb",width: 4.1, height: 9, depth: 0.7, heading: -136, roll: -1.8},
    behind_6: {href: "data/mesh_object/window_corner_f2_3.glb", width: 2.1, height: 9, depth: 0.7, heading: -136, roll: 0.4},
    site_4: {href: "data/mesh_object/window_corner_f2_2.glb", width: 3.9, height: 9, depth: 0.7, heading: 133, roll: 0.7},
    site_6: {href: "data/mesh_object/window_corner_f2_2.glb", width: 3.3, height: 9, depth: 0.7, heading: -48, roll: -1.8},
    //floor 1
    front_f1_5: {href: "data/mesh_object/window_corner_f1_1.glb", width: 2.3, height: 2.7, depth: 0.7, heading: 43},
    front_f1_6: {href: "data/mesh_object/window_corner_f1_2.glb",width: 2.2, height: 2.7, depth: 0.7, heading: 43},
    front_f1_4: {href: "data/mesh_object/window_corner_f1_2.glb",width: 2.4, height: 2.7, depth: 0.7, heading: 44.5, roll: 1.5},
    behind_f1_4: {href: "data/mesh_object/window_corner_f1_2.glb",width: 2.35, height: 2.72, depth: 0.7, heading: -136, roll: -1.7},
    behind_f1_6: {href: "data/mesh_object/window_corner_f1_2.glb", width: 2.4, height: 2.7, depth: 0.7, heading: -136, roll: 0.4},
    site_f1_4: {href: "data/mesh_object/window_corner_f1_3.glb", width: 2.6, height: 2.7, depth: 0.7, heading: 133, roll: 0.7},
    site_f1_6: {href: "data/mesh_object/window_corner_f1_3.glb", width: 2.2, height: 2.7, depth: 0.7, heading: -49, roll: -1.8}
}
//End: Define configuration for renderers

//Start: Create renderers using the configuration
const frontPillarRenderer = createPillarRenderer(pillarConfigs.frontPillar);
const sidePillarRenderer = createPillarRenderer(pillarConfigs.sidePillar);
const frontCornerPillarRenderer = createPillarRenderer(pillarConfigs.frontCornerPillar);
const sideCornerPillarRenderer = createPillarRenderer(pillarConfigs.sideCornerPillar);
const fronPillarBuilding5Renderer = createPillarRenderer(pillarConfigs.frontPillarBuidling5);
const frontWindowPillarBuilding5Renderer = createPillarRenderer(pillarConfigs.frontPillarWindowBuidling5);

const decorRoof5Renderer = createItemDecorRoof5Renderer(decorConfigs.roof5);
const wallWindowRoof5Renderer = createWallWindowRenderer(wallWindowConfigs.windowRoof5);
const wallWindowSideRoof5Renderer = createWallWindowRenderer(wallWindowConfigs.windowSideRoof5);
const flagpoleRoof5Renderer = createCylinderRenderer(cylinderConfigs.flagpoleRoof5);
const cylinderRoof5Renderer = createCylinderRenderer(cylinderConfigs.cylinderConeRoof5);
const coneRoof5Renderer = createConeRenderer(coneConfigs.coneRoof5);
const windowRoof5Renderer = createWindowRoof5Renderer(windowConfigs.windowRoof5);
const windowRoof5FLRenderer = createWindowRoof5Renderer(windowConfigs.windowRoof5_fl);
const windowSideRoof5FLRenderer = createWindowRoof5Renderer(windowConfigs.windowSideRoof5);

const frontFloor1WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor1,
    heading: windowHeadingConfig.front
});
const behindFloor1WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor1,
    heading: windowHeadingConfig.behind
});

const front6Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1front6, heading: windowHeadingConfig.front6, width: windowWidthConfig.front6, height: windowHeightConfig.front6});
const front4Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1, heading: windowHeadingConfig.front4, roll: windowRollConfig.front4, width: windowWidthConfig.front4, height: windowHeightConfig.front4});
const behind6Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1behind6, heading: windowHeadingConfig.behind6, roll: windowRollConfig.behind6, width: windowWidthConfig.behind6, height: windowHeightConfig.behind6});
const behind4Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1behind4, heading: windowHeadingConfig.behind4, roll: windowRollConfig.behind4, width: windowWidthConfig.behind4, height: windowHeightConfig.behind4});
const side6Floor1WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor1, heading: windowHeadingConfig.side6, roll: windowRollConfig.side6});
const side1Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1, heading: windowHeadingConfig.side1, roll: windowRollConfig.side1, width: windowWidthConfig.side1, height: windowHeightConfig.side1});
const side3Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1, heading: windowHeadingConfig.side3, roll: windowRollConfig.side3, width: windowWidthConfig.side3, height: windowHeightConfig.side3});
const side4Floor1WindowRenderer = createWindowF1Renderer({href: windowHrefConfig.floor1, heading: windowHeadingConfig.side4, roll: windowRollConfig.side4, width: windowWidthConfig.side4, height: windowHeightConfig.side4});

const frontFloor2WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor2, heading: windowHeadingConfig.front6});
const behindFloor2WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor2, heading: windowHeadingConfig.behind6});
const side6Floor2WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor2_side6, heading: windowHeadingConfig.side6});
const side1Floor2WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor2_side1, heading: windowHeadingConfig.side1});
const side3Floor2WindowRenderer = createWindowRenderer({href: windowHrefConfig.floor2_side3, heading: windowHeadingConfig.side3});
const front6Floor2WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor2,
    heading: windowHeadingConfig.front6
});
const front4Floor2WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor2_front4,
    heading: windowHeadingConfig.front4,
});
const behind6Floor2WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor2_behind6,
    heading: windowHeadingConfig.behind6,
});
const behind4Floor2WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor2_behind4,
    heading: windowHeadingConfig.behind4,
});

const side4Floor2WindowRenderer = createWindowRenderer({
    href: windowHrefConfig.floor2_side4,
    heading: windowHeadingConfig.side4,
});

//Statue
const frontStatueRenderer = createStatueRenderer(statueConfigs.frontStatue);
const sideLeftStatueRenderer = createStatueRenderer(statueConfigs.sideLeftStatue);
const sideRightStatueRenderer = createStatueRenderer(statueConfigs.sideRightStatue);
const behindStatueRenderer = createStatueRenderer(statueConfigs.behindStatue);

// window wall floor 1
const front4WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.front_4);
const front6WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.front_6);
const behind4WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.behind_4);
const behind6WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.behind_6);
const side46WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.side_46);
const side13WindowWallF1Renderer = createPillarRenderer(windowWallF1Configs.side_13);

//Main gate
const gateFloor0Renderer = createMainGateRenderer({href: mainGateHrefConfig.gateFloor0, heading: mainGateHeadingConfigs.gateFloor0});
const gateFloor1Renderer = createMainGateRenderer({href: mainGateHrefConfig.gateFloor1, heading: mainGateHeadingConfigs.gateFloor1});
const gateFloor2Renderer = createMainGateRenderer({href: mainGateHrefConfig.gateFloor2, heading: mainGateHeadingConfigs.gateFloor2});
const gateMiddleRenderer = createMainGateRenderer({href: mainGateHrefConfig.gateMiddle, heading: mainGateHeadingConfigs.gateMiddle});


// roof line for floor 2 and 3
const frontDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.front);
const frontBetweenDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.frontBetween);
const leftDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.left);
const rightDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.right);
const behindDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.behind);
const rightBetweenDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.rightBetween);
const leftBetweenDetailedLineRoof5Renderer = createGLBRenderer(detailedLineRoof5Configs.leftBetween);
//window corner floor 2
const front5WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_5);
const front6WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_6);
const front4WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_4);
const behind4WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.behind_4);
const behind6WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.behind_6);
const site4WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.site_4);
const site6WindowCornerF2Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.site_6);

//window corner floor 1
const front5WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_f1_5);
const front6WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_f1_6);
const front4WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.front_f1_4);
const behind4WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.behind_f1_4);
const behind6WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.behind_f1_6);
const site4WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.site_f1_4);
const site6WindowCornerF1Renderer = createWindowCornerFloor2Renderer(windowCornerFloor2Configs.site_f1_6);

//End: Create renderers using the configuration


// Start: Arcgis
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


    // --------------start: add Json layer----------------
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
    map.add(createGeoJsonLayer("wall-window-roof5", wallWindowRoof5Renderer));
    map.add(createGeoJsonLayer("wall-window-side-roof5", wallWindowSideRoof5Renderer));



    // Cylinder
    map.add(createGeoJsonLayer("flagpole-roof5", flagpoleRoof5Renderer));
    map.add(createGeoJsonLayer("cylinder-roof5", cylinderRoof5Renderer));

    // Cone
    map.add(createGeoJsonLayer("cone-roof5", coneRoof5Renderer));

    // start: Window
    //window 6 (floor 1)
    map.add(createGeoJsonLayer("window/floor1/window6-front-6", front6Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-front-4", front4Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-behind-6", behind6Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-behind-4", behind4Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-side-6", side6Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-side-1", side1Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-side-3", side3Floor1WindowRenderer));
    map.add(createGeoJsonLayer("window/floor1/window6-side-4", side4Floor1WindowRenderer));

    //window 7 (floor 2)
    map.add(createGeoJsonLayer("window/floor2/window7-front-6", front6Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-front-4", front4Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-behind-6", behind6Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-behind-4", behind4Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-side-6", side6Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-side-1", side1Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-side-3", side3Floor2WindowRenderer));
    map.add(createGeoJsonLayer("window/floor2/window7-side-4", side4Floor2WindowRenderer));

    //window
    map.add(createGeoJsonLayer("window-roof5", windowRoof5Renderer));
    map.add(createGeoJsonLayer("window-roof5-first-last", windowRoof5FLRenderer));
    map.add(createGeoJsonLayer("window-side-roof5", windowSideRoof5FLRenderer));

    // end: Window

    // start: Pilalr
    // Pillar
    map.add(createGeoJsonLayer("pillar/pillar-front-6", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-6", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-6", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-6", sideCornerPillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-side-13", sidePillarRenderer));

    map.add(createGeoJsonLayer("pillar/pillar-front-5", fronPillarBuilding5Renderer));
    map.add(createGeoJsonLayer("pillar/pillar-window-5", frontWindowPillarBuilding5Renderer));

    map.add(createGeoJsonLayer("pillar/pillar-front-4", frontPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-side-4", sidePillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-front-4", frontCornerPillarRenderer));
    map.add(createGeoJsonLayer("pillar/pillar-corner-side-4", sideCornerPillarRenderer));
    // end: Pilalr

    // Wall and line
    map.add(createGeoJsonLayer("wall_line/wall_front_right", wall_below_Renderer));
    map.add(createGeoJsonLayer("wall_line/wall_front_left", wall_below_Renderer));

    map.add(createGeoJsonLayer("wall_line/line_front_right", line_Renderer));
    map.add(createGeoJsonLayer("wall_line/line_front_left", line_Renderer));

    map.add(createGeoJsonLayer("wall_line/linefloor_right", line_Renderer));
    map.add(createGeoJsonLayer("wall_line/linefloor_left", line_Renderer));

    map.add(createGeoJsonLayer("wall_line/line_below_floor1_right", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line/line_below_floor1_left", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line/line_below_floor2_right", line_below_Renderer));
    map.add(createGeoJsonLayer("wall_line/line_below_floor2_left", line_below_Renderer));

    map.add(createGeoJsonLayer("wall_line/line_between_right", line_between_Renderer));
    map.add(createGeoJsonLayer("wall_line/line_between_left", line_between_Renderer));

    //Statue
    map.add(createGeoJsonLayer("wall_line/statue_front", frontStatueRenderer));
    map.add(createGeoJsonLayer("wall_line/statue_side_left", sideLeftStatueRenderer));
    map.add(createGeoJsonLayer("wall_line/statue_side_right", sideRightStatueRenderer));
    map.add(createGeoJsonLayer("wall_line/statue_behind", behindStatueRenderer));

    // Window wall
    map.add(createGeoJsonLayer("window_wall/floor1/front4", front4WindowWallF1Renderer));
    map.add(createGeoJsonLayer("window_wall/floor1/front6", front6WindowWallF1Renderer));
    map.add(createGeoJsonLayer("window_wall/floor1/behind4", behind4WindowWallF1Renderer));
    map.add(createGeoJsonLayer("window_wall/floor1/behind6", behind6WindowWallF1Renderer));

    map.add(createGeoJsonLayer("window_wall/floor1/side1", side13WindowWallF1Renderer));
    // map.add(createGeoJsonLayer("window_wall/floor1_front_behind", windowWallF1Renderer));

    // Decor
    map.add(createGeoJsonLayer("wall-window-roof5-decor", decorRoof5Renderer));

    // Roof line
    map.add(createGeoJsonLayer("roof_line/floor23_base", line_Renderer));
    map.add(createGeoJsonLayer("roof_line/floor2_above", line_Renderer));
    map.add(createGeoJsonLayer("roof_line/floor23_below_layer2", line_between_Renderer));
    map.add(createGeoJsonLayer("roof_line/floor23_below_layer1", line_below_Renderer));
    map.add(createGeoJsonLayer("roof_line/floor23_below_layer3", line_below_Renderer));

    //Main Gate
    map.add(createGeoJsonLayer("main_gate/gate_floor0", gateFloor0Renderer));
    map.add(createGeoJsonLayer("main_gate/gate_floor1", gateFloor1Renderer));
    map.add(createGeoJsonLayer("main_gate/gate_floor2", gateFloor2Renderer));
    map.add(createGeoJsonLayer("main_gate/gate_middle", gateMiddleRenderer));

    map.add(createGeoJsonLayer("roof_line/roof5_base", wall_Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_below_layer1", line_below_Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_below_layer3", line_below_Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_below_layer2", line_between_Renderer));

    // detail (glb)
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/front", frontDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/left", leftDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/right", rightDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/behind", behindDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/front_between", frontBetweenDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/left_between", leftBetweenDetailedLineRoof5Renderer));
    map.add(createGeoJsonLayer("roof_line/roof5_detailed_line/right_between", rightBetweenDetailedLineRoof5Renderer));
    //Window corner floor 2
    map.add(createGeoJsonLayer("window/floor2/window_corner_front", front5WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_front6", front6WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_front4", front4WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_behind4", behind4WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_behind6", behind6WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_site4", site4WindowCornerF2Renderer));
    map.add(createGeoJsonLayer("window/floor2/window_corner_site6", site6WindowCornerF2Renderer));

    //Window corner floor 1
    map.add(createGeoJsonLayer("window/floor1/window_corner_front", front5WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_front6", front6WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_front4", front4WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_behind4", behind4WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_behind6", behind6WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_site4", site4WindowCornerF1Renderer));
    map.add(createGeoJsonLayer("window/floor1/window_corner_site6", site6WindowCornerF1Renderer));
});




// End: Arcgis



