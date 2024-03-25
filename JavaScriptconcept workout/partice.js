
function Finddata() {
    return new Promise((resolve, reject) => {
    
        const random = Math.floor(Math.random() * 10)
        if (random >= 5) {
            resolve(random)
        }
        else {
            reject(new Error("this random number is not valid"))
        }


    })
}

const Fetch = async () => {
    
    try {

        const data = await Finddata()
        console.log(data)
        
    } catch (error) {
        console.error(error.message)

    }
}
Fetch()