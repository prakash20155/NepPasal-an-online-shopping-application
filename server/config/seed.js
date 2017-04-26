/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');
var Product = require('../api/product/product.model');
var Category = require('../api/category/category.model');
var Brand = require('../api/brand/brand.model');
var PaymentMethod = require('../api/PaymentMethod/PaymentMethod.model');
var Setting = require('../api/setting/setting.model');
var Feature = require('../api/feature/feature.model');
var Coupon = require('../api/coupon/coupon.model');
var Shipping = require('../api/shipping/shipping.model');
var Country = require('../api/country/country.model');

Shipping.find(function (err, data) {
  if(data.length < 1){
    Shipping.create(
      {
        "_id" : "561f73dbe87e75d814a98f5a",
        "carrier" : "TNT",
        "country" : "Nepal",
        "charge" : 100,
        "minWeight" : 20,
        "maxWeight" : 200,
        "minOrderValue" : 200,
        "active" : true,
        "__v" : 0,
        "name" : "TNT"
      },
      {
          "_id" : "561f7ff6fb2f8dac199a618f",
          "carrier" : "UPS",
          "country" : "USA",
          "charge" : 500,
          "minWeight" : 0,
          "maxWeight" : 100,
          "minOrderValue" : 5000,
          "__v" : 0,
          "active" : true
      },
      {
          "_id" : "561f801ffb2f8dac199a6190",
          "carrier" : "DHL",
          "country" : "Germany",
          "charge" : 300,
          "minWeight" : 0,
          "maxWeight" : 200,
          "minOrderValue" : 3000,
          "active" : true,
          "__v" : 0
      },
      {
          "_id" : "561f804dfb2f8dac199a6191",
          "carrier" : "DHL",
          "country" : "India",
          "charge" : 50,
          "minWeight" : 100,
          "maxWeight" : 500,
          "minOrderValue" : 1000,
          "active" : true,
          "__v" : 0
      }
    );
  }
});

Coupon.find(function (err, data) {
  if(data.length < 1){
    Coupon.create(
      {
        "_id" : "561cbd6fc3c4fab4009caa0e",
        "code" : "AP100",
        "amount" : 100,
        "info" : "$100 discount on all products above $100",
        "active" : true,
        "type" : "Discount",
        "minimumCartValue" : 100,
        "__v" : 0
      }
    );
  }
});

Feature.find(function (err, data) {
  if(data.length < 1){
    Feature.create(
      {"key" : "Processor", "val" : "Core i5", "active" :true},
      {"key" : "Processor", "val" : "Core i7", "active" :true},
      {"key" : "CPU ", "val" : "Quad-core", "active" :true},
      {"key" : "Display", "val" : "14.0 inch", "active" :true},
      {"key" : "Display", "val" : "15.2 inch", "active" :true},
      {"key" : "Display", "val" : "17.0 inch", "active" :true},
      {"key" : "RAM", "val" : "4GB", "active" : true},
      {"key" : "RAM", "val" : "8GB", "active" : true},
      {"key" : "Graphics", "val" : "2GB", "active" : true},
      {"key" : "Graphics", "val" : "4GB", "active" : true},
      {"key" : "Hard Drive", "val" : "500GB", "active" : true},
      {"key" : "Hard Drive", "val" : "1TB", "active" : true},
      {"key" : "OS", "val" : "Windows 10", "active" : true},
      {"key" : "OS", "val" : "Android OS, v6.0 (Marshmallow)", "active" : true},
      {"key" : "Color", "val" : "Black", "active" : true},
      {"key" : "Color", "val" : "Silver", "active" : true},
      {"key" : "Color", "val" : "White", "active" : true},
      {"key" : "Primary Camera", "val" : "12 MP", "active" : true},
      {"key" : "Secondary Camera", "val" : "White", "active" : true},
      {"key" : "Graphic card", "val" : "Intel HD Graphics", "active" : true}
    );
  }
});

Setting.find(function (err, data) {
  if(data.length < 1){
    Setting.create({
      "minOrderValue" : 20,
      "shippingCharge" : 15
    });
  }
});

