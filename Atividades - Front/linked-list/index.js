function LinkedList() {
  let head = null;

  const Node = (nome, idade) => {
    return {
      nome,
      idade,
      filho: null,
    };
  };

  const add = (nome, idade) => {
    if (!head) {
      head = Node(nome, idade);
      return head;
    }

    let node = head;
    while (node.filho) {
      node = node.filho;
    }
    node.filho = Node(nome, idade);

    return node.filho;
  };

  return {
    add: (nome, idade) => add(nome, idade),
    print: () => console.log(head),
  };
}

const list = LinkedList();
list.add("João", 51);
list.add("Ana", 25);
list.add("Miguel", 2);
list.print();

/* Output (Lista gerada pelo algoritimo):
{
  nome: 'João',
  idade: 51,
  filho: {
    nome: 'Ana',
    idade: 25,
    filho: { nome: 'Miguel', idade: 2, filho: null }
  }
}
*/
