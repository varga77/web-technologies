$(document).ready(function(){
    senderList = new Array()

    //name validation
    $('#nameCheck').hide();
    let nameError = false;
    $('#name').keyup(function(){
      validatename();
    });
  
    function validatename(){
      let nameVal = $('#name').val();
      if(nameVal.length == ''){
        $('#nameCheck').show();
        nameError = false;
      }
      else {
        $('#nameCheck').hide();
        nameError = true;
      }
    };

    //email validation
    $('#emailCheck').hide();
    let emailError = false;
    $('#email').keyup(function(){
      validateemail();
    });
  
    function validateemail(){
      let emailVal = $('#email').val();
      if(emailVal.length == ''){
        $('#emailCheck').show();
        emailError = false;
      }
      else {
        $('#emailCheck').hide();
        emailError = true;
      }
    };

    //pname validation
    $('#pnameCheck').hide();
    let pnameError = false;
    $('#pname').keyup(function(){
      validatepname();
    });
  
    function validatepname(){
      let pnameVal = $('#pname').val();
      if(pnameVal.length == ''){
        $('#pnameCheck').show();
        pnameError = false;
      }
      else {
        $('#pnameCheck').hide();
        pnameError = true;
      }
    };

    //Adding row to the table
    $("#submitBtn").click(function(){
  
      var isGood = nameError &&
      emailError &&
      pnameError;
      
      if(isGood){
        let nameVal = $('#name').val();
        checkList(nameVal)
        clearForm()
        nameError = false;
        emailError = false;
        pnameError = false;

      }else{
        if(!nameError){
            $('#nameCheck').show();
        }
        if(!emailError){
            $('#emailCheck').show();
        }
        if(!pnameError){
            $('#pnameCheck').show();
        }
        
      }
    })
  
  })
  
  function clearForm(){
      $("#name").val("");
      $("#email").val("");
      $("#date").val("");
      $("#pname").val("");
      $("#distance").val("");
      $("#type").val("");
      $("#why").val("");
      $("#rate").val(0);

  }
  function checkList(name){
    var checkList = (element) => element == name;
    var isIn = senderList.findIndex(checkList);
    console.log(senderList)
    console.log(isIn)
    if(isIn == -1){
        var list = document.getElementById("nameList");
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(name));
        list.appendChild(entry);
        senderList.push(name)
    }

}
  