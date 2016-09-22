
            /*Input Fields*/
            var fname = document.getElementById('fname'),
                mname = document.getElementById('mname'),
                lname = document.getElementById('lname'),
                sname = document.getElementById('sname'),
                bdate = document.getElementById('bdate'),
                bplace = document.getElementById('bplace'),
                nname = document.getElementById('nname'),
                gender = document.getElementById('gender'),
                cstatus = document.getElementById('cstatus'),
                citizenship = document.getElementById('citizenship'),
                address = document.getElementById('address'),
                contact = document.getElementById('contact'),
                emailaddress = document.getElementById('emailaddress'),
                spousename = document.getElementById('spousename'),
                spousebplace = document.getElementById('spousebplace'),
                fathername = document.getElementById('fathername'),
                fatherbplace = document.getElementById('fatherbplace'),
                mothername = document.getElementById('mothername'),
                motherbplace = document.getElementById('motherbplace'),
                educattain = document.getElementById('educattain'),
                occupation = document.getElementById('occupation'),
                religion = document.getElementById('religion'),
                userHeight = document.getElementById('userHeight'),
                userWeight = document.getElementById('userWeight'),
                idMark = document.getElementById('idMark');
            
            var tempUserName = document.getElementById('tempUserName');
            
            /*Apply for Clearance*/
            var applyClearanceBtn = document.getElementById('applyClearanceBtn');
            var clearStatus = document.getElementById('clearStatus');
            var userName = document.getElementById('userName');
            var statusBody = document.getElementById('statusBody');
            var statusHit = document.getElementById('statusHit');
            var statusNoHit = document.getElementById('statusNoHit');
            var tempText = document.getElementById('tempText');
            var dashboardLink = document.getElementById('dashboardLink');
            
            function transactionPage(){
                window.location = '/PoliceClearanceProject/transaction.html?userid=' + getUserID();
            }
            
            function editinfoLink(){
                window.location = '/PoliceClearanceProject/edit_clearance_form.html?userid=' + getUserID();
            }
            
            function dashboardLink(){
                window.location = '/PoliceClearanceProject/dashboard.html?userid=' + getUserID();
            }
            
            applyClearanceBtn.onclick = function(){
                if(userName.innerHTML == '' || userName.innerHTML == 'Ariel Alfonso Balita' && userName.innerHTML != ''){
                    tempText.style.display = 'none';
                    clearStatus.innerHTML = 'HIT!';
                    clearStatus.style.color = 'red';
                    statusHit.style.display = 'block';
                    statusNoHit.style.display = 'none';
                } else if(userName.innerHTML == 'Mark Jhon Paul Garcia Quijom'){
                    tempText.style.display = 'none';
                    clearStatus.innerHTML = 'NO HIT!';
                    clearStatus.style.color = 'blue';
                    statusHit.style.display = 'none';
                    statusNoHit.style.display = 'block';
                }
            }
            
            /*Get Info*/
            
            function getUserID(){
                var parameters = location.search.substring(1).split("&");
                var temp = parameters[0].split("=");
                var inputValue = temp[1].replace(/\+/g, ' ');
                return unescape(inputValue);
            }
            
            function getUserData(){
                for(var i = 0; i < accounts.length; i++){
                    if(getUserID() == accounts[i].accountid){
                        userName.innerHTML = accounts[i].firstname + " " + accounts[i].middlename + " " + accounts[i].lastname;
                        fname.value = accounts[i].firstname;
                        mname.value = accounts[i].middlename;
                        lname.value = accounts[i].lastname;
                        sname.value = accounts[i].suffix;
                        bdate.value = accounts[i].birthdate;
                        emailaddress.value = accounts[i].email;
                        if(userName.innerHTML != ""){
                            
                            tempUserName.style.display = 'none';
                        }
                    }
                }
            }
            
            /*ADDING IMAGE*/
            var openFile = function(event) {
                var input = event.target;

                var reader = new FileReader();
                reader.onload = function(){
                  var dataURL = reader.result;
                  var profilePicture = document.getElementById('profilePicture');
                  profilePicture.src = dataURL;
                };
                reader.readAsDataURL(input.files[0]);
            };