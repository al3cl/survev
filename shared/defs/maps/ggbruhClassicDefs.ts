import {util} from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import {Main, PartialMapDef} from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: MapId.GGBRUHClassic,
    desc: {
        name: "GG/BRUH Modified Normal",
        icon: "",
        buttonCss: "",
        // backgroundImg: "img/main_splash.png",
    },
    // assets: {
    //     atlases: ["gradient", "loadout", "shared", "main"],
    // },
    gameMode: {
        doNadeOC: true,
        removeHeadshots: true,
    },
    // lootTable: {
    //     // ...
    // },
    // mapGen: {
    //     // ...
    // },
    gunReplacements: [
        {
            m9: "m9_test",
        },
    ],
};

export const GGBRUHClassic = util.mergeDeep({}, Main, mapDef) as MapDef;