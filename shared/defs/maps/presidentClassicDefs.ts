import {util} from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import {Main, PartialMapDef} from "./baseDefs.ts";

const mapDef: PartialMapDef = {
    mapId: MapId.PresidentClassic,
    desc: {
        name: "Protect the President (Normal)",
        icon: "",
        buttonCss: "",
        // backgroundImg: "img/main_splash.png",
    },
    // assets: {
    //     atlases: ["gradient", "loadout", "shared", "main"],
    // },
    gameMode: {
        doNadeOC: true,
        presidentMode: true,
    },
    // lootTable: {
    //     // ...
    // },
    // mapGen: {
    //     // ...
    // },
};

export const PresidentClassic = util.mergeDeep({}, Main, mapDef) as MapDef;
