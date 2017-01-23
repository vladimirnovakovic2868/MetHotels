import {Pipe} from 'angular2/core';

@Pipe({
    name: 'RoomPipe'
})

export class RoomPipe {
    transform (rooms, [size, beds]) {
        console.log('transform', size, beds);

        if (rooms==null) {
            return null;
        }else if(size=='Any' && beds=='Any'){
            return rooms;
        }else if(size=='Any'){
            return rooms.filter(room=>parseInt(room.bedNumber)==parseInt(beds));
        }else if(beds=='Any'){
            return rooms.filter(room=>parseInt(room.size)==parseInt(size));
        }

        return rooms.filter(room=>parseInt(room.size)==parseInt(size) && parseInt(room.bedNumber)==parseInt(beds));
    }
}