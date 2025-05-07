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
};

//Wall_below
export const wall_below_Renderer = {
    type: "simple",
    symbol: {
        type: "line-3d",
        symbolLayers: [
            {
                type: "path",            
                profile: "quad",         
                material: { color: "#80746D" },
                width: 0.3,                    
                // Dịch chuyển đường trung tâm sang bên phải để tạo hiệu ứng mở rộng về bên trái
                profileRotation: "all",
                anchor: "center",
                offset: { x: 0.15, y: 0 }    
            }
        ]
    },
    visualVariables: [
        {
            type: "size",
            field: "height",      
            valueUnit: "meters"    
        },
        {
            type: "size",
            axis: "width",        
            field: "width",
            valueUnit: "meters"
        },
        {
            type: "size",
            axis: "depth",      
            field: "depth",       
            valueUnit: "meters"
        }
    ]
};
export const line_Renderer = {
    type: "simple",
    symbol: {
        type: "line-3d",
        symbolLayers: [
            {
                type: "path",            
                profile: "quad",         
                material: { color: "#fbe5bf" },
                width: 0.5,                    
                // Dịch chuyển đường trung tâm sang bên phải để tạo hiệu ứng mở rộng về bên trái
                profileRotation: "all",
                anchor: "center",
                offset: { x: 0.15, y: 0 }    
            }
        ]
    },
    visualVariables: [
        {
            type: "size",
            field: "height",      
            valueUnit: "meters"    
        },
        {
            type: "size",
            axis: "width",        
            field: "width",
            valueUnit: "meters"
        },
        {
            type: "size",
            axis: "depth",      
            field: "depth",       
            valueUnit: "meters"
        }
    ]
};

export const line_below_Renderer = {
    type: "simple",
    symbol: {
        type: "line-3d",
        symbolLayers: [
            {
                type: "path",            
                profile: "quad",         
                material: { color: "#AAAAAA" },
                width: 0.3,                    
                // Dịch chuyển đường trung tâm sang bên phải để tạo hiệu ứng mở rộng về bên trái
                profileRotation: "all",
                anchor: "center",
                offset: { x: 0.15, y: 0 }    
            }
        ]
    },
    visualVariables: [
        {
            type: "size",
            field: "height",      
            valueUnit: "meters"    
        },
        {
            type: "size",
            axis: "width",        
            field: "width",
            valueUnit: "meters"
        },
        {
            type: "size",
            axis: "depth",      
            field: "depth",       
            valueUnit: "meters"
        }
    ]
};

export const line_between_Renderer = {
    type: "simple",
    symbol: {
        type: "line-3d",
        symbolLayers: [
            {
                type: "path",            
                profile: "quad",         
                material: { color: "#365437" },
                width: 0.3,                    
                // Dịch chuyển đường trung tâm sang bên phải để tạo hiệu ứng mở rộng về bên trái
                profileRotation: "all",
                anchor: "center",
                offset: { x: 0.15, y: 0 }    
            }
        ]
    },
    visualVariables: [
        {
            type: "size",
            field: "height",      
            valueUnit: "meters"    
        },
        {
            type: "size",
            axis: "width",        
            field: "width",
            valueUnit: "meters"
        },
        {
            type: "size",
            axis: "depth",      
            field: "depth",       
            valueUnit: "meters"
        }
    ]
};

// Statue
export function createStatueRenderer ({ size = 1, heading, tilt = 0, roll = 0 }) {
    return {
        type: "simple",
        symbol: {
            type: "point-3d",
            symbolLayers: [
                {
                    type: "object",
                    resource: {
                        href: "data/mesh_object/tuong2.glb"  // Correct path
                    },
                    size: 1,  // Adjust size as needed
                    heading: heading,  // Adjust orientation if necessary
                    pitch: 0,
                    roll: 0
                }
            ]
        }
    }
};







