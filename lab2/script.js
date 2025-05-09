function blockRenderer(height, color) {
  return {
    type: "simple",
    symbol: {
      type: "polygon-3d",
      symbolLayers: [
        {
          type: "extrude",
          size: height,
          material: {
            color: color,
          },
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
  const sketchLayer = new GraphicsLayer({
    elevationInfo: {
      mode: "absolute-height",
    },
    title: "Sketched geometries",
  });

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
  esriRequest("./data/cuaChinh/base.json", json_options).then(
    function (response) {
      var graphicsLayer = new GraphicsLayer();
      console.log(response);
      response.data.forEach(function (data) {
        graphicsLayer.add(createGraphic(data));
      });
      map.add(graphicsLayer);
    }
  );

  // Function to create GeoJSONLayer
  function createGeoJsonLayer(name, renderer) {
    return new GeoJSONLayer({
      url: "data/" + name + ".geojson",
      renderer: renderer,
    });
  }

  //START: Cửa chính
  //Cổng trái, phải
  map.add(createGeoJsonLayer("cuaChinh/data", blockRenderer(4.5, "#D3D3D3"))); //O K' D1 S, O' P C1 K
  map.add(createGeoJsonLayer("cuaChinh/data2", blockRenderer(1, "#D3D3D3"))); //W B1 N L, L' M C2 B2
  map.add(createGeoJsonLayer("cuaChinh/data3", blockRenderer(0.3, "#D3D3D3"))); //K' D1 N L, L' M  C1 K
  map.add(createGeoJsonLayer("cuaChinh/data4", blockRenderer(4.5, "#D3D3D3"))); //Q T N L, L' M A1 Q'

  //Cổng giữa
  map.add(createGeoJsonLayer("cuaChinh/data5", blockRenderer(5.8, "#D3D3D3"))); //L N U R, R' Z M L'
  map.add(createGeoJsonLayer("cuaChinh/data6", blockRenderer(1, "#D3D3D3"))); //J1 K1 U R, R' Z M1 L1
  map.add(createGeoJsonLayer("cuaChinh/data7", blockRenderer(0.3, "#D3D3D3"))); //L N M L'

  //END: Cửa Chính

  //START: Cửa bắc
  //Cổng trái, phải
  map.add(createGeoJsonLayer("cuaBac/data", blockRenderer(4.5, "#D3D3D3"))); //P1 O1 N1 Q1, U1 R1 S1 T1
  map.add(createGeoJsonLayer("cuaBac/data2", blockRenderer(1, "#D3D3D3"))); //V1 W1 Z1 A2, D2 E2 F2 G2
  map.add(createGeoJsonLayer("cuaBac/data3", blockRenderer(0.3, "#D3D3D3"))); //U1 R1 Z1 A2, D2 E2 N1 Q1
  map.add(createGeoJsonLayer("cuaBac/data4", blockRenderer(4.5, "#D3D3D3"))); //H2 I2 Z1 A2, D2 E2 J2 K2

  //Cổng giữa
map.add(createGeoJsonLayer("cuaBac/data5", blockRenderer(5.8, "#D3D3D3"))); //A2 Z1 L2 M2, N2 O2 E2 D2
map.add(createGeoJsonLayer("cuaBac/data6", blockRenderer(1, "#D3D3D3"))); //P2 Q2 L2 M2, N2 O2 R2 S2
map.add(createGeoJsonLayer("cuaBac/data7", blockRenderer(0.3, "#D3D3D3"))); //A2 Z1 E2 D2
});
