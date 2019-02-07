function MenuItem(name, price, ismeme, sp, attr, img) {
  this.name = name;
  this.price = price;
  this.isMeme = ismeme;
  this.superPower = sp;
  this.attribute = attr;
  this.img = img;
  this.info = function() {
    return this.name + ' ' + this.superPower;
  }
}

const fiskar = [];
for (const champ in champions) {
    const c = new MenuItem(champions[champ].name, champions[champ].price, champions[champ].isMeme, champions[champ].superPower, champions[champ].attribute, champions[champ].img)
    fiskar[champ] = c;
}

const myElement = document.getElementById("fishes");

for (const fisk in fiskar) {
	const fishNameDiv = document.createElement("div");
  fishNameDiv.className = "fishName";
  fishNameDiv.style.gridColumn = +fisk + 1;
  fishNameDiv.style.gridRow = 1;
  myElement.appendChild(fishNameDiv);

  const fishName = document.createTextNode(fiskar[fisk].name);
  fishNameDiv.appendChild(fishName);

  const imgDiv = document.createElement("div");
  imgDiv.style.gridColumn = +fisk + 1;
  imgDiv.style.gridRow = 2;
  myElement.appendChild(imgDiv);

  const checkbox = document.createElement("input");
  checkbox.type ="checkbox";
  checkbox.className = "box";
  imgDiv.appendChild(checkbox)

  const imgItem = document.createElement("img");
  imgItem.className = "fishImg"
  imgItem.src = fiskar[fisk].img;
  imgDiv.appendChild(imgItem);


  const listDiv = document.createElement("div")
  listDiv.className = "attributes";
  listDiv.style.gridColumn = +fisk + 1;
  myElement.appendChild(listDiv);

	const list = document.createElement("ul");
  listDiv.appendChild(list);

  const l1 = document.createElement("li");
  list.appendChild(l1);
  const l1Value = document.createTextNode(fiskar[fisk].superPower);
  l1.appendChild(l1Value);

  const l2 = document.createElement("li");
  list.appendChild(l2);
  const l2Value = document.createTextNode(fiskar[fisk].attribute);
  l2.appendChild(l2Value);
}


const myButton = document.getElementById('done');

function done() {
  const info = [];
  for (i = 0; i < 4; i++) {
    info[i] = document.getElementsByClassName('address')[i].value;
  }
  info[4] = document.getElementById("payment").value;
  const radios = document.forms['personal'].gndr;
  for (i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
    info[5] = radios[i].value;
    break;
  }
  }
  const endDiv = document.getElementById("orders");
  const fishes = document.getElementsByClassName("box");
  for (x in fishes) {

    if (fishes[x].checked) {
      const paraDiv = document.createElement('p');
      const txt = document.createTextNode(fiskar[x].name);
      endDiv.appendChild(paraDiv);
      paraDiv.appendChild(txt);
    }
  }
  for (i in info) {
    const paraDiv = document.createElement("p");
    endDiv.appendChild(paraDiv);
    const txt = document.createTextNode(info[i]);
    paraDiv.appendChild(txt);
  }
  return info;
}

new Vue({
    el: '#orders',
    methods: {
        markDone: done
      },
});
