var wms_layers = [];
var lyr_molise_cut_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "molise_cut",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/molise_cut_0.jpg",
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1633313.668116, 5117462.343651, 1644384.528098, 5124167.652236]
                            })
                        });var format_corine_rev_1 = new ol.format.GeoJSON();
var features_corine_rev_1 = format_corine_rev_1.readFeatures(json_corine_rev_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_corine_rev_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_corine_rev_1.addFeatures(features_corine_rev_1);var lyr_corine_rev_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_corine_rev_1, 
                style: style_corine_rev_1,
    title: 'corine_rev<br />\
    <img src="styles/legend/corine_rev_1_0.png" /> 112<br />\
    <img src="styles/legend/corine_rev_1_1.png" /> 211<br />\
    <img src="styles/legend/corine_rev_1_2.png" /> 222<br />\
    <img src="styles/legend/corine_rev_1_3.png" /> 311<br />\
    <img src="styles/legend/corine_rev_1_4.png" /> 313<br />\
    <img src="styles/legend/corine_rev_1_5.png" /> 321<br />\
    <img src="styles/legend/corine_rev_1_6.png" /> 322<br />\
    <img src="styles/legend/corine_rev_1_7.png" /> 324<br />'
        });

lyr_molise_cut_0.setVisible(true);lyr_corine_rev_1.setVisible(true);
var layersList = [lyr_molise_cut_0,lyr_corine_rev_1];
lyr_corine_rev_1.set('fieldAliases', {'COD_CORINE': 'COD_CORINE', 'AREA_METER': 'AREA_METER', 'PERIMETER_': 'PERIMETER_', 'HECTARES': 'HECTARES', });
lyr_corine_rev_1.set('fieldImages', {'COD_CORINE': 'TextEdit', 'AREA_METER': 'TextEdit', 'PERIMETER_': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_corine_rev_1.set('fieldLabels', {'COD_CORINE': 'inline label', 'AREA_METER': 'inline label', 'PERIMETER_': 'inline label', 'HECTARES': 'inline label', });
lyr_corine_rev_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});