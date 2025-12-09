const { sql, getConnection } = require("../config/db");

const clienteModel = {
    buscarTodos: async () => {
        try {

            const pool = await getConnection(); 

            let sql = 'SELECT * FROM Clientes';

            const result = await pool.request().query(sql);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar clientes: ', error);
            throw error; 
        }
    },

    buscarUm: async (idCliente) => {
        try {
            const pool = await getConnection(); 

            const querySQL = 'SELECT * FROM Clientes WHERE idCliente = @idCliente';

            const result = await pool.request()
                .input('idCliente', sql.UniqueIdentifier, idCliente)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar o cliente: ', error);
            throw error; 
        }
    },

    buscarCPF: async (cpfCliente) => {
        try {

            const pool = await getConnection(); 

            const querySQL = 'SELECT * FROM Clientes WHERE cpfCliente = @cpfCliente;';

            const result = await pool.request()
                .input('cpfCliente', sql.Char(14), cpfCliente)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar CPF:', error);
            throw error; 
        }
    },

    buscarEmail: async (emailCliente) => {
        try {

            const pool = await getConnection();

            const querySQL = 'SELECT * FROM Clientes WHERE emailCliente = @emailCliente;';

            const result = await pool.request()
                .input('emailCliente', sql.VarChar(100), emailCliente)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar email:', error);
            throw error; 
        }
    },

    buscarTelefone: async (telefoneCliente) => {
        try {

            const pool = await getConnection(); 

            const querySQL = 'SELECT * FROM Clientes WHERE telefoneCliente = @telefoneCliente;';

            const result = await pool.request()
                .input('telefoneCliente', sql.VarChar(11), telefoneCliente)
                .query(querySQL);
            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar email:', error);
            throw error; 
        }
    },

    buscarPedidosPorCliente: async (idCliente) => {
        try {
            const pool = await getConnection();

            const querySQL = `SELECT * FROM Pedidos WHERE idCliente = @idCliente`

            const result = await pool.request()
                .input('idCliente', sql.UniqueIdentifier, idCliente)
                .query(querySQL);
            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar: ', error);
            throw error; 
        }
    },

    inserirCliente: async (nomeCliente, cpfCliente, telefoneCliente, emailCliente, logradouroCliente, numeroCliente, bairroCliente, cidadeCliente, estadoCliente, cepCliente) => {
        try {

            const pool = await getConnection(); 
            const transaction = new sql.Transaction(pool);
            await transaction.begin(); 

            let querySQL = 'INSERT INTO Clientes(nomeCliente, cpfCliente, telefoneCliente, emailCliente, logradouroCliente, numeroCliente, bairroCliente, cidadeCliente, estadoCliente, cepCliente) VALUES(@nomeCliente, @cpfCliente, @telefoneCliente, @emailCliente, @logradouroCliente, @numeroCliente, @bairroCliente, @cidadeCliente, @estadoCliente, @cepCliente)';

            await transaction.request()
                .input('nomeCliente', sql.VarChar(100), nomeCliente) 
                .input('cpfCliente', sql.Char(11), cpfCliente)
                .input('telefoneCliente', sql.VarChar(11), telefoneCliente)
                .input('emailCliente', sql.VarChar(100), emailCliente)
                .input('logradouroCliente', sql.VarChar(100), logradouroCliente)
                .input('numeroCliente', sql.VarChar(5), numeroCliente)
                .input('bairroCliente', sql.VarChar(100), bairroCliente)
                .input('cidadeCliente', sql.VarChar(100), cidadeCliente)
                .input('estadoCliente', sql.VarChar(100), estadoCliente)
                .input('cepCliente', sql.Char(9), cepCliente)
                .query(querySQL);
            await transaction.commit();

        } catch (error) {
            await transaction.rollback() 
            console.error('Erro ao inserir cliente: ', error);
            throw error; 
        }
    },
    atualizarCliente: async (idCliente, nomeCliente, cpfCliente, telefoneCliente, emailCliente, logradouroCliente, numeroCliente, bairroCliente, cidadeCliente, estadoCliente, cepCliente) => {
        try {
            const pool = await getConnection();
            const transaction = new sql.Transaction(pool);
            await transaction.begin(); 


            const querySQL = `
                UPDATE Clientes
                SET nomeCliente = @nomeCliente,
                    cpfCliente = @cpfCliente,
                    telefoneCliente = @telefoneCliente,
                    emailCliente = @emailCliente,
                    logradouroCliente = @logradouroCliente,
                    numeroCliente = @numeroCliente,
                    bairroCliente = @bairroCliente,
                    cidadeCliente = @cidadeCliente,
                    estadoCliente = @estadoCliente,
                    cepCliente = @cepCliente
                WHERE idCliente = @idCliente
            `;

            await transaction.request()
                .input('idCliente', sql.UniqueIdentifier, idCliente)
                .input('nomeCliente', sql.VarChar(100), nomeCliente)
                .input('cpfCliente', sql.Char(11), cpfCliente)
                .input('telefoneCliente', sql.VarChar(11), telefoneCliente)
                .input('emailCliente', sql.VarChar(100), emailCliente)
                .input('logradouroCliente', sql.VarChar(100), logradouroCliente)
                .input('numeroCliente', sql.VarChar(5), numeroCliente)
                .input('bairroCliente', sql.VarChar(100), bairroCliente)
                .input('cidadeCliente', sql.VarChar(100), cidadeCliente)
                .input('estadoCliente', sql.VarChar(100), estadoCliente)
                .input('cepCliente', sql.Char(9), cepCliente)
                .query(querySQL);
            await transaction.commit();


        } catch (error) {
            await transaction.rollback() 
            console.error('Erro ao atualizar cliente: ', error);
            throw error;
        }
    },
    deletarCliente: async (idCliente) => {
        try {
            const pool = await getConnection(); 

            const querySQL = 'DELETE FROM Clientes WHERE idCliente=@idCliente'

            await pool.request()
                .input('idCliente', sql.UniqueIdentifier, idCliente)
                .query(querySQL);

        } catch (error) {
            console.error('Erro ao deletar cliente: ', error);
            throw error; 
        }
    }
}

module.exports = { clienteModel }