import Graph from '../Classes/Graph';
import Vertex from '../Classes/Vertex';
import AdjList from './Adjlist';

class MatrizAdj extends AdjList
{
    constructor(grafo:Graph<any>)
    { 
        super(grafo);
        this.grafo = grafo;
    }

    private grafo:Graph<any>;

    /// <summary>
    /// Is Bounded (digraph)
    /// </summary>
    /// <param name="vx"></param>
    /// <param name="vy"></param>
    /// <returns></returns>
    protected is_bounded(vx:Vertex<any>, vy:Vertex<any>)
    {
        this.grafo.list_Edges.forEach(aresta => {
            if (this.grafo.isDigraph)
            {
                if (aresta.vertex1.id === vx.id && aresta.vertex2.id === vy.id)
                    return true;
            }
            else { 
                if ((aresta.vertex1.id === vx.id && aresta.vertex2.id === vy.id) 
                || (aresta.vertex1.id === vy.id && aresta.vertex2.id === vx.id))
                    return true;
            }
        });
        return false;
    }
    /// <summary>
    /// Returns Matrix
    /// </summary>
    /// <returns></returns>
    public get_matrix()
    {
        const n = this.grafo.NumVertex();
        var res:number[][] = [][n];
        for (let i = 0; i < n; i++)
        {
            for(let j=0; j < n; j++)
            {
                var iup:any = this.grafo.BuscaVertice(i);
                var jup:any = this.grafo.BuscaVertice(j);
                if (this.is_bounded(iup,jup)) 
                {
                    var edge_s :any = this.grafo.BuscaAresta(`${i} ${j}`); 
                    res[i][j] = edge_s.Weight;
                }
                else
                    res[i][j] = 0;
            }              
            
        }
        return res;
    }
   

}
export default MatrizAdj;