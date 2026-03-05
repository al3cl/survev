import { AbstractMsg, BitStream, Constants } from "./net";

export class PlayerPointsMsg implements AbstractMsg {
    pointsMap: Map<string, number> = new Map();

    serialize(s: BitStream) {
        // write size of map first
        s.writeUint8(this.pointsMap.size);
        for (let entry of this.pointsMap.entries()) {
            s.writeString(entry[0], Constants.PlayerNameMaxLen);
            s.writeUint8(entry[1]);
        }
    }

    deserialize(s: BitStream) {
        let size = s.readUint8();
        this.pointsMap = new Map();
        for (let i = 0; i < size; i++) {
            let playerName = s.readString(Constants.PlayerNameMaxLen);
            let points = s.readUint8();
            this.pointsMap.set(playerName, points);
        }
    }
}
