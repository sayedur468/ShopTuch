/* ==========================================================
   ShopTuch Premium E-Commerce Website
   Part 1D
   JAVASCRIPT FOUNDATION
========================================================== */

"use strict";

/*==========================
      GLOBAL CONFIG
==========================*/

const APP = {
    name: "ShopTuch",
    version: "1.0.0",
    author: "Sayedur Rahman",
    currency: "USD",
    language: "en"
};

/*==========================
      DOM SELECTORS
==========================*/

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);

/*==========================
      DOM READY
==========================*/

document.addEventListener("DOMContentLoaded", () => {

    console.log(`${APP.name} Loaded Successfully`);

    initAOS();

    initScrollTop();

});

/*==========================
      AOS INIT
==========================*/

function initAOS(){

    if(typeof AOS !== "undefined"){

        AOS.init({

            duration:800,

            once:true,

            offset:80

        });

    }

}

/*==========================
      SCROLL TO TOP
==========================*/

function initScrollTop(){

    window.scrollTo({

        top:0,

        behavior:"instant"

    });

}

/*==========================
      HELPERS
==========================*/

function addClass(element,className){

    if(element){

        element.classList.add(className);

    }

}

function removeClass(element,className){

    if(element){

        element.classList.remove(className);

    }

}

function toggleClass(element,className){

    if(element){

        element.classList.toggle(className);

    }

}

/*==========================
      FORMAT PRICE
==========================*/

function formatPrice(price){

    return `$${Number(price).toFixed(2)}`;

}

/*==========================
      LOCAL STORAGE
==========================*/

function saveData(key,value){

    localStorage.setItem(

        key,

        JSON.stringify(value)

    );

}

function loadData(key){

    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;

}

/*==========================
      ERROR HANDLER
==========================*/

window.onerror=function(message,file,line){

    console.error(

        "Error:",

        message,

        file,

        line

    );

};

/*==========================
      WINDOW LOAD
==========================*/

window.addEventListener("load",()=>{

    console.log("All Assets Loaded");

});

/* ==========================================================
   PART 2A
   LOADING SCREEN
========================================================== */

const loader = document.getElementById("loader");

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loader.classList.add("hide");

    },1000);

});
