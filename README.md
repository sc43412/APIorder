            ******** REGISTER A USER ***********

POST : http://localhost:8000/user/signup
Content-Type: application/x-www-form-urlencoded

name= saurav
email = sc43412@gmail.com
password = 12345

GET http://localhost:8000/user/login
Content-Type: application/x-www-form-urlencoded

email = sc43412@gmail.com
password = 12345

now we get bearer token

/// now every request we need to pass token with url.....

             ADD  a product

POST http://localhost:8000/product/add-product
/// this one for to get list of products aorted AND LIMIT 5 per page
GET http://localhost:8000/product/product-list/?page=2

         ADD a SEELLER

POST http://localhost:8000/seller/add-seller

          ADD ORDER

//here we need to pass product id and quantity to place order
POST http://localhost:8000/order/add-order/?pid=""&quantity=50

here we need to pass product id and quantity

    // to get all the order

GET http://localhost:8000/order/get-order-details

// delete a order

DELETE http://localhost:8000/order/remove/?delete=62afa29a7e472b5bbd6b6c4e
here passing order id

###

            UPLOAD EXCEL FIle

POST POST http://localhost:8000/upload
