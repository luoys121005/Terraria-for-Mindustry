const tfmlib = require("base/tfmlib");
const 泰拉大陆 = new Planet("泰拉大陆", Planets.sun, 1, 4.5);
泰拉大陆.meshLoader = prov(() => new MultiMesh(new HexMesh(泰拉大陆, 8)));
泰拉大陆.ruleSetter = new Cons({
	get: function(r) {
		r.worldProcessorPlayerLink = true;
	}
});
泰拉大陆.cloudMeshLoader = prov(() => new MultiMesh(new HexSkyMesh(泰拉大陆, 2, 0.15, 0.14, 5, Color.valueOf("25C9AB80"), 2, 0.42, 1, 0.43), new HexSkyMesh(泰拉大陆, 3, 0.6, 0.15, 5, Color.valueOf("25C9AB"), 2, 0.42, 1.2, 0.45)));
泰拉大陆.generator = new SerpuloPlanetGenerator();
泰拉大陆.visible = 泰拉大陆.accessible = 泰拉大陆.alwaysUnlocked = true;
泰拉大陆.clearSectorOnLose = true;
泰拉大陆.tidalLock = false;
泰拉大陆.localizedName = "泰拉大陆";
泰拉大陆.prebuildBase = false;
泰拉大陆.bloom = false;
泰拉大陆.startSector = 1;
泰拉大陆.orbitRadius = 85;
泰拉大陆.orbitTime = 180 * 60;
泰拉大陆.rotateTime = 90 * 60;
泰拉大陆.atmosphereRadIn = 0.02;
泰拉大陆.atmosphereRadOut = 0.3;
泰拉大陆.atmosphereColor = 泰拉大陆.lightColor = Color.valueOf("B5C2D9FF");
泰拉大陆.iconColor = Color.valueOf("FFFFFFFF");