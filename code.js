window.onload = function () {
        // создаём сцену
        let scene = new THREE.Scene();

        // создаём камеру
        let camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // создаём визуализатор
        let renderer = new THREE.WebGLRenderer();
        // задаём цвет фона
        renderer.setClearColor("#D2691E");
        // задаём размер окна с 3D графикой
        renderer.setSize(window.innerWidth, window.innerHeight);


        // создать вспомогательные осевые линии
        let axes = new THREE.AxisHelper(80);
        // добавить вспомогательные осевые линии на сцену
        scene.add(axes);


        // описываем размер плоскости
        let planeGeometry_1 = new THREE.PlaneGeometry(50, 30, 1, 1);
        // описываем цвет плоскости
        let planeMaterial_1 = new THREE.MeshLambertMaterial({color: "#ffde1e"});
        // создаём плоскость с заданными выше параметрами
        let plane_1 = new THREE.Mesh(planeGeometry_1, planeMaterial_1);
        // поворачиваем плоскость на 90 градусов
        plane_1.rotation.x = (-0.5) * Math.PI;
        // задаём координаты плоскости
        plane_1.position.x = 10;
        plane_1.position.y = 0;
        plane_1.position.z = 5;
        // добавляем плоскость на сцену
        scene.add(plane_1);


        // описываем размер куба
        let cubeGeometry_1 = new THREE.CubeGeometry(4, 4, 2);
        // описываем цвет куба
        let cubeMaterial_1 = new THREE.MeshLambertMaterial({color: "#0000FF"});
        // создаём куб с заданными выше параметрами
        let cube_1 = new THREE.Mesh(cubeGeometry_1, cubeMaterial_1);
        // задаём позицию куба
        cube_1.position.x = -4;
        cube_1.position.y = 3;
        cube_1.position.z = 0;
        // добавляем куб на сцену
        scene.add(cube_1);

        // задаём диаметр сферы и количество сегментов
        let sphereGeometry_1 = new THREE.SphereGeometry(4, 25, 25);
        // задаём цвет сферы
        let sphereMaterial_1 = new THREE.MeshLambertMaterial({color: "#2F4F4F"});
        // создаём сферу с описанными выше параметрами
        let sphere_1 = new THREE.Mesh(sphereGeometry_1, sphereMaterial_1);
        // задаём позицию сферы
        sphere_1.position.x = 20;
        sphere_1.position.y = 4;
        sphere_1.position.z = 2;
        // добавляем сферу на сцену
        scene.add(sphere_1);

        // задаём позицию камеры
        camera.position.x = 10;
        camera.position.y = 20;
        camera.position.z = 50;
        // делаем камеру повёрнутой в сторону куба
        camera.lookAt(cube_1.position);


        // создаём источник света и его цвет
        let spotLight_1 = new THREE.SpotLight("#CCCCCC");
        // описывае координаты источника света
        spotLight_1.position.set( 10, 20, 8 );
        // добавляем на сцену источник света
        scene.add(spotLight_1);
        // чтобы освещение нормально работало, я заменил с "MeshBasicMaterial" на "MeshLambertMaterial"

        // разрешить использование теней в 3D мире
        renderer.shadowMapEnabled = true;
        // применить тень к плоскости
        plane_1.receiveShadow = true;
        // применить тень к кубику
        cube_1.castShadow = true;
        // применить тень к сфере
        sphere_1.castShadow = true;
        // говорим, что источник света может реализовывать тень
        spotLight_1.castShadow = true;


        document.getElementById("objectForOutput3D").append(renderer.domElement);


        // выводим на экран то, что видит камера
        renderer.render(scene, camera);
};