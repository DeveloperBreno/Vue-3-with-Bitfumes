var vue = new Vue({
  el: '#vue',
  data: {
    Pessoas: [ { PessoaId: 1, PessoaNome: 'Maria Eduarda' }, { PessoaId: 2, PessoaNome: 'João de Deus' } ],
    Products: [ { ProductId: 1, ProductName: 'Product one' }, { ProductId: 2, ProductName: 'product test' } ]
  }
})

// vue.products.push({PessoaId: 3, PessoaNome: 'Breno Gonçalves'});
// vue.products.push({PessoaId: 4, PessoaNome: 'Bruno Ediardo'});
// vue.products.pop();
// vue.products = vue.products.filter((e) => e.id !== 1 )