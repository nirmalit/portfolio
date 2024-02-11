import bdc_logo from '../../assets/project/bdc_logo.svg'
import fmp_logo from '../../assets/project/fmp_logo.svg'
import parker_logo from '../../assets/project/parker_logo.svg'



import projectLogoCatlog from '../../config/projectIcon.json'

const getImage = (imageName) => {
 if(imageName === projectLogoCatlog.bdc){
    return bdc_logo
 }
 if(imageName === projectLogoCatlog.parker){
    return parker_logo
 }
 if(imageName === projectLogoCatlog.fmp){
    return fmp_logo
 }
}

export default getImage