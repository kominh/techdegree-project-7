


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}





/* Get all elements with class="close" */
var closebtns = document.getElementsByClassName("close");
var i;


/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
  closebtns[i].addEventListener("click", function() {
  this.parentElement.style.display = 'none';
  
});

}



window.onclick = function (event) {

  const notifyIcon = document.querySelector('.notif-icon');
  const closeIcons = document.querySelectorAll('span.close');

  if (event.target.tagName === 'SPAN') {
    event.target.classList.remove('close');
    if (closeIcons.length === 1) {
      notifyIcon.style.visibility = "hidden";
    }
  }
};






















const alertBanner = document.getElementById("alert");


// create the html for the banner
alertBanner.innerHTML =
`

		<div class="alert-banner">
			<p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
				to complete</p>
				<p class="alert-banner-close">x</p>
		</div>
`

;

alertBanner.addEventListener('click', e => {
const element = e.target;

	if (element.classList.contains("alert-banner-close")) {
	alertBanner.style.display = "none";
	
		}
	});

/* chart widgets */





const trafficCanvas = document.getElementById('traffic-chart');

let trafficData = {


				/* data at bottom of chart  */
		labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
					"4-10", "11-17", "18-24", "25-31"],

		datasets: [{
						/* data on side of chart */
				data: [10000, 8750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500
					],
					backgroundColor: 'rgba(116, 119, 191, .3)',
						borderWidth: 1,
				}]


			};


function updateHour() {
					trafficChart.data.datasets[0].data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

					trafficChart.update();
			};

function updateDaily() {
					trafficChart.data.labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

					trafficChart.update();
			};


function updateWeekly() {
					trafficChart.data.labels = ["Week1", "Week2", "Week3", "Week4", "Week5"];

					trafficChart.update();
			};

function updateMonthly() {
					trafficChart.data.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

					trafficChart.update();
			};





let trafficOptions = {
		aspectRatio: 3.5,
		animation: {
		duration: 1000
			},

		scales: {
			yAxes: [{
				ticks: {
					beginAtZero:true
				}
			}]
		},
		legend : {
			display:false
		}
	};


let trafficChart = new Chart(trafficCanvas, {
		type: 'line', //bar, pie, line doughnut, radar, 
		data: trafficData,
		options: trafficOptions
	});

















const dailyCanvas = document.getElementById("daily-chart");


// data for daily traffic bar chart
const dailyData = {
		labels: ["S", "M", "T", "W", "T", "F", "S"],
		datasets: [{
		label: '# of Hits',
		data: [75, 115, 175, 125, 225, 200, 100],
		backgroundColor: '#7477BF',
		borderWidth: 1
		}]
	};
const dailyOptions = {
		scales: {
		yAxes: [{
		ticks: {
		beginAtZero:true
		}
	}]
},

legend : {
display: false
	}
}


let dailyChart = new Chart(dailyCanvas, {
type: 'bar',
data: dailyData,
options: dailyOptions
});


const mobileCanvas = document.getElementById("mobile-chart");


const mobileData = {
		labels: ["Desktop", "Tablet", "Phones"],
		datasets: [{
		label: '# of Users',
		data: [2000, 550, 500],
		borderWidth: 0,
		backgroundColor: [
		'#7477BF',
		'#78CF82',
		'#51B6C8'
		]
	}]
};


const mobileOptions = {
		legend: {
		position: 'right',
		labels: {
		boxWidth: 20,
		fontStyle: 'bold'
		}
	}
}

/* let mobileChart = new bar(daily, */


let mobileChart = new Chart(mobileCanvas, {
type: 'doughnut',
data: mobileData,
options: mobileOptions
});



/* Messaging Section */



const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


send.addEventListener('click', () => {

		if (user.value === "" && message.value === "") {
			alert("Please fill out user and message fields before sending");
		}	else if (user.value === "" ) {
				alert("Please fill out user field before sending");
				}	else if (message.value === "" ) { 
						alert("Please fill out message field before sending");
					}		else { 
								alert('Message successfully sent to: ${user.value}');
							}		

});



function testStorage() {
 const test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
  }
}

if(testStorage() === true){ }


document.getElementById("save").addEventListener("click", function(){

			localStorage.setItem(email, setting.checked);
			localStorage.setItem(notify, setting.checked);


			localStorage.setItem(option, Eastern);
			localStorage.setItem(option, Central);
			localStorage.setItem(option, Moutain);
			localStorage.setItem(option, Western);

			alert("Settings successfully saved")

};

document.getElementById("cancel").addEventListener("click", function() {
    const cancel = confirm('Are you sure you want to cancel changes?');
​
    if (cancel) {
        localStorage.setItem('email', email.checked = null)
        localStorage.setItem('notify', notify.checked = null)
        localStorage.setItem('option', option.checked = null)
    }
  });



const loadSettings = function() {
  if (email !== null) {
    email.checked = (email === 'true');
  }
  if (notify !== null) {
    notify.checked = (notify === 'true');
  }
  if (option !== null) {
    option.checked = (option === 'true');
  }
}














