const data = 
[
    {
        profileImage: "../src/icons/profilePic.png",
        name: "Tasneem Khateeb",
        age: 20,
        phone: "050-123-4678",
        email: "Tasneem.Khateeb@Gmail.Com",
        address: "Arrabe, Tzafon",
        comment: "I am Excellent!"
    },

    {
        profileImage: "../src/icons/profilePic.png",
        name: "Hossen Yassen",
        age: 24,
        phone: "050-141-2587",
        email: "Hossen.Yassen@Hotmail.Com",
        address: "Tamra, Israel",
        comment: "I am More Than Excellent!"
    },

    {
        profileImage: "../src/icons/profilePic.png",
        name: "Aya Dhabre",
        age: 24,
        phone: "050-141-2587",
        email: "Aya Dhabre@Hotmail.Com",
        address: "Tamra, Israel",
        comment: "I am More Than Excellent!"
    }
]

// Inserting all the contacts to the list
const list = document.getElementById("contacts-list");
for(let i = 0; i < data.length ; i++){
    const li = document.createElement("li");
    li.className = "list-row";
    li.innerHTML = 
    `
    <div class="cont-pic-name">
        <img class="profile-pic" src=${data[i].profileImage} alt="profile picture" title="profile picture">
        <h4>${data[i].name}</h4>
    </div>
    <div>
        <h5 class="phone">${data[i].phone}</h5>
    </div>
    <div class="list-row-btns">
        <div class="info-btn">
            <img src="./src/icons/info.png" alt="contact info" , title="contact info">
        </div>
         <div class="edit-btn">
            <img src="./src/icons/edit.png" alt="edit contact" , title="edit contact">
        </div>
        <div class="delete-btn">
            <img src="./src/icons/delete.png" alt="delete contact" , title="delete contact">
        </div>
    </div>
    `
    list.appendChild(li);
}
