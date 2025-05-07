// Roof
export const roof_Renderer = {
    type: "simple",
    symbol: {
        type: "polygon-3d",
        symbolLayers: [
            {
                type: "extrude",
                size: 0.1,
                material: {
                    color: [141, 57, 23, 1],
                },
                edges: {
                    type: "solid", // autocasts as new SolidEdges3D()
                    color: [141, 57, 23, 0.7]
                }
            }
        ],
    }
};

// Stair
export const stair_Renderer = {
    type: "simple",
    symbol: {
        type: "polygon-3d",
        symbolLayers: [
            {
                type: "extrude",
                size: 0.2,
                material: {
                    color: "gray",
                }
            }
        ],
    }
};

// Wall (temp)
export const wall_Renderer = {
    type: "simple",
    symbol: {
        type: "polygon-3d",
        symbolLayers: [
            {
                type: "extrude",
                material: {
                    color: "#fbe5bf",
                }
            }
        ],
    },
    visualVariables: [{
        type: "size",
        field: "height",  // Sử dụng trường height trong GeoJSON để thiết lập chiều cao
        valueUnit: "meters" // Đơn vị chiều cao là mét
    }]
};

// Cylinder
export function createCylinderRenderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                width,
                height,
                depth,
                resource: { primitive: "cylinder" },
                material: { color },
                heading,
                tilt,
                roll
            }]
        }
    };
}

// Cone
export function createConeRenderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                width,
                height,
                depth,
                resource: { primitive: "cone" },
                material: { color },
                heading,
                tilt,
                roll
            }]
        }
    };
}

// Filled Roof
export const filled_roof_Renderer = {
    type: "simple",
    symbol: {
        type: "polygon-3d",
        symbolLayers: [
            {
                type: "extrude",
                size: 0.1,
                material: {
                    color:  "#fbe5bf",
                }
            }
        ],
    }
};

//window
export const window_6_Renderer = {
    type: "simple",
    symbol: {
        type: "point-3d",
        symbolLayers: [
            {
                type: "object",
                resource: {
                    href: "data/mesh_object/window.glb"  // Correct path
                },
                size: 0.5,  // Adjust size as needed
                heading: 45,  // Adjust orientation if necessary
                pitch: 0,
                roll: 0
            }
        ]
    }
};

export function createWindowRenderer({ width, height, depth, heading }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                resource: {
                    href: "data/mesh_object/windowroof5.glb"
                },
                heading,
                pitch: 0,
                roll: 0,
                width,
                height,
                depth
            }]
        }
    };
}

export function createItemDecorRoof5Renderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                resource: {
                    href: "data/mesh_object/itemroof5.glb"
                },
                heading,
                tilt,
                roll,
                width,
                height,
                depth
            }]
        }
    };
}

// General function to create a pillar renderer with customizable properties
export function createPillarRenderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                width,
                height,
                depth,
                resource: { primitive: "cube" },
                material: { color },
                heading,
                tilt,
                roll
            }]
        }
    };
}

// General function to create a wall renderer with customizable properties
export function createWallWindowRenderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d", 
            symbolLayers: [{
                type: "object",
                width,
                height,
                depth,
                resource: { primitive: "cube" },
                material: { color },
                heading,
                tilt,
                roll
            }]
        }
    };
}






