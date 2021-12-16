function getWeather() {

    var map = L.map('map').setView([20, 0], 2);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        minZoom: 2,
        maxZoom: 2,
        id: 'mapbox/dark-v10',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaGVsaWpvYXMiLCJhIjoiY2t4NXg4d3JsMWQwbjJvcGxocGQ2Y2U2aCJ9.cw-mezVyBng6EZVExUBZgw'
    }).addTo(map);

    var helMark = L.marker([60.16952, 24.93545]).addTo(map);
    var lonMark = L.marker([51.512791, -0.09184]).addTo(map);
    var kaiMark = L.marker([30.06263, 31.24967]).addTo(map);
    var mumMark = L.marker([19.01441, 72.847939]).addTo(map);
    var tokMark = L.marker([35.689499, 139.691711]).addTo(map);
    var sinMark = L.marker([1.28967, 103.850067]).addTo(map);
    var sydMark = L.marker([-33.867851, 151.207321]).addTo(map);
    var spMark = L.marker([-23.547501, -46.636108]).addTo(map);
    var nyMark = L.marker([40.714272, -74.005966]).addTo(map);
    var laMark = L.marker([34.0522342, -118.2436849]).addTo(map);

    function helsinki() {
        var helMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (hel) {
            var helWind = hel.wind.deg;
            var helDir = "";

            if (helWind <= 22.5) {helDir = "pohjoinen";} 
            else if (helWind <= 67.5) {helDir = "koillinen";} 
            else if (helWind <= 112.5) {helDir = "itä";} 
            else if (helWind <= 157.5) {helDir = "kaakko";} 
            else if (helWind <= 202.5) {helDir = "etelä";} 
            else if (helWind <= 247.5) {helDir = "lounas";}
            else if (helWind <= 292.5) {helDir = "länsi";}
            else if (helWind <= 337.5) {helDir = "luode";}
            else {helDir = "pohjoinen";}
    
            helMsg = "<img src='https://openweathermap.org/img/wn/" + hel.weather[0].icon + "@2x.png'><p>Kuvaus: " + hel.weather[0].description +
                "</br>Lämpötila: " + hel.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + hel.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + hel.clouds.all + 
                " %</br>Kosteus: " + hel.main.humidity + " %</br>Tuuli: " + hel.wind.speed + " m/s</br>Tuulen suunta: " + helDir + "</p>";
                
            document.getElementById('hel').innerHTML = helMsg;
            
            helMark.bindTooltip("Helsinki " + hel.main.temp.toFixed(0) + "°");

        })
        .catch( function (error) {
            document.getElementById('hel').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    helsinki();

    function london() {
        var lonMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&id=2643741&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (lon) {
            var lonWind = lon.wind.deg;
            var lonDir = "";

            if (lonWind <= 22.5) {lonDir = "pohjoinen";} 
            else if (lonWind <= 67.5) {lonDir = "koillinen";} 
            else if (lonWind <= 112.5) {lonDir = "itä";} 
            else if (lonWind <= 157.5) {lonDir = "kaakko";} 
            else if (lonWind <= 202.5) {lonDir = "etelä";} 
            else if (lonWind <= 247.5) {lonDir = "lounas";}
            else if (lonWind <= 292.5) {lonDir = "länsi";}
            else if (lonWind <= 337.5) {lonDir = "luode";}
            else {lonDir = "pohjoinen";}
    
            const lonMsg = "<img src='https://openweathermap.org/img/wn/" + lon.weather[0].icon + "@2x.png'><p>Kuvaus: " + lon.weather[0].description +
                "</br>Lämpötila: " + lon.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + lon.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + lon.clouds.all + 
                " %</br>Kosteus: " + lon.main.humidity + " %</br>Tuuli: " + lon.wind.speed + " m/s</br>Tuulen suunta: " + lonDir + "</p>";
                
            document.getElementById('lon').innerHTML = lonMsg;

            lonMark.bindTooltip("Lontoo " + lon.main.temp.toFixed(0) + "°");
            
        })
        .catch( function (error) {
            document.getElementById('lon').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    london();

    function cairo() {
        var kaiMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=cairo&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (kai) {
            var kaiWind = kai.wind.deg;
            var kaiDir = "";

            if (kaiWind <= 22.5) {kaiDir = "pohjoinen";} 
            else if (kaiWind <= 67.5) {kaiDir = "koillinen";} 
            else if (kaiWind <= 112.5) {kaiDir = "itä";} 
            else if (kaiWind <= 157.5) {kaiDir = "kaakko";} 
            else if (kaiWind <= 202.5) {kaiDir = "etelä";} 
            else if (kaiWind <= 247.5) {kaiDir = "lounas";}
            else if (kaiWind <= 292.5) {kaiDir = "länsi";}
            else if (kaiWind <= 337.5) {kaiDir = "luode";}
            else {kaiDir = "pohjoinen";}
    
            const kaiMsg = "<img src='https://openweathermap.org/img/wn/" + kai.weather[0].icon + "@2x.png'><p>Kuvaus: " + kai.weather[0].description +
                "</br>Lämpötila: " + kai.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + kai.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + kai.clouds.all + 
                " %</br>Kosteus: " + kai.main.humidity + " %</br>Tuuli: " + kai.wind.speed + " m/s</br>Tuulen suunta: " + kaiDir + "</p>";
                
            document.getElementById('kai').innerHTML = kaiMsg;

            kaiMark.bindTooltip("Kairo " + kai.main.temp.toFixed(0) + "°");

        })
        .catch( function (error) {
            document.getElementById('kai').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    cairo();

    function mumbai() {
        var mumMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=mumbai&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (mum) {
            var mumWind = mum.wind.deg;
            var mumDir = "";

            if (mumWind <= 22.5) {mumDir = "pohjoinen";} 
            else if (mumWind <= 67.5) {mumDir = "koillinen";} 
            else if (mumWind <= 112.5) {mumDir = "itä";} 
            else if (mumWind <= 157.5) {mumDir = "kaakko";} 
            else if (mumWind <= 202.5) {mumDir = "etelä";} 
            else if (mumWind <= 247.5) {mumDir = "lounas";}
            else if (mumWind <= 292.5) {mumDir = "länsi";}
            else if (mumWind <= 337.5) {mumDir = "luode";}
            else {mumDir = "pohjoinen";}
    
            const mumMsg = "<img src='https://openweathermap.org/img/wn/" + mum.weather[0].icon + "@2x.png'><p>Kuvaus: " + mum.weather[0].description +
                "</br>Lämpötila: " + mum.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + mum.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + mum.clouds.all + 
                " %</br>Kosteus: " + mum.main.humidity + " %</br>Tuuli: " + mum.wind.speed + " m/s</br>Tuulen suunta: " + mumDir + "</p>";
                
            document.getElementById('mum').innerHTML = mumMsg;
            
            mumMark.bindTooltip("Mumbai " + mum.main.temp.toFixed(0) + "°");

        })
        .catch( function (error) {
            document.getElementById('mum').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    mumbai();

    function tokyo() {
        var tokMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tokyo&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (tok) {
            var tokWind = tok.wind.deg;
            var tokDir = "";

            if (tokWind <= 22.5) {tokDir = "pohjoinen";} 
            else if (tokWind <= 67.5) {tokDir = "koillinen";} 
            else if (tokWind <= 112.5) {tokDir = "itä";} 
            else if (tokWind <= 157.5) {tokDir = "kaakko";} 
            else if (tokWind <= 202.5) {tokDir = "etelä";} 
            else if (tokWind <= 247.5) {tokDir = "lounas";}
            else if (tokWind <= 292.5) {tokDir = "länsi";}
            else if (tokWind <= 337.5) {tokDir = "luode";}
            else {tokDir = "pohjoinen";}
    
            const tokMsg = "<img src='https://openweathermap.org/img/wn/" + tok.weather[0].icon + "@2x.png'><p>Kuvaus: " + tok.weather[0].description +
                "</br>Lämpötila: " + tok.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + tok.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + tok.clouds.all + 
                " %</br>Kosteus: " + tok.main.humidity + " %</br>Tuuli: " + tok.wind.speed + " m/s</br>Tuulen suunta: " + tokDir + "</p>";
                
            document.getElementById('tok').innerHTML = tokMsg;

            tokMark.bindTooltip("Tokio " + tok.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('tok').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    tokyo();

    function singapore() {
        var sinMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=singapore&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (sin) {
            var sinWind = sin.wind.deg;
            var sinDir = "";

            if (sinWind <= 22.5) {sinDir = "pohjoinen";} 
            else if (sinWind <= 67.5) {sinDir = "koillinen";} 
            else if (sinWind <= 112.5) {sinDir = "itä";} 
            else if (sinWind <= 157.5) {sinDir = "kaakko";} 
            else if (sinWind <= 202.5) {sinDir = "etelä";} 
            else if (sinWind <= 247.5) {sinDir = "lounas";}
            else if (sinWind <= 292.5) {sinDir = "länsi";}
            else if (sinWind <= 337.5) {sinDir = "luode";}
            else {sinDir = "pohjoinen";}
    
            const sinMsg = "<img src='https://openweathermap.org/img/wn/" + sin.weather[0].icon + "@2x.png'><p>Kuvaus: " + sin.weather[0].description +
                "</br>Lämpötila: " + sin.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + sin.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + sin.clouds.all + 
                " %</br>Kosteus: " + sin.main.humidity + " %</br>Tuuli: " + sin.wind.speed + " m/s</br>Tuulen suunta: " + sinDir + "</p>";
                
            document.getElementById('sin').innerHTML = sinMsg;

            sinMark.bindTooltip("Singapore " + sin.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('sin').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    singapore();

    function sydney() {
        var sydMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=sydney&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (syd) {
            var sydWind = syd.wind.deg;
            var sydDir = "";

            if (sydWind <= 22.5) {sydDir = "pohjoinen";} 
            else if (sydWind <= 67.5) {sydDir = "koillinen";} 
            else if (sydWind <= 112.5) {sydDir = "itä";} 
            else if (sydWind <= 157.5) {sydDir = "kaakko";} 
            else if (sydWind <= 202.5) {sydDir = "etelä";} 
            else if (sydWind <= 247.5) {sydDir = "lounas";}
            else if (sydWind <= 292.5) {sydDir = "länsi";}
            else if (sydWind <= 337.5) {sydDir = "luode";}
            else {sydDir = "pohjoinen";}
    
            const sydMsg = "<img src='https://openweathermap.org/img/wn/" + syd.weather[0].icon + "@2x.png'><p>Kuvaus: " + syd.weather[0].description +
                "</br>Lämpötila: " + syd.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + syd.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + syd.clouds.all + 
                " %</br>Kosteus: " + syd.main.humidity + " %</br>Tuuli: " + syd.wind.speed + " m/s</br>Tuulen suunta: " + sydDir + "</p>";
                
            document.getElementById('syd').innerHTML = sydMsg;

            sydMark.bindTooltip("Sydney " + syd.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('syd').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    sydney();

    function saop() {
        var spMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&id=3448439&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (sp) {
            var spWind = sp.wind.deg;
            var spDir = "";

            if (spWind <= 22,5) {spDir = "pohjoinen";} 
            else if (spWind <= 67.5) {spDir = "koillinen";} 
            else if (spWind <= 112.5) {spDir = "itä";} 
            else if (spWind <= 157.5) {spDir = "kaakko";} 
            else if (spWind <= 202.5) {spDir = "etelä";} 
            else if (spWind <= 247.5) {spDir = "lounas";}
            else if (spWind <= 292.5) {spDir = "länsi";}
            else if (spWind <= 337.5) {spDir = "luode";}
            else {spDir = "pohjoinen";}
    
            const spMsg = "<img src='https://openweathermap.org/img/wn/" + sp.weather[0].icon + "@2x.png'><p>Kuvaus: " + sp.weather[0].description +
                "</br>Lämpötila: " + sp.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + sp.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + sp.clouds.all + 
                " %</br>Kosteus: " + sp.main.humidity + " %</br>Tuuli: " + sp.wind.speed + " m/s</br>Tuulen suunta: " + spDir + "</p>";
                
            document.getElementById('sp').innerHTML = spMsg;

            spMark.bindTooltip("São Paulo " + sp.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('sp').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    saop();

    function newy() {
        var nyMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&id=5128581&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (ny) {
            var nyWind = ny.wind.deg;
            var nyDir = "";

            if (nyWind <= 22.5) {nyDir = "pohjoinen";} 
            else if (nyWind <= 67.5) {nyDir = "koillinen";} 
            else if (nyWind <= 112.5) {nyDir = "itä";} 
            else if (nyWind <= 157.5) {nyDir = "kaakko";} 
            else if (nyWind <= 202.5) {nyDir = "etelä";} 
            else if (nyWind <= 247.5) {nyDir = "lounas";}
            else if (nyWind <= 292.5) {nyDir = "länsi";}
            else if (nyWind <= 337.5) {nyDir = "luode";}
            else {nyDir = "pohjoinen";}
    
            const nyMsg = "<img src='https://openweathermap.org/img/wn/" + ny.weather[0].icon + "@2x.png'><p>Kuvaus: " + ny.weather[0].description +
                "</br>Lämpötila: " + ny.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + ny.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + ny.clouds.all + 
                " %</br>Kosteus: " + ny.main.humidity + " %</br>Tuuli: " + ny.wind.speed + " m/s</br>Tuulen suunta: " + nyDir + "</p>";
                
            document.getElementById('ny').innerHTML = nyMsg;

            nyMark.bindTooltip("New York " + ny.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('ny').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    newy();

    function losa() {
        var laMsg = "";

        fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&id=1705545&units=metric&appid=efbf41a6d60949f91a3067e21438d226')
        .then(function (response) { return response.json() })
        .then(function (la) {
            var laWind = la.wind.deg;
            var laDir = "";

            if (laWind <= 22.5) {laDir = "pohjoinen";} 
            else if (laWind <= 67.5) {laDir = "koillinen";} 
            else if (laWind <= 112.5) {laDir = "itä";} 
            else if (laWind <= 157.5) {laDir = "kaakko";} 
            else if (laWind <= 202.5) {laDir = "etelä";} 
            else if (laWind <= 247.5) {laDir = "lounas";}
            else if (laWind <= 292.5) {laDir = "länsi";}
            else if (laWind <= 337.5) {laDir = "luode";}
            else {laDir = "pohjoinen";}
    
            const laMsg = "<img src='https://openweathermap.org/img/wn/" + la.weather[0].icon + "@2x.png'><p>Kuvaus: " + la.weather[0].description +
                "</br>Lämpötila: " + la.main.temp.toFixed(1) + "°</br>Tuntuu kuin: " + la.main.feels_like.toFixed(1) + "°</br>Pilvisyys: " + la.clouds.all + 
                " %</br>Kosteus: " + la.main.humidity + " %</br>Tuuli: " + la.wind.speed + " m/s</br>Tuulen suunta: " + laDir + "</p>";
                
            document.getElementById('la').innerHTML = laMsg;

            laMark.bindTooltip("Los Angeles " + la.main.temp.toFixed(0) + "°");
        })
        .catch( function (error) {
            document.getElementById('la').innerHTML = "<p>Säätietoja ei saatu haettua.</p>";
        })
    };

    losa();
}
