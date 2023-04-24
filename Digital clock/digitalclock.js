setInterval(()=>{
	
	let date = new Date();
let options = {
	weekday: "long", year: "numeric", month:"short",
	day:"numeric", hour:"2-digit", minute:"2-digit"
};	

	let d =  date.toLocaleTimeString("en-us", options);
	time.innerHTML = d

},1000)













//setInterval(()=>{
//	let d = new Date()
//	time.innerHTML = d
//},1000)


//setInterval(()=>{
//  let date = new Date();
//  let options = {
//  	weekday:"long", year: "numeric", month: "short",
//    day: "numeric", hour:"2-digit", minute:"2-digit"
//
//  };
//   
//     let d = date.toLocalTimeString("en-us",options);
//     tme.innetHTML = d   
//
//	},1000)
//

