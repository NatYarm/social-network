import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
margin: 0;
padding: 0;
box-sizing: border-box;
}

html{
	font-size: 10px;
}

body {
	font-family:'Rubik', sans-serif;
	font-size: 1.6rem;
	min-width: 36rem;
	color: #6d6e71;
}

p {
	font-size: 1.4rem;
	line-height: 24px;
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
