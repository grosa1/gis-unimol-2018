var wms_layers = [];
var format_corine_rev_0 = new ol.format.GeoJSON();
var features_corine_rev_0 = format_corine_rev_0.readFeatures(json_corine_rev_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corine_rev_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_corine_rev_0.addFeatures(features_corine_rev_0);var lyr_corine_rev_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_corine_rev_0, 
                style: style_corine_rev_0,
    title: 'corine_rev<br />\
    <img src="styles/legend/corine_rev_0_0.png" /> 112<br />\
    <img src="styles/legend/corine_rev_0_1.png" /> 211<br />\
    <img src="styles/legend/corine_rev_0_2.png" /> 222<br />\
    <img src="styles/legend/corine_rev_0_3.png" /> 311<br />\
    <img src="styles/legend/corine_rev_0_4.png" /> 313<br />\
    <img src="styles/legend/corine_rev_0_5.png" /> 321<br />\
    <img src="styles/legend/corine_rev_0_6.png" /> 322<br />\
    <img src="styles/legend/corine_rev_0_7.png" /> 324<br />'
        });

lyr_corine_rev_0.setVisible(true);
var layersList = [lyr_corine_rev_0];
lyr_corine_rev_0.set('fieldAliases', {'COD_CORINE': 'COD_CORINE', 'AREA_METER': 'AREA_METER', 'PERIMETER_': 'PERIMETER_', 'HECTARES': 'HECTARES', });
lyr_corine_rev_0.set('fieldImages', {'COD_CORINE': 'TextEdit', 'AREA_METER': 'TextEdit', 'PERIMETER_': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_corine_rev_0.set('fieldLabels', {'COD_CORINE': 'inline label', 'AREA_METER': 'inline label', 'PERIMETER_': 'inline label', 'HECTARES': 'inline label', });
lyr_corine_rev_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});