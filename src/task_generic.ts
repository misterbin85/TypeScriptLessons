console.log("*** Task ***")

class MyMap<T> {
    private map: {[key: string]: T} = {};

    setItem(key: string, item: T) {
        this.map[key] = item;
    }

    getItem(key: string) {
        return this.map[key];
    }

    clear() {
        this.map = {};
    }

    printMap() {
        for (let key in this.map) {
            console.log("My Map: ", key, this.map[key]); 
        }
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem("Year", 2019);
numberMap.setItem("Num", 123); 

numberMap.printMap();

console.log(`${numberMap.getItem("Year")}`);

numberMap.clear();

numberMap.printMap();