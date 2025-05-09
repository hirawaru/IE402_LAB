function blockRenderer(height) {
  return {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: height,
          material: {
            color: "#D3D3D3",
          },
        },
      ],
    },
  };
}

function GLBRenderer({ href, heading, pitch = 0, roll = 0 }) {
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

require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/Graphic",
  "esri/geometry/Mesh",
  "esri/geometry/Point",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/layers/SceneLayer",
  "esri/layers/GraphicsLayer",
  "esri/request",
], function (
  Map,
  SceneView,
  GeoJSONLayer,
  Graphic,
  Point,
  Mesh,
  SimpleMarkerSymbol,
  SceneLayer,
  GraphicsLayer,
  esriRequest
) {
  const map = new Map({
    basemap: "topo-vector",
    ground: "world-elevation",
  });

  const view = new SceneView({
    container: "viewDiv",
    map: map,
    camera: {
      position: [106.69845597091415, 10.769024419182566, 300],
      heading: 0,
      tilt: 50,
    },
  });

  //function to create graphic layer
  var createGraphic = function (data) {
    return new Graphic({
      geometry: data,
      symbol: data.symbol,
      attributes: data,
      popupTemplate: data.popupTemplate,
    });
  };

  const json_options = {
    query: {
      f: "json",
    },
    responseType: "json",
  };

  // Thêm nền
  esriRequest("./data/cuaChinh/base.json", json_options).then(function (
    response
  ) {
    var graphicsLayer = new GraphicsLayer();
    console.log(response);
    response.data.forEach(function (data) {
      graphicsLayer.add(createGraphic(data));
    });
    map.add(graphicsLayer);
  });

  // Function to create GeoJSONLayer
  function createGeoJsonLayer(name, renderer) {
    return new GeoJSONLayer({
      url: "data/" + name + ".geojson",
      renderer: renderer,
    });
  }

  //START: Cửa chính
  //Cổng trái, phải
  map.add(createGeoJsonLayer("cuaChinh/data", blockRenderer(4.5))); //O K' D1 S, O' P C1 K
  map.add(createGeoJsonLayer("cuaChinh/data2", blockRenderer(1))); //W B1 N L, L' M N1 W
  map.add(createGeoJsonLayer("cuaChinh/data3", blockRenderer(0.3))); //K' D1 N L, L' M  C1 K
  map.add(createGeoJsonLayer("cuaChinh/data4", blockRenderer(4.5))); //Q T N L, L' M A1 Q'

  //Cổng giữa
  map.add(createGeoJsonLayer("cuaChinh/data5", blockRenderer(5.8))); //L N U R, R' Z M L'
  map.add(createGeoJsonLayer("cuaChinh/data6", blockRenderer(1))); //J1 K1 U R, R' Z M1 L1
  map.add(createGeoJsonLayer("cuaChinh/data7", blockRenderer(0.3))); //L N M L'

  //Thêm mesh
  map.add(
    createGeoJsonLayer(
      "cuaChinh/middleGate",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaGiua.glb",
        heading: "328",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/rightGate",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaPhai.glb",
        heading: "328",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/leftGate",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaTrai.glb",
        heading: "328",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/vent1",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaThongGio.glb",
        heading: "419",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/vent2",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaThongGio.glb",
        heading: "419",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/vent3",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaThongGio.glb",
        heading: "239.25",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/vent4",
      GLBRenderer({
        href: "./meshObject/cuaChinh/cuaThongGio.glb",
        heading: "239.25",
      })
    )
  );

  map.add(
    createGeoJsonLayer(
      "cuaChinh/nameBoard",
      GLBRenderer({
        href: "./meshObject/cuaChinh/bangTen.glb",
        heading: "328",
      })
    )
  );

  //END: Cửa Chính
});
