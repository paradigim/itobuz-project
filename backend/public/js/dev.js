


$(document).ready(function() {
    var datas, totalInvoices = 0;


    function getProductData() {
        axios.get('http://localhost:8000/api/products')
            .then(response => {
                datas = response.data;
                datas.map(data => {
                    $('.all-product').append(`<div class='each-product'>
                        <div class='prd-id'>${data.name}</div>
                        <div class='prd-name'>$${data.price}</div>
                    </div>`);
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
                });
                console.log(datas);
            })
            .catch(error => {
                console.log(error);
            });
    }



    function getInvoiceData() {
        axios.get('http://localhost:8000/api/customers')
            .then(response => {
                datas = response.data;
                totalInvoices = data.length;
                // datas.map(data => {
                //     $('.all-customers').append(`<div class='each-product'>
                //         <div class='prd-id'>${data.name}</div>
                //         <div class='prd-name'>$${data.price}</div>
                //     </div>`);
                // });
                console.log(datas);
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


    $('#invoice-no').val(totalInvoices + 1);
    
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
});