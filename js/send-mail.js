(function() {
    function sendEmail(url, method, reqBody) {
        console.log(url, method, reqBody)
        return fetch(url, {
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            body: JSON.stringify(reqBody),
            method
        }).then(res => res.json());
    }

    var form = document.querySelector('#order');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        var url = e.target.getAttribute('action');
        var method = e.target.getAttribute('method');

        var reqBody = {};

        for (var field of e.target) {
            var name = field.getAttribute('name');
            var value = field.value;

            if (value && name) {
                reqBody[name] = value;
            }
        }

        reqBody.subject = 'Заказ еды'

        reqBody.text = (
            `
            Данные заказа:
                 Имя: ${reqBody.user_name}
                 Номер телефона: ${reqBody.user_phone}
                 Вид доставки: ${reqBody.type_delivery}
                 Тип меню: ${reqBody.delivery_menu}
                 Номер меню: ${reqBody.menu_number}
                 Город доставки: ${reqBody.user_city}
                 Адресс доставки: ${reqBody.user_address}
                 
            `
        )

        reqBody.to = reqBody.user_email;

        sendEmail(url, method, reqBody)
            .then(data => {
                var successModal = $('#success-order-modal');
                successModal.find('.order-id').html(data.order);
                successModal.modal('show');
            });
    });


})()