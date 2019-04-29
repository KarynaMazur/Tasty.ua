const KEY = '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';
const express = require('express');
const app = express();
var bodyParser = require('body-parser')
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const PORT = 3010;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sgMail.setApiKey(KEY);

app.post('/api/email', function(req, res) {
    const {
        to = 'mazur.karyna@gmail.com',
            from = 'food-delivery@mail.com',
            subject = 'Theme is not provided',
            text = '',
            html = ''
    } = req.body;

    const order = `${Math.round(Math.random() * 1000)}${Date.now()}`;
    const extendWithOrder = (text || html).concat(
        `Номер заказа: ${order};`
    );

    const msg = {
        to,
        from,
        subject,
        text: extendWithOrder,
    };

    console.log(msg)

    sgMail.send(msg);

    res.status(200).send({
        success: true,
        order
    });
});

app.listen(PORT, function() {
    console.log('Success! Example app listening on port ' + PORT);
});