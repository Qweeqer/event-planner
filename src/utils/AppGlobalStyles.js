import { createGlobalStyle } from "styled-components";

const AppGlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    
  }
  body {
    margin: 0;
    font-size: 14px;
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  p {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }



  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
    padding:0;
    margin:0;
  }

.react-calendar {
  border:none;
font-family: Poppins, sans-serif !important;
}

.react-calendar__month-view__days{
/* color: #ACA7C3; */
}

.react-calendar button {
  font-family: Poppins, sans-serif !important;
 
}

.react-calendar__navigation{
  height:100%;
 
}

.react-calendar__navigation__label__labelText{
   font-size: 14px;
font-weight: 500;
line-height: 1.43;}

.react-calendar__month-view__weekdays {
    text-transform:none;
    font-size: 12px;
font-weight: 400;
line-height: 1.33; 

}

.react-calendar__tile--now {
    background: inherit;
    color:#7B61FF 
}

.react-calendar__tile--now {
  color:#7B61FF !important

}

.react-calendar__tile--now:enabled:hover, .react-calendar__tile--now:enabled:focus {
    color:#7B61FF !important;
    background: inherit;
}
.react-calendar__tile--active {
    background: #7B61FF !important;
    color:#ffffff !important

}

/* .react-calendar__tile--active:enabled:hover, .react-calendar__tile--active:enabled:focus {
    background: #7B61FF;  color:#ffffff;
} */

.react-calendar__tile.react-calendar__month-view__days__day{
   color:#ACA7C3 ;

}

.react-calendar__month-view__weekdays__weekday--weekend {
    color:#FF2B77;
}

.react-calendar__month-view__days__day--weekend {
    color: inherit;
}


.react-calendar__tile:enabled:hover, .react-calendar__tile:enabled:focus {
    background-color: transparent;
    color:#3F3F3F; 
}
:where(abbr[title]) {
    text-decoration: none;
    -webkit-text-decoration: none;
    text-decoration: none;
}

`;

export default AppGlobalStyles;
