var constant = {
  blendMode: {
    ONEONE: BABYLON.ParticleSystem.BLENDMODE_ONEONE
  },
  bilboardMode: {
    BILLBOARDMODE_Y: BABYLON.ParticleSystem.BILLBOARDMODE_Y
  }
};

function getObjectsKeys(obj) {
  var keys = [];
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

function updateTexture(system, property, textures) {
  return function (key) {

    system[property] = textures[key];
  };
}

function updateColor(system, property) {
  return function (color) {
    system[property] = new BABYLON.Color4(color[0] / 255, color[1] / 255, color[2] / 255, color[3]);
  };
}

function createScene(engine, canvas) {
  var scene = new BABYLON.Scene(engine);
  var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());
  // camera.attachControl(canvas, true);
  var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  return scene;
}

function createParticle(scene) {
  var particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
  particleSystem.particleTexture = new BABYLON.Texture("./textures/flare.png", scene);
  particleSystem.textureMask = new BABYLON.Color4(1.0, 1.0, 1.0, 1.0);
  particleSystem.emitter = new BABYLON.Vector3(0, 0, 0);
  // particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0);
  // particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0);
  // particleSystem.addLifeTimeGradient(0, 0.5);
  // particleSystem.addLifeTimeGradient(1, 0);
  //
  // particleSystem.addSizeGradient(0, 0.5, 0.8);
  // particleSystem.addSizeGradient(1.0, 3, 4);
  //
  // particleSystem.translationPivot = new BABYLON.Vector2(0, -0.5);
  //
  // particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0));
  // particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 1));
  //
  // particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
  //
  // particleSystem.direction1 = new BABYLON.Vector3(-7, 8, 3);
  // particleSystem.direction2 = new BABYLON.Vector3(7, 8, -3);
  //
  // particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);
  //
  // particleSystem.minAngularSpeed = 0;
  // particleSystem.maxAngularSpeed = Math.PI;
  //
  // particleSystem.minInitialRotation = 0;
  // particleSystem.maxInitialRotation = Math.PI;
  //
  // particleSystem.addAngularSpeedGradient(0, 0.5);
  // particleSystem.addAngularSpeedGradient(1.0, 3);
  //
  // particleSystem.addVelocityGradient(0, 0.5, 0.8);
  // particleSystem.addVelocityGradient(1.0, 3, 4);
  //
  // particleSystem.addLimitVelocityGradient(0, 0.5);
  // particleSystem.addLimitVelocityGradient(1.0, 3);
  //
  // particleSystem.addDragGradient(0, 0.5);
  // particleSystem.addDragGradient(1.0, 3);
  //
  // particleSystem.addEmitRateGradient(0, 10);
  // particleSystem.addEmitRateGradient(1.0, 500);
  //
  // particleSystem.addStartSizeGradient(0, 10);
  // particleSystem.addStartSizeGradient(1.0, 500);
  //
  // particleSystem.addRampGradient(0.0, new BABYLON.Color3(1, 1, 1));
  // particleSystem.addRampGradient(0.09, new BABYLON.Color3(209/255, 204/255, 15/255));
  // particleSystem.useRampGradients = true;
  //
  // particleSystem.addColorRemapGradient(0, 0, 0.1);
  // particleSystem.addColorRemapGradient(0.2, 0.1, 0.8);
  //
  // particleSystem.addAlphaRemapGradient(0, 0, 0.1);
  // particleSystem.addAlphaRemapGradient(1.0, 0.1, 0.8);
  //
  // particleSystem.billboardMode = BABYLON.ParticleSystem.BILLBOARDMODE_Y;
  // var pointEmitter = particleSystem.createPointEmitter(new BABYLON.Vector3(-7, 8, 3), new BABYLON.Vector3(7, 8, -3));
  // pointEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1);
  // pointEmitter.direction2 = new BABYLON.Vector3(5, 2, 1);
  //
  // var boxEmitter = particleSystem.createBoxEmitter(new BABYLON.Vector3(-7, 8, 3), new BABYLON.Vector3(7, 8, -3), new BABYLON.Vector3(-1, 0, 0), new BABYLON.Vector3(1, 0, 0));
  // boxEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1);
  // boxEmitter.direction2 = new BABYLON.Vector3(5, 2, 1);
  // boxEmitter.minEmitBox = new BABYLON.Vector3(-2, -3, -4);
  // boxEmitter.maxEmitBox = new BABYLON.Vector3(2, 3, 4);
  //
  var sphereEmitter = particleSystem.createSphereEmitter(1.2);
  sphereEmitter.radius = 0.1;
  // sphereEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1);
  // sphereEmitter.direction2 = new BABYLON.Vector3(5, 2, -1);
  //
  // var hemisphericEmitter = particleSystem.createHemisphericEmitter(1.2);
  //
  // var cylinderEmitter = particleSystem.createCylinderEmitter(1,1,0,0);
  // cylinderEmitter.radius = 3.4;
  // cylinderEmitter.direction1 = new BABYLON.Vector3(-5, 2, 1);
  // cylinderEmitter.direction2 = new BABYLON.Vector3(5, 2, -1);
  //
  // var coneEmitter = particleSystem.createConeEmitter(2, Math.PI / 3);
  // coneEmitter.radius = 3.4;
  // coneEmitter.angle = Math.PI / 2;
  //
  // var noiseTexture = new BABYLON.NoiseProceduralTexture("perlin", 256, scene);
  // noiseTexture.animationSpeedFactor = 5;
  // noiseTexture.persistence = 2;
  // noiseTexture.brightness = 0.5;
  // noiseTexture.octaves = 2;
  //
  // particleSystem.noiseTexture = noiseTexture;
  // particleSystem.noiseStrength = new BABYLON.Vector3(100, 100, 100);
  console.log(particleSystem);
  return particleSystem;
}

