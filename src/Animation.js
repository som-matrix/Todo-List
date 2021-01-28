export const textFade = {

    hidden:{
        opacity:0,
        y:25,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            duration:0.5
        }
    },
}

export const deleteFade = {
    hidden:{
        opacity:0,
        rotate:-15,
    },
    show:{
        opacity:1,
        rotate:0,
        transition:{
            duration:0.5
        }
    },
    exit:{
      opacity:0,
      transition:{
          duration:0.5
      }
    }
}

export const buttonFade = {

    hidden:{
        opacity:0,
        y:100,
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            
            staggerChildren:0.8,
        },
    }
    
}
export const childButton = {
    hidden: { opacity: 0,y:100 },
    show: { opacity: 1,y:0 }
}