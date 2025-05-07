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

const polygonRenderer = {
  type: "simple",
  symbol: {
    type: "simple-fill",
    color: "#D3D3D3",
    outline: {
      color: [211, 211, 211, 1],
      width: 1,
    },
  },
};
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/layers/GeoJSONLayer",
  "esri/Graphic",
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
  // request json
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

  //Cửa chính
  //Nửa bên trái
  //Cổng trái
  map.add(createGeoJsonLayer("cuaChinh/data", blockRenderer(4.5))); //O K' D1 S
  map.add(createGeoJsonLayer("cuaChinh/data2", blockRenderer(1))); //W B1 N L
  map.add(createGeoJsonLayer("cuaChinh/data3", blockRenderer(0.3))); //K' D1 N L
  map.add(createGeoJsonLayer("cuaChinh/data4", blockRenderer(4.5))); //Q T N L

  //Cổng giữa
  map.add(createGeoJsonLayer("cuaChinh/data5", blockRenderer(5.8))); //L N U R
  map.add(createGeoJsonLayer("cuaChinh/data6", blockRenderer(1))); //J1 K1 U R
  map.add(createGeoJsonLayer("cuaChinh/data7", blockRenderer(0.3))); //L N M L'
});
