document.getElementById("btn-modal-order-vegan").addEventListener("click", e => {
    $("#exampleModalVegan").modal('hide');
});
document.getElementById("btn-modal-order-asian").addEventListener("click", e => {
    $("#exampleModalAsian").modal('hide');
});
document.getElementById("btn-modal-order-healthy").addEventListener("click", e => {
    $("#exampleModalHealthy").modal('hide');
});
document.getElementById("btn-modal-order-bakery").addEventListener("click", e => {
    $("#exampleModalBakery").modal('hide');
});
document.getElementById("btn-modal-order-fruits").addEventListener("click", e => {
    $("#exampleModalFruits").modal('hide');
});
document.getElementById("btn-modal-order-fastfood").addEventListener("click", e => {
    $("#exampleModalFastFood").modal('hide');
});

document.getElementById("vegan-li").addEventListener("click", e => {
    $("#exampleModalVegan").modal('show');
});
document.getElementById("asian-li").addEventListener("click", e => {
    $("#exampleModalAsian").modal('show');
});
document.getElementById("healthy-li").addEventListener("click", e => {
    $("#exampleModalHealthy").modal('show');
});
document.getElementById("bakery-li").addEventListener("click", e => {
    $("#exampleModalBakery").modal('show');
});
document.getElementById("fruits-li").addEventListener("click", e => {
    $("#exampleModalFruits").modal('show');
});
document.getElementById("fastfood-li").addEventListener("click", e => {
    $("#exampleModalFastFood").modal('show');
});