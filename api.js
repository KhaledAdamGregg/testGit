export async function getWeather(){
    // Dans la mesure ou il y a une erreur coté serveur et que la réponse n'a pas été récupérer
    try{
        // Erreur de réseau
        const reponses = await fetch("http://api.airvisual.com/v2/nearest_city?key=affc0b71-e72b-433a-915e-1efd6e0b0843")
        
        //  console.log(reponses)

        // Erreur serveur ou erreur coté client
        if(reponses.ok===false){
            console.log("Erreur serveur")
        }
         const datat= await reponses.json()
        // console.log(datat)
        return datat
    }
    catch(e){
       console.log(e.message)
    }

    
    
}

 export const data= await getWeather()


