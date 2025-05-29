<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
</script>

<template>
    <nav class="bg-black font-semibold">
        <div class="flex justify-between items-center px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-10">
            <div class="hidden lg:flex items-center justify-between gap-8 xl:gap-16 text-white">
                <img src="./img/OpLogo.png" alt="logo" class="h-8 md:h-10">
                <h1 class="flex items-center gap-2 text-sm xl:text-base">SOLUTIONS <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <h1 class="text-sm xl:text-base">ZERO-LOSS FAILOVER</h1>
                <h1 class="text-sm xl:text-base">MULTI-TENANT</h1>
                <h1 class="text-sm xl:text-base">ENTERPRISE NNI</h1>
            </div>
            
            <div class="lg:hidden">
                <img src="./img/OpLogo.png" alt="logo" class="h-8">
            </div>
            
            <div class="hidden lg:flex text-white items-center gap-8 xl:gap-16">
                <h1 class="flex items-center gap-2 text-sm xl:text-base">LEARN <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <h1 class="flex items-center gap-2 text-sm xl:text-base">SUPPORT <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <button class="px-4 py-2 xl:px-7 xl:py-4 text-white text-sm xl:text-base rounded-3xl bg-gradient-to-r from-[#40DB5C] via-[#03C7FD] to-[#40DB5C] hover:opacity-80">MAKE AN ENQUIRY</button>
                <img src="./img/div.png" alt="" class="w-8 h-8">
            </div>
            
            <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden text-white p-2">
                <img src="./img/div.png" alt="" class="w-8 h-8">
            </button>
        </div>
        
        <div v-if="mobileMenuOpen" class="lg:hidden bg-black text-white px-4 py-6 space-y-4">
            <div class="space-y-4">
                <h1 class="flex items-center gap-2">SOLUTIONS <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <h1>ZERO-LOSS FAILOVER</h1>
                <h1>MULTI-TENANT</h1>
                <h1>ENTERPRISE NNI</h1>
                <h1 class="flex items-center gap-2">LEARN <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <h1 class="flex items-center gap-2">SUPPORT <img src="./img/dropdown-icon.svg.png" alt="" class="w-4 h-4"></h1>
                <button class="px-6 py-3 text-white rounded-3xl bg-gradient-to-r from-[#40DB5C] via-[#03C7FD] to-[#40DB5C] hover:opacity-80 w-full">MAKE AN ENQUIRY</button>
            </div>
        </div>
    </nav>

    <section class="bg-cover bg-black bg-center bg-[url('/src/components/views/img/div_after.png')] w-full font-semibold">
        <div class="flex flex-col min-h-screen justify-center px-4 md:px-8 lg:px-28">
            <h1 class="text-4xl md:text-6xl lg:text-8xl text-gray-500 text-opacity-10 py-10 md:py-20 lg:pt-60 lg:pb-10 leading-tight">
                ZERO-LOSS<br>
                BUSINESS<br>
                CONTINUITY
            </h1>
            <button class="bg-gray-300 text-black text-lg md:text-xl lg:text-2xl opacity-10 p-3 rounded-3xl w-48 md:w-56 lg:w-64 h-12 md:h-14 lg:h-16 mt-4">LEARN MORE ></button>
        </div>

        <div class="text-white flex flex-col items-center justify-center text-center gap-4 md:gap-6 min-h-screen px-4">
            <h1 class="items-center flex gap-3"><img src="./img/h5_before.png" alt="" class="w-4 h-4 md:w-6 md:h-6">WHAT WE DO</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl leading-tight">Turning complex network technology</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl leading-tight">Into <strong>business solutions that save you<br class="hidden md:block"> time money and stress</strong></h1>
        </div>
    </section>
    
    <section class="pb-20 md:pb-36 font-semibold">
        <div class="text-black flex flex-col items-center justify-center text-center gap-4 md:gap-6 mt-20 md:mt-40 lg:mt-60 px-4">
            <h1 class="items-center flex gap-3"><img src="./img/arrow01.svg.png" alt="" class="w-4 h-4 md:w-6 md:h-6">SOLUTIONS</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl leading-tight">Productivity solutions that <strong>capitalise</strong><br class="hidden md:block"> on your network <strong>investment</strong></h1>
        </div>
        
        <div class="mt-20 md:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-36 px-4 md:px-8 lg:px-20">
            <div class="order-2 lg:order-1">
                <img src="./img/div (1).png" alt="" class="w-full h-auto">
            </div>
            <div class="flex flex-col justify-center order-1 lg:order-2">
                <h1 class="flex items-center text-xl md:text-2xl lg:text-3xl gap-4">
                    <img src="./img/arrow-right02.svg.png" alt="" class="w-6 h-6 md:w-8 md:h-8"><strong>CONNECTIVITY</strong>
                </h1>
                <p class="text-gray-500 mt-4 md:mt-7 ml-0 md:ml-12 text-base md:text-lg leading-relaxed">
                    Last mile or first mile, fibre or copper, Ethernet or wireless, 20Mbs <br> or 100Gbs - we'll always find the best-performing connectivity to <br> fit your needs and location.
                </p>

                <button class="bg-black px-6 md:px-9 py-4 md:py-6 rounded-3xl text-white w-48 md:w-60 ml-0 md:ml-10 mt-6 md:mt-7">LEARN MORE</button>
                
                <div class="text-2xl md:text-3xl lg:text-4xl flex flex-col gap-6 md:gap-9 mt-12 md:mt-20">
                   <h1>NETWORK TECHNOLOGIES</h1>
                    <h1>MANAGED SERVICES</h1>
                    <h1>CLOUD CONNECTIVITY</h1> 
                </div>
            </div>
        </div>
    </section>

    <section class="bg-black min-h-screen">
        <div class="text-white flex flex-col items-center justify-center text-center gap-4 md:gap-6 min-h-screen px-4">
            <h1 class="items-center flex gap-3"><img src="./img/h5_before.png" alt="" class="w-4 h-4 md:w-6 md:h-6">WHAT WE DO</h1>
            <h1 class="text-3xl md:text-5xl lg:text-6xl leading-tight">Designed with the latest technology for<br class="hidden md:block"><strong>performance, flexibility and high capacity</strong></h1>
            <div class="flex flex-col sm:flex-row gap-6 md:gap-10 mt-8 md:mt-10">
                <button class="px-6 md:px-10 py-4 md:py-5 text-white rounded-3xl bg-gradient-to-r from-[#40DB5C] via-[#03C7FD] to-[#40DB5C] hover:opacity-80">FIND OUT MORE</button>
                <button class="bg-black outline px-6 md:px-10 py-4 md:py-5 rounded-3xl border border-white">OUR LOOKING GLASS</button>
            </div>
        </div>
    </section>

    <section class="bg-white min-h-screen text-black font-semibold">
        <div class="mt-20 md:mt-36 grid grid-cols-1 lg:grid-cols-2 gap-36 px-4 md:px-8 lg:px-20">
            <div class="order-2 lg:order-1">
                <img src="./img/div (2).png" alt="" class="w-full h-auto">
            </div>
            <div class="flex flex-col justify-center order-1 lg:order-2">
                <h1 class="items-center flex gap-3"><img src="./img/h5_before.png" alt="" class="w-4 h-4 md:w-6 md:h-6">ABOUT US</h1>
                <h1 class="text-3xl md:text-4xl lg:text-5xl mt-4">Navigating the technology <br> and communication <br> provider marketplace <br> shouldn't be a complex <br> and daunting process.</h1>
                <button class="bg-black px-6 md:px-9 py-4 md:py-6 rounded-3xl text-white w-48 md:w-60 mt-8 md:mt-10">ABOUT OPTINET</button>
            </div>
        </div>

        <div class="mt-20 md:mt-40">
            <div class="flex items-center justify-center space-x-4 px-4">
                <div class="border-t-2 border-gray-500 flex-grow"></div>
                <span class="text-lg md:text-xl whitespace-nowrap">TRUSTED BY</span>
                <div class="border-t-2 border-gray-500 flex-grow"></div>
            </div>
            <img class="w-full bg-white mt-12 md:mt-24 pb-12 md:pb-24" src="./img/div (3).png" alt="">  
        </div>
    </section>

    <section class="bg-cover text-white bg-center bg-[url('/src/components/views/img/woman.png')] w-full font-semibold">
        <div class="flex flex-col justify-center items-center text-center gap-4 md:gap-6 min-h-screen px-4 py-20">
            <p class="items-center flex gap-3 text-white"><img src="./img/arrow01.svg.png" alt="" class="w-4 h-4 md:w-6 md:h-6">HOOD GROUP CASE STUDY</p>
            <h1 class="text-5xl md:text-7xl lg:text-9xl font-bold">HOOD GROUP</h1>
            <p class="text-xl md:text-2xl lg:text-3xl leading-relaxed">Optinet ensures contact centre agents maintain<br class="hidden md:block"> uninterrupted conversation during network outages</p>
            <button class="bg-white px-6 md:px-9 py-4 md:py-6 rounded-3xl text-black w-48 md:w-60 mt-6 md:mt-7">READ MORE</button>
        </div>
    </section>

    <section class="font-semibold text-white bg-black min-h-screen">
        <div class="pt-20 md:pt-36 grid grid-cols-1 lg:grid-cols-2 gap-36 px-4 md:px-8 lg:px-20">
            <div class="order-2 lg:order-1">
                <img src="./img/div (5).png" alt="" class="w-full h-auto">
            </div>
            <div class="flex flex-col justify-center gap-4 md:gap-6 order-1 lg:order-2">
                <h1 class="items-center flex gap-3"><img src="./img/h5_before.png" alt="" class="w-4 h-4 md:w-6 md:h-6">WHY OPTINET</h1>
                <h1 class="text-3xl md:text-4xl lg:text-5xl leading-tight">Put your network<br><strong>in safe hands</strong>.</h1>
                <p class="text-gray-500 leading-relaxed">Our loyal customers trust us to manage some of their most business-critical systems.</p>
                <button class="bg-white px-6 md:px-9 py-4 md:py-6 rounded-3xl text-black w-48 md:w-60 mt-6 md:mt-10">LEARN MORE</button>
            </div>
        </div>
    </section>

    <footer class="bg-black text-white font-semibold pt-36">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-20 p-6 md:p-14">
            <div class="flex flex-col gap-4 md:gap-6">
                <h1 class="text-2xl md:text-3xl lg:text-4xl leading-tight">Ready to <strong>revolutionise</strong><br>your business communications<br><strong>with unrivalled speed?</strong></h1>
                <button class="px-6 md:px-10 py-4 md:py-5 w-48 md:w-60 text-white rounded-3xl bg-gradient-to-r from-[#40DB5C] via-[#03C7FD] to-[#40DB5C] hover:opacity-80">GET IN TOUCH</button>
            </div>
            
            <div class="flex flex-col lg:ml-32">
                <h1 class="text-gray-600 text-lg md:text-xl">CONTACT US</h1>
                <p class="pt-3 md:pt-5">Optinet UK Limited</p>
                <p class="pt-3 md:pt-5">HEAD OFFICE<br> Floor 37 <br> One Canada Square <br> London E14 5AA</p>
                <p class="pt-3 md:pt-5">SOUTHEND <br> Skyline Plaza <br> Victoria Avenue <br> Southend <br> Essex SS2 6BB</p>
                <p class="pt-4 md:pt-7 pl-5 text-sm md:text-base">GET DIRECTIONS</p>
                <h2 class="text-gray-600 pt-6 md:pt-8">PHONE</h2>
                <p>+44 020 3319 3701</p>
                <h2 class="text-gray-600 pt-6 md:pt-8">EMAIL</h2>
                <p>info@optinet.co.uk</p>
            </div>
            
            <div class="flex flex-col gap-3 md:gap-4">
                <h1 class="text-gray-600 text-lg md:text-xl">BUSINESS</h1>
                <p>ABOUT US</p>
                <p>CAREERS</p>
                <p>PARTNERS</p>
                <p>PRIVACY POLICY</p>
            </div>
        </div>
        
        <img class="mx-auto mt-20 md:mt-48 w-32 md:w-auto" src="./img/div_before.png" alt="">
        
        <div class="flex flex-col md:flex-row justify-between px-6 md:px-48 pt-16 md:pt-28 pb-8 md:pb-16 bg-black text-gray-500 gap-4 md:gap-0">
            <h1 class="text-sm md:text-base text-center md:text-left">Optinet U.K. Limited registered in England & Wales<br> Company number 10482483</h1>
            <h1 class="text-sm md:text-base text-center md:text-right">Copyright © Optinet <br> All Rights Reserved</h1>
        </div>
    </footer>
</template>