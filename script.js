document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === 'F12' || (e.ctrlKey && ['I', 'J', 'U'].includes(e.key))) {
        e.preventDefault();
    }
});

const parsePrice = priceStr => {
    const value = priceStr.trim().toLowerCase();
    if (value.endsWith("e")) return parseFloat(value.slice(0, -1)) * 1e8;
    if (value.endsWith("w")) return parseFloat(value.slice(0, -1)) * 1e4;
    return parseFloat(value);
};

const formatPrice = price => {
    if (price >= 1e8) return (price / 1e8).toFixed(2) + " 億楓幣";
    if (price >= 1e4) return (price / 1e4).toFixed(2) + " 萬楓幣";
    return price.toFixed(2) + " 楓幣";
};

const calculateProfit = () => {
    const buyPrice = parsePrice(document.getElementById("buyPrice").value);
    const sellPrice = parsePrice(document.getElementById("sellPrice").value);
    
    if (isNaN(buyPrice) || isNaN(sellPrice) || buyPrice < 0 || sellPrice < 0) {
        document.getElementById("result").innerText = "利潤為: 0 楓幣";
        return;
    }

    const profit = (sellPrice * 0.9) - buyPrice;

    const finalProfit = isNaN(profit) || profit < 0 ? 0 : profit;
    document.getElementById("result").innerText = "利潤為: " + formatPrice(finalProfit);
};
