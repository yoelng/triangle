var sideOne, sideTwo, sideThree;

function getdata(){
    this.sideOne = document.getElementById('side').value;
    this.sideTwo = document.getElementById('sideTwo').value;
    this.sideThree = document.getElementById('sideThree').value;
    this.validatedata();
}

function validatedata(){
    if(this.sideOne <= 0 || this.sideTwo <= 0){
        alert('Invalid Triangle');
          return;
    }
    if(this.sideThree <=0 || this.sideOne <= 0){
        alert('Invalid Triangle')
        return;
    }
    this.finalresult();
}
function finalresult(){

    if (this.sideOne === this.sideTwo && sideTwo === sideThree){
        alert('triangle is equilateral triangle')
    }
    else if (this.sideOne === this.sideTwo && sideTwo!== this.sideThree){
        alert('triangle is isoceles triangle')
    }
    else {
        alert('triangle is scalne triangle')
    }
}

