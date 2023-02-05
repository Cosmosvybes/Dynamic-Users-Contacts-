var radioBtn = document.getElementsByTagName('input');


let personel = function (name, discipline, contact, image) {
    this.name = name;
    this.discipline = discipline;
    this.contact = contact;
    this.image = image;


}

let person1 = new personel('Ayomide', "web dev", 'alfredchrisayo@gmail.com', 'nodejs-node-javascript-code-express-hd-wallpaper-preview.jpg');
let person2 = new personel('Chris', "game dev", 'christech@info.com', 'glo.jpg');
let person3 = new personel('Ishola', "Dev Ops", 'alfredayo@gmail.com', 'mtn.jpg');
let person4 = new personel('Joy', "Desktop dev", 'chrisjoy@gmail.com', 'airtel.png');

let person5 = new personel("Adam mark", "Desktop Engineer", "adammark@health.com");
let person6 = new personel("Foo John", "Mechanical Engineer", "adammark@health.com");
let person7 = new personel("Israel John", "Automobile Engineeer", "IsrealJ@health.com");
let person8 = new personel("Adam Felix", "Mobile Phone engineer", "Adamfelix@health.com");

let person9 = new personel("John doe", "Brain Surgeon", "Joedoe@mobile.com");
let person10 = new personel("Foo John", "nurse", "FooJohnk@device.com");
let person11 = new personel("Israel John", "Dentist", "ISrealjohn@pch.com");
let person12 = new personel("Adam Felix", "Therapist", "adafelixy@cloud.com");

let personel_list = new Array();

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].onclick = () => {



        switch (radioBtn[i].value) {
            case 'developer':
                radioBtn[i].disabled = true;
                radioBtn[2].disabled = false;
                radioBtn[1].disabled = false;
                while (engineersContainer.hasChildNodes()) {
                    engineersContainer.removeChild(engineersContainer.firstChild)
                };
                while (doctorsContainer.hasChildNodes()) {
                    doctorsContainer.removeChild(doctorsContainer.firstChild)
                }

                personel_list.splice(0, 4, person1, person2, person3, person4);

                for (let i = 0; i < personel_list.length; i++) {
                    var btn = document.createElement('input');
                    btn.value = "book";



                }
                for (let i = 0; i < personel_list.length; i++) {
                    var username = document.createElement('h6');
                    var text = document.createTextNode('Name: ' + personel_list[i].name);

                    username.appendChild(text)

                    var job = document.createElement('h6');
                    var jobTextNode = document.createTextNode('Job: ' + personel_list[i].discipline)
                    job.appendChild(jobTextNode);
                    var email = document.createElement('h6');
                    var emailTextNode = document.createTextNode('Email: ' + personel_list[i].contact)

                    email.appendChild(emailTextNode);

                    var userImage = document.createElement('img');
                    userImage.className = 'userImage'
                    userImage.src = personel_list[i].image
                    var butonBk = document.createElement('button');
                    butonBk.innerHTML = "Book Talk"
                    butonBk.className = 'bookBtn'
                    usersContainer.appendChild(butonBk)
                    usersContainer.appendChild(userImage);
                    usersContainer.appendChild(username)
                    usersContainer.appendChild(job)
                    usersContainer.appendChild(email);
                    butonBk.addEventListener('click', () => {
                        alert("Book talk button clicked");
                    })


                };
                break;


            case 'engineer':
                radioBtn[i].disabled = true;
                radioBtn[0].disabled = false;
                radioBtn[2].disabled = false;
                while (usersContainer.hasChildNodes()) {
                    usersContainer.removeChild(usersContainer.firstChild)
                };
                while (doctorsContainer.hasChildNodes()) {
                    doctorsContainer.removeChild(doctorsContainer.firstChild)
                };

                personel_list.splice(0, 4, person5, person6, person7, person8)
                for (let i = 0; i < personel_list.length; i++) {
                    var username = document.createElement('h6');
                    var text = document.createTextNode('Name: ' + personel_list[i].name);
                    username.appendChild(text)
                    var job = document.createElement('h6');
                    var jobTextNode = document.createTextNode('Job: ' + personel_list[i].discipline)
                    job.appendChild(jobTextNode);

                    var email = document.createElement('h6');
                    var emailTextNode = document.createTextNode('Email: ' + personel_list[i].contact)
                    email.appendChild(emailTextNode);
                    var userImage = document.createElement('img');
                    userImage.className = 'userImage';
                    userImage.src = personel_list[i].image;


                    var butonBk = document.createElement('button');
                    butonBk.innerHTML = "Book Talk";
                    butonBk.className = 'bookBtn'


                    engineersContainer.appendChild(userImage);
                    engineersContainer.appendChild(butonBk);
                    engineersContainer.appendChild(username);
                    engineersContainer.appendChild(job);
                    engineersContainer.appendChild(email);

                    butonBk.addEventListener('click', () => {
                        alert("Book talk button clicked");
                    })

                }
                break;


            case 'doctor':
                radioBtn[i].disabled = true;
                radioBtn[0].disabled = false;
                radioBtn[1].disabled = false;
                while (usersContainer.hasChildNodes()) {
                    usersContainer.removeChild(usersContainer.firstChild)
                };


                personel_list.splice(0, 4, person9, person10, person11, person12)
                for (let i = 0; i < personel_list.length; i++) {
                    var username = document.createElement('h6');
                    var text = document.createTextNode('Name: ' + personel_list[i].name);
                    username.appendChild(text)
                    var job = document.createElement('h6');
                    var jobTextNode = document.createTextNode('Job: ' + personel_list[i].discipline)
                    job.appendChild(jobTextNode);

                    var email = document.createElement('h6');
                    var emailTextNode = document.createTextNode('Email: ' + personel_list[i].contact)
                    email.appendChild(emailTextNode);
                    var userImage = document.createElement('img');
                    userImage.className = 'userImage'
                    userImage.src = personel_list[i].image
                    var butonBk = document.createElement('button');
                    butonBk.innerHTML = "Book Talk";
                    butonBk.className = 'bookBtn'

                    doctorsContainer.appendChild(userImage);
                    doctorsContainer.appendChild(butonBk);
                    doctorsContainer.appendChild(username)
                    doctorsContainer.appendChild(job)
                    doctorsContainer.appendChild(email);

                    butonBk.addEventListener('click', () => {
                        alert("Book talk button clicked");
                    })

                    while (engineersContainer.hasChildNodes()) {
                        engineersContainer.removeChild(engineersContainer.firstChild)
                    }



                }


                break;




        }
    }
}