PaymentMethod.find(function (err, data) {
  if(data.length < 1){
    PaymentMethod.create({
        name: 'COD',
        email: '-',
        active : true
    },
    {
        name: 'PayPal',
        email: 'neppasal.payment@gmail.com',
        active : true
    },
    {
        name: 'Google',
        email: 'neppasal.payment@gmail.com',
        options: {
              ship_method_name_1: "UPS Next Day Air",
              ship_method_price_1: "20.00",
              ship_method_currency_1: "USD",
              ship_method_name_2: "UPS Ground",
              ship_method_price_2: "15.00",
              ship_method_currency_2: "USD"
          },
        active : true
    },
    {
        name: 'Stripe',
        email: 'pk_test_srKHaSHynBIVLX03r33xLszb',
        options: { chargeurl : "http://biri.in/order" },
        active : true
    });
  }
});

// Setting.find(function (err, data) {
//   if(data.length < 1){
//     Setting.create({
//       paypal : 'neppasal.payment@gmail.com'
//     });
//   }
// });

Thing.find(function (err, data) {
  if(data.length < 1){
    Thing.create({
      name : 'Development Tools',
      info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
    }, {
      name : 'Server and Client integration',
      info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
    }, {
      name : 'Smart Build System',
      info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
    },  {
      name : 'Modular Structure',
      info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
    },  {
      name : 'Optimized Build',
      info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
    },{
      name : 'Deployment Ready',
      info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
    });
  }
});

User.find(function (err, data) {
  if(data.length < 1){
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@test.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@admin.com',
      password: 'admin'
    }, function() {
        console.log('finished populating users');
    });
  }
});

