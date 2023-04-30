var hiroshima = 'Cesium-1.104/国土地理院技術資料 D1-No_939 平成30年7月豪雨に伴う崩壊地等分布図（ライン）_広島_線.geojson';

var promise = Cesium.GeoJsonDataSource.load(hiroshima);

promise.then(function(datasource){
  var viewer = new Cesium.Viewer('mapdiv', {
    animation : false,
    baseLayerPicker: false,
    fullscreenButton: false,
    geocoder: false,
    homeButton: false,
    navigationHelpButton: false,
    sceneModePicker: false,
    scene3DOnly: true,
    timeline: false,
  });

  var layers = viewer.scene.imageryLayers;


  viewer.dataSources.add(datasource);
  viewer.zoomTo(datasource);
});
