"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class edge {
    constructor(weight, vertex_1, vertex_2, isDirected) {
        this.vertex1 = vertex_1;
        this.Weight = weight;
        this.vertex2 = vertex_2;
        this.isDirected = isDirected;
    }
}
exports.default = edge;
