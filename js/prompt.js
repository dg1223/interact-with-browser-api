// alert("how are you?");

const showAlert = () => {
  alert("Dost, taka ase dhar ditey parbi? Just 500?");
};

const lendMoney = () => {
  const result = confirm("Will you lend me 500 taka?");
  console.log(result);
  if (result === true) {
    alert("Tui amar jan er dosto!!!");
  } else {
    alert("DGM... tokey ajke block maira dimu");
  }
};

const getInfo = () => {
  // alert
  // confirm
  const name = prompt("Tell me your name");
  console.log(name);
  if (name === null) {
    alert("Naam na diley kam nai!! Ja fooot");
  } else {
    alert("Welcome to this world");
  }
};
