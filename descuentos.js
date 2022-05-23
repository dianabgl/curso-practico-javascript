//const precioOriginal = 120;
//const descuento = 18;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const PrecioConDescuento = (precio * porcentajePrecioConDescuento)/100;
    return PrecioConDescuento;
}

function onClickButtonPriceDiscount(){
    
    const couponsDiscount = [
        {
            nombre: "Copper",
            porcentajedescuento: 10
        },
        {
            nombre: "Steel",
            porcentajedescuento: 20
        },
        {
            nombre: "Silver",
            porcentajedescuento: 30
        },
        {
            nombre: "Gold",
            porcentajedescuento: 40
        }
    ];
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCouponDiscount = document.getElementById("InputDiscount");
    const CouponDiscountValue = inputCouponDiscount.value;

    const clientCoupon = couponsDiscount.find(function(coupon){
        return coupon.nombre === CouponDiscountValue;
    });
    
    const resultP = document.getElementById("ResultP");
    if (!clientCoupon){
        resultP.innerText ="Cupón no válido";
    }
    else{
        const PrecioConDescuento = calcularPrecioConDescuento(priceValue, clientCoupon.porcentajedescuento);
        resultP.innerText ="El precio con descuento es: $" + PrecioConDescuento;
    }
    
}
//console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    PrecioConDescuento
//});
