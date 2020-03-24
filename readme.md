# Summary
We need a quick prototype of an intuitive, good-looking single-page JS app for our invoicing system. I don't expect it to be fully functional, but the more complete the better, so that we can understand if we're going in the right direction. Build off the basic node js app we created that provides a simple JSON API and a way to host your assets. Documentation for the API can be found in the README file.



## Background
We're a 4 year-old company named MOCK that makes various products. I started building a simple invoicing system for us to keep track of customers, products and invoices but I'm overwhelmed with other projects and need help!


## Development status
I've finished the backend JSON API using standard REST routes in a node js app (outlined in the README). I’d like you to build a single page javascript app using this node js app and the JSON API as your starting point.


## Deliverables
Use standard Bootstrap components for the UI (ONLY CSS)
The default page should be a list of existing invoices. This page should have a button for creating a new invoice.
The invoice form should support selecting an existing Customer
The invoice form should make it easy to browse and add existing Products (you should be able to add any number of products)
When a Product is added there should be a way to edit the quantity
There should be a place to enter a discount for the invoice (a percentage discount)
At the bottom of the page, you should show a dynamically calculated invoice total. This total should take into account the quantity and price of each product and the invoice discount
As changes are made on the invoice form they should be automatically saved through the API (don't require the use of a Save button)
Allow a user to create new customers
Allow a user to add new products

## Submitting your project
Push your commits to the repository and share the repo URL. (Angular/React/Vue) code should placed in frontend

Api documentations placed in /backend/readme.md