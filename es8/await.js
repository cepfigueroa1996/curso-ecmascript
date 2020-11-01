let hello = () => {
	return new Promise((resolve, reject) => {
		(true)
			? setTimeout(() => resolve('bien bro'), 3000)
			: reject(new Error('error'))
	})
};

let helloAsync = async () => {
	let awa = await hello();
	console.log(awa);
}


helloAsync();