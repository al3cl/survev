import {util} from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import {Main, PartialMapDef} from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: MapId.PerkAbsorption,
    desc: {
        name: "Perk Absorption",
        icon: "",
        buttonCss: "",
        // backgroundImg: "img/main_splash.png",
    },
    assets: {
        atlases: ["gradient", "loadout", "shared", "main", "perk_absorption"],
    },
    gameMode: {
        doPerkAbsorption: true,
        doNadeOC: true,
    },
    mapGen: {
        // arrays dont merge so we have to copy the whole darn thing
        fixedSpawns: [
            {
                // small is spawn count for solos and duos, large is spawn count for squads
                warehouse_01: { small: 1, large: 2 },
                warehouse_03: 1,
                house_red_01: { small: 3, large: 4 },
                house_red_02: { small: 3, large: 4 },
                barn_01: { small: 1, large: 3 },
                barn_02: 1,
                hut_01: 3,
                hut_02: 1, // spas hut
                hut_03: 1, // scout hut
                shack_03a: 2,
                shack_03b: { small: 2, large: 3 },
                greenhouse_01: 1,
                cache_01: 1,
                cache_02: 1, // mosin tree
                cache_07: 1,
                bunker_structure_01: { odds: 0.05 },
                bunker_structure_02: 1,
                bunker_structure_03: 1,
                bunker_structure_04: 1,
                bunker_structure_05: 1,
                warehouse_complex_01: 1,
                chest_01: 1,
                chest_03: { odds: 0.2 },
                mil_crate_02: { odds: 0.25 },
                tree_02: 3,
                teahouse_complex_01su: {
                    small: 1,
                    large: 2,
                },
                stone_04: 1,

                crate_perk_absorption: { small: 50, large: 60 },
            },
        ],
    },
};

export const PerkAbsorption = util.mergeDeep({}, Main, mapDef) as MapDef;