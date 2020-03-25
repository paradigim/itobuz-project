


$(document).ready(function() {
    var datas, 
        totalInvoices = 0,
        invoiceNo = 0;


    async function getProductData() {
        await axios.get('http://localhost:8000/api/products')
            .then(response => {
                datas = response.data;
                datas.map(data => {
                    $('.all-product').append(`<div class='each-product'>
                        <div class='prd-id'>${data.name}</div>
                        <div class='prd-name'>$${data.price}</div>
                    </div>`);
                    $('.product-listing').append(`
                        <li class='each-prod' data-id=${data.id}>
                            ${data.name}
                        </li>
                   `);
                });
                console.log(datas);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function getCustomerData() {
       axios.get('http://localhost:8000/api/customers')
            .then(response => {
                datas = response.data;
                datas.map(data => {
                    $('.all-customers').append(`<div class='each-product'>
                        <div class='prd-id'>${data.name}</div>
                        <div class='prd-name'>$${data.price}</div>
                    </div>`);
                    $('.client-listing').append(`
                        <li class='each-client' data-id=${data.id}>
                            ${data.name}
                        </li>
                   `);
                });
                console.log(datas);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function getInvoiceData() {
        axios.get('http://localhost:8000/api/invoices')
            .then(response => {
                datas = response.data;
                totalInvoices = datas.length;
                $('#invoice-no').val(totalInvoices + 1);
                datas.map(data => { 
                    $('.all-invoices').append(`<div class='each-product'>
                        <div class='prd-id'>$${data.total}</div>
                        <div class='prd-name'>${data.createdAt}</div>
                    </div>
                `);
                });
                console.log('invoice',datas);
            })
            .catch(error => {
                console.log(error);
            });
    }


    $(window).on('load', function() {
        getProductData();
        getCustomerData();
        getInvoiceData();
    });

    var countQty=0, countRate=0, countDiscount=0;
    var totalCost=0, discountCost=0;
    $('#for-qty').on('input', function() {
        countQty = $(this).val();
        console.log(countQty);
        totalCost = countQty * countRate;
        if(countDiscount !== 0) {
            discountCost = (countQty * countRate * countDiscount) / 100;
        }
        $('.total-value').html(totalCost - discountCost);
    });
    $('#for-rate').on('input', function() {
        countRate = $(this).val();
        console.log(countRate);
        totalCost = countQty * countRate;
        if(countDiscount !== 0) {
            discountCost = (countQty * countRate * countDiscount) / 100;
        }
        $('.total-value').html(totalCost - discountCost);
    });
    $('#for-discount').on('input', function() {
        countDiscount = $(this).val();
        console.log(countDiscount);
        totalCost = countQty * countRate;
        if(countDiscount !== 0) {
            discountCost = (countQty * countRate * countDiscount) / 100;
        }
        $('.total-value').html(totalCost - discountCost);
    });

    
    $('#formDatas').on('submit', function(e) {
        e.preventDefault();

        var id = $('#invoice-no').val();
        var customer_id = $('#client-name').data('id');
        var discount = $('#for-discount').val();
        var total = $('.total-value').html();
        var createdAt = new Date().toDateString();
        var updatedAt = new Date().toDateString();

        var apiData =  {
            id,
            customer_id,
            discount,
            total,
            createdAt,
            updatedAt 
        }

        axios.post('http://localhost:8000/api/invoices', apiData);

        console.log(id, customer_id, discount, total, createdAt, updatedAt);
    });
});



$(document).on('click', '.each-client', function() {
    $('#client-name').val($(this).text());
    $('#client-name').attr('data-id', $(this).data('id'));
});
$(document).on('click', '.each-prod', function() {
    $('#item-name').val($(this).text());
    $('#item-name').attr('data-id', $(this).data('id'));
});