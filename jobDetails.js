var joblist;
var jobList;
var newList;
var data;
 var windowId;
$(document).ready(function(){
  $("#navCard2").hide()
    $("#errorSelect").hide();
    $("#errorDegree").hide();
    $("#errorMajor").hide();
    $("#errorInstitution").hide();
    $("#errorGraduation").hide();
    $("#errorMerit").hide();
    $("#errorGrade").hide();
    getDetails();
  
function getDetails(){
  $.ajax({
    url:'/getDetails',
    method: "GET",
    success: function (result, status) {
    console.log(result);
    joblist=result;
     html = '';
     if(joblist.length > 0){
      $("#joblist").html('')
     for(i=0;i<joblist.length;i++){
            $("#tableBody").append('<tr><td><a class="cursor" target="_blank" href="/show?id='+joblist[i]._id +'">"'+ joblist[i].selectDegree+'</a></td><td>'+joblist[i].Degree1+'</td><td>'+joblist[i].Major+'</td><td>'+joblist[i].Institute+'</td><td>'+joblist[i].Graduation+'</td><td>'+joblist[i].Merit+'</td><td>'+joblist[i].gpa+'</span></td></tr>')            
        }
          html += '</table>'
         $("#joblist").html(html)
         $("#dashboardTable").DataTable() 
         windowId = window.location.href.split('=')[1]
        console.log(windowId)
        data = result.filter(x=>x._id == windowId)
        console.log(data);
        $("#select").text(data[0].selectDegree);
        $('#Degree').text(data[0].Degree1);
        $("#major").text(data[0].Major); 
        $('#inistitute').text(data[0].Institute);
        $('#graduationYear').text(data[0].Graduation);
        $('#Merit').text(data[0].Merit);
        $('#GPA').text(data[0].gpa);
       
     }
    } 
       });
};
$("#save").click(function(){
    let result = {};
          var selectDegree=$("#selectDegree").val();
            result["selectDegree"]=selectDegree
           var Degree1=$("#Degree1").val();
           result["Degree1"]=Degree1
          var Major=$("#Major").val();
          result["Major"]=Major
          var Institute=$("#Institute").val();
          result["Institute"]=Institute
          var Graduation=$("#Graduation").val();
          result["Graduation"]=Graduation
          var Merit=$("#Merit").val();
          result["Merit"]=Merit
         var gpa= $("#gpa").val();
         result["gpa"]=gpa
         console.log(selectDegree,"selectDegree");
         console.log(Degree1,"Degree1");
         console.log(Major,"Major")
         console.log(Institute,"inistitution");
         console.log(Graduation,"Graduation");
         console.log(Merit,"Merit");
         console.log(gpa,"gpa");
     debugger;
         if(selectDegree!="" && Degree1!=""&& Major!="" &&Institute!=""&& Graduation!=""&&Merit!= " " &&gpa!= " "){
         $.ajax({
      url:'/updateDetails',
      method: "POST",
      data:JSON.stringify(result),
      dataType: 'json',
  contentType: 'application/json',
      success: function (result, status) {
          // getJobDetails();
         console.log(result);
        
          
         
      }
  
  })
  }
else{
    if(selectDegree==""){
            $("#errorSelect").show().html("*this field is required");
              $("#errorSelect").css('color','red');
          }
          if(Degree1=="")  {
          $("#errorDegree").show().html("**This field is required");
          $("#errorDegree").css('color','red')
          }
          if(Major=="")  {
          $("#errorMajor").show().html("**This field is required");
          $("#errorMajor").css('color','red')
          }
          if(errorInstitution=="")  {
          $("#errorInstitution").show().html("**This field is required");;
          $("#errorInstitution").css('color','red')
          }
          if(Graduation=="")  {
          $("#errorGraduation").show().html("**This field is required");;
          $("#errorGraduation").css('color','red')
          }
          if(Merit=="")  {
          $("#errorMerit").show().html("**This field is required");;
          $("#errorMerit").css('color','red')
          }
          if(gpa=="")  {
          $("#errorGrade").show().html("**This field is required");;
          $("#errorGrade").css('color','red')
          }
          
       console.log(result)   
      }
  });    
});
$("#addIcon").click(function(){
    var educationDetails='<div class="card" id="cardHide"><div class="card-body"id="card2" > <div class="row" id="degreeLevel"><div class="col-2"><label>Degree level</label></div><div class="col-2"></div><div class="col-4"><label>Degree</label></div><label>Major</label></div><div class="row" id="inputFields"><div class="col-2"><select id="selectDegree" class="form-control"><option value="select">Select</option><option value="secondaryschool">secondaryschool</option><option value="Highersecondaryschool">Highersecondaryschool</option><option value="Diploma">Diploma</option><option value="vocationalEducation">vocationalEducation</option><option value="Bachelors">Bachelors</option><option value="PHD">PHD</option><option value="Law">Law</option></select><div id="errorSelect"></div></div><div class="col-2"></div><div class="col-4"><input type="text" name="degree" id="Degree1"class="form-control"/><div id="errorDegree"></div></div><div class="col-4"><input type="text" name="major" id="Major"class="form-control"/><div id="errorMajor"></div></div></div><div class="row" id="inistitution"><div class="col-2"><label>Institution</label></div><div class="col-2"></div><div class="col-3"><label>GraduationYear</label></div><div class="col-1"><label>merit</label></div><div class="col-2"><label id="Grade"></label></div><div class="col-1"><label>Importance</label></div></div><div class="row"id="inputField2"><div class="col-4"><input type="text" name="inistitution" id="Institute" class="form-control"/><div id="errorInstitution"></div></div><div class="col-3"><input type="text" name="GraduationYear" id="Graduation" class="form-control"/><div id="errorGraduation"></div></div><div class="col-2"><input type="text" name="merit" id="Merit" value="GPA"class="form-control"/><div id="errorMerit"></div> </div><div class="col-2"><input type="radio" name="merit"id="gpa" value="GPA">GPA</input><input type="radio" name="merit" id="gpa" value="%">%</input><div id="errorGrade"></div></div><div class="fas" ><i class="fas fa-minus-circle" onclick="deleteCards()"></i></div></div></div><br><br>'
      $("#Education").append(educationDetails)
      })
