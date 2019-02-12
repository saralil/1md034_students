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
  checkbox.value = fiskar[fisk].name;
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

function ordered() {
  const fishes = document.getElementsByClassName("box");
  const arr = [];
  var c = 0;
  for (x in fishes) {
    if (fishes[x].checked) {
      arr.push(fiskar[x].name)
    }
  }
    return arr;
}

function contact() {
  const info = [];
  const address = document.getElementsByClassName('address');
  for (i = 0; i < address.length; i++) {
    info.push(address[i].value);
  }
  info.push(document.getElementById("payment").value);
  info.push(document.querySelector("input[name=gndr]:checked").value);
  return info;
}

function done() {
  const items = ordered();
  const info = contact();

  const elem = document.createElement("div");
  elem.id = "tmp";

  var heading = document.createElement("h2");
  const conf = document.createTextNode("Order confirmation");
  heading.appendChild(conf);
  elem.appendChild(heading);
  heading = document.createElement("h3");
  const txt = document.createTextNode("Customer details")
  heading.appendChild(txt);
  elem.appendChild(heading);

  for (x in info) {
  const paraDiv = document.createElement('p');
  const txt = document.createTextNode(info[x]);
  elem.appendChild(paraDiv);
  paraDiv.appendChild(txt);
  }
  heading = document.createElement("h3");
  const sum = document.createTextNode("Order summary");
  heading.appendChild(sum);
  elem.appendChild(heading);

  const list = document.createElement("ul");
  for (x in items) {
    const li = document.createElement("li");
    const txt = document.createTextNode(items[x]);
    li.appendChild(txt);
    list.appendChild(li);
  }
  elem.appendChild(list);

  document.getElementById("confirmation").replaceChild(elem, document.getElementById("tmp"));
}
