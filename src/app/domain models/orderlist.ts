import { Customer } from './Customer';
import { Order } from './Order';
import { Product } from './Product';

let product1 = new Product();
product1.productId = 1;
product1.name = 'samosa';
product1.price = 10;
product1.quantity = 2;

let product2 = new Product();
product2.productId = 2;
product2.name = 'tea';
product2.price = 10;
product2.quantity = 2;


let customer = new Customer();
customer.id = 1;
customer.firstName = 'sharim';
customer.lastName = 'naveed';
customer.gender = 'male';
customer.phoneNo = '8551927153';

let order = new Order();
order.couponCode = 's12';
order.orderId = 1;
order.products = [product1, product2];
order.customer = customer;
order.orderTime = new Date();
order.transactionNo = 123;

let order2 = new Order();
order2.couponCode = 's12';
order2.orderId = 2;
order2.products = [product1, product2];
order2.customer = customer;
order2.orderTime = new Date();
order2.transactionNo = 123;


export let list = [order, order2];

