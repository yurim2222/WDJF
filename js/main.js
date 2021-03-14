let section = document.getElementsByClassName('section');
    for(let i=0;i<=3;i++){
        section[i].className += ' fp-auto-height-responsive';
    }

new fullpage('#fullpage', {
    

	//options here
	autoScrolling:true,
	scrollHorizontally: true,
    sectionsColor:['#04001B','#04001B','#04001B','#04001B','#04001B'],
    anchors: ['firstPage','secondPage','thirdPage','fourthPage'],
    menu: '#myMenu',
    css3:false,
    afterLoad: function(origin, destination, direction){
        
        let mainText = document.getElementsByTagName('span');
		if(destination.index == 0){
            for(let i=8;i<=10;i++){
                mainText[i].className += " active";
            }
		}
        
        let timetable = document.getElementsByClassName('timetable');
        let lineup = document.getElementsByClassName('lineup')
        if(destination.index == 1){
            timetable[0].className += " active";
            lineup[0].className += " active";
        }else{
            timetable[0].className = "timetable";
            lineup[0].className = "lineup";
        }

        let footer = document.getElementsByTagName('footer')
        if(destination.index == 3){
            footer[0].className += " active";
        }
	},
    onLeave: function(origin, destination, direction){
        let mainText = document.getElementsByTagName('span');
        if(origin.index == 0){
            mainText[8].className = 'firstTxt';
            mainText[9].className = 'secondTxt';
            mainText[10].className = 'thirdTxt';
    }
		let footer = document.getElementsByTagName('footer')
        if(origin.index == 3){
            footer[0].className = '';
        }
	}


});

//methods
fullpage_api.setAllowScrolling(ture);

