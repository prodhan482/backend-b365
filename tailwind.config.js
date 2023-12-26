/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",


"./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {    
    screens: {
    xl: { max: "1279px" },


    lg: { max: "1024px" },

    md: { max: "799px" },
 
    sm: { max: "639px" },
  },
  light: {
    primary: '#10823A',  
    secondary: '#2ecc71', 
    accent: '#f39c12',          
    textColor: '#000000',     
  },

  dark: {
    primary: '#2980b9',          
    secondary: '#27ae60',  
    accent: '#e67e22',        
    textColor: '#ffffff',      
  },
    extend: {
     
    },
  },
  plugins: [],
}

