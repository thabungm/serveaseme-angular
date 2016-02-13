var API_ENGINE_URL = 'http://serveaseme.local/index.php/api/';
var LOGIN_FACEBOOK_LINK = 'http://serveaseme.local/index.php/auth/facebook';

var APP_URL = {
    login: API_ENGINE_URL + "authenticate",
    userbytoken: API_ENGINE_URL + "user-by-token",
    signup: API_ENGINE_URL + "users",
    update: API_ENGINE_URL + "users",
    delete: API_ENGINE_URL + "users",
    
    order_item: API_ENGINE_URL + "orders",
    order_read: API_ENGINE_URL + "orders/:id",
    order_update: API_ENGINE_URL + "orders/:id",
    order_delete: API_ENGINE_URL + "orders/:id",
    place_enquiry: API_ENGINE_URL + "enquiry",
    
    add_item:API_ENGINE_URL + "items",
    update_item:API_ENGINE_URL + "items",
    read_item:API_ENGINE_URL + "items/:id",
    delete_item:API_ENGINE_URL + "items/:id",
    get_category_items:API_ENGINE_URL + "category/:id/items",
    get_all_category:API_ENGINE_URL + "category",
    change_password:API_ENGINE_URL + "changepassword/:id",
    forgot_password:API_ENGINE_URL + "resetpassword",
    item_children:API_ENGINE_URL + "item-children",
    // address
    address_by_userid:API_ENGINE_URL + "address/user/:id",
    address_remove:API_ENGINE_URL + "address/remove"
    
};


