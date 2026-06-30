import React from "react";
import {motion} from "framer-motion";



function PageAnimation({children}){


return(


<motion.div


initial={{
opacity:0,
y:30
}}


animate={{
opacity:1,
y:0
}}


transition={{
duration:.5
}}



>


{children}


</motion.div>



)


}


export default PageAnimation;