Product.find(function (err, data) {
  if(data.length < 1){
    Product.create({
    "_id" : "5607a6af0dc20f1b0366522a",
    "name" : "Dell Inspiron 5459-i5",
    "info" : " Customize your Inspiron 14 without sacrificing screen quality. Choose HD touch for crisp, brilliant images and immersion into games and photos on your 14 display.Your every tap, swipe and scroll is responsive and accurate with a capacitive touch screen that feels natural and fluid because sensors are right under the screen. Have more fun with Windows 8.1, swipe through your photo album faster and unleash your creativity with capacitive touch.",
    "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "dell",
        "info" : "Dell",
        "name" : "Dell",
        "_id" : "5607c58bdddfb6780c5bddf3"
    },
    "nameLower" : "dell inspiron 5459-i5",
    "active" : true,
    "sku" : 5,
    "type" : "Laptop",
    "slug" : "dell-inspiron-5459-i5",
    "variants" : [
        {
            "mrp" : 2990.0000000000000000,
            "price" : 1699.0000000000000000,
            "RAM" : "16GB",
            "Screen" : "14 inch",
            "image" : "dell-inspiron-5459-i5.jpg"
        },
        {
            "mrp" : 3400.0000000000000000,
            "price" : 3400.0000000000000000,
            "RAM" : "8GB",
            "Screen" : "15.6 inch",
            "image" : "dell-inspiron-n5459-core-i5-with-4gb-gfx.jpg"
        },
        {
            "mrp" : 6899.0000000000000000,
            "price" : 6899.0000000000000000,
            "RAM" : "2GB",
            "Screen" : "15.6 inch",
            "image" : "dell-inspiron-5459-i5-red-color.jpg"
        },
        {
            "mrp" : 7000.0000000000000000,
            "price" : 7000.0000000000000000,
            "RAM" : "32GB",
            "weight" : "11.6 inch",
            "image" : "dell-inspiron-5459-i5.jpg"
        },
        {
            "mrp" : 7200.0000000000000000,
            "price" : 7200.0000000000000000,
            "RAM" : "64GB",
            "Screen" : "15.6 inch",
            "image" : "dell-inspiron-5459-i5-silver-color.jpg"
        }
    ],
    "keyFeatures" : [],
    "features" : [
        {
            "key" : "Processor",
            "val" : "Core i5"
        },
        {
            "key" : "RAM",
            "val" : "4GB"
        },
        {
            "key" : "Color",
            "val" : "Black"
        },
        {
            "key" : "OS",
            "val" : "Windows 10"
        },
        {
            "key" : "Graphic card",
            "val" : "Intel HD Graphics"
        }
    ],
    "category" : {
      "_id" : "850773d2d4124c770bfc4b59",
      "name" : "Laptops",
      "category" : 100,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "laptops"
    },
    "__v" : 0
},{
      "_id" : "5607a6af0dc20f1b0366522b",
      "name" : "Samsung Galaxy S7 edge",
      "info" : " It's not just a new phone. It brings a new way of thinking about what a phone can do. You defined the possibilities and we redefined the phone. The Galaxy S7 and S7 edge. Rethink what a phone can do.",
      "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "samsung",
        "info" : "Samsung",
        "name" : "Samsung",
        "_id" : "5607c5c1dddfb6780c5bddf8"
      },
      "nameLower" : "samsung galaxy s7 edge",
      "active" : true,
      "sku" : 5,
      "type" : "Mobiles",
      "slug" : "samsung-galaxy-s7-edge",
      "variants" : [
        {
          "mrp" : 2990.0000000000000000,
          "price" : 1699.0000000000000000,
          "RAM" : "16GB",
          "Screen" : "14 inch",
          "image" : "Samsung-Galaxy-S7-Edge_946.jpg"
        },
        {
          "mrp" : 3400.0000000000000000,
          "price" : 3400.0000000000000000,
          "RAM" : "8GB",
          "Screen" : "15.6 inch",
          "image" : "Samsung-Galaxy-S7-Edge_946.jpg"
        },
        {
          "mrp" : 6899.0000000000000000,
          "price" : 6899.0000000000000000,
          "RAM" : "2GB",
          "Screen" : "15.6 inch",
          "image" : "Samsung-Galaxy-S7-Edge_946.jpg"
        },
        {
          "mrp" : 7000.0000000000000000,
          "price" : 7000.0000000000000000,
          "RAM" : "32GB",
          "weight" : "11.6 inch",
          "image" : "Samsung-Galaxy-S7-Edge_946.jpg"
        },
        {
          "mrp" : 7200.0000000000000000,
          "price" : 7200.0000000000000000,
          "RAM" : "64GB",
          "Screen" : "15.6 inch",
          "image" : "Samsung-Galaxy-S7-Edge_946.jpg"
        }
      ],
      "keyFeatures" : [],
      "features" : [
        {
          "key" : "Processor",
          "val" : "Core i5"
        },
        {
          "key" : "RAM",
          "val" : "4GB"
        },
        {
          "key" : "Color",
          "val" : "Black"
        },
        {
          "key" : "OS",
          "val" : "Windows 10"
        },
        {
          "key" : "Graphic card",
          "val" : "Intel HD Graphics"
        }
      ],
      "category" : {
        "_id" : "560774dad4124c770bfc4b68",
        "name" : "Mobiles",
        "category" : 209,
        "parentCategory" : 2,
        "active" : true,
        "__v" : 0,
        "slug" : "mobiles"
      },
      "__v" : 0
    },{
      "_id" : "5607a6af0dc20f1b0366524t",
      "name" : "Acer N51",
      "info" : " Customize your Inspiron 14 without sacrificing screen quality. Choose HD touch for crisp, brilliant images and immersion into games and photos on your 14 display.Your every tap, swipe and scroll is responsive and accurate with a capacitive touch screen that feels natural and fluid because sensors are right under the screen. Have more fun with Windows 8.1, swipe through your photo album faster and unleash your creativity with capacitive touch.",
      "brand" : {
        "active" : true,
        "__v" : 0,
        "slug" : "acer",
        "info" : "Acer",
        "name" : "Acer",
        "_id" : "5578c5c1wegfb6780c5yk85u"
      },
      "nameLower" : "acer n51",
      "active" : true,
      "sku" : 5,
      "type" : "Laptop",
      "slug" : "acer-n51",
      "variants" : [
        {
          "mrp" : 2990.0000000000000000,
          "price" : 1699.0000000000000000,
          "RAM" : "16GB",
          "Screen" : "14 inch",
          "image" : "product_asuspc_N551JK.jpg"
        },
        {
          "mrp" : 3400.0000000000000000,
          "price" : 3400.0000000000000000,
          "RAM" : "8GB",
          "Screen" : "15.6 inch",
          "image" : "product_asuspc_N551JK.jpg"
        },
        {
          "mrp" : 6899.0000000000000000,
          "price" : 6899.0000000000000000,
          "RAM" : "2GB",
          "Screen" : "15.6 inch",
          "image" : "product_asuspc_N551JK.jpg"
        },
        {
          "mrp" : 7000.0000000000000000,
          "price" : 7000.0000000000000000,
          "RAM" : "32GB",
          "weight" : "11.6 inch",
          "image" : "product_asuspc_N551JK.jpg"
        },
        {
          "mrp" : 7200.0000000000000000,
          "price" : 7200.0000000000000000,
          "RAM" : "64GB",
          "Screen" : "15.6 inch",
          "image" : "product_asuspc_N551JK.jpg"
        }
      ],
      "keyFeatures" : [],
      "features" : [
        {
          "key" : "Processor",
          "val" : "Core i5"
        },
        {
          "key" : "RAM",
          "val" : "4GB"
        },
        {
          "key" : "Color",
          "val" : "Black"
        },
        {
          "key" : "OS",
          "val" : "Windows 10"
        },
        {
          "key" : "Graphic card",
          "val" : "Intel HD Graphics"
        }
      ],
      "category" : {
        "_id" : "850773d2d4124c770bfc4b59",
        "name" : "Laptops",
        "category" : 100,
        "parentCategory" : 1,
        "active" : true,
        "__v" : 0,
        "slug" : "laptops"
      },
      "__v" : 0
    }, function() {
        console.log('finished populating products');
    });
  }
});