function createGUI(particleSystem, textures) {
  var textureKeys = getObjectsKeys(textures);

  var gui = new dat.GUI({load: JSON, name: 'particle editor'});

  var data = {
    particleTexture: textureKeys[0],
    color1: [255, 255, 255, 1],
    color2: [255, 255, 255, 1],
    colorDead: [255, 255, 255, 1],
    textureMask: [255, 255, 255, 1],
    export: function () {
      var particleData = JSON.stringify(particleSystem.serialize());
      var a = document.createElement("a");
      var file = new Blob([particleData], {type: 'text/plain'});
      a.href = URL.createObjectURL(file);
      a.download = 'particle.txt';
      a.click();
    }
  };
  gui.remember(data);
  gui.remember(particleSystem);
  gui.addColor(data, 'textureMask').onChange(updateColor(particleSystem, 'textureMask'));

  gui.add(data, 'particleTexture', textureKeys).onChange(updateTexture(particleSystem, 'particleTexture', textures));

  gui.add(particleSystem, 'minLifeTime', 0, 5);
  gui.add(particleSystem, 'maxLifeTime', 0, 5);

  gui.add(particleSystem, 'minSize', 0, 5);
  gui.add(particleSystem, 'maxSize', 0, 5);

  gui.add(particleSystem, 'minScaleX', 0, 5);
  gui.add(particleSystem, 'maxScaleX', 0, 5);

  gui.add(particleSystem, 'emitRate', 1, 500);
  gui.add(particleSystem, 'manualEmitCount', -50, 50);

  gui.add(particleSystem, 'minAngularSpeed', 0, 5);
  gui.add(particleSystem, 'maxAngularSpeed', 0, 5);

  gui.add(particleSystem, 'minInitialRotation', 0, 5);
  gui.add(particleSystem, 'maxInitialRotation', 0, 5);

  gui.add(particleSystem, 'minEmitPower', -10, 10);
  gui.add(particleSystem, 'maxEmitPower', -10, 10);

  gui.add(particleSystem, 'updateSpeed', 0, 5);

  gui.addColor(data, 'color1').onChange(updateColor(particleSystem, 'color1'));
  gui.addColor(data, 'color2').onChange(updateColor(particleSystem, 'color2'));
  gui.addColor(data, 'colorDead').onChange(updateColor(particleSystem, 'color2'));

  gui.add(data, 'export');

}

window.onload = function () {
  var canvas = document.getElementById('renderCanvas');
  var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});
  var scene = createScene(engine, canvas);
  var textures = {
    flare: new BABYLON.Texture("./textures/flare.png", scene),
    quadangle: new BABYLON.Texture("./textures/quadangle.png", scene),
    circle_01: new BABYLON.Texture("./textures/circle_01.png", scene),
    flame_01: new BABYLON.Texture("./textures/flame_01.png", scene),
  };
  var particleSystem = createParticle(scene);
  particleSystem.start();
  createGUI(particleSystem, textures);
  engine.runRenderLoop(function () {
    if (scene) {
      scene.render();
    }
  });

  // Resize
  window.addEventListener("resize", function () {
    engine.resize();
  });
};
