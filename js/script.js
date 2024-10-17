document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("keydown", function(e) {
    if (e.key === 'F12' || (e.ctrlKey && (e.key === 'I' || e.key === 'J' || e.key === 'U'))) {
        e.preventDefault();
    }
});

function parsePrice(priceStr) {
    priceStr = priceStr.trim().toLowerCase();
    if (priceStr.endsWith("e")) {
        return parseFloat(priceStr.slice(0, -1)) * 100000000;
    } else if (priceStr.endsWith("w")) {
        return parseFloat(priceStr.slice(0, -1)) * 10000;
    } else {
        return parseFloat(priceStr);
    }
}

function formatPrice(price) {
    if (price >= 100000000) {
        return (price / 100000000).toFixed(2) + " 億楓幣";
    } else if (price >= 10000) {
        return (price / 10000).toFixed(2) + " 萬楓幣";
    } else {
        return price.toFixed(2) + " 楓幣";
    }
}

function calculateProfit() {
    const buyPriceStr = document.getElementById("buyPrice").value;
    const sellPriceStr = document.getElementById("sellPrice").value;

    const buyPrice = parsePrice(buyPriceStr);
    const sellPrice = parsePrice(sellPriceStr);

    const profit = (sellPrice * 0.9) - buyPrice;
    const formattedProfit = formatPrice(profit);

    document.getElementById("result").innerText = "利潤為: " + formattedProfit;
}
