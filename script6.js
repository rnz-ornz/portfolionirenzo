const message = document.getElementById("message")
const Button1 = document.getElementById("Btn1")
const Button2 = document.getElementById("Btn2")

const profile = document.getElementById("profile")
const grades = document.getElementById("grades")
const schedule = document.getElementById("schedule");

Button1.addEventListener("click", function(){

	message.innerHTML = "Loading Dashboard..."
	message.style.color = "orange";
	profile.innerHTML = "Profile: Waiting..."
    grades.innerHTML = "Grade: Waiting..."
	schedule.innerHTML = "Schedule: Waiting..."
	
	
	const profilePromise = new Promise(function(resolve){
		
		setTimeout(function(){
			
			profile.innerHTML = "Profile: Loaded";
			profile.style.color = "yellow"
			
			resolve();
			
		},1000)
	})

	const gradesPromise = new Promise(function(resolve){
		
		setTimeout(function(){
			
			grades.innerHTML = "Grades: Loaded";
			grades.style.color = "yellow"
			
			resolve();
			
		},2000)
		
	})
		
	const schedulePromise = new Promise(function(resolve){
		
		setTimeout(function(){
			
			schedule.innerHTML = "Schedule: Loaded";
			schedule.style.color = "yellow"
			
			resolve();
			
		},3000)
		
	})

	const messagePromise = new Promise(function(resolve){
		
		setTimeout(function(){
			
			message.innerHTML = "Dashboard Ready!";
			message.style.color = "violet"
			
			resolve();
			
		},3000)
		
	})


})


Button2.addEventListener("click", function(){

	message.innerHTML = "Loading Dashboard...";
	message.style.color = "orange";
	profile.innerHTML = "Profile: Waiting...";
    grades.innerHTML = "Grade: Waiting...";
	schedule.innerHTML = "Schedule: Waiting...";
	Button1.style.backgroundColor = "red"
	Button2.style.backgroundColor = "violet"
	
const profilePromise = new Promise(function(resolve){
	
	setTimeout(function(){
		
		profile.innerHTML = "GEO ONG";
		profile.style.color = "yellow"
		
		resolve();
		
	},1000)
})

const gradesPromise = new Promise(function(resolve){
	
	setTimeout(function(){
		
		grades.innerHTML = "JANICE ONG";
		grades.style.color = "yellow"
		
		resolve();
		
	},2000)
	
})
	
const schedulePromise = new Promise(function(resolve){
	
	setTimeout(function(){
		
		schedule.innerHTML = "JEO ONG";
		schedule.style.color = "yellow"
		
		resolve();
		
	},3000)
	
})

const messagePromise = new Promise(function(resolve){
	
	setTimeout(function(){
		
		message.innerHTML = "All Good In The Hood!";
		message.style.color = "green"
		
		resolve();
		
	},3000)
	
})


	
	
})
	

	
