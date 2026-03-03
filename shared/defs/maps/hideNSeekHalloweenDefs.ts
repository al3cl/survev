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
                ...Halloween.mapGen.densitySpawns[0],
                crate_03: 8, // nade crates, may reduce rarity (default = 8)
            },
        ],
    },
};

export const HideNSeekHalloween = util.mergeDeep({}, Halloween, mapDef) as MapDef;
