import {util} from "../../utils/util";
import type { MapDef } from "../mapDefs";
import { MapId } from "../types/misc";
import {Main, PartialMapDef} from "./baseDefs.ts";
import {v2} from "../../utils/v2.ts";

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
    lootTable: {
        tier_perk_absorption_perks: [
            { name: "leadership", count: 1, weight: 1 },
            { name: "assume_leadership", count: 1, weight: 1 },
            { name: "firepower", count: 1, weight: 1 },
            { name: "gotw", count: 1, weight: 1 },
            { name: "windwalk", count: 1, weight: 1 },
            // { name: "rare_potato", count: 1, weight: 1 },
            // { name: "aoe_heal", count: 1, weight: 1 },
            { name: "endless_ammo", count: 1, weight: 1 },
            { name: "steelskin", count: 1, weight: 1 },
            { name: "ap_rounds", count: 1, weight: 1 },
            { name: "splinter", count: 1, weight: 1 },
            { name: "small_arms", count: 1, weight: 1 },
            { name: "takedown", count: 1, weight: 1 },
            { name: "field_medic", count: 1, weight: 1 },
            { name: "tree_climbing", count: 1, weight: 1 },
            { name: "scavenger", count: 1, weight: 1 },
            // { name: "scavenger_adv", count: 1, weight: 1 },
            { name: "pirate", count: 1, weight: 1 },
            // { name: "hunted", count: 1, weight: 1 },
            { name: "chambered", count: 1, weight: 1 },
            { name: "martyrdom", count: 1, weight: 1 },
            { name: "targeting", count: 1, weight: 1 },
            // { name: "bonus_45", count: 1, weight: 1 },
            // { name: "broken_arrow", count: 1, weight: 1 },
            { name: "fabricate", count: 1, weight: 1 },
            { name: "self_revive", count: 1, weight: 1 },
            { name: "bonus_9mm", count: 1, weight: 1 },
            { name: "flak_jacket", count: 1, weight: 1 },
            { name: "explosive", count: 1, weight: 1 },
            { name: "bonus_assault", count: 1, weight: 1 },
            // { name: "inspiration", count: 1, weight: 1 },
            // { name: "final_bugle", count: 1, weight: 1 },
            { name: "high_velocity", count: 1, weight: 1 },
            // { name: "halloween_mystery", count: 1, weight: 1 },
            // { name: "trick_nothing", count: 1, weight: 1 },
            // { name: "trick_size", count: 1, weight: 1 },
            // { name: "trick_m9", count: 1, weight: 1 },
            // { name: "trick_chatty", count: 1, weight: 1 },
            // { name: "trick_drain", count: 1, weight: 1 },
            { name: "treat_9mm", count: 1, weight: 1 },
            { name: "treat_12g", count: 1, weight: 1 },
            { name: "treat_556", count: 1, weight: 1 },
            { name: "treat_762", count: 1, weight: 1 },
            { name: "treat_super", count: 1, weight: 1 },
            { name: "turkey_shoot", count: 1, weight: 1 },
        ],
    },
    mapGen: {
        // arrays dont merge so we have to copy the whole darn thing
        densitySpawns: [
            {
                stone_01: 350,
                barrel_01: 76,
                silo_01: 8,
                crate_01: 50,
                crate_02: 4,
                crate_03: 8,
                bush_01: 78,
                cache_06: 12,
                tree_01: 320,
                tree_13: 30,
                hedgehog_01: 24,
                container_01: 5,
                container_02: 5,
                container_03: 5,
                container_04: 5,
                shack_01: 7,
                outhouse_01: 5,
                loot_tier_1: 24,
                loot_tier_beach: 4,

                gg_perk_crate: 20,
            },
        ],
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

                // gg_perk_crate: xx,
            },
        ],
        // randomSpawns: [],
        // spawnReplacements: [
        //     {
        //         tree_01: "tree_01sv",
        //         bush_01: "bush_01sv",
        //         stone_03: "stone_03sv",
        //     },
        // ],
    },
};

export const PerkAbsorption = util.mergeDeep({}, Main, mapDef) as MapDef;