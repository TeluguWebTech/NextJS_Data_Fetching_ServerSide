import Image from "next/image";


const url = "https://backend-nodejs-suby.onrender.com/vendor/all-vendors"

export const sampleData = async()=>{
        const response = await fetch(url);
        return response.json()
}

const page = async() => {

    const data = await sampleData()
    const vendors = data.vendors

    console.log("Checking for sampledata", data)

    const imageBaseUrl = "  https://backend-nodejs-suby.onrender.com/uploads/"

  return (
    <div>
        {vendors.map((vendor)=>{
            return(
                <>
                    <h2>{vendor.username}</h2>
                    <hr />
                    {vendor.firm.map((firmItem)=>{
                        return(
                            <>
                            <Image src={`${imageBaseUrl}${firmItem.image}`} 
                            width={200} height={200}
                            />
                            </>
                        )
                    })}
                </>
            )
        })}
    </div>
  )
}

export default page
