import { GameConfig } from "../../gameConfig";
import { util } from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import { Main, type PartialMapDef } from "./baseDefs";
import {Halloween} from "./halloweenDefs.ts";

const mapDef: PartialMapDef = {
    mapId: MapId.HideNSeekHalloween,
    desc: {
        name: "Hide 'n' Seek (Halloween)",
        icon: "img/gui/pumpkin-play.svg",
        buttonCss: "btn-mode-halloween",
        backgroundImg: "img/main_splash_halloween.png",
    },
    gameMode: {
        hideNSeek: true,
        doNadeOC: true,
        points: {
            kill: 0,
            placement: [
                { top: 10, points: 1 }, // 1
                { top: 9, points: 1 },  // 2
                { top: 8, points: 1 },  // 3
                { top: 7, points: 1 },  // 4
                { top: 6, points: 1 },  // 5
                { top: 5, points: 2 },  // 7
                { top: 4, points: 1 },  // 8
                { top: 3, points: 1 },  // 9
                { top: 2, points: 1 },  // 10
                { top: 1, points: 5 },  // 15
            ],
            ignoreRoles: ["seeker"],
        },
    },
    lootTable: {
        // tier_pumpkin_perks: [{ name: "halloween_mystery", count: 1, weight: 1 }],
        tier_pumpkin_perks: [{ name: "", count: 1, weight: 1 }],
        // tier_halloween_mystery_perks: [
        //     { name: "trick_nothing", count: 1, weight: 1 },
        //     { name: "trick_size", count: 1, weight: 1 },
        //     { name: "trick_m9", count: 1, weight: 1 },
        //     { name: "trick_chatty", count: 1, weight: 1 },
        //     { name: "trick_drain", count: 1, weight: 1 },
        //
        //     { name: "treat_9mm", count: 1, weight: 1 },
        //     { name: "treat_12g", count: 1, weight: 1 },
        //     { name: "treat_556", count: 1, weight: 1 },
        //     { name: "treat_762", count: 1, weight: 1 },
        //     { name: "treat_super", count: 1, weight: 0.1 },
        // ],
    },
    mapGen: {
        densitySpawns: [
            {
                stone_01: 125,
                barrel_01: 76,
                crate_01: 120,
                crate_02: 6,
                crate_03: 8, // nade crates, may reduce rarity (default = 8)
                bush_01: 90,
                hedgehog_01: 12,
                cache_pumpkin_01: 32,
                cache_pumpkin_03: 32,
                shack_01: 6,
                outhouse_01: 6,
                loot_tier_1: 48,
                loot_tier_beach: 8,
            },
        ],
    },
};

export const HideNSeekHalloween = util.mergeDeep({}, Halloween, mapDef) as MapDef;
