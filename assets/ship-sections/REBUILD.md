# Ship section sources

Each workshop option is a separately named glTF node. Its source and dimensions are recorded in [sections.json](./sections.json). The artist, source listings and adaptations are listed in [credits.html](./credits.html).

The preparation reads the original licensed downloads in `output/assets-source/section-donors/`. Keep The Derelict as `derelict.glb`, the flying wing as `drone-ducted.zip`, Drone Sketch as `drone-orb.glb`, UFO Doodle as `ufo-doodle.zip` and Space Station as `station-9042.glb`. The prepared A01, cargo, fighter and freighter used by the workshop belong in its `prepared-ships/` subdirectory. A fresh copy of the workshop can read the same prepared files from `public/assets/re1monsen/`.

The FBX flying wing uses five maps from its author. Convert it once with Blender, then bake the pack from the repository root.

```sh
blender -b -P scripts/prepare-ship-sections.ducted.py -- output/assets-source/section-donors/drone-ducted.zip output/assets-source/section-donors/drone-ducted.glb
node --import tsx scripts/prepare-ship-sections.mjs output/assets-source/section-donors
```

The blueprints are in `src/faction-foundry/studies/shipBlueprints.ts`. The direct cuts keep source vertices in a common coordinate system and apply one uniform scale. New short adapters follow the real transverse contours at the mounting faces. Pressure-hull variants use their own closed, section-specific transverse profiles. Engine outlets, cargo pads and the Black Honey foot connect to those surfaces in the selected section’s local coordinates.

## Machine sections

The supplementary workshop pack uses the same bulkheads as the original 84 sections. Its inventory records the source nodes, axial cuts, installation components and SHA-256 digests. Scout Drone Sketch and Drone Concept come from `output/assets-source/faction-donors/`. First Aid DX2, Copper, Irrigation Control Robot and the Faired Chassis source package belong in `output/assets-source/section-donors/` with their download records. The structural Blender conversion selects the container and restores its native trim materials.

```sh
blender -b -y -P scripts/prepare-faired-chassis.py -- output/assets-source/section-donors/faired-chassis.zip output/assets-source/section-donors/faired-chassis.glb
node --import tsx scripts/prepare-machine-sections.mjs output/assets-source
```