Category.find(function (err, data) {
  if(data.length < 1){
    Category.create({
    "_id" : "560773abd4124c770bfc4b57",
    "name" : "Laptops & Computers",
    "category" : 1,
    "parentCategory" : 0,
    "active" : true,
    "__v" : 0,
    "slug" : "laptops-and-computers"
  },{
      "_id" : "560773b6d4124c770bfc4b58",
      "name" : "Mobiles & Tablets",
      "category" : 2,
      "parentCategory" : 0,
      "active" : true,
      "__v" : 0,
      "slug" : "mobiles-and-tablets"
  },{
      "_id" : "850773d2d4124c770bfc4b59",
      "name" : "Laptops",
      "category" : 100,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "laptops"
    },{
      "_id" : "5607f5j3d4124c770br54b59",
      "name" : "All In One",
      "category" : 101,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "all-in-one"
    },{
      "_id" : "5687f5j3d4125c770br54bu3",
      "name" : "Printers",
      "category" : 102,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "printers"
    },{
      "_id" : "5687f5j3d9275c770br54bu3",
      "name" : "Wifi Devices",
      "category" : 103,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "wifi-devices"
    },{
      "_id" : "4907f5j3d92751270br54car",
      "name" : "Pen Drives",
      "category" : 104,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "pen-drives"
    },{
      "_id" : "850773d2d4124c770bfc6z52",
      "name" : "Computer Accessories",
      "category" : 105,
      "parentCategory" : 1,
      "active" : true,
      "__v" : 0,
      "slug" : "computer-accessories"
    },{
      "_id" : "560774dad4124c770bfc4b68",
      "name" : "Mobiles",
      "category" : 209,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "mobiles"
  },{
      "_id" : "730774dad6074c770dwg4b68",
      "name" : "Tablets & IPad",
      "category" : 210,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "tablets-ipad"
    },{
      "_id" : "730586dad6074c770rfu4b68",
      "name" : "Bluetooth Devices",
      "category" : 211,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "bluetooth-devices"
    },{
      "_id" : "730586dad8953c770rfu4b68",
      "name" : "Docks & Keypads",
      "category" : 212,
      "parentCategory" : 2,
      "active" : true,
      "__v" : 0,
      "slug" : "docks-keypads"
    }, function() {
        console.log('finished populating categories');
    });
  }
});

Brand.find(function (err, data) {
  if(data.length < 1){
    Brand.create({
    "_id" : "5607c58bdddfb6780c5bddf3",
    "name" : "Dell",
    "info" : "Dell",
    "slug" : "dell",
    "active" : true,
    "__v" : 0
}, {
    "_id" : "5607c599dddfb6780c5bddf4",
    "name" : "HP",
    "info" : "HP",
    "slug" : "hp",
    "active" : true,
    "__v" : 0
},{
    "active" : true,
    "__v" : 0,
    "slug" : "samsung",
    "info" : "Samsung",
    "name" : "Samsung",
    "_id" : "5607c5c1dddfb6780c5bddf8"
},{
      "active" : true,
      "__v" : 0,
      "slug" : "apple",
      "info" : "Apple",
      "name" : "Apple",
      "_id" : "5578c5c1wegfb6780c5bddg2"
    },{
      "active" : true,
      "__v" : 0,
      "slug" : "htc",
      "info" : "HTC",
      "name" : "HTC",
      "_id" : "5578c5c1wegfb6780c5bddh6"
    },{
      "active" : true,
      "__v" : 0,
      "slug" : "sony",
      "info" : "Sony",
      "name" : "Sony",
      "_id" : "5578c5c1wegfb6780c5bdjo6"
    },{
      "active" : true,
      "__v" : 0,
      "slug" : "lg",
      "info" : "LG",
      "name" : "LG",
      "_id" : "5578c5c1wegfb6780c5bdho7"
    },{
      "active" : true,
      "__v" : 0,
      "slug" : "lenevo",
      "info" : "Lenevo",
      "name" : "Lenevo",
      "_id" : "5578c5c1wegfb6780c5bk8g7"
    },{
      "active" : true,
      "__v" : 0,
      "slug" : "acer",
      "info" : "Acer",
      "name" : "Acer",
      "_id" : "5578c5c1wegfb6780c5yk85u"
    }, function() {
        console.log('finished populating brands');
    });
  }
});

