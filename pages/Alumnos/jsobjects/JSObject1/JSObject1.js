export default {
	myVar1: [],
	myVar2: {},
	autorizado: () => {
		//write code here
		if(CompruebaAutorizados.data.values.some(e => e[0] === email_logueado.text))
			return "logedin";
		else
			return "notlogedin";
	},
	myFun2: async () => {
		//use async-await or promises
	}
}