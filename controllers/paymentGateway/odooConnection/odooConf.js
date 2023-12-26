const { Client } = require('odoorpc');

const odoo = new Client({
  url: 'http://103.36.254.35',
  port: 8070, // Default Odoo port
  db: 'bzr365_13',
  username: 'bridge',
  password: 'bazarodoo365',
});

const createOrderInOdoo = async (orderData) => {
  try {
    await odoo.connect();
    
    // Replace 'sale.order' with the actual Odoo model you want to use
    const orderId = await odoo.create('sale.order', orderData);

    console.log('Order created in Odoo with ID:', orderId);
  } catch (error) {
    console.error('Error creating order in Odoo:', error);
  } finally {
    odoo.disconnect();
  }
};

// Assuming you have the order data from the previous step
createOrderInOdoo(ordersData);
