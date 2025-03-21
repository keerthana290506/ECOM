const {connect} = require('mongoose')

const connectDB=async(url)=>{
    try{
        await connect(url)
        console.log('Database connected successfully')
    }
    catch{
        console.error("error in connecting ")
        console.error(error);

    }

}

module.exports = connectDB