function deleteCards(){
$("#card2").remove()
}  
function editDetails(id){
  $("#Edit").show()
  // $("#save").attr("Value",id)
  if(jobList!= undefined){
    if(jobList.length>0){
     newList =  jobList.filter(x=>x._id == id)
     if(newList.length != 0){
      // $("#selectDegree").text(newList[0].selectDegree)
      // $('#Degree1').text(newList[0].Degree1)
      // $('#Major').text(newList[0].Major);
      // $('#Institute').text(newList[0].Institute);
      // $('#Graduation').text(newList[0].Graduation);
      // $('#Merit').text(newList[0].Merit);
      // $('#gpa').text(newList[0].gpa);
     
       $("#navCard2").show()
     }
    }
  }   
}
$("#Edit").click(function(){
  $("#navCard").hide()
  $("#navCard2").show()
  $("#selectDegree").val(data[0].selectDegree);
  $("#Degree1").val(data[0].Degree1)
  $("#Major").val(data[0].Major)
  $("#Institute").val(data[0].Institute)
  $("#Graduation").val(data[0].Graduation)
  $("#Merit").val(data[0].Merit)
  $("#gpa").val(data[0].gpa)
 
})
$("#save").on("click",function(){
  $("#navCard").show()
  $("#navCard2").hide()
  var result= {};
        var editselectDegree=$("#selectDegree").val();
        var editDegree1=$("#Degree1").val();
        var editMajor=$("#Major").val();
        var editInstitute=$("#Institute").val();
        var editGraduation=$("#Graduation").val();
        var editMerit=$("#Merit").val();
        var editgpa=$("#gpa").val();
       
        data[0].selectDegree =editselectDegree;
        data[0].Degree1=editDegree1;
        data[0].Major=editMajor;
        data[0].Institute =editInstitute
        data[0].Graduation=editGraduation
        data[0].Merit=editMerit
        data[0].gpa=editgpa
        if(editselectDegree==""){
          $("#errorSelect").show();
            $("#errorSelect").css('color','red');
        }
        else{
          $("#errorSelect").hide();
          result["selectDegree"] = editselectDegree
        }
      if(editDegree1=="")  {
        $("#errorDegree").show();
        $("#errorDegree").css('color','red')
        }
        else{
          $("#errorDegree").hide();
          result["Degree1"] = editDegree1
        }
        if(editMajor=="")  {
        $("#errorMajor").show();
        $("#errorMajor").css('color','red')
        }
        else{
          $("#errorMajor").hide();
          result["Major"] = editMajor
        }
        if(editInstitute=="")  {
        $("#errorInstitution").show();
        $("#errorInstitution").css('color','red')
        }
        else{
          $("#errorInstitution").hide();
          result["Institute"] = editInstitute
        }
        if(editGraduation=="")  {
          $("#errorGraduation").show();
          $("#errorGraduation").css('color','red')
          }
          else{
            $("#errorGraduation").hide();
            result["Graduation"] = editGraduation
          }
          if(editMerit=="")  {
            $("#errorMerit").show();
            $("#errorMerit").css('color','red')
            }
            else{
              $("#errorMerit").hide();
              result["Merit"] =editMerit
            }
            if(editgpa=="")  {
              $("#errorGrade").show();
              $("#errorGrade").css('color','red')
              }
              else{
                $("#errorGrade").hide();
                result["gpa"] =editgpa
              }
      result["_Id"] =  windowId
       console.log(result);
         if(editselectDegree!="" && editDegree1!=""&&editMajor!="" &&editInstitute!=""&& editGraduation!=""&&editMerit!="" &&editgpa!=""){ 
          debugger
            console.log(result)
           $.ajax({
    url:'/cards',
   method: "POST",
     data:JSON.stringify(result),
    dataType: 'json',
 contentType: 'application/json',
    success: function (result, status) {
      // getDetails();
     $("#navCard").show()
      console.log(result);
       $("#navCard2").hide()
       console.log(result)
       
    }
  
  });
          }

       })