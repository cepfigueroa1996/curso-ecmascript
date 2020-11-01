let helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
			? resolve('bien bro')
			: reject('error')
	})
}

helloWorld()
	.then(response=>console.log(response))
	.catch(error => console.log('error'))
	.finally(() => console.log('finalizo'))