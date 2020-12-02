"use strict";
/**
 * Graph class
 * : obj => type of the graph's vertex that contains the info about something that is desirable;
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Adjlist_1 = __importDefault(require("../utils/Adjlist"));
class Graph {
    constructor(is_directed) {
        this.isDigraph = is_directed;
        this.list_Vertex = new Array();
        this.list_Edges = new Array();
        this.Adj = new Adjlist_1.default(this);
    }
    /**
     * Adds Vertex into Graph.
     * @param v
     */
    AddVertex(v) {
        this.list_Vertex.push(v);
    }
    /**
     * Removes Vertex from Graph.
     * @param v
     */
    RemoveVertex(v) {
        this.list_Vertex.splice(this.list_Vertex.indexOf(v));
    }
    /**
     *  Adds Edge into Graph.
     * @param e
     */
    AddEdge(e) {
        if (e.isDirected == this.isDigraph) {
            if (this.list_Vertex.indexOf(e.vertex1) != -1)
                this.list_Vertex.push(e.vertex1);
            if (this.list_Vertex.indexOf(e.vertex2) != -1)
                this.list_Vertex.push(e.vertex2);
            this.list_Edges.push(e);
        }
    }
    /**
     * Removes Edge from Graph.
     * @param e
     */
    RemoveEdge(e) {
        if (e.isDirected == this.isDigraph) {
            this.list_Vertex.splice(this.list_Edges.indexOf(e));
        }
    }
    /**
     * Returns the number of Vertexes.
     */
    NumVertex() {
        return this.list_Vertex.length;
    }
    /**
     * Returns the number of Edges.
     */
    NumEdges() {
        return this.list_Edges.length;
    }
    //#region Buscas
    BuscaVertice(id) {
        let temp;
        this.list_Vertex.forEach(v => {
            if (v.id == id) {
                temp = v;
                return temp;
            }
        });
        return null;
    }
    BuscaEmProfundidade(source) {
        var visited = new Array()[this.list_Vertex.length];
        this.DFS_search(source, visited);
    }
    DFS_search(v, visited) {
        visited[v] = true;
        console.log(v);
        this.Adj.get_Adj()[v].forEach(n => {
            if (!visited[n]) {
                this.DFS_search(n, visited);
            }
        });
    }
}
exports.default = Graph;
