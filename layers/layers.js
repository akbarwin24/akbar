ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3395").setExtent([15647982.878394, -545422.858268, 15659620.636077, -540310.850272]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRISatellite_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_WILAYAHADMINISTRASI_2 = new ol.format.GeoJSON();
var features_WILAYAHADMINISTRASI_2 = format_WILAYAHADMINISTRASI_2.readFeatures(json_WILAYAHADMINISTRASI_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_WILAYAHADMINISTRASI_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WILAYAHADMINISTRASI_2.addFeatures(features_WILAYAHADMINISTRASI_2);
var lyr_WILAYAHADMINISTRASI_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WILAYAHADMINISTRASI_2, 
                style: style_WILAYAHADMINISTRASI_2,
                popuplayertitle: "WILAYAH ADMINISTRASI",
                interactive: true,
    title: 'WILAYAH ADMINISTRASI<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_0.png" /> Kampung Akmakot<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_1.png" /> Kampung Arinkop<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_2.png" /> Kampung Dabolding<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_3.png" /> Kampung Kabiding<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_4.png" /> Kampung Kutdol<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_5.png" /> Kampung Mabilabol<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_6.png" /> Kampung Molbib Silibib<br />\
    <img src="styles/legend/WILAYAHADMINISTRASI_2_7.png" /> Kampung Siminbuk<br />'
        });
var format_Sungai_3 = new ol.format.GeoJSON();
var features_Sungai_3 = format_Sungai_3.readFeatures(json_Sungai_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_Sungai_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_3.addFeatures(features_Sungai_3);
var lyr_Sungai_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_3, 
                style: style_Sungai_3,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_3.png" /> Sungai'
            });
var format_PERAIRAN_4 = new ol.format.GeoJSON();
var features_PERAIRAN_4 = format_PERAIRAN_4.readFeatures(json_PERAIRAN_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_PERAIRAN_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERAIRAN_4.addFeatures(features_PERAIRAN_4);
var lyr_PERAIRAN_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERAIRAN_4, 
                style: style_PERAIRAN_4,
                popuplayertitle: "PERAIRAN",
                interactive: true,
    title: 'PERAIRAN<br />\
    <img src="styles/legend/PERAIRAN_4_0.png" /> Badan Air<br />'
        });
var format_JARINGANJALAN_5 = new ol.format.GeoJSON();
var features_JARINGANJALAN_5 = format_JARINGANJALAN_5.readFeatures(json_JARINGANJALAN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_JARINGANJALAN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_5.addFeatures(features_JARINGANJALAN_5);
var lyr_JARINGANJALAN_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_5, 
                style: style_JARINGANJALAN_5,
                popuplayertitle: "JARINGAN JALAN",
                interactive: true,
    title: 'JARINGAN JALAN<br />\
    <img src="styles/legend/JARINGANJALAN_5_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JARINGANJALAN_5_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JARINGANJALAN_5_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JARINGANJALAN_5_3.png" /> Jalan Lingkungan<br />'
        });
var format_BATASADMINISTRASI_6 = new ol.format.GeoJSON();
var features_BATASADMINISTRASI_6 = format_BATASADMINISTRASI_6.readFeatures(json_BATASADMINISTRASI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_BATASADMINISTRASI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASADMINISTRASI_6.addFeatures(features_BATASADMINISTRASI_6);
var lyr_BATASADMINISTRASI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASADMINISTRASI_6, 
                style: style_BATASADMINISTRASI_6,
                popuplayertitle: "BATAS ADMINISTRASI",
                interactive: true,
    title: 'BATAS ADMINISTRASI<br />\
    <img src="styles/legend/BATASADMINISTRASI_6_0.png" /> Batas Distrik<br />\
    <img src="styles/legend/BATASADMINISTRASI_6_1.png" /> Batas Kampung<br />'
        });
var format_BATASBWP_7 = new ol.format.GeoJSON();
var features_BATASBWP_7 = format_BATASBWP_7.readFeatures(json_BATASBWP_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_BATASBWP_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASBWP_7.addFeatures(features_BATASBWP_7);
var lyr_BATASBWP_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASBWP_7, 
                style: style_BATASBWP_7,
                popuplayertitle: "BATAS BWP",
                interactive: true,
    title: 'BATAS BWP<br />\
    <img src="styles/legend/BATASBWP_7_0.png" /> Batas WP<br />'
        });
