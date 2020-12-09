import edge from '../Classes/Edge';
import Graph from '../Classes/Graph';

class AdjList{
    private Adj:Array<Array<number>>;
    private M:number;
    private N:number;

    public constructor(graph:Graph<any>){
        this.Adj = new Array<Array<number>>();
        this.N = graph.NumVertex();
        this.M = graph.NumEdges();

        while(this.Adj.length < this.N)
        {
            this.Adj.push(new Array<number>());
        }

        graph.list_Edges.forEach(element => {
            this.Adj[element.vertex1.id].push(element.vertex2.id);
            if(!graph.isDigraph)
                this.Adj[element.vertex2.id].push(element.vertex1.id);
        });
    }

    public get_Adj():Array<Array<number>>
    {
        return this.Adj;
    }

    public toString(){
        var retrn = "";
        for(let i = 0; i < this.N; i++)
        {
            retrn += "Vértice " + i + ": ";
            this.Adj[i].forEach(j => {
                retrn += j;
                retrn += " ";
            });
            retrn += "\n";
        }
        return retrn;
    }
    /**
     * Removes an Aresta in adj list
     * @param a 
     */
    public remove_adj(a:edge<any>){
        var v1_id = a.vertex1.id;
        var v2_id = a.vertex2.id;
          
            if(this.Adj[v1_id].indexOf(v2_id)!= -1)
                this.Adj[v1_id].splice(v2_id);

            if(this.Adj[v2_id].indexOf(v1_id)!= -1)
                this.Adj[v2_id].splice(v1_id);
    }
}

export default AdjList;