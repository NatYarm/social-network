import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

body {
	font-family:'Rubik', sans-serif;
	font-size: 1.8rem;
	min-width: 36rem;
}



section {
	padding: 100px 0;
}

a {
	text-decoration: none;

	


}

ul {
	list-style: none;
}

button {
	background-color: unset;
	border: none;
	cursor: pointer;
  }







`;

export default GlobalStyles;
