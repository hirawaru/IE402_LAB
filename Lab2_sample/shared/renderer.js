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
          color: [141, 57, 23, 0.7],
        },
      },
    ],
  },
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
        },
      },
    ],
  },
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
          color: "#F1EFDE",
        },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height", // Sử dụng trường height trong GeoJSON để thiết lập chiều cao
      valueUnit: "meters", // Đơn vị chiều cao là mét
    },
  ],
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
        },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height", // Sử dụng trường height trong GeoJSON để thiết lập chiều cao
      valueUnit: "meters", // Đơn vị chiều cao là mét
    },
  ],
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
          color: [141, 57, 23, 0.7],
        },
      },
    ],
  },
};

// Cylinder
export function createCylinderRenderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width,
          height,
          depth,
          resource: { primitive: "cylinder" },
          material: { color },
          heading,
          tilt,
          roll,
        },
      ],
    },
  };
}

// Cone
export function createConeRenderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width,
          height,
          depth,
          resource: { primitive: "cone" },
          material: { color },
          heading,
          tilt,
          roll,
        },
      ],
    },
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
          color: "#fbe5bf",
        },
      },
    ],
  },
};

//window renderer
export function createWindowRenderer({ href, heading, tilt = 0, roll = 0 }) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href,
          },
          heading: heading,
          tilt: tilt,
          roll: roll,
        },
      ],
    },
  };
}

export function createWindowF1Renderer({
  href,
  heading,
  tilt = 0,
  roll = 0,
  width = 1,
  height = 1,
  depth = 0.3,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href,
          },
          heading: heading,
          tilt: tilt,
          roll: roll,
          width,
          height,
          depth,
        },
      ],
    },
  };
}

export function createWindowRoof5Renderer({ width, height, depth, heading }) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/windowroof5.glb",
          },
          heading,
          pitch: 0,
          roll: 0,
          width,
          height,
          depth,
        },
      ],
    },
  };
}

//pillar renderer
export function createPillarRenderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width,
          height,
          depth,
          resource: { primitive: "cube" },
          material: { color },
          heading,
          tilt,
          roll,
        },
      ],
    },
  };
}

export function createItemDecorRoof5Renderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/itemroof5.glb",
          },
          heading,
          tilt,
          roll,
          width,
          height,
          depth,
          material: { color },
        },
      ],
    },
  };
}

// General function to create a wall renderer with customizable properties
export function createWallWindowRenderer({
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          width,
          height,
          depth,
          resource: { primitive: "cube" },
          material: { color },
          heading,
          tilt,
          roll,
        },
      ],
    },
  };
}

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
        offset: { x: 0.15, y: 0 },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "width",
      field: "width",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "depth",
      field: "depth",
      valueUnit: "meters",
    },
  ],
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
        offset: { x: 0.15, y: 0 },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "width",
      field: "width",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "depth",
      field: "depth",
      valueUnit: "meters",
    },
  ],
};

export const line_below_Renderer = {
  type: "simple",
  symbol: {
    type: "line-3d",
    symbolLayers: [
      {
        type: "path",
        profile: "quad",
        material: { color: "#F3F3F3" },
        width: 0.3,
        // Dịch chuyển đường trung tâm sang bên phải để tạo hiệu ứng mở rộng về bên trái
        profileRotation: "all",
        anchor: "center",
        offset: { x: 0.15, y: 0 },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "width",
      field: "width",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "depth",
      field: "depth",
      valueUnit: "meters",
    },
  ],
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
        offset: { x: 0.15, y: 0 },
      },
    ],
  },
  visualVariables: [
    {
      type: "size",
      field: "height",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "width",
      field: "width",
      valueUnit: "meters",
    },
    {
      type: "size",
      axis: "depth",
      field: "depth",
      valueUnit: "meters",
    },
  ],
};

// Statue
export function createStatueRenderer({
  size = 1,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: "data/mesh_object/tuong2.glb", // Correct path
          },
          size: 1, // Adjust size as needed
          heading: heading, // Adjust orientation if necessary
          pitch: 0,
          roll: 0,
        },
      ],
    },
  };
}

//Window corner floor 2
export function createWindowCornerFloor2Renderer({
  href,
  width,
  height,
  depth,
  heading,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: href,
          },
          heading,
          pitch: 0,
          roll: roll,
          width,
          height,
          depth,
        },
      ],
    },
  };
}

// // window wall floor 1 (test)
// export function createWindowWallF1Renderer({ width, height, depth, color, heading, tilt = 0, roll = 0 }) {
//     return {
//         type: "simple",
//         symbol: {
//             type: "point-3d",
//             symbolLayers: [{
//                 type: "object",
//                 width,
//                 height,
//                 depth,
//                 resource: { primitive: "cube" },
//                 material: { color },
//                 heading,
//                 tilt,
//                 roll
//             }]
//         }
//     };
// }

//Main Gate
export function createMainGateRenderer({ href, heading, pitch = 0, roll = 0 }) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href,
          },
          heading,
          pitch,
          roll,
        },
      ],
    },
  };
}
// create GLB (mesh object) renderer
export function createGLBRenderer({
  href,
  width,
  height,
  depth,
  color,
  heading,
  tilt = 0,
  roll = 0,
}) {
  return {
    type: "simple",
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "object",
          resource: {
            href: href,
          },
          heading,
          tilt,
          roll,
          width,
          height,
          depth,
          material: { color },
        },
      ],
    },
  };
}
