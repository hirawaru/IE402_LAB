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
export const cylinder_Renderer = {
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

// Cone
export const cone_Renderer = {
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


// Function to create a window renderer with customizable properties
export function createWindow6Renderer({ heading, pitch = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d",
            symbolLayers: [{
                type: "object",
                resource: {
                    href: "data/mesh_object/window.glb"
                },
                heading,
                pitch,
                roll
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






