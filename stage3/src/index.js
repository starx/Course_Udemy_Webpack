import './scss/vendor.scss';
import './scss/index.scss';

// Import JS that execute when its loaded
import "./js/helloImage.js";

// Import JS that exports functionality
import sum from "./js/sum";
// Use the exported functionality
const total = sum(1, 5);
console.log(total);

// Dynamically load modules when it's needed
import "./js/dynamicModuleLoading.js";

// jQuery events. jQuery provided by webpack as $
$(window).resize(e => {
    console.log('Screen width: ' + $(window).innerWidth());
});