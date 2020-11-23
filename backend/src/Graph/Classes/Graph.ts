/**
 * Graph class
 * : obj => type of the graph's vertex that contains the info about something that is desirable;
 */

import AdjList from '../utils/Adjlist';
import edge from './Edge';
import Vertex from './Vertex'; 

class Graph<obj>{
    public list_Vertex:Array<Vertex<obj>>;
    public list_Edges:Array<edge<obj>>;
    public name:string;
    public isDigraph:boolean;
    private Adj:AdjList;

    public constructor(is_directed:boolean){
        this.isDigraph = is_directed;
        this.list_Vertex = new Array<Vertex<obj>>();
        this.list_Edges = new Array<edge<obj>>();

        this.Adj = new AdjList(this);
    }
    /**
     * Adds Vertex into Graph.
     * @param v 
     */
    public AddVertex(v:Vertex<obj>) {
        this.list_Vertex.push(v);
    }
    /**
     * Removes Vertex from Graph.
     * @param v 
     */
    public RemoveVertex(v:Vertex<obj>){
        this.list_Vertex.splice(
            this.list_Vertex.indexOf(v)
        );
    }
    /**
     *  Adds Edge into Graph.
     * @param e 
     */
    public AddEdge(e:edge<obj>) {
        if(e.isDirected == this.isDigraph){
            if(this.list_Vertex.indexOf(e.vertex1)!= -1)
                this.list_Vertex.push(e.vertex1);

            if(this.list_Vertex.indexOf(e.vertex2)!= -1)
                this.list_Vertex.push(e.vertex2);

            this.list_Edges.push(e);
        }
    }
    /**
     * Removes Edge from Graph.
     * @param e 
     */
    public RemoveEdge(e:edge<obj>){
        if(e.isDirected == this.isDigraph){
                this.list_Vertex.splice(
                this.list_Edges.indexOf(e)
            );
        }
        
    }
    /**
     * Returns the number of Vertexes.
     */
    public NumVertex(){
        return this.list_Vertex.length;
    }
    /**
     * Returns the number of Edges.
     */
    public NumEdges(){
        return this.list_Edges.length;
    }

    //#region Buscas
    public BuscaVertice(id:number)
    {
        let temp;
        this.list_Vertex.forEach(v => {
            if(v.id == id)
            {
                temp = v;
                return temp;
            }
        });

        return null;
    }
    public BuscaEmProfundidade(source:number)
    {
        var visited:boolean[] = new Array()[this.list_Vertex.length];

        this.DFS_search(source, visited);
    }

    protected DFS_search(v:number, visited:Array<boolean>){
        visited[v] = true;
        console.log(v);
        
        this.Adj.get_Adj()[v].forEach(n => {
            if(!visited[n]){
                this.DFS_search(n, visited);
            }
        });
    }
    //#endregion
}

export default Graph;