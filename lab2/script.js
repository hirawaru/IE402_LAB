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
  map.add(createGeoJsonLayer("cuaChinh/data", blockRenderer(4.5, "#D3D3D3"))); //O K' D1 S
  map.add(createGeoJsonLayer("cuaChinh/data2", blockRenderer(1, "#D3D3D3"))); //W B1 N L
  map.add(createGeoJsonLayer("cuaChinh/data3", blockRenderer(0.3, "#D3D3D3"))); //K' D1 N L
  map.add(createGeoJsonLayer("cuaChinh/data4", blockRenderer(4.5, "#D3D3D3"))); //Q T N L

  //Cổng giữa
  map.add(createGeoJsonLayer("cuaChinh/data5", blockRenderer(5.8, "#D3D3D3"))); //L N U R
  map.add(createGeoJsonLayer("cuaChinh/data6", blockRenderer(1, "#D3D3D3"))); //J1 K1 U R
  map.add(createGeoJsonLayer("cuaChinh/data7", blockRenderer(0.3, "#D3D3D3"))); //L N M L'

  // 2 Mai Lon "#D3D3D3" "#8B0000" mau do nau
  map.add(createGeoJsonLayer("maiNhaLon/2mai", blockRenderer(0.5, "#8B0000"))); 
  // Tuong duoi mai lon HCN
  map.add(createGeoJsonLayer("maiNhaLon/tuong_duoi_HCN", blockRenderer(6, "#D3D3D3")));
  //Tuong tren mai lon tam giac
  map.add(createGeoJsonLayer("maiNhaLon/tuong_tren_tam_giac", blockRenderer(6, "#D3D3D3")));
  // mai nho Tay Dong
  map.add(createGeoJsonLayer("maiNhaLon/mai_nho", blockRenderer(0.5, "#8B0000"))); 
  //tuong nho Tay Dong
  map.add(createGeoJsonLayer("maiNhaLon/tuong_nho", blockRenderer(1.3, "#D3D3D3")));
  //1 mai lon Bac
  map.add(createGeoJsonLayer("maiNhaLon/1mai_Bac", blockRenderer(0.5, "#8B0000")));
  //1 tuong tren tam giac Bac
  map.add(createGeoJsonLayer("maiNhaLon/Bac_tuong_tren_tam_giac", blockRenderer(6, "#D3D3D3")));
  //1 tuong duoi HCN Bac
  map.add(createGeoJsonLayer("maiNhaLon/Bac_tuong_duoi_HCN", blockRenderer(6, "#D3D3D3")));
  //Bac mai nho
  map.add(createGeoJsonLayer("maiNhaLon/Bac_mai_nho", blockRenderer(0.5, "#8B0000")));
  //tuong nho mai Bac
  map.add(createGeoJsonLayer("maiNhaLon/Bac_tuong_nho", blockRenderer(1.3, "#D3D3D3")));

  //mai nho Nam  W3 V3 Z3 C4 A4 B4
  map.add(createGeoJsonLayer("maiNhaLon/Nam_mai_nho", blockRenderer(0.5, "#8B0000")));
  //tuong nho Nam  E4 D4 F4 I4 G4 H4
  map.add(createGeoJsonLayer("maiNhaLon/Nam_tuong_nho", blockRenderer(1.3, "#D3D3D3")));
});
