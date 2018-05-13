currentMoney = 0;
rate = 0;
items = [{
    name: "Send out flyers",
    cost: 20,
    rate: 1
}, {
    name: "Soapbox on the quad",
    cost: 30,
    rate: 2
}, {
    name: "Host an alumni event",
    cost: 50,
    rate: 3
}, {
    name: "Increase marketing budget",
    cost: 100,
    rate: 10
}, {
    name: "Ban T-shirt sales",
    cost: 201,
    rate: 1
}, {
    name: "Create your own T-shirts",
    cost: 250,
    rate: 2
}, {
    name: "Ban bake sales",
    cost: 300,
    rate: 1
}, {
    name: "Build the satellite dorms again",
    cost: 500,
    rate: 10
}, {
    name: "Create a business major",
    cost: 600,
    rate: 10
}, {
    name: "Double the incoming class size",
    cost: 700,
    rate: 20
}, {
    name: "Keep the Reg open 24/7",
    cost: 1200,
    rate: 30
}, {
    name: "Double the number of Reg cubicles",
    cost: 1800,
    rate: 50
}, {
    name: "Buy out energy drink companies",
    cost: 2000,
    rate: 5
}, {
    name: "Close the satellite dorms (again)",
    cost: 2800,
    rate: 1
}, {
    name: "Build a mega-dorm",
    cost: 2800,
    rate: 450
}, {
    name: "Add a wind tunnel to campus",
    cost: 3800,
    rate: 100
}, {
    name: "De-Unionize grad students",
    cost: 6000,
    rate: 110
}, {
    name: "Sell student data to Facebook",
    cost: 8000,
    rate: 200
}, {
    name: "Create an engineering major",
    cost: 12000,
    rate: 1000
}, {
    name: "Add prison bars to the Reg windows",
    cost: 32000,
    rate: 5000
}, {
    name: "Pay to become an Ivy League school",
    cost: 270000,
    rate: 10000
}, {
    name: "Blackmail all other schools out of the Ivy League",
    cost: 1000000,
    rate: 1000000
}, {
    name: "Take over the world with mind-control drones",
    cost: 1000000000,
    rate: 1
}, ];

itemIndex = 0;

function reset() {
    currentMoney = 0;
    rate = 0;
    itemIndex = 0;
    updateMoneyAndRate();
    updateItem();
}

function updateItem() {
    document.getElementById("currentItem").innerHTML = items[itemIndex].name;
    document.getElementById("itemCost").innerHTML = (items[itemIndex].cost * 1000000).toLocaleString(undefined);
    document.getElementById("itemRate").innerHTML = (items[itemIndex].rate * 1000000).toLocaleString(undefined);
}

function updateMoneyAndRate() {
    document.getElementById("money").innerHTML = (currentMoney * 1000000).toLocaleString(undefined);
    document.getElementById("rate").innerHTML = (rate * 1000000).toLocaleString(undefined);
}

function updatePerRate() {
    currentMoney += rate;
    updateMoneyAndRate();
}

function beg($event) {
    currentMoney += 1;
    updateMoneyAndRate();
}

function buyItem($event) {
    if (currentMoney < items[itemIndex].cost) {
        return;
    }
    currentMoney -= items[itemIndex].cost;
    rate += items[itemIndex].rate;
    updateMoneyAndRate();
    if (itemIndex < items.length - 1) {
        itemIndex += 1;
        updateItem();
    }
}

setInterval(updatePerRate, 1000);

//window.onload = init();
