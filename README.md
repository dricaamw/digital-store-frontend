
# Backend- Ecommerce Digital Store

Uma API para o ecommerce da digital store...

## Entidades
- Usuarios
- Produtos
- Produtos_imagens
- Categorias
- Banners
- Coleções
- Oferta especial
- Marcas
- Generos
- Avaliações
- Tamanhos
- Carrinhos
- Endereços
- Meios-de-pagamento
- Pedidos
- Lista-de-desejos

### Usuarios
- GET /usuarios
    - retorna uma lista de usuarios
- GET /usuarios/{id-do-usuario}
    - retorna informações de um usuario
- POST /usuarios
    - cria um usuario
- PUT /usuarios/{id-do-usuario}
    - edita um usuario
- DELETE /usuarios/{id-do-usuario}
    - deleta um usuario

### Avaliações
- GET /avaliacoes
    - retorna uma lista de todas as avaliacoes
- GET /avaliacoes/{id-da-avaliacao}
    - retorna informações de uma avaliacao
- GET /avaliacoes-por-produto/{id-do-produto}
    - retorna lista de avaliacoes de um produto
- POST /avaliacoes
    - cria uma avaliacao
- PUT /avaliacoes/{id-da-avaliacao}
    - edita uma avaliacao
- DELETE /avaliacoes/{id-da-avaliacao}
    - deleta uma avaliacao
