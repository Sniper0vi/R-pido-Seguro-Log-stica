## API Reference 

### Clientes

#### GET /clientes
- **Descrição**: Obtém uma lista de clientes. Se colocar um idCliente no query params, aparecerá apenas o cliente especificado
- **Response**: Array de clientes

#### POST /clientes
- **Descrição**: Cria um novo cliente
- **Body**:
```
Exemplo:
{
    "nomeCliente": "Vinicius",
    "cpfCliente": "12345678901",
    "telefoneCliente": "191234567",
    "emailCliente": "vinicius@gmail.com",
    "logradouroCliente": "Rua dos sapos",
    "numeroCliente": "341",
    "bairroCliente": "Matao", 
    "cidadeCliente": "Sumare",
    "estadoCliente": "Sao paulo",
    "cepCliente": "123456"
}
```
- **Response**:
```
{
    "message": "Cliente cadastrado com sucesso!"
}
```

#### PUT /clientes
- **Descrição**: Atualiza um cliente já existente, colocando o idCliente no path params
- **Body**:
```
Exemplo:
 {
    "nomeCliente": "Julia",
    "cpfCliente": "09876543210",
    "telefoneCliente": "197654321",
    "emailCliente": "julia@gmail.com",
    "logradouroCliente": "Rua Campos",
    "numeroCliente": "754",
    "bairroCliente": "Borogodo", 
    "cidadeCliente": "Lagarto",
    "estadoCliente": "Goias",
    "cepCliente": "173172"
}
```
- **Response**:
```
{
    "message": "Cliente atualizado com sucesso!"
}
```

#### DELETE /clientes
- **Descrição**: Deleta um cliente já existente, colocando o idCliente no path params
- **Response**:
```
{
    "message": "Cliente deletado com sucesso!"
}
```


### Pedidos

#### GET /pedidos
- **Descrição**: Obtém uma lista de pedidos
- **Response**: Array de pedidos

#### POST /pedidos
- **Descrição**: Cria um novo pedido
- **Body**:
```
Exemplo:
{
    "idCliente": "DE2D1E90-0091-4203-8D13-9BEB51A90A4C",
    "dataPedido": "2025/10/03",
    "tipoEntrega": "URGENTE",
    "distanciaPedido": "500",
    "cargaPedido": "1",
    "valorKM": "5",
    "valorKG": "10"
}
```
- **Response**:
```
{
    "message": "Pedido cadastrado com sucesso!"
}
```

#### PUT /pedidos
- **Descrição**: Atualiza um pedido colocando o idCliente no path params

- **Body**:
```
Exemplo:
{

    "dataPedido": "2025/11/18",
    "tipoEntrega": "URGENTE",
    "distanciaPedido": "500",
    "cargaPedido": "1",
    "valorKM": "5",
    "valorKG": "10"

}
```
- **Response**:
```
{
    "message": "Pedido atualizado com sucesso!"
}
```


### Entregas

#### GET /entregas 
- **Descrição**: Lista todas as entregas

#### POST /entregas
- **Descrição**: Cria uma nova entrega
- **Body**:
```
Exemplo:
{
    
    "idPedido": "DE2D1E90-0091-4203-8D13-9BEB51A90A4C",
	"statusEntrega": "Entregue"

}
```
- **Response**:
```
{
    "message": "Entrega cadastrada com sucesso!"
}
```

#### DELETE /entregas
- **Descrição**: Deleta um entrega já existente, colocando o idEntrega no path params
- **Response**:
```
{
    "message": "Entrega deletad com sucesso!"
}
```