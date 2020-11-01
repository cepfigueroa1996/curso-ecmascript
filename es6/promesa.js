const peticion = () => {
	return new Promise((resolve, reject)=>{
		if (true) {
			resolve('todo bien bro');
		} else {
			reject('al parece ocurrio un error');
		}
	})
}


peticion()
  .then(response=> console.log(response))
  .catch(error => console.log('error'));