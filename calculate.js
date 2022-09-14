const phoneValue = () => {
  let x = document.getElementById("input").value;
  const phone = x / 3.9;
  document.getElementById("answer").innerHTML = phone.toFixed(3);
  console.log(x, "/ 3.9 =", phone.toFixed(3));
};
