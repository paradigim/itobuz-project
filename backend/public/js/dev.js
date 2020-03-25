


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
                });
                console.log(datas);
            })
            .catch(error => {
                console.log(error);
            });
    }


    async function getCustomerData() {
       await axios.get('http://localhost:8000/api/customers')
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



    async function getInvoiceData() {
        await axios.get('http://localhost:8000/api/invoices')
            .then(response => {
                datas = response.data;
                totalInvoices = datas.length;
                $('#invoice-no').val(totalInvoices + 1);
                invoiceNo = $('#invoice-no').val();
                // datas.map(data => {
                //     $('.all-customers').append(`<div class='each-product'>
                //         <div class='prd-id'>${data.name}</div>
                //         <div class='prd-name'>$${data.price}</div>
                //     </div>`);
                // });
                //console.log('invoice',datas);
            })
            .catch(error => {
                console.log(error);
            });
    }


    $(window).on('load', async function() {
        await getProductData();
        await getCustomerData();
        await getInvoiceData();
        console.log('invoice into load:', invoiceNo);
    });
    console.log('invoice outside load:', invoiceNo);

    
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
    

    // $('#formDatas').on('submit', function(e) {
    //     e.preventDefault();

    //     const id = invoiceNo;
    // })
});