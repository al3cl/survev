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