var format_IBUKOTA_8 = new ol.format.GeoJSON();
var features_IBUKOTA_8 = format_IBUKOTA_8.readFeatures(json_IBUKOTA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3395'});
var jsonSource_IBUKOTA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IBUKOTA_8.addFeatures(features_IBUKOTA_8);
var lyr_IBUKOTA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IBUKOTA_8, 
                style: style_IBUKOTA_8,
                popuplayertitle: "IBU KOTA",
                interactive: true,
    title: 'IBU KOTA<br />\
    <img src="styles/legend/IBUKOTA_8_0.png" /> Ibukota Kabupaten<br />\
    <img src="styles/legend/IBUKOTA_8_1.png" /> Ibukota Distrik<br />\
    <img src="styles/legend/IBUKOTA_8_2.png" /> Ibukota Kampung<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRISatellite_1.setVisible(true);lyr_WILAYAHADMINISTRASI_2.setVisible(true);lyr_Sungai_3.setVisible(true);lyr_PERAIRAN_4.setVisible(true);lyr_JARINGANJALAN_5.setVisible(true);lyr_BATASADMINISTRASI_6.setVisible(true);lyr_BATASBWP_7.setVisible(true);lyr_IBUKOTA_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRISatellite_1,lyr_WILAYAHADMINISTRASI_2,lyr_Sungai_3,lyr_PERAIRAN_4,lyr_JARINGANJALAN_5,lyr_BATASADMINISTRASI_6,lyr_BATASBWP_7,lyr_IBUKOTA_8];
lyr_WILAYAHADMINISTRASI_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PROVINSI': 'PROVINSI', 'KABUPATEN': 'KABUPATEN', 'KECAMATAN': 'KECAMATAN', 'DESA': 'DESA', 'SUMBER': 'SUMBER', 'LUAS_KM2': 'LUAS_KM2', 'LUAS_HA': 'LUAS_HA', });
lyr_Sungai_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_PERAIRAN_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_JARINGANJALAN_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'FUNGSI': 'FUNGSI', 'NAMA': 'NAMA', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_BATASADMINISTRASI_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'STATUS': 'STATUS', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_BATASBWP_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'JENIS': 'JENIS', 'SUMBER': 'SUMBER', 'Shape_Length': 'Shape_Length', });
lyr_IBUKOTA_8.set('fieldAliases', {'IBUKOTA': 'IBUKOTA', });
lyr_WILAYAHADMINISTRASI_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'PROVINSI': 'TextEdit', 'KABUPATEN': 'TextEdit', 'KECAMATAN': 'TextEdit', 'DESA': 'TextEdit', 'SUMBER': 'TextEdit', 'LUAS_KM2': 'TextEdit', 'LUAS_HA': 'TextEdit', });
lyr_Sungai_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PERAIRAN_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_JARINGANJALAN_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'FUNGSI': 'TextEdit', 'NAMA': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_BATASADMINISTRASI_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'STATUS': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_BATASBWP_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'JENIS': 'TextEdit', 'SUMBER': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_IBUKOTA_8.set('fieldImages', {'IBUKOTA': 'TextEdit', });
lyr_WILAYAHADMINISTRASI_2.set('fieldLabels', {'OBJECTID': 'hidden field', 'PROVINSI': 'inline label - visible with data', 'KABUPATEN': 'inline label - visible with data', 'KECAMATAN': 'inline label - visible with data', 'DESA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'LUAS_KM2': 'inline label - visible with data', 'LUAS_HA': 'inline label - visible with data', });
lyr_Sungai_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_PERAIRAN_4.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', 'Shape_Area': 'inline label - visible with data', });
lyr_JARINGANJALAN_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'FUNGSI': 'inline label - visible with data', 'NAMA': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_BATASADMINISTRASI_6.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'STATUS': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_BATASBWP_7.set('fieldLabels', {'OBJECTID': 'hidden field', 'JENIS': 'inline label - visible with data', 'SUMBER': 'inline label - visible with data', 'Shape_Length': 'inline label - visible with data', });
lyr_IBUKOTA_8.set('fieldLabels', {'IBUKOTA': 'inline label - visible with data', });
lyr_IBUKOTA_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});