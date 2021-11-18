// Exemṕlo em JS
const cart = {
  quantity: 2,
  total: 200,
};

// bad - setagem da variável
cart.quantity = 3;

// good
const newCart = { ...cart, quantity: 3 };

// Exemplo em ReactJS
const [amout, setAmount] = useState(0);

// bat
amount = 2;

// good
setAmout(2);
