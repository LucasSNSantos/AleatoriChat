import Vertex from './Vertex';

class edge<obj>{
    vertex1:Vertex<obj>;
    vertex2:Vertex<obj>;
    isDirected:boolean;
    Weight:number;

    constructor(weight:number, vertex_1:Vertex<obj>, vertex_2:Vertex<obj>, isDirected:boolean)
    {
        this.vertex1 = vertex_1;
        this.Weight = weight;
        this.vertex2 = vertex_2;
        this.isDirected = isDirected;
    }

}

export default edge;