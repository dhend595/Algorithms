class HighWaterMark {
    constructor(size) {
        this.size = size;
        this.buffer = [];
        
    }
    
    get HighWaterMark() {
        return this.size;
    }

    ack (itemid) {
        this.buffer.push(itemid);
    }

    get () {
        return this.buffer.shift();
    }
    

}

class WaterMark {
    constructor(size) {
        this.size = size;
        this.buffer = [];
    }
    acks (itemid) {
        this.buffer.push(itemid);
    }

    get () {
        return this.buffer.shift();
    }
}        