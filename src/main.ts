import { Product } from "./models/Product.js";
import {fetchProductById} from './services/apiService.js'
import { handleError } from "./utils/errorHandler.js";

//creating HTML elements
async function runApp(event:Event){
    event.preventDefault();
    try{
         const productIdInput = document.getElementById('productIdInput') as HTMLInputElement;
      
        const productId = createDOMElements();
        if (productId === 0){
           alert("Please provide valid id");
           productIdInput.value="";
            return;
        }
        const item1 = await fetchProductById(productId);
        const product1 = new Product(item1);
        const displayContent = document.createElement('p');
       
        displayContent.textContent= String(product1.displayDetails());
        const outputContainer = document.getElementById('outputContainer') as HTMLElement;
        outputContainer.style.visibility="visible";
        outputContainer.appendChild(displayContent);
        product1.displayDetails();
          productIdInput.value="";


    }catch(error){
        handleError(error);
    }
}

//runApp();
//adding eventlistener to button
function init(){
    const btn = document.getElementById('btn');
    if(btn){
    btn.addEventListener('click',runApp);
    }else{
        console.log("Error");
    }

}

//getting html elements and retriveing value from input field
function createDOMElements():number{
    const productIdInput = document.getElementById('productIdInput') as HTMLInputElement;
    if(productIdInput){
    const productId = Number(productIdInput.value);
      
    console.log(productId)
    return productId;
    } else{
         const productId = Number(productIdInput);
        console.log("productid", productId)
        return 0;
    }
    

}
//checking loading of HTML document before calling init()
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}