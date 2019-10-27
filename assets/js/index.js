var socksCollection = [1,1,1,1,2,3,3,3,3,3,3,3,4,4,4,4,4];


function paintOutputSocksCollection(socksCollection)
{
    //console.log(socksCollection)
    var socksInput = ''
    for(key in socksCollection){
        console.log(key)
        if( socksCollection[key].pair > 0){
            var socksItem =  '<li class="socks' + key + 'color li-box"><svg height="100px" width="120px" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n' +
                '     viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">\n' +
                '<g><g transform="matrix(1 0 0 -1 0 1952)"><path class="socks-icon" d="M550.9,1870.1l0,36.6c0,38-38,31.7-38,31.7H314.5c-33.8,0-33.8-29.6-33.8-29.6l0.7-38.7L550.9,1870.1L550.9,1870.1L550.9,1870.1z M550.9,1481l0,354.6H280.8v-249.1c0,0,14.8-48.5-69.7-85.5l-149.9-66.5c114-81.3,124.5-259.6,124.5-259.6l161.8,61.2l-0.4,67.5C347.2,1303.6,337.7,1481,550.9,1481L550.9,1481z M35.3,1404.4c-14-1.4-41.8-81-12.1-151.7c29.7-55.9,66.1-89.9,130.9-84C135.1,1307.9,40.9,1411.8,35.3,1404.4L35.3,1404.4z M548.3,1446.1c-217.4,0-161-199.2-161-199.2C592.1,1318.7,548.3,1446.1,548.3,1446.1z M952,1734.3H753.6c-33.8,0-33.8-29.6-33.8-29.6l-0.7-37.3H990v35.2C990,1740.6,952,1734.3,952,1734.3L952,1734.3z M719.8,1383.9c0,0,14.8-48.5-69.7-85.5l-149.9-66.5c114-81.3,124.5-259.6,124.5-259.6l161.8,61.2l-0.4,67.5c0,0-9.5,178.7,203.7,178.7v353.2H719.8L719.8,1383.9L719.8,1383.9L719.8,1383.9z M474.3,1201.7c-14-1.4-41.8-81-12.1-151.7c29.7-55.9,66.1-89.9,130.9-84C574.2,1105.3,480,1209.2,474.3,1201.7L474.3,1201.7z M825,1044.3c190.7,63.3,161,199.2,161,199.2C768.6,1243.4,825,1044.3,825,1044.3z"/></g></g>\n' +
                '</svg><span class="pair-count">' + socksCollection[key].pair + '</span></li>'
            socksInput += socksItem;
        }

    }
    document.getElementById('output-socks-collection').innerHTML = socksInput;
}


function getSocksPair(arr){
    var socksObj = {};
    var pairCount = 0;
    for(var i = 0; i<arr.length; i++){
        if(!socksObj[arr[i]]){
            socksObj[arr[i]] = {'count':1, 'pair':0};
        }
        else{
            pairCount =  pairCount - socksObj[arr[i]].pair;
            socksObj[arr[i]].count += 1;
            socksObj[arr[i]].pair = Math.floor(socksObj[arr[i]].count/2 );
            pairCount = pairCount + socksObj[arr[i]].pair;
        }
    }

    paintOutputSocksCollection(socksObj)
    return pairCount;
}

getSocksPair(socksCollection);



function paintInputSocksCollection(socksCollection)
{
   var socksInput = ''
    for(var i=0;i<socksCollection.length;i++){
        var socksItem =  '<li class="socks' + socksCollection[i] + 'color li-box">' +
           '<?xml version="1.0" encoding="iso-8859-1"?>\n' +
            '<!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n' +
            '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"\n' +
            '     y="0px"\n' +
            '     viewBox="0 0 511.936 511.936" height="100px" width="60px"   xml:space="preserve">\n' +
            '<g>\n' +
            '\t<g>\n' +
            '\t\t<g>\n' +
            '\t\t\t<polygon points="436.879,68.267 249.145,68.267 249.145,85.325 436.879,85.274 \t\t\t"  class="socks-icon"/>\n' +
            '            <path d="M436.879,8.533c0-4.71-3.823-8.533-8.533-8.533h-34.133v25.532c0,4.71-3.823,8.533-8.533,8.533s-8.533-3.823-8.533-8.533\n' +
            '\t\t\t\tV0h-8.533v25.421c0,4.71-3.823,8.533-8.533,8.533s-8.533-3.823-8.533-8.533V0h-17.067v25.421c0,4.71-3.823,8.533-8.533,8.533\n' +
            '\t\t\t\ts-8.533-3.823-8.533-8.533V0h-17.067v25.421c0,4.71-3.823,8.533-8.533,8.533c-4.71,0-8.533-3.823-8.533-8.533V0h-25.6\n' +
            '\t\t\t\tc-4.71,0-8.533,3.823-8.533,8.533V51.2h187.733V8.533z" class="socks-icon"/>\n' +
            '            <path d="M325.95,307.019c0-47.053,38.272-85.333,85.333-85.333c7.177,0,14.438,3.243,20.838,6.101\n' +
            '\t\t\t\tc2.628,1.169,5.12,2.313,7.339,3.012l3.686,1.229c-4.087-7.697-6.263-15.778-6.263-23.74v-105.95L249.15,102.39v98.884\n' +
            '\t\t\t\tc0,24.457-11.81,47.667-31.59,62.063L75.513,366.778h3.465c60.911,0.29,110.438,50.048,110.438,110.908l0.017,6.17\n' +
            '\t\t\t\tc0.009,2.526,0.017,4.813,0.026,7.159c1.237-1.084,2.5-2.133,3.686-3.294l144.717-103.253c5.666-4.045,12.169-7.014,19.226-9.003\n' +
            '\t\t\t\tl-2.338-1.869C336.386,358.117,325.95,333.899,325.95,307.019z" class="socks-icon"/>\n' +
            '            <path d="M172.35,477.692c0-51.499-41.907-93.602-93.414-93.85H61.766c-19.268,31.633-15.974,72.926,10.479,101.265\n' +
            '\t\t\t\tc15.753,16.896,37.163,26.411,60.254,26.812c0.512,0.017,1.007,0.017,1.51,0.017c13.594,0,26.667-3.226,38.417-9.259\n' +
            '\t\t\t\tc-0.017-5.794-0.034-12.006-0.06-18.765L172.35,477.692z" class="socks-icon"/>\n' +
            '            <path d="M455.649,254.188l-21.47-7.159c-2.637-0.836-5.751-2.202-9.011-3.661c-4.847-2.159-10.342-4.617-13.892-4.617\n' +
            '\t\t\t\tc-37.641,0-68.267,30.626-68.267,68.267c0,21.837,8.226,41.301,22.571,53.393l15.078,12.058\n' +
            '\t\t\t\tc5.589-0.239,11.179-0.913,16.666-2.27c34.944-8.661,60.937-38.255,64.674-73.651\n' +
            '\t\t\t\tC463.533,281.981,461.255,267.424,455.649,254.188z" class="socks-icon"/>\n' +
            '\t\t</g>\n' +
            '\t</g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '    <g>\n' +
            '</g>\n' +
            '</svg>\n'+
            '</li>'
        socksInput += socksItem;
    }
    document.getElementById('input-socks-collection').innerHTML = socksInput;
}
paintInputSocksCollection(socksCollection);