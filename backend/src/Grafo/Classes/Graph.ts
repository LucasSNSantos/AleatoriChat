
import AdjList from '../utils/Adjlist';
import MatrixAdj from '../utils/MatrizAdj';
import edge from './Edge';
import Vertex from './Vertex'; 
import db from '../../Database/connection';
const max_value:number = 99999999999999;
/**
 * Graph class
 * : obj => type of the graph's vertex that contains the info about something that is desirable;
 */

interface tag_aux{
    id:number;
}
interface rtr_aux{
    caminho:string;
    chat_id:number;
}
class Graph<obj>{
    public list_Vertex:Array<Vertex<obj>>;
    public list_Edges:Array<edge<obj>>;
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
        if(e.isDirected === this.isDigraph){
            if(this.list_Vertex.indexOf(e.vertex1)!== -1)
                this.list_Vertex.push(e.vertex1);

            if(this.list_Vertex.indexOf(e.vertex2)!== -1)
                this.list_Vertex.push(e.vertex2);

            this.list_Edges.push(e);
        }
    }
    /**
     * Removes Edge from Graph.
     * @param e 
     */
    public RemoveEdge(e:edge<obj>){
        if(e.isDirected === this.isDigraph){
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
            if(v.id === id)
            {
                temp = v;
                return temp;
            }
        });

        return null;
    }
    public BuscaAresta(conj:string)
    {
        var temp:edge<any>;

        var str_aux:string[] = conj.split(" ");

        var v1id :number =+str_aux[0];
        var v2id:number = +str_aux[1];

        this.list_Edges.forEach(a => {
             if ((a.vertex1.id === v1id && a.vertex2.id === v2id)||
                (a.vertex1.id === v2id && a.vertex2.id === v1id))
            {
                temp = a;
                return temp;
            }
        });
        return undefined;
    }
    public BuscaEmProfundidade(source:number)
    {
        var visited:boolean[] = new Array()[this.list_Vertex.length];

        this.DFS_search(source, visited);
    }
    public is_bounded(vx:Vertex<any>, vy:Vertex<any>)
    {
        this.list_Edges.forEach(aresta => {
            if (this.isDigraph)
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
    protected DFS_search(v:number, visited:Array<boolean>){
        visited[v] = true;
        console.log(v);
        
        this.Adj.get_Adj()[v].forEach(n => {
            if(!visited[n]){
                this.DFS_search(n, visited);
            }
        });
    }

    private min_dist( dist:number[], vst:boolean[])
    {
        var min:number = max_value, min_index = -1;

        for (let v = 0; v < this.NumVertex(); v++)
            if (vst[v] === false && dist[v] <= min)
            {
                min = dist[v];
                min_index = v;
            }

        return min_index;
    }
    public str_path(source:number, prnt:number[])
    {
        var res:string = "";

        var vraux:any = this.BuscaVertice(source);;

        if(prnt[source] === -1)
        {
            return vraux.Label;
        }
           

        res += this.str_path(prnt[source],prnt);

        res += " -> " +vraux.Label;

        return res;
    }
    //const grafo = new Graph<User>(false);
    private last_id;
    
    public async onEnterTheParty({id,username}){
        
        const new_usr = new Vertex(id,username)
        
        this.AddVertex(new_usr);
        if(this.NumVertex()>=2){
            this.list_Vertex.forEach(async element => {
                

                if(!this.is_bounded(new_usr,element))
                {
                     this.AddEdge(new edge(await this.calcweight(new_usr.id,element.id),new_usr,element,false))
                }
            });
            if(new_usr.id != this.last_id){
                    
                const sala_name = this.last_id
                await db('tb_sala').insert({sala_name})
                const [tb_sala_id] = await db('tb_sala').where('sala_name',sala_name).select('sala_id')
                
                
                const caminho = this.Dijkstra(new_usr.id,this.last_id);
                const new_chat:rtr_aux = {} as rtr_aux;
                new_chat.caminho = caminho;
                new_chat.chat_id = tb_sala_id.id; 
                return new Promise((resolve,reject) =>{
                    if(tb_sala_id != null) resolve(tb_sala_id.id)
                    else{
                        reject('Grafo falhou')
                    }
                });
            }
            this.last_id = new_usr.id;
        }
        
        
        //conectar (tantos usuarios)
    }
    
    public async calcweight(af1:number, af2:number ){
        
        const {rows1} = await db.raw(`select id from get_user_all_tags(${af1}) as (id int) `);
        const {rows2} = await db.raw(`select id from get_user_all_tags(${af2}) as (id int) `);
      
        const id1 = rows1 as tag_aux[];
        const id2 = rows2 as tag_aux[];
        var peso:number=0;
        
        for(let i = 0 ; i<id1.length;i++){
            for(let j = 0 ; j<id2.length;j++){
                if(id1[i] !== id2[j]){
                    peso += +id1[i].id as number;
                    peso += +id2[j].id as number;
                }
            }
        }
        return peso;
    }
    
    public Dijkstra(source:number, dest:number)
    {
        var matrix:MatrixAdj = new MatrixAdj(this);
        var out_put:string = "";
        const n = this.NumVertex();
        
        var parent:number[] = new Number[n];
        var dist:number[] = new Number[n];
        var visitado:boolean[] = new Boolean[n];

        for (let i = 0; i < n; i++)
        {
            parent[i] = -1;
            dist[i] = max_value;
            visitado[i] = false;
        }
        dist[source] = 0;

        for (let count = 0; count < n - 1; count++)
        {
            var u:number = this.min_dist(dist, visitado);

            visitado[u] = true;

            for (let v = 0; v < n; v++)
                if (!visitado[v] && matrix.get_matrix()[u][v] !== 0
                    && dist[u] !== max_value
                    && dist[u] + matrix.get_matrix()[u][v] < dist[v]) 
                {
                    dist[v] = dist[u] + matrix.get_matrix()[u][v];
                    parent[v] = u;
                }
                    
        }
        var str:string = this.str_path(dest, parent);
        out_put += `Caminho mínimo do ${this.BuscaVertice(source)} até ${this.BuscaVertice(dest)} : ${dist[dest]}`;
        out_put += "\nCaminho: " + str;

        return out_put;
    }

    //#endregion
}

export default new Graph(false);