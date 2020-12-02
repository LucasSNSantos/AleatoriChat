import db from '../Database/connection';


async function Teste()
{
    return db('tb_tags').select('*');
}

export default Teste;
