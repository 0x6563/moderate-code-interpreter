export class Sortable {
    set: any[] = [];

    get first() {
        return 0;
    }

    get firstItem() {
        return this.set[this.first];
    }
    get last() {
        if (!this.length) {
            return 0;
        }
        return this.cap ? Math.min(this.length - 1, this.cap) : this.length - 1;
    }

    get lastItem() {
        return this.set[this.last];
    }

    get length() {
        return this.set.length;
    }

    cap: number;

    constructor(
        private compare: (a, b) => 0 | -1 | 1,
        private low?: number,
        private high?: number,
    ) {
        this.low = Math.max(this.low || 0, 0);

        if (typeof this.low == 'number' && typeof this.high == 'number') {
            this.cap = this.low + this.high;
        }
    }


    add(item: any) {
        if (!this.length) {
            this.set.push(item);
            return;
        }
        if (this.compare(item, this.lastItem) >= 0) {
            if (!this.cap || this.cap < this.length) {
                this.set.push(item);
            }
            return;
        }
        if (this.compare(item, this.firstItem) <= 0) {
            this.set.splice(0, 0, item);
            return;
        }
        const index = this.seek(item);
        this.set.splice(index, 0, item);
    }

    extract() {
        return this.set.slice(this.low, this.high);
    }

    private seek(item: any) {
        let low = this.first;
        let high = this.last;

        while (low <= high) {
            const mid = low + (high - low) / 2;
            const compare = this.compare(item, this.set[mid]);
            if (compare == 0)
                return mid + 1;
            else if (compare > 0)
                low = mid + 1;
            else
                high = mid - 1;
        }

        return low;
    }
}