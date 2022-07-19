const calculate = () => {
  // Getting input from user into height variable.
  let chemistry = document.querySelector("#chemistry").value;
  let urdu = document.querySelector("#urdu").value;
  let maths = document.querySelector("#maths").value;
  let english = document.querySelector("#english").value;
  let pakStudies = document.querySelector("#pak-studies").value;
  let phy = document.querySelector("#phy").value;
  let grades = "";

  let chemis = document.querySelector("#chemis").value;
  let ur = document.querySelector("#ur").value;
  let math = document.querySelector("#math").value;
  let eng = document.querySelector("#eng").value;
  let pst = document.querySelector("#p-st").value;
  let PHY = document.querySelector("#PHYSICS").value;

  // let physics = document.querySelector("#physics").value;
  let marks = "";

  let totalMarks =
    parseFloat(chemis) +
    parseFloat(ur) +
    parseFloat(math) +
    parseFloat(eng) +
    parseFloat(pst) +
    parseFloat(PHY);

  document.getElementById("marks").innerHTML = totalMarks;

  let totalgrades =
    parseFloat(chemistry) +
    parseFloat(urdu) +
    parseFloat(maths) +
    parseFloat(english) +
    parseFloat(pakStudies) +
    parseFloat(phy);
  if (
    chemistry > 100 ||
    urdu > 100 ||
    maths > 100 ||
    english > 100 ||
    pakStudies > 100 ||
    phy > 100
  ) {
    document.querySelector("#showdata").innerHTML = ` error  <br>  ${grades}. `;
  } else {
    // grade to student based on percentage
    let percentage = (totalgrades / 600) * 100;

    if (percentage <= 100 && percentage >= 80) {
      grades = "A";
    } else if (percentage <= 79 && percentage >= 60) {
      grades = "B";
    } else if (percentage <= 59 && percentage >= 40) {
      grades = "C";
    } else {
      grades = "F";
    }
    // Checking the values are empty if empty than
    // show please fill them
    if (
      chemistry == "" ||
      urdu == "" ||
      maths == "" ||
      english == "" ||
      pakStudies == "" ||
      phy == ""
    ) {
      document.querySelector("#showdata").innerHTML =
        "Please enter all the fields";
    } else {
    }
    // Checking the condition for the fail and pass
    if (percentage >= 39.5) {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of ${totalMarks} your total is  ${totalgrades} 
  and percentage is ${percentage}%. <br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
  Your grade is ${grades}. You are Pass. `;
    } else {
      document.querySelector(
        "#showdata"
      ).innerHTML = ` Out of ${totalMarks} your total is  ${totalgrades} 
  and percentage is ${percentage}%. <br> 
  Your grade is ${grades}. You are Fail. `;
    }
  }
};