Country.find(function (err, data) {
  if(data.length < 1){
    Country.create({"name":"Afghanistan","dial_code":"+93","code":"AF"},{"name":"Albania","dial_code":"+355","code":"AL"},{"name":"Algeria","dial_code":"+213","code":"DZ"},{"name":"AmericanSamoa","dial_code":"+1 684","code":"AS"},{"name":"Andorra","dial_code":"+376","code":"AD"},{"name":"Angola","dial_code":"+244","code":"AO"},{"name":"Anguilla","dial_code":"+1 264","code":"AI"},{"name":"Antarctica","dial_code":"+672","code":"AQ"},{"name":"Antigua and Barbuda","dial_code":"+1268","code":"AG"},{"name":"Argentina","dial_code":"+54","code":"AR"},{"name":"Armenia","dial_code":"+374","code":"AM"},{"name":"Aruba","dial_code":"+297","code":"AW"},{"name":"Australia","dial_code":"+61","code":"AU"},{"name":"Austria","dial_code":"+43","code":"AT"},{"name":"Azerbaijan","dial_code":"+994","code":"AZ"},{"name":"Bahamas","dial_code":"+1 242","code":"BS"},{"name":"Bahrain","dial_code":"+973","code":"BH"},{"name":"Bangladesh","dial_code":"+880","code":"BD"},{"name":"Barbados","dial_code":"+1 246","code":"BB"},{"name":"Belarus","dial_code":"+375","code":"BY"},{"name":"Belgium","dial_code":"+32","code":"BE"},{"name":"Belize","dial_code":"+501","code":"BZ"},{"name":"Benin","dial_code":"+229","code":"BJ"},{"name":"Bermuda","dial_code":"+1 441","code":"BM"},{"name":"Bhutan","dial_code":"+975","code":"BT"},{"name":"Bolivia, Plurinational State of","dial_code":"+591","code":"BO"},{"name":"Bosnia and Herzegovina","dial_code":"+387","code":"BA"},{"name":"Botswana","dial_code":"+267","code":"BW"},{"name":"Brazil","dial_code":"+55","code":"BR"},{"name":"British Indian Ocean Territory","dial_code":"+246","code":"IO"},{"name":"Brunei Darussalam","dial_code":"+673","code":"BN"},{"name":"Bulgaria","dial_code":"+359","code":"BG"},{"name":"Burkina Faso","dial_code":"+226","code":"BF"},{"name":"Burundi","dial_code":"+257","code":"BI"},{"name":"Cambodia","dial_code":"+855","code":"KH"},{"name":"Cameroon","dial_code":"+237","code":"CM"},{"name":"Canada","dial_code":"+1","code":"CA"},{"name":"Cape Verde","dial_code":"+238","code":"CV"},{"name":"Cayman Islands","dial_code":"+ 345","code":"KY"},{"name":"Central African Republic","dial_code":"+236","code":"CF"},{"name":"Chad","dial_code":"+235","code":"TD"},{"name":"Chile","dial_code":"+56","code":"CL"},{"name":"China","dial_code":"+86","code":"CN"},{"name":"Christmas Island","dial_code":"+61","code":"CX"},{"name":"Cocos (Keeling) Islands","dial_code":"+61","code":"CC"},{"name":"Colombia","dial_code":"+57","code":"CO"},{"name":"Comoros","dial_code":"+269","code":"KM"},{"name":"Congo","dial_code":"+242","code":"CG"},{"name":"Congo, The Democratic Republic of the","dial_code":"+243","code":"CD"},{"name":"Cook Islands","dial_code":"+682","code":"CK"},{"name":"Costa Rica","dial_code":"+506","code":"CR"},{"name":"Cote d'Ivoire","dial_code":"+225","code":"CI"},{"name":"Croatia","dial_code":"+385","code":"HR"},{"name":"Cuba","dial_code":"+53","code":"CU"},{"name":"Cyprus","dial_code":"+357","code":"CY"},{"name":"Czech Republic","dial_code":"+420","code":"CZ"},{"name":"Denmark","dial_code":"+45","code":"DK"},{"name":"Djibouti","dial_code":"+253","code":"DJ"},{"name":"Dominica","dial_code":"+1 767","code":"DM"},{"name":"Dominican Republic","dial_code":"+1 849","code":"DO"},{"name":"Ecuador","dial_code":"+593","code":"EC"},{"name":"Egypt","dial_code":"+20","code":"EG"},{"name":"El Salvador","dial_code":"+503","code":"SV"},{"name":"Equatorial Guinea","dial_code":"+240","code":"GQ"},{"name":"Eritrea","dial_code":"+291","code":"ER"},{"name":"Estonia","dial_code":"+372","code":"EE"},{"name":"Ethiopia","dial_code":"+251","code":"ET"},{"name":"Falkland Islands (Malvinas)","dial_code":"+500","code":"FK"},{"name":"Faroe Islands","dial_code":"+298","code":"FO"},{"name":"Fiji","dial_code":"+679","code":"FJ"},{"name":"Finland","dial_code":"+358","code":"FI"},{"name":"France","dial_code":"+33","code":"FR"},{"name":"French Guiana","dial_code":"+594","code":"GF"},{"name":"French Polynesia","dial_code":"+689","code":"PF"},{"name":"Gabon","dial_code":"+241","code":"GA"},{"name":"Gambia","dial_code":"+220","code":"GM"},{"name":"Georgia","dial_code":"+995","code":"GE"},{"name":"Germany","dial_code":"+49","code":"DE"},{"name":"Ghana","dial_code":"+233","code":"GH"},{"name":"Gibraltar","dial_code":"+350","code":"GI"},{"name":"Greece","dial_code":"+30","code":"GR"},{"name":"Greenland","dial_code":"+299","code":"GL"},{"name":"Grenada","dial_code":"+1 473","code":"GD"},{"name":"Guadeloupe","dial_code":"+590","code":"GP"},{"name":"Guam","dial_code":"+1 671","code":"GU"},{"name":"Guatemala","dial_code":"+502","code":"GT"},{"name":"Guernsey","dial_code":"+44","code":"GG"},{"name":"Guinea","dial_code":"+224","code":"GN"},{"name":"Guinea-Bissau","dial_code":"+245","code":"GW"},{"name":"Guyana","dial_code":"+595","code":"GY"},{"name":"Haiti","dial_code":"+509","code":"HT"},{"name":"Holy See (Vatican City State)","dial_code":"+379","code":"VA"},{"name":"Honduras","dial_code":"+504","code":"HN"},{"name":"Hong Kong","dial_code":"+852","code":"HK"},{"name":"Hungary","dial_code":"+36","code":"HU"},{"name":"Iceland","dial_code":"+354","code":"IS"},{"name":"India","dial_code":"+91","code":"IN"},{"name":"Indonesia","dial_code":"+62","code":"ID"},{"name":"Iran, Islamic Republic of","dial_code":"+98","code":"IR"},{"name":"Iraq","dial_code":"+964","code":"IQ"},{"name":"Ireland","dial_code":"+353","code":"IE"},{"name":"Isle of Man","dial_code":"+44","code":"IM"},{"name":"Israel","dial_code":"+972","code":"IL"},{"name":"Italy","dial_code":"+39","code":"IT"},{"name":"Jamaica","dial_code":"+1 876","code":"JM"},{"name":"Japan","dial_code":"+81","code":"JP"},{"name":"Jersey","dial_code":"+44","code":"JE"},{"name":"Jordan","dial_code":"+962","code":"JO"},{"name":"Kazakhstan","dial_code":"+7 7","code":"KZ"},{"name":"Kenya","dial_code":"+254","code":"KE"},{"name":"Kiribati","dial_code":"+686","code":"KI"},{"name":"Korea, Democratic People's Republic of","dial_code":"+850","code":"KP"},{"name":"Korea, Republic of","dial_code":"+82","code":"KR"},{"name":"Kuwait","dial_code":"+965","code":"KW"},{"name":"Kyrgyzstan","dial_code":"+996","code":"KG"},{"name":"Lao People's Democratic Republic","dial_code":"+856","code":"LA"},{"name":"Latvia","dial_code":"+371","code":"LV"},{"name":"Lebanon","dial_code":"+961","code":"LB"},{"name":"Lesotho","dial_code":"+266","code":"LS"},{"name":"Liberia","dial_code":"+231","code":"LR"},{"name":"Libyan Arab Jamahiriya","dial_code":"+218","code":"LY"},{"name":"Liechtenstein","dial_code":"+423","code":"LI"},{"name":"Lithuania","dial_code":"+370","code":"LT"},{"name":"Luxembourg","dial_code":"+352","code":"LU"},{"name":"Macao","dial_code":"+853","code":"MO"},{"name":"Macedonia, The Former Yugoslav Republic of","dial_code":"+389","code":"MK"},{"name":"Madagascar","dial_code":"+261","code":"MG"},{"name":"Malawi","dial_code":"+265","code":"MW"},{"name":"Malaysia","dial_code":"+60","code":"MY"},{"name":"Maldives","dial_code":"+960","code":"MV"},{"name":"Mali","dial_code":"+223","code":"ML"},{"name":"Malta","dial_code":"+356","code":"MT"},{"name":"Marshall Islands","dial_code":"+692","code":"MH"},{"name":"Martinique","dial_code":"+596","code":"MQ"},{"name":"Mauritania","dial_code":"+222","code":"MR"},{"name":"Mauritius","dial_code":"+230","code":"MU"},{"name":"Mayotte","dial_code":"+262","code":"YT"},{"name":"Mexico","dial_code":"+52","code":"MX"},{"name":"Micronesia, Federated States of","dial_code":"+691","code":"FM"},{"name":"Moldova, Republic of","dial_code":"+373","code":"MD"},{"name":"Monaco","dial_code":"+377","code":"MC"},{"name":"Mongolia","dial_code":"+976","code":"MN"},{"name":"Montenegro","dial_code":"+382","code":"ME"},{"name":"Montserrat","dial_code":"+1664","code":"MS"},{"name":"Morocco","dial_code":"+212","code":"MA"},{"name":"Mozambique","dial_code":"+258","code":"MZ"},{"name":"Myanmar","dial_code":"+95","code":"MM"},{"name":"Namibia","dial_code":"+264","code":"NA"},{"name":"Nauru","dial_code":"+674","code":"NR"},{"name":"Nepal","dial_code":"+977","code":"NP"},{"name":"Netherlands","dial_code":"+31","code":"NL"},{"name":"Netherlands Antilles","dial_code":"+599","code":"AN"},{"name":"New Caledonia","dial_code":"+687","code":"NC"},{"name":"New Zealand","dial_code":"+64","code":"NZ"},{"name":"Nicaragua","dial_code":"+505","code":"NI"},{"name":"Niger","dial_code":"+227","code":"NE"},{"name":"Nigeria","dial_code":"+234","code":"NG"},{"name":"Niue","dial_code":"+683","code":"NU"},{"name":"Norfolk Island","dial_code":"+672","code":"NF"},{"name":"Northern Mariana Islands","dial_code":"+1 670","code":"MP"},{"name":"Norway","dial_code":"+47","code":"NO"},{"name":"Oman","dial_code":"+968","code":"OM"},{"name":"Pakistan","dial_code":"+92","code":"PK"},{"name":"Palau","dial_code":"+680","code":"PW"},{"name":"Palestinian Territory, Occupied","dial_code":"+970","code":"PS"},{"name":"Panama","dial_code":"+507","code":"PA"},{"name":"Papua New Guinea","dial_code":"+675","code":"PG"},{"name":"Paraguay","dial_code":"+595","code":"PY"},{"name":"Peru","dial_code":"+51","code":"PE"},{"name":"Philippines","dial_code":"+63","code":"PH"},{"name":"Pitcairn","dial_code":"+872","code":"PN"},{"name":"Poland","dial_code":"+48","code":"PL"},{"name":"Portugal","dial_code":"+351","code":"PT"},{"name":"Puerto Rico","dial_code":"+1 939","code":"PR"},{"name":"Qatar","dial_code":"+974","code":"QA"},{"name":"Romania","dial_code":"+40","code":"RO"},{"name":"Russia","dial_code":"+7","code":"RU"},{"name":"Rwanda","dial_code":"+250","code":"RW"},{"name":"Réunion","dial_code":"+262","code":"RE"},{"name":"Saint Barthélemy","dial_code":"+590","code":"BL"},{"name":"Saint Helena, Ascension and Tristan Da Cunha","dial_code":"+290","code":"SH"},{"name":"Saint Kitts and Nevis","dial_code":"+1 869","code":"KN"},{"name":"Saint Lucia","dial_code":"+1 758","code":"LC"},{"name":"Saint Martin","dial_code":"+590","code":"MF"},{"name":"Saint Pierre and Miquelon","dial_code":"+508","code":"PM"},{"name":"Saint Vincent and the Grenadines","dial_code":"+1 784","code":"VC"},{"name":"Samoa","dial_code":"+685","code":"WS"},{"name":"San Marino","dial_code":"+378","code":"SM"},{"name":"Sao Tome and Principe","dial_code":"+239","code":"ST"},{"name":"Saudi Arabia","dial_code":"+966","code":"SA"},{"name":"Senegal","dial_code":"+221","code":"SN"},{"name":"Serbia","dial_code":"+381","code":"RS"},{"name":"Seychelles","dial_code":"+248","code":"SC"},{"name":"Sierra Leone","dial_code":"+232","code":"SL"},{"name":"Singapore","dial_code":"+65","code":"SG"},{"name":"Slovakia","dial_code":"+421","code":"SK"},{"name":"Slovenia","dial_code":"+386","code":"SI"},{"name":"Solomon Islands","dial_code":"+677","code":"SB"},{"name":"Somalia","dial_code":"+252","code":"SO"},{"name":"South Africa","dial_code":"+27","code":"ZA"},{"name":"South Georgia and the South Sandwich Islands","dial_code":"+500","code":"GS"},{"name":"Spain","dial_code":"+34","code":"ES"},{"name":"Sri Lanka","dial_code":"+94","code":"LK"},{"name":"Sudan","dial_code":"+249","code":"SD"},{"name":"Suriname","dial_code":"+597","code":"SR"},{"name":"Svalbard and Jan Mayen","dial_code":"+47","code":"SJ"},{"name":"Swaziland","dial_code":"+268","code":"SZ"},{"name":"Sweden","dial_code":"+46","code":"SE"},{"name":"Switzerland","dial_code":"+41","code":"CH"},{"name":"Syrian Arab Republic","dial_code":"+963","code":"SY"},{"name":"Taiwan","dial_code":"+886","code":"TW"},{"name":"Tajikistan","dial_code":"+992","code":"TJ"},{"name":"Tanzania, United Republic of","dial_code":"+255","code":"TZ"},{"name":"Thailand","dial_code":"+66","code":"TH"},{"name":"Timor-Leste","dial_code":"+670","code":"TL"},{"name":"Togo","dial_code":"+228","code":"TG"},{"name":"Tokelau","dial_code":"+690","code":"TK"},{"name":"Tonga","dial_code":"+676","code":"TO"},{"name":"Trinidad and Tobago","dial_code":"+1 868","code":"TT"},{"name":"Tunisia","dial_code":"+216","code":"TN"},{"name":"Turkey","dial_code":"+90","code":"TR"},{"name":"Turkmenistan","dial_code":"+993","code":"TM"},{"name":"Turks and Caicos Islands","dial_code":"+1 649","code":"TC"},{"name":"Tuvalu","dial_code":"+688","code":"TV"},{"name":"Uganda","dial_code":"+256","code":"UG"},{"name":"Ukraine","dial_code":"+380","code":"UA"},{"name":"United Arab Emirates","dial_code":"+971","code":"AE"},{"name":"United Kingdom","dial_code":"+44","code":"GB"},{"name":"United States","dial_code":"+1","code":"US"},{"name":"Uruguay","dial_code":"+598","code":"UY"},{"name":"Uzbekistan","dial_code":"+998","code":"UZ"},{"name":"Vanuatu","dial_code":"+678","code":"VU"},{"name":"Venezuela, Bolivarian Republic of","dial_code":"+58","code":"VE"},{"name":"Viet Nam","dial_code":"+84","code":"VN"},{"name":"Virgin Islands, British","dial_code":"+1 284","code":"VG"},{"name":"Virgin Islands, U.S.","dial_code":"+1 340","code":"VI"},{"name":"Wallis and Futuna","dial_code":"+681","code":"WF"},{"name":"Yemen","dial_code":"+967","code":"YE"},{"name":"Zambia","dial_code":"+260","code":"ZM"},{"name":"Zimbabwe","dial_code":"+263","code":"ZW"},{"name":"Aland Islands","dial_code":"+358","code":"AX"}, function() {
        console.log('finished populating countries');
    });
  }
});
