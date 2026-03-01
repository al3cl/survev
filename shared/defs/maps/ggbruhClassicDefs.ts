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
            vss: "vss:bal",
            mk12: "mk12:bal",
            l86: "l86:bal",
            scout: "scout:bal",
            model94: "model94:bal",
            mkg45: "mkg45:bal",
            blr: "blr:bal",
            mosin: "mosin:bal",
            sv98: "sv98:bal",
            m39: "m39:bal",
            svd: "svd:bal",
            garand: "garand:bal",
            m870: "m870:bal",
            mp220: "mp220:bal",
            saiga: "saiga:bal",
            spas12: "spas12:bal",
            p30l: "p30l:bal",
            p30l_dual: "p30l_dual:bal",
            deagle: "deagle:bal",
            deagle_dual: "deagle_dual:bal",
        },
    ],
};

export const GGBRUHClassic = util.mergeDeep({}, Main, mapDef) as MapDef;