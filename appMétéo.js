
// // Projet d'application météo

// import {getWeather} from "./api.js"
import{data} from "./api.js"


 


const innerData= data.data
console.log(innerData)

export const errorInformation= document.querySelector(".error-information")
const cityName= document.querySelector(".city-name")
const countryName= document.querySelector(".country-name")
const temperature= document.querySelector(".temperature")
export const loader= document.querySelector(".loader-container")
const iconElement=document.querySelector(".info-icon-container img")

window.addEventListener("load",handleWeather())

function handleWeather(e){
    // Retrait du loader au chargement
     loader.classList.toggle("active")

    
    // Actualisation des données
     countryName.innerHTML= innerData.country;
     cityName.innerHTML=innerData.city;
    temperature.innerHTML= innerData.current.weather.tp
    const iconID= innerData.current.weather.ic
    const idString=`ressources/icons/`+iconID+`.svg`
    iconElement.setAttribute("src", idString)}

    


