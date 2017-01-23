import {Pipe} from 'angular2/core';

@Pipe({
    name: 'RoomBedNumberPipe'
})

export class RoomBedNumberPipe {
    transform (value, [queryString]) {
        if (value==null) {
            return null;
        }else if(queryString=='Any'){
            return value;
        }
        console.log('transform');
        return value.filter(item=>parseInt(item.bedNumber)==parseInt(queryString));
    